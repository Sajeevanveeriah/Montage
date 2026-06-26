/* ===================================================================
   renderer.js — builds topic cards and section markup from domain data
   =================================================================== */
import { escapeHtml, escapeAttr, renderProse } from './utils.js';
import { isBookmarked } from './bookmarks.js';

const DOMAIN_EMOJI = {
  'mathematics': '∑', 'physics': '⚛', 'engineering': '⚡',
  'cs-ai-ml': '💻', 'personal-dev': '🧠', 'career-finance': '📈'
};
const DOMAIN_PAGE = {
  'mathematics': 'mathematics.html', 'physics': 'physics.html', 'engineering': 'engineering.html',
  'cs-ai-ml': 'cs-ai-ml.html', 'personal-dev': 'personal-dev.html', 'career-finance': 'career-finance.html'
};

/** Wrap raw TeX as a display block with a copy button. */
function displayMath(tex, label) {
  const lab = label ? `<div class="formula-label">${escapeHtml(label)}</div>` : '';
  return `${lab}<div class="formula-block">` +
    `<button class="copy-btn" type="button" data-tex="${escapeAttr(tex)}" title="Copy LaTeX">📋 Copy</button>` +
    `<div class="math-display">$$${escapeHtml(tex)}$$</div></div>`;
}

function renderBody(topic) {
  const prose = topic.prose ? `<p>${renderProse(topic.prose)}</p>` : '';
  switch (topic.type) {
    case 'formula':
      return (topic.formula ? displayMath(topic.formula) : '') + prose;

    case 'multiFormula': {
      const fs = (topic.formulas || [])
        .map(f => displayMath(f.tex, f.label)).join('');
      return fs + prose;
    }

    case 'concept':
      return prose;

    case 'list': {
      const items = (topic.items || [])
        .map(it => `<li>${renderProse(it)}</li>`).join('');
      return prose + (items ? `<ol>${items}</ol>` : '');
    }

    case 'table': {
      const heads = (topic.tableHeaders || [])
        .map(h => `<th>${renderProse(h)}</th>`).join('');
      const rows = (topic.tableRows || [])
        .map(r => `<tr>${r.map(c => `<td>${renderProse(c)}</td>`).join('')}</tr>`).join('');
      return prose + `<div class="table-wrap"><table><thead><tr>${heads}</tr></thead><tbody>${rows}</tbody></table></div>`;
    }

    case 'quote': {
      const cite = topic.attribution ? `<cite>${escapeHtml(topic.attribution)}</cite>` : '';
      return `<blockquote>${renderProse(topic.quote || '')}${cite}</blockquote>` + prose;
    }

    case 'code': {
      const lang = topic.language || 'plaintext';
      return prose + `<pre><code class="language-${escapeAttr(lang)}">${escapeHtml(topic.code || '')}</code></pre>`;
    }

    case 'proof': {
      const f = topic.formula ? displayMath(topic.formula) : '';
      const mf = (topic.formulas || []).map(x => displayMath(x.tex, x.label)).join('');
      const steps = (topic.steps || [])
        .map(s => `<li>${renderProse(s)}</li>`).join('');
      return prose + f + mf + (steps ? `<ol class="proof-steps">${steps}</ol>` : '');
    }

    default:
      return prose;
  }
}

function renderRelated(related) {
  if (!related || !related.length) return '';
  const chips = related.map(ref => {
    const [dom, tid] = ref.split('/');
    const emoji = DOMAIN_EMOJI[dom] || '🔗';
    const page = DOMAIN_PAGE[dom] || '#';
    const label = tid ? tid.replace(/-/g, ' ') : ref;
    return `<a class="related-chip" href="${page}#${escapeAttr(tid)}">${emoji} ${escapeHtml(label)} →</a>`;
  }).join('');
  return `<div class="related"><span class="see-also">See also:</span>${chips}</div>`;
}

/** Render a single topic card. domainId is needed for the bookmark key. */
export function renderTopicCard(topic, domainId) {
  const key = `${domainId}/${topic.id}`;
  const marked = isBookmarked(key);
  const hasFormula = (topic.type === 'formula' || topic.type === 'multiFormula' || topic.type === 'proof') &&
    (topic.formula || (topic.formulas && topic.formulas.length));

  const metaBadge = (topic.person || topic.year)
    ? `<span class="meta-badge">${escapeHtml([topic.person, topic.year].filter(Boolean).join(' · '))}</span>`
    : '';

  const tags = (topic.tags && topic.tags.length)
    ? `<div class="tags">${topic.tags.map(t => `<span>${escapeHtml(t)}</span>`).join('')}</div>`
    : '';

  const quizControls =
    `<div class="quiz-controls">` +
    `<button class="quiz-btn quiz-reveal" type="button">Reveal</button>` +
    `<button class="quiz-btn quiz-got" type="button">Got it ✓</button>` +
    `<button class="quiz-btn quiz-again" type="button">Review again ✗</button>` +
    `</div>`;

  return `<div class="topic-card" id="${escapeAttr(topic.id)}" data-key="${escapeAttr(key)}" data-title="${escapeAttr(topic.title)}">
    <div class="tc-head">
      <h3 class="topic-title">${escapeHtml(topic.title)} <span class="quiz-badge">✓</span></h3>
      <div class="tc-actions">
        ${hasFormula ? `<button class="copy-formula-btn" type="button" title="Copy primary formula" data-tex="${escapeAttr(topic.formula || (topic.formulas && topic.formulas[0] && topic.formulas[0].tex) || '')}">📋</button>` : ''}
        <button class="print-card-btn" type="button" title="Print section">🖨</button>
        <button class="bookmark-btn ${marked ? 'marked' : ''}" type="button" title="Bookmark">${marked ? '★' : '☆'}</button>
      </div>
    </div>
    ${metaBadge}
    <div class="tc-body">${renderBody(topic)}</div>
    ${tags}
    ${renderRelated(topic.related)}
    ${quizControls}
  </div>`;
}

/** Render an entire domain into the given container. */
export function renderDomain(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const sectionsHtml = data.sections.map(section => {
    const cards = section.topics.map(t => renderTopicCard(t, data.id)).join('');
    return `<section id="${escapeAttr(section.id)}">
      <h2 class="section-hd">${escapeHtml(section.title)}
        <button class="section-print-btn btn" type="button" title="Print this section">🖨 Print</button>
      </h2>
      ${cards}
    </section>`;
  }).join('');

  container.innerHTML =
    `<div class="domain-intro">
      <h1><span class="emoji">${escapeHtml(data.emoji)}</span> ${escapeHtml(data.title)}</h1>
      <p>${escapeHtml(data.description)}</p>
    </div>
    <div class="domain-toolbar">
      <input type="search" class="page-search" id="pageSearch" placeholder="Filter topics on this page…">
      <button class="btn" id="quizToggle" type="button">🎯 Quiz mode</button>
    </div>
    <div id="quizBar">
      <button class="btn" id="quizEnd" type="button">End quiz</button>
      <div class="quiz-progress-track"><div class="quiz-progress-fill" id="quizFill"></div></div>
      <span id="quizProgressLabel">0 / ${data.topicCount}</span>
    </div>
    <div id="domainContent">${sectionsHtml}</div>
    <div class="bookmarks-view" id="bookmarksView"></div>`;
}

/** Build the sidebar table of contents from domain data. */
export function renderToc(data, containerId) {
  const nav = document.getElementById(containerId);
  if (!nav) return;
  const links = data.sections
    .map(s => `<a href="#${escapeAttr(s.id)}" data-target="${escapeAttr(s.id)}">${escapeHtml(s.title)}</a>`)
    .join('');
  nav.innerHTML = `<div class="toc-domain-title">${escapeHtml(data.emoji)} ${escapeHtml(data.title)}</div>${links}`;
}

export { DOMAIN_EMOJI, DOMAIN_PAGE };
