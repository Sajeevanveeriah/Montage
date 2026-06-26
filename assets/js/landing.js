/* ===================================================================
   landing.js — index.html: domain cards, stats, cross-domain bookmarks
   =================================================================== */
import { applyStoredTheme, toggleTheme, registerServiceWorker, toast, copyToClipboard } from './utils.js';
import { initGlobalSearch } from './search.js';
import { DOMAINS_META, SITE_STATS } from '../data/index.js';
import { getBookmarks, updateNavCount, clearBookmarks } from './bookmarks.js';
import { renderTopicCard } from './renderer.js';

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

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderCards() {
  const grid = document.getElementById('cardGrid');
  if (!grid) return;
  grid.innerHTML = DOMAINS_META.map(d =>
    `<a class="domain-card" href="${d.page}" style="--card-color:${d.color}">
      <div class="dc-emoji">${esc(d.emoji)}</div>
      <h2>${esc(d.title)}</h2>
      <div class="dc-desc">${esc(d.description)}</div>
      <div class="dc-foot">
        <span class="dc-count">${d.topicCount} topics · ${d.sectionCount} sections</span>
        <span class="dc-explore">Explore →</span>
      </div>
    </a>`).join('');

  const stats = document.getElementById('statsBar');
  if (stats) {
    stats.innerHTML =
      `<strong>${SITE_STATS.domains}</strong> domains&nbsp; · &nbsp;` +
      `<strong>${SITE_STATS.sections}</strong> sections&nbsp; · &nbsp;` +
      `<strong>${SITE_STATS.topics}</strong> topics&nbsp; · &nbsp;` +
      `KaTeX formulas&nbsp; · &nbsp;Offline-ready`;
  }
}

function renderAllBookmarks() {
  const view = document.getElementById('bookmarksView');
  if (!view) return;
  const bm = getBookmarks();
  const keys = Object.keys(bm);
  if (!keys.length) {
    view.innerHTML = `<div class="empty-state"><div class="big">☆</div><h2>No bookmarks yet</h2>
      <p>Open any domain and click the ☆ on a topic to save it here.</p></div>`;
    return;
  }
  let html = `<div class="domain-intro"><h1>★ Your Bookmarks</h1><p>${keys.length} saved topic${keys.length === 1 ? '' : 's'}.</p></div>
    <div class="domain-toolbar"><button class="btn" id="clearAll" type="button">🗑 Clear all</button></div>`;
  for (const d of DOMAINS_META) {
    const data = DATA[d.id];
    const cards = [];
    for (const section of data.sections) {
      for (const topic of section.topics) {
        if (bm[`${d.id}/${topic.id}`]) cards.push(renderTopicCard(topic, d.id));
      }
    }
    if (cards.length) {
      html += `<h2 class="section-hd">${esc(d.emoji)} ${esc(d.title)}</h2>${cards.join('')}`;
    }
  }
  view.innerHTML = html;
  if (window.renderMathInElement) {
    window.renderMathInElement(view, {
      delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }],
      throwOnError: false
    });
  }
  if (window.hljs) view.querySelectorAll('pre code').forEach(b => { try { window.hljs.highlightElement(b); } catch (e) {} });

  const clr = document.getElementById('clearAll');
  if (clr) clr.addEventListener('click', () => {
    if (confirm('Clear all bookmarks? This cannot be undone.')) { clearBookmarks(); renderAllBookmarks(); }
  });

  // bookmark + copy actions inside the view
  view.addEventListener('click', async (e) => {
    const copyTex = e.target.closest('.copy-btn, .copy-formula-btn');
    if (copyTex) { const ok = await copyToClipboard(copyTex.dataset.tex || ''); toast(ok ? 'LaTeX copied' : 'Copy failed'); }
  });
}

function showBookmarks() { document.body.classList.add('show-bookmarks'); renderAllBookmarks(); window.scrollTo({ top: 0 }); }
function hideBookmarks() { document.body.classList.remove('show-bookmarks'); }

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
  if (hamburger && navLinks) hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

  const bmNav = document.getElementById('bookmarkNav');
  if (bmNav) bmNav.addEventListener('click', () => {
    document.body.classList.contains('show-bookmarks') ? hideBookmarks() : showBookmarks();
  });

  updateNavCount();
}

function wireScroll() {
  const btn = document.getElementById('backToTop');
  const onScroll = () => { if (btn) btn.classList.toggle('show', (window.scrollY || 0) > 400); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (btn) btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function wireKeyboard() {
  document.addEventListener('keydown', (e) => {
    const tag = (e.target.tagName || '').toLowerCase();
    const typing = tag === 'input' || tag === 'textarea' || e.target.isContentEditable;
    const modal = document.getElementById('shortcutsModal');
    if (e.key === '/' && !typing) { const i = document.getElementById('searchInput'); if (i) { e.preventDefault(); i.focus(); } }
    else if (e.key === 'Escape') { if (modal) modal.hidden = true; hideBookmarks(); const nl = document.getElementById('navLinks'); if (nl) nl.classList.remove('open'); }
    else if (e.key === '?' && !typing) { if (modal) modal.hidden = !modal.hidden; }
    else if (e.key === 'b' && !typing) { document.body.classList.contains('show-bookmarks') ? hideBookmarks() : showBookmarks(); }
    else if (e.key === 't' && !typing) { window.scrollTo({ top: 0, behavior: 'smooth' }); }
  });
}

function init() {
  applyStoredTheme();
  registerServiceWorker();
  renderCards();
  wireNav();
  wireScroll();
  wireKeyboard();
  initGlobalSearch();
  if (location.hash === '#bookmarks') showBookmarks();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
