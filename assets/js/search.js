/* ===================================================================
   search.js — global search across all domains + per-page filter
   =================================================================== */
import { escapeHtml, escapeAttr } from './utils.js';
import { mathematics } from '../data/mathematics.js';
import { physics } from '../data/physics.js';
import { engineering } from '../data/engineering.js';
import { csaiml } from '../data/cs-ai-ml.js';
import { personaldev } from '../data/personal-dev.js';
import { careerfinance } from '../data/career-finance.js';

const DOMAINS = [mathematics, physics, engineering, csaiml, personaldev, careerfinance];
const DOMAIN_COLORS = {
  'mathematics': 'var(--color-maths)', 'physics': 'var(--color-physics)',
  'engineering': 'var(--color-eng)', 'cs-ai-ml': 'var(--color-cs)',
  'personal-dev': 'var(--color-personal)', 'career-finance': 'var(--color-career)'
};
const DOMAIN_PAGE = {
  'mathematics': 'mathematics.html', 'physics': 'physics.html', 'engineering': 'engineering.html',
  'cs-ai-ml': 'cs-ai-ml.html', 'personal-dev': 'personal-dev.html', 'career-finance': 'career-finance.html'
};

let INDEX = [];

export function buildSearchIndex() {
  INDEX = [];
  for (const d of DOMAINS) {
    for (const section of d.sections) {
      for (const topic of section.topics) {
        const tagText = (topic.tags || []).join(' ');
        const extra = [topic.prose, topic.quote, (topic.items || []).join(' '), tagText]
          .filter(Boolean).join(' ');
        INDEX.push({
          id: topic.id,
          domainId: d.id,
          domainTitle: d.title,
          emoji: d.emoji,
          sectionId: section.id,
          title: topic.title,
          prose: topic.prose || topic.quote || '',
          tags: topic.tags || [],
          haystack: (topic.title + ' ' + extra).toLowerCase(),
          url: `${DOMAIN_PAGE[d.id]}#${topic.id}`
        });
      }
    }
  }
  return INDEX;
}

function search(query, limit = 8) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/);
  const scored = [];
  for (const e of INDEX) {
    let score = 0;
    const titleLower = e.title.toLowerCase();
    for (const t of terms) {
      if (!e.haystack.includes(t)) { score = -1; break; }
      if (titleLower.includes(t)) score += 5;
      if ((e.tags.join(' ').toLowerCase()).includes(t)) score += 3;
      score += 1;
    }
    if (score > 0) {
      if (titleLower.startsWith(q)) score += 10;
      scored.push({ e, score });
    }
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map(s => s.e);
}

function highlight(text, query) {
  const terms = query.trim().split(/\s+/).filter(Boolean)
    .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  if (!terms.length) return escapeHtml(text);
  const re = new RegExp(`(${terms.join('|')})`, 'gi');
  // Escape first, then wrap matches.
  const esc = escapeHtml(text);
  return esc.replace(re, '<mark>$1</mark>');
}

function snippet(prose, query, len = 120) {
  if (!prose) return '';
  const lower = prose.toLowerCase();
  const term = query.trim().split(/\s+/)[0].toLowerCase();
  let start = lower.indexOf(term);
  if (start < 0) start = 0;
  start = Math.max(0, start - 30);
  let s = prose.slice(start, start + len);
  if (start > 0) s = '…' + s;
  if (start + len < prose.length) s = s + '…';
  return s;
}

export function initGlobalSearch() {
  buildSearchIndex();
  const input = document.getElementById('searchInput');
  const dropdown = document.getElementById('searchDropdown');
  if (!input || !dropdown) return;

  let results = [];
  let sel = -1;

  function close() { dropdown.classList.remove('open'); sel = -1; }

  function render(q) {
    results = search(q);
    if (!q.trim()) { close(); dropdown.innerHTML = ''; return; }
    if (!results.length) {
      dropdown.innerHTML = `<div class="search-empty">No results for “${escapeHtml(q)}”</div>`;
      dropdown.classList.add('open');
      return;
    }
    // group by domain, preserving overall relevance order
    const groups = new Map();
    for (const r of results) {
      if (!groups.has(r.domainId)) groups.set(r.domainId, []);
      groups.get(r.domainId).push(r);
    }
    let html = '';
    let idx = 0;
    for (const [domId, items] of groups) {
      html += `<div class="search-group-label">${escapeHtml(items[0].emoji)} ${escapeHtml(items[0].domainTitle)}</div>`;
      for (const r of items) {
        html += `<a class="search-result" href="${escapeAttr(r.url)}" data-idx="${idx}" style="--badge-color:${DOMAIN_COLORS[domId]}">
          <div class="sr-title"><span class="domain-badge">${escapeHtml(r.emoji)}</span>${highlight(r.title, q)}</div>
          <div class="sr-snippet">${highlight(snippet(r.prose, q), q)}</div>
        </a>`;
        idx++;
      }
    }
    dropdown.innerHTML = html;
    dropdown.classList.add('open');
  }

  // Re-order results array to match DOM order for keyboard nav
  function domResults() { return Array.from(dropdown.querySelectorAll('.search-result')); }

  input.addEventListener('input', () => render(input.value));
  input.addEventListener('focus', () => { if (input.value.trim()) render(input.value); });

  input.addEventListener('keydown', (e) => {
    const items = domResults();
    if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(sel + 1, items.length - 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(sel - 1, 0); }
    else if (e.key === 'Enter') {
      if (sel >= 0 && items[sel]) { window.location.href = items[sel].getAttribute('href'); }
      else if (items[0]) { window.location.href = items[0].getAttribute('href'); }
      return;
    } else if (e.key === 'Escape') { close(); input.blur(); return; }
    else return;
    items.forEach((el, i) => el.classList.toggle('sel', i === sel));
    if (items[sel]) items[sel].scrollIntoView({ block: 'nearest' });
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && e.target !== input) close();
  });

  return { close };
}

/** Per-page filter: hide topic cards that don't match the query. */
export function initPageFilter() {
  const input = document.getElementById('pageSearch');
  if (!input) return;
  const content = document.getElementById('domainContent');
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    const cards = content.querySelectorAll('.topic-card');
    const sections = content.querySelectorAll('section');
    cards.forEach(card => {
      const text = (card.textContent || '').toLowerCase();
      const match = !q || text.includes(q);
      card.classList.toggle('hidden', !match);
    });
    // hide section if all its cards are hidden; show a no-results notice
    let anyVisible = false;
    sections.forEach(sec => {
      const visible = sec.querySelectorAll('.topic-card:not(.hidden)').length;
      sec.style.display = visible ? '' : 'none';
      if (visible) anyVisible = true;
    });
    let notice = document.getElementById('noResults');
    if (!anyVisible && q) {
      if (!notice) {
        notice = document.createElement('div');
        notice.id = 'noResults';
        notice.className = 'empty-state';
        notice.innerHTML = '<div class="big">🔍</div><p>No topics match your filter.</p>';
        content.appendChild(notice);
      }
      notice.style.display = '';
    } else if (notice) {
      notice.style.display = 'none';
    }
  });
}
