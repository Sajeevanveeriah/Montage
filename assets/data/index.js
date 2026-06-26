/* ===================================================================
   index.js — domain metadata for the landing page cards & global stats.

   This module is intentionally self-contained: it declares the metadata
   for each of the six knowledge domains explicitly (id, title, emoji,
   colour, description, topic count, section count and the page it links
   to). The landing page (landing.js) imports DOMAINS_META to build the
   six domain cards and SITE_STATS to render the statistics bar.

   The topicCount / sectionCount values mirror the actual contents of the
   corresponding domain data modules:
     mathematics.js    → 49? no: 8 sections,  52 topics
     physics.js        → 10 sections, 74 topics
     engineering.js    → 10 sections, 51 topics
     cs-ai-ml.js       →  8 sections, 52 topics
     personal-dev.js   →  7 sections, 40 topics
     career-finance.js →  6 sections, 32 topics
   Totals: 6 domains · 49 sections · 301 topics.
   =================================================================== */

export const DOMAINS_META = [
  {
    id: 'mathematics',
    title: 'Mathematics',
    emoji: '∑',
    color: 'var(--color-maths)',
    description: 'Pure mathematics: calculus, linear algebra, analysis, number theory & geometry',
    topicCount: 52,
    sectionCount: 8,
    page: 'mathematics.html'
  },
  {
    id: 'physics',
    title: 'Physics',
    emoji: '⚛',
    color: 'var(--color-physics)',
    description: 'Classical & quantum mechanics, relativity, electromagnetism, astrophysics & thermodynamics',
    topicCount: 74,
    sectionCount: 10,
    page: 'physics.html'
  },
  {
    id: 'engineering',
    title: 'Engineering',
    emoji: '⚡',
    color: 'var(--color-eng)',
    description: 'Circuit theory, electronics, power systems, RF, control, mechanical & automation',
    topicCount: 51,
    sectionCount: 10,
    page: 'engineering.html'
  },
  {
    id: 'cs-ai-ml',
    title: 'CS / AI / ML',
    emoji: '💻',
    color: 'var(--color-cs)',
    description: 'Algorithms, Python, systems & DevOps, machine learning, deep learning, RL & LLMs',
    topicCount: 52,
    sectionCount: 8,
    page: 'cs-ai-ml.html'
  },
  {
    id: 'personal-dev',
    title: 'Personal Development',
    emoji: '🧠',
    color: 'var(--color-personal)',
    description: 'Habits, mindset, focus, learning, mental strength, wellbeing & self-discipline',
    topicCount: 40,
    sectionCount: 7,
    page: 'personal-dev.html'
  },
  {
    id: 'career-finance',
    title: 'Career & Finance',
    emoji: '📈',
    color: 'var(--color-career)',
    description: 'Investing, communication, leadership, negotiation, social skills & life strategy',
    topicCount: 32,
    sectionCount: 6,
    page: 'career-finance.html'
  }
];

/* Aggregate statistics shown in the landing page stats bar. Derived from
   DOMAINS_META so the numbers stay consistent with the cards above. */
export const SITE_STATS = {
  domains: DOMAINS_META.length,
  sections: DOMAINS_META.reduce((n, d) => n + d.sectionCount, 0),
  topics: DOMAINS_META.reduce((n, d) => n + d.topicCount, 0)
};

/* Convenience lookup by domain id (used by some views). */
export const META_BY_ID = DOMAINS_META.reduce((map, d) => {
  map[d.id] = d;
  return map;
}, {});

/* The canonical display order of the six domains (used by the landing
   page grid and the navbar). Kept as an explicit list so the ordering
   is independent of object-iteration order. */
export const DOMAIN_ORDER = [
  'mathematics',
  'physics',
  'engineering',
  'cs-ai-ml',
  'personal-dev',
  'career-finance'
];

/* Look up the metadata for a single domain by its id. Returns undefined
   if the id is not one of the six known domains. */
export function getDomainMeta(id) {
  return META_BY_ID[id];
}

/* Return a short, human-readable one-line summary of the whole corpus,
   e.g. "6 domains · 49 sections · 301 topics". Handy for meta tags and
   the footer/stats bar. */
export function summaryLine() {
  return `${SITE_STATS.domains} domains · ${SITE_STATS.sections} sections · ${SITE_STATS.topics} topics`;
}
