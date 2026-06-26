/* ===================================================================
   quiz.js — flashcard / quiz mode for a domain page.
   State is NOT persisted (resets on exit or reload).
   =================================================================== */

let active = false;
let total = 0;

function updateProgress() {
  const got = document.querySelectorAll('#domainContent .topic-card.got-it').length;
  const fill = document.getElementById('quizFill');
  const label = document.getElementById('quizProgressLabel');
  if (fill) fill.style.width = total ? `${(got / total) * 100}%` : '0%';
  if (label) label.textContent = `${got} / ${total}`;
}

export function initQuiz() {
  const toggle = document.getElementById('quizToggle');
  const endBtn = document.getElementById('quizEnd');
  const content = document.getElementById('domainContent');
  if (!toggle || !content) return;

  total = content.querySelectorAll('.topic-card').length;

  toggle.addEventListener('click', () => active ? endQuiz() : startQuiz());
  if (endBtn) endBtn.addEventListener('click', endQuiz);

  // Event delegation for reveal / got-it / review buttons
  content.addEventListener('click', (e) => {
    if (!active) return;
    const card = e.target.closest('.topic-card');
    if (!card) return;
    if (e.target.classList.contains('quiz-reveal')) {
      card.classList.add('revealed');
    } else if (e.target.classList.contains('quiz-got')) {
      card.classList.add('got-it');
      card.classList.add('revealed');
      moveToBottom(card);
      updateProgress();
    } else if (e.target.classList.contains('quiz-again')) {
      card.classList.remove('got-it');
      moveToTop(card);
      updateProgress();
    }
  });
}

function moveToBottom(card) {
  const section = card.closest('section');
  if (section) section.appendChild(card);
}
function moveToTop(card) {
  const section = card.closest('section');
  if (section) {
    const firstCard = section.querySelector('.topic-card');
    if (firstCard && firstCard !== card) section.insertBefore(card, firstCard);
  }
}

export function startQuiz() {
  active = true;
  document.body.classList.add('quiz-active');
  const toggle = document.getElementById('quizToggle');
  if (toggle) { toggle.textContent = '🎯 Quiz mode'; toggle.classList.add('active'); }
  document.querySelectorAll('#domainContent .topic-card')
    .forEach(c => c.classList.remove('revealed', 'got-it'));
  updateProgress();
}

export function endQuiz() {
  active = false;
  document.body.classList.remove('quiz-active');
  const toggle = document.getElementById('quizToggle');
  if (toggle) toggle.classList.remove('active');
  document.querySelectorAll('#domainContent .topic-card')
    .forEach(c => c.classList.remove('revealed', 'got-it'));
}

export function toggleQuiz() { active ? endQuiz() : startQuiz(); }
export function isQuizActive() { return active; }
