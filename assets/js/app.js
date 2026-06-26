/* ===================================================================
   app.js — entry point. Wires up a domain page (or the landing page).
   =================================================================== */
import { applyStoredTheme, toggleTheme, registerServiceWorker, toast, copyToClipboard, printSection } from './utils.js';
import { renderDomain, renderToc, renderTopicCard } from './renderer.js';
import { initGlobalSearch, initPageFilter } from './search.js';
import { toggleBookmark, updateNavCount, renderDomainBookmarks, clearBookmarks, bookmarkCount } from './bookmarks.js';
import { initQuiz, toggleQuiz, isQuizActive } from './quiz.js';

import { mathematics } from '../data/mathematics.js';
import { physics } from '../data/physics.js';
import { engineering } from '../data/engineering.js';
import { csaiml } from '../data/cs-ai-ml.js';
import { personaldev } from '../data/personal-dev.js';
import { careerfinance } from '../data/career-finance.js';

const DATA = {
  'mathematics': mathematics, 'physics': physics, 'engineering': engineering,
  'cs-ai-ml': csaiml, 'personal-dev': personaldev, 'career-finance': careerfinance
};

let currentDomain = null;

function renderMath() {
  if (window.renderMathInElement) {
    try {
      window.renderMathInElement(document.getElementById('content') || document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    } catch (e) { /* KaTeX missing or formula error — leave raw */ }
  }
}

function highlightCode() {
  if (window.hljs) {
    document.querySelectorAll('pre code').forEach(block => {
      try { window.hljs.highlightElement(block); } catch (e) { /* noop */ }
    });
  }
}

/* ---------- common nav wiring (all pages) ---------- */
function wireNav() {
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  const help = document.getElementById('helpBtn');
  const modal = document.getElementById('shortcutsModal');
  if (help && modal) {
    help.addEventListener('click', () => { modal.hidden = false; });
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('modal-close')) modal.hidden = true;
    });
  }

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      // On domain pages the hamburger drives the sidebar; if there's no
      // sidebar (landing/bookmarks) it toggles the nav links menu.
      if (document.getElementById('sidebar')) {
        document.body.classList.toggle('sidebar-open');
      } else if (navLinks) {
        navLinks.classList.toggle('open');
      }
    });
  }
  const backdrop = document.getElementById('sidebarBackdrop');
  if (backdrop) backdrop.addEventListener('click', () => document.body.classList.remove('sidebar-open'));

  // highlight active nav link
  const path = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href && href === path) a.classList.add('active');
  });

  updateNavCount();

  // Bookmarks nav: on a domain page it toggles the in-page bookmarks view;
  // elsewhere it navigates to the landing page bookmarks.
  const bmNav = document.getElementById('bookmarkNav');
  if (bmNav) {
    bmNav.addEventListener('click', () => {
      if (currentDomain) toggleBookmarksView();
      else window.location.href = 'index.html#bookmarks';
    });
  }
}

/* ---------- back to top + read progress ---------- */
function wireScroll() {
  const btn = document.getElementById('backToTop');
  const prog = document.getElementById('readProgress');
  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    if (btn) btn.classList.toggle('show', y > 400);
    if (prog) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = h > 0 ? `${Math.min(100, (y / h) * 100)}%` : '0%';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (btn) btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---------- sidebar active-section observer ---------- */
function wireSidebar() {
  const nav = document.getElementById('tocNav');
  if (!nav) return;
  const links = Array.from(nav.querySelectorAll('a'));
  const map = new Map();
  links.forEach(a => map.set(a.dataset.target, a));

  links.forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(a.dataset.target);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      document.body.classList.remove('sidebar-open');
    });
  });

  const sections = document.querySelectorAll('#domainContent section');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const link = map.get(entry.target.id);
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-60px 0px -70% 0px', threshold: 0 });
  sections.forEach(s => obs.observe(s));
}

/* ---------- topic card actions (copy / print / bookmark) ---------- */
function wireCardActions() {
  const content = document.getElementById('content');
  if (!content) return;
  content.addEventListener('click', async (e) => {
    const copyTex = e.target.closest('.copy-btn, .copy-formula-btn');
    if (copyTex) {
      const tex = copyTex.dataset.tex || '';
      const ok = await copyToClipboard(tex);
      if (copyTex.classList.contains('copy-btn')) {
        const orig = copyTex.textContent;
        copyTex.textContent = 'Copied!';
        setTimeout(() => { copyTex.textContent = orig; }, 2000);
      }
      toast(ok ? 'LaTeX copied to clipboard' : 'Copy failed');
      return;
    }
    const bm = e.target.closest('.bookmark-btn');
    if (bm) {
      const card = bm.closest('.topic-card');
      const key = card.dataset.key;
      const now = toggleBookmark(key);
      bm.classList.toggle('marked', now);
      bm.textContent = now ? '★' : '☆';
      toast(now ? 'Bookmarked' : 'Bookmark removed');
      return;
    }
    const printBtn = e.target.closest('.print-card-btn, .section-print-btn');
    if (printBtn) {
      const section = printBtn.closest('section');
      printSection(section);
      return;
    }
  });
}

/* ---------- bookmarks view toggle (domain pages) ---------- */
function toggleBookmarksView() {
  const showing = document.body.classList.toggle('show-bookmarks');
  if (showing) {
    renderDomainBookmarks(currentDomain, 'bookmarksView', renderTopicCard);
    const clr = document.getElementById('clearBookmarks');
    if (clr) clr.addEventListener('click', () => {
      if (confirm('Clear all bookmarks? This cannot be undone.')) {
        clearBookmarks();
        renderDomainBookmarks(currentDomain, 'bookmarksView', renderTopicCard);
      }
    });
    renderMath();
    highlightCode();
    window.scrollTo({ top: 0 });
  }
}

/* ---------- keyboard shortcuts ---------- */
function wireKeyboard() {
  document.addEventListener('keydown', (e) => {
    const tag = (e.target.tagName || '').toLowerCase();
    const typing = tag === 'input' || tag === 'textarea' || e.target.isContentEditable;
    const modal = document.getElementById('shortcutsModal');

    if (e.key === '/' && !typing) {
      const input = document.getElementById('searchInput');
      if (input) { e.preventDefault(); input.focus(); }
      return;
    }
    if (e.key === 'Escape') {
      if (modal && !modal.hidden) modal.hidden = true;
      document.body.classList.remove('sidebar-open');
      const nl = document.getElementById('navLinks');
      if (nl) nl.classList.remove('open');
      return;
    }
    if (e.key === '?' && !typing) {
      if (modal) modal.hidden = !modal.hidden;
      return;
    }
    if (typing) return;
    if (e.key === 'b') { e.preventDefault(); currentDomain ? toggleBookmarksView() : (window.location.href = 'index.html#bookmarks'); }
    else if (e.key === 't') { window.scrollTo({ top: 0, behavior: 'smooth' }); }
    else if (e.key === 'q' && currentDomain) { toggleQuiz(); }
    else if (e.key === 'p' && currentDomain) {
      const first = document.querySelector('#domainContent section');
      if (first) printSection(first);
    }
  });
}

/* ---------- init ---------- */
function init() {
  applyStoredTheme();
  registerServiceWorker();
  wireNav();
  wireScroll();
  wireKeyboard();

  const domainId = document.body.dataset.domain;
  if (domainId && DATA[domainId]) {
    currentDomain = DATA[domainId];
    renderDomain(currentDomain, 'content');
    renderToc(currentDomain, 'tocNav');
    renderMath();
    highlightCode();
    wireSidebar();
    wireCardActions();
    initPageFilter();
    initQuiz();
  }

  // global search exists on every page that has the navbar input
  initGlobalSearch();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
