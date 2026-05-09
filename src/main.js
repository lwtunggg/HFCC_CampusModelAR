// HFCC Campus Model AR — main.js
// Handles splash → AR start, target found/lost events, and UI state

const splash    = document.getElementById('splash');
const startBtn  = document.getElementById('startBtn');
const statusDot = document.getElementById('status-dot');
const statusTxt = document.getElementById('status-text');
const scanHint  = document.getElementById('scan-hint');
const arScene   = document.getElementById('arScene');

// ── 1. Start AR when user taps the button ──────────────────────────────────
startBtn.addEventListener('click', async () => {
  // Hide splash
  splash.classList.add('hidden');
  setTimeout(() => splash.style.display = 'none', 700);

  // Wait for scene to be ready, then start MindAR
  if (arScene.hasLoaded) {
    startAR();
  } else {
    arScene.addEventListener('loaded', startAR, { once: true });
  }
});

function startAR() {
  const sceneEl = document.querySelector('a-scene');
  // Access MindAR system and start
  const mindARSystem = sceneEl.systems['mindar-image-system'];
  if (mindARSystem) {
    mindARSystem.start();
  }
}

// ── 2. Target found / lost events ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('[mindar-image-target]');
  if (!target) return;

  target.addEventListener('targetFound', () => {
    statusDot.classList.add('found');
    statusTxt.textContent = 'Model Detected!';
    scanHint.classList.add('hidden');

    // Play any video overlays
    const vid = document.getElementById('campus-video');
    if (vid) vid.play().catch(() => {});
  });

  target.addEventListener('targetLost', () => {
    statusDot.classList.remove('found');
    statusTxt.textContent = 'Searching…';
    scanHint.classList.remove('hidden');

    const vid = document.getElementById('campus-video');
    if (vid) vid.pause();
  });
});

// ── 3. Error guard — remind user to use HTTPS ─────────────────────────────
if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
  console.warn('[HFCC AR] Camera requires HTTPS. Deploy to Vercel or use localhost.');
}
