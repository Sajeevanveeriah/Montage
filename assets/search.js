(() => {
  const PAGE_INDEX = [
    { file: './mathematics.html',   label: 'Mathematics' },
    { file: './physics.html',       label: 'Physics' },
    { file: './engineering.html',   label: 'Engineering' },
    { file: './cs-ai-ml.html',      label: 'CS / AI / ML' },
    { file: './personal-dev.html',  label: 'Personal Dev' },
    { file: './career-finance.html',label: 'Career & Finance' },
  ];

  function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function highlight(text, query) {
    if (!query) return text;
    const re = new RegExp(`(${escapeRe(query)})`, 'gi');
    return text.replace(re, '<mark class="highlight-match">$1</mark>');
  }

  /* ---- Section-page filtering ---- */
  function initSectionSearch() {
    const input = document.getElementById('search-input');
    if (!input) return;

    const subsections = Array.from(document.querySelectorAll('.subsection'));
    const noMsg = document.getElementById('no-results-msg');

    input.addEventListener('keyup', () => {
      const q = input.value.trim().toLowerCase();
      let visible = 0;

      subsections.forEach(sec => {
        const text = sec.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          sec.classList.remove('hidden');
          visible++;
          if (q) {
            highlightSection(sec, q);
          } else {
            clearHighlights(sec);
          }
        } else {
          sec.classList.add('hidden');
        }
      });

      if (noMsg) {
        noMsg.classList.toggle('visible', q.length > 0 && visible === 0);
      }
    });
  }

  function highlightSection(sec, q) {
    const h3 = sec.querySelector('h3');
    if (h3 && h3.dataset.originalText === undefined) {
      h3.dataset.originalText = h3.textContent;
    }
    if (h3 && h3.dataset.originalText) {
      h3.innerHTML = highlight(h3.dataset.originalText, q);
    }
  }

  function clearHighlights(sec) {
    const h3 = sec.querySelector('h3');
    if (h3 && h3.dataset.originalText !== undefined) {
      h3.textContent = h3.dataset.originalText;
    }
  }

  /* ---- Index-page global search ---- */
  function initIndexSearch() {
    const input = document.getElementById('search-input');
    const dropdown = document.getElementById('search-dropdown');
    if (!input || !dropdown) return;

    let cachedIndex = null;

    async function buildIndex() {
      if (cachedIndex) return cachedIndex;
      const results = [];
      for (const page of PAGE_INDEX) {
        try {
          const res = await fetch(page.file);
          if (!res.ok) continue;
          const html = await res.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const subs = doc.querySelectorAll('.subsection');
          subs.forEach(sub => {
            const h3 = sub.querySelector('h3');
            const id = sub.id || (h3 ? h3.textContent.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g,'') : '');
            if (h3) {
              results.push({
                title: h3.textContent.trim(),
                text: sub.textContent.trim().toLowerCase(),
                page: page.label,
                href: page.file + (id ? '#' + id : ''),
              });
            }
          });
        } catch (e) { /* skip */ }
      }
      cachedIndex = results;
      return results;
    }

    let buildPromise = null;

    input.addEventListener('focus', () => {
      if (!buildPromise) buildPromise = buildIndex();
    });

    input.addEventListener('keyup', async () => {
      const q = input.value.trim().toLowerCase();
      if (!q) { dropdown.classList.remove('visible'); return; }

      const index = await (buildPromise || (buildPromise = buildIndex()));
      const matches = index.filter(item => item.text.includes(q) || item.title.toLowerCase().includes(q)).slice(0, 20);

      if (matches.length === 0) {
        dropdown.innerHTML = '<div class="search-no-results">No results found</div>';
      } else {
        dropdown.innerHTML = matches.map(m => `
          <a class="search-result-item" href="${m.href}">
            <div class="result-title">${highlight(m.title, input.value.trim())}</div>
            <div class="result-page">${m.page}</div>
          </a>`).join('');
      }
      dropdown.classList.add('visible');
    });

    document.addEventListener('click', e => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('visible');
      }
    });
  }

  /* ---- Sidebar active link on scroll ---- */
  function initSidebarScroll() {
    const links = Array.from(document.querySelectorAll('.sidebar nav a'));
    if (!links.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    links.forEach(l => {
      const id = l.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const isIndex = document.body.dataset.page === 'index';
    if (isIndex) {
      initIndexSearch();
    } else {
      initSectionSearch();
    }
    initSidebarScroll();
  });
})();
