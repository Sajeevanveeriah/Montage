/* ===================================================================
   bookmarks.js — localStorage-backed bookmarks
   Key format: "<domainId>/<topicId>": true
   =================================================================== */
import { escapeHtml } from './utils.js';

const BM_KEY = 'montage-bookmarks';

function load() {
  try { return JSON.parse(localStorage.getItem(BM_KEY)) || {}; }
  catch (e) { return {}; }
}
function save(obj) { localStorage.setItem(BM_KEY, JSON.stringify(obj)); }

export function getBookmarks() { return load(); }

export function isBookmarked(key) { return !!load()[key]; }

export function toggleBookmark(key) {
  const bm = load();
  if (bm[key]) delete bm[key];
  else bm[key] = true;
  save(bm);
  updateNavCount();
  return !!bm[key];
}

export function clearBookmarks() {
  save({});
  updateNavCount();
}

export function bookmarkCount() { return Object.keys(load()).length; }

export function updateNavCount() {
  const badge = document.getElementById('bmCount');
  if (!badge) return;
  const n = bookmarkCount();
  if (n > 0) { badge.textContent = String(n); badge.hidden = false; }
  else { badge.hidden = true; }
}

/**
 * Render the bookmarks view for a single domain page. Shows only this
 * domain's bookmarked cards (grouped under the domain title). The full
 * cross-domain bookmarks list lives on the landing page.
 */
export function renderDomainBookmarks(data, viewId, renderCardFn) {
  const view = document.getElementById(viewId);
  if (!view) return;
  const bm = load();
  const cards = [];
  for (const section of data.sections) {
    for (const topic of section.topics) {
      const key = `${data.id}/${topic.id}`;
      if (bm[key]) cards.push(renderCardFn(topic, data.id));
    }
  }
  if (!cards.length) {
    view.innerHTML = emptyState();
    return;
  }
  view.innerHTML =
    `<div class="domain-intro"><h1>★ Bookmarks — ${escapeHtml(data.title)}</h1>
       <p>${cards.length} saved topic${cards.length === 1 ? '' : 's'} in this domain.</p></div>
     <div class="domain-toolbar"><button class="btn" id="clearBookmarks" type="button">🗑 Clear all bookmarks</button></div>
     ${cards.join('')}`;
}

function emptyState() {
  return `<div class="empty-state">
    <div class="big">☆</div>
    <h2>No bookmarks yet</h2>
    <p>Click the ☆ on any topic card to save it here for quick reference.</p>
  </div>`;
}
