# HFCC Campus Model AR 🏫

Augmented Reality web app that detects your **laser-cut campus model** via camera and overlays a holographic 3D visualisation using **MindAR.js + A-Frame**.

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| [Vite](https://vitejs.dev) | Dev server & bundler |
| [MindAR.js](https://hiukim.github.io/mind-ar-js-doc/) | Image tracking AR |
| [A-Frame](https://aframe.io) | 3D/WebXR scene |
| GitHub + Vercel | Hosting & CI/CD |

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/HFCC_CampusModelAR.git
cd HFCC_CampusModelAR

# 2. Install dependencies
npm install

# 3. Start dev server (use HTTPS for camera)
npm run dev
```

> Open `https://localhost:5173` — allow camera when prompted.

---

## 🎯 CRITICAL STEP — Generate Your Target File

MindAR needs a `.mind` file compiled from a photo of your model.

### Option A — MindAR Image Compiler (recommended)

1. Take a **clear, well-lit top-down or 45° photo** of the laser-cut model
2. Go to: **https://hiukim.github.io/mind-ar-js-doc/tools/compile**
3. Upload your photo
4. Click **Compile** → download `targets.mind`
5. Rename it to `campus.mind`
6. Place it in: `public/targets/campus.mind`

### Tips for a good target image
- Even, diffuse lighting (no harsh shadows)
- Model fills most of the frame
- High contrast — the laser-cut lines work great!
- At least 1080p resolution

---

## 📁 Project Structure

```
HFCC_CampusModelAR/
├── public/
│   └── targets/
│       └── campus.mind        ← ⚠️ YOU generate this (see above)
├── src/
│   └── main.js                ← AR event logic
├── index.html                 ← Scene + MindAR config
├── vite.config.js
└── package.json
```

---

## 🌐 Deploy to Vercel

### Via GitHub (recommended)

```bash
# Push to GitHub
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/HFCC_CampusModelAR.git
git push -u origin main
```

Then:
1. Go to [vercel.com](https://vercel.com) → **New Project**
2. Import your GitHub repo
3. Framework preset: **Vite**
4. Click **Deploy** — done! ✅

Vercel provides HTTPS automatically, which is required for camera access.

---

## 🎨 Customising the AR Overlay

Edit the `<a-entity mindar-image-target="targetIndex: 0">` block in `index.html`:

### Add a video overlay
```html
<a-assets>
  <video id="my-video" src="/media/tour.mp4" loop crossorigin playsinline></video>
</a-assets>

<!-- Inside the target entity: -->
<a-video src="#my-video" width="1" height="0.552" position="0 0.1 0" rotation="-90 0 0"></a-video>
```

### Add a GLTF 3D model
```html
<a-assets>
  <a-asset-item id="campus-3d" src="/models/campus.glb"></a-asset-item>
</a-assets>

<a-gltf-model src="#campus-3d" position="0 0 0" scale="0.5 0.5 0.5"></a-gltf-model>
```

---

## 📱 Usage

1. Open the deployed Vercel URL on your phone
2. Tap **Launch AR**
3. Allow camera access
4. Point camera at your laser-cut campus model
5. Watch the holographic overlay appear! ✨

---

## 🔧 Troubleshooting

| Problem | Fix |
|---------|-----|
| Camera not working | Must be on HTTPS (Vercel/localhost) |
| Target not detected | Retake model photo, recompile `.mind` file |
| Overlay in wrong position | Adjust `position` values in `index.html` |
| Black screen | Check browser console; allow camera permission |

---

## 📄 License

MIT — HFCC Campus AR Project
