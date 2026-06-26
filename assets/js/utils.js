/* ===================================================================
   utils.js — shared helpers: escaping, toast, clipboard, theme, print
   =================================================================== */

/** Escape a string for safe insertion as HTML text/content. */
export function escapeHtml(str) {
  if (str === undefined || str === null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Escape for use inside an HTML attribute value. */
export function escapeAttr(str) {
  return escapeHtml(str);
}

/**
 * Render prose that may contain inline $...$ math. We escape the HTML first,
 * leaving the $...$ delimiters intact so KaTeX auto-render can process them.
 * (KaTeX reads from the text node; $ and backslashes inside are fine after
 * escapeHtml because escapeHtml does not touch $ or backslashes.)
 */
export function renderProse(str) {
  return escapeHtml(str);
}

/* ---------- Toast ---------- */
let toastTimer = null;
export function toast(message) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = message;
  el.hidden = false;
  // force reflow so the transition runs
  void el.offsetWidth;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.classList.remove('show');
    setTimeout(() => { el.hidden = true; }, 300);
  }, 2500);
}

/* ---------- Clipboard ---------- */
export async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (e) { /* fall through to legacy path */ }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'absolute';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch (e) {
    return false;
  }
}

/* ---------- Theme ---------- */
const THEME_KEY = 'montage-theme';

export function applyStoredTheme() {
  const stored = localStorage.getItem(THEME_KEY) || 'dark';
  setTheme(stored, false);
}

export function setTheme(theme, persist = true) {
  const root = document.documentElement;
  if (theme === 'light') root.classList.add('light');
  else root.classList.remove('light');
  root.setAttribute('data-theme', theme);
  if (persist) localStorage.setItem(THEME_KEY, theme);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'light' ? '☀' : '☽';
}

export function toggleTheme() {
  const isLight = document.documentElement.classList.contains('light');
  setTheme(isLight ? 'dark' : 'light');
}

/* ---------- Print a single section ---------- */
export function printSection(sectionEl) {
  if (!sectionEl) return;
  document.body.classList.add('printing-section');
  sectionEl.classList.add('print-mode');
  setTimeout(() => {
    window.print();
  }, 100);
  const cleanup = () => {
    sectionEl.classList.remove('print-mode');
    document.body.classList.remove('printing-section');
    window.removeEventListener('afterprint', cleanup);
  };
  window.addEventListener('afterprint', cleanup);
  // Fallback cleanup in case afterprint doesn't fire
  setTimeout(cleanup, 4000);
}

/* ---------- Service worker registration ---------- */
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/Montage/sw.js').catch(() => { /* offline support is best-effort */ });
    });
  }
}
