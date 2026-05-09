const splash    = document.getElementById('splash');
const startBtn  = document.getElementById('startBtn');
const statusDot = document.getElementById('status-dot');
const statusTxt = document.getElementById('status-text');
const scanHint  = document.getElementById('scan-hint');

startBtn.addEventListener('click', () => {
  splash.classList.add('hidden');
  setTimeout(() => splash.style.display = 'none', 700);
});

document.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('[mindar-image-target]');
  if (!target) return;

  target.addEventListener('targetFound', () => {
    statusDot.classList.add('found');
    statusTxt.textContent = 'Model Detected!';
    scanHint.classList.add('hidden');
  });

  target.addEventListener('targetLost', () => {
    statusDot.classList.remove('found');
    statusTxt.textContent = 'Searching…';
    scanHint.classList.remove('hidden');
  });
});