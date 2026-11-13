/**
 * ============================================================================
 * PULSEKIT TOOLS // 100% CLIENT-SIDE UTILITY & HARDWARE LAB
 * ============================================================================
 */

const I18N = {
  en: {
    tagline: "Precision Hardware & Browser Utility Lab",
    heroTitle: '12 Precision Browser Tools. <span class="text-[#b8ff2c]">Zero Uploads.</span>',
    heroSub: "Engineered for instant speed and total privacy. Everything executes inside your device memory—no accounts, no server queues.",
    tabCompress: "Compress",
    tabDrift: "Drift Test",
    tabMouse: "Mouse Hz",
    tabHardware: "Mic & Pixels",
    tabAudio: "Speakers",
    tabPalette: "Colors",
    tabQr: "QR & Wi-Fi",
    tabText: "Security",
    tabKeyboard: "Keyboard",
    tabPdf: "PDF Studio",
    tabExif: "EXIF Strip",
    tabFps: "Monitor Hz",
    compressHeading: "Image Compressor & WebP Converter",
    compressDesc: "Shrink PNG, JPG, or WebP photos up to 90% locally in your browser without losing quality.",
    dropImg: "Drop an image here or click to select",
    qualityLabel: "Compression Quality",
    formatLabel: "Output Format",
    maxWidthLabel: "Max Width (px)",
    imgEmpty: "Select an image to preview size savings",
    downloadImgBtn: "Download Compressed Image",
    driftHeading: "PS5 DualSense / PS4 / Xbox Stick Drift Tester",
    driftDesc: "Plug in your controller via USB or Bluetooth and press any button to inspect deadzones, drift %, triggers, and rumble.",
    rumbleBtn: "Test Vibration",
    gpWaiting: "Waiting for controller... Connect via USB/Bluetooth and press any button.",
    mouseHeading: "Mouse Polling Rate (Hz), CPS & Reaction Time Test",
    mouseDesc: "Test your gaming mouse hardware polling frequency, click speed, and human reflex in milliseconds.",
    hzSub: "Move your mouse fast in circles inside the pad below.",
    cpsSub: "Click or tap as fast as you can for 5 seconds.",
    reactSub: "Wait for green, then click or tap immediately.",
    hwHeading: "Microphone Visualizer & Dead Pixel Screen Test",
    hwDesc: "Verify your headset microphone waveform locally and inspect monitors/phones for stuck or dead pixels.",
    audioHeading: "Headphone & Speaker Stereo L/R + Bass Tester",
    audioDesc: "Check Left/Right audio channel balance, test sub-bass response (30Hz–1000Hz), and eject water/dust vibrations.",
    paletteHeading: "Image Color Palette Extractor & WCAG Contrast",
    paletteDesc: "Extract dominant HEX colors from any photo or verify text accessibility contrast ratios (AA / AAA).",
    qrHeading: "Instant QR Code & Wi-Fi Share Generator",
    qrDesc: "Create high-resolution QR codes for links, text, or instant guest Wi-Fi login with 1-click PNG download.",
    textHeading: "Crypto Password Generator & Word Counter",
    kbHeading: "Keyboard Ghosting, NKRO & Switch Chatter Tester",
    kbDesc: "Press any keys simultaneously to test N-Key Rollover (NKRO), detect mechanical switch double-tap chatter (<35ms), and inspect key codes.",
    pdfHeading: "PDF Merger & Image-to-PDF Studio",
    pdfDesc: "Combine multiple PDF files or JPG/PNG images into one PDF document right inside your browser memory—zero uploads.",
    pdfDrop: "Drop PDFs or Images here, or click to add",
    exifHeading: "Photo EXIF Metadata Viewer & GPS Privacy Stripper",
    exifDesc: "Inspect hidden camera, timestamp, and GPS coordinates inside your photos—then strip 100% of tracking metadata before posting online.",
    exifDrop: "Select a photo to inspect & scrub EXIF",
    fpsHeading: "Monitor Refresh Rate (Hz) & Frame-Skip Test",
    fpsDesc: "Verify whether your display is actually running at 60Hz, 120Hz, 144Hz, 165Hz, or 240Hz+ and spot frame drops in real time."
  },
  es: {
    tagline: "Laboratorio de Hardware y Utilidades en Navegador",
    heroTitle: '12 Herramientas de Precisión. <span class="text-[#b8ff2c]">Sin Subir Archivos.</span>',
    heroSub: "Todo corre directo en la memoria de tu dispositivo—sin registros, sin esperas y 100% privado.",
    tabCompress: "Comprimir",
    tabDrift: "Test Drift",
    tabMouse: "Mouse Hz",
    tabHardware: "Mic/Píxeles",
    tabAudio: "Audio L/R",
    tabPalette: "Colores",
    tabQr: "QR y Wi-Fi",
    tabText: "Claves",
    tabKeyboard: "Teclado",
    tabPdf: "PDF Studio",
    tabExif: "Quitar EXIF",
    tabFps: "Monitor Hz",
    compressHeading: "Compresor de Imágenes y Conversor a WebP",
    compressDesc: "Reduce el peso de tus fotos PNG, JPG o WebP hasta un 90% directo en tu navegador sin perder calidad.",
    dropImg: "Arrastra una imagen aquí o toca para elegir",
    qualityLabel: "Calidad de Compresión",
    formatLabel: "Formato de Salida",
    maxWidthLabel: "Ancho Máx. (px)",
    imgEmpty: "Selecciona una imagen para ver cuánto espacio ahorras",
    downloadImgBtn: "Descargar Imagen Comprimida",
    driftHeading: "Tester de Drift PS5 DualSense / PS4 / Xbox",
    driftDesc: "Conecta tu mando por USB o Bluetooth y presiona cualquier botón para medir drift %, gatillos y vibración.",
    rumbleBtn: "Probar Vibración",
    gpWaiting: "Esperando mando... Conéctalo por USB/Bluetooth y presiona un botón.",
    mouseHeading: "Test de Polling Rate (Hz), CPS y Tiempo de Reacción",
    mouseDesc: "Mide los Hz reales de tu mouse gamer, velocidad de clics por segundo y reflejos en milisegundos.",
    hzSub: "Mueve el mouse rápido en círculos dentro del recuadro.",
    cpsSub: "Haz clic o toca lo más rápido posible durante 5 segundos.",
    reactSub: "Espera a que se ponga verde y haz clic al instante.",
    hwHeading: "Prueba de Micrófono y Píxeles Muertos en Pantalla",
    hwDesc: "Comprueba la onda de audio de tu micrófono y revisa monitores o celulares por píxeles muertos.",
    audioHeading: "Prueba de Bocinas y Audífonos Estéreo L/R + Bajos",
    audioDesc: "Verifica el canal izquierdo/derecho, prueba bajos (30Hz–1000Hz) y genera vibración para limpiar bocinas.",
    paletteHeading: "Extractor de Paleta de Colores y Contraste WCAG",
    paletteDesc: "Extrae los 6 colores HEX dominantes de cualquier foto y valida el contraste de diseño AA/AAA.",
    qrHeading: "Generador de Códigos QR y Wi-Fi Instantáneo",
    qrDesc: "Crea códigos QR en alta calidad para enlaces, texto o compartir tu Wi-Fi con descarga en PNG.",
    textHeading: "Generador de Contraseñas Seguras y Contador de Palabras",
    kbHeading: "Tester de Teclado: Ghosting, NKRO y Switch Chatter",
    kbDesc: "Presiona varias teclas a la vez para probar N-Key Rollover (NKRO), detectar doble clic fallido (<35ms) en switches mecánicos y ver key codes.",
    pdfHeading: "Unir PDF y Convertir Imágenes a PDF",
    pdfDesc: "Combina varios PDF o fotos JPG/PNG en un solo documento PDF directo en la memoria de tu navegador, sin subir archivos.",
    pdfDrop: "Arrastra PDFs o Imágenes aquí, o toca para agregar",
    exifHeading: "Visor EXIF y Eliminador de Ubicación GPS en Fotos",
    exifDesc: "Revisa la cámara, fecha y coordenadas GPS ocultas en tus fotos, y borra el 100% de los metadatos antes de publicarlas.",
    exifDrop: "Elige una foto para inspeccionar y limpiar EXIF",
    fpsHeading: "Test de Frecuencia de Monitor (Hz) y Frame-Skip",
    fpsDesc: "Comprueba si tu pantalla realmente corre a 60Hz, 120Hz, 144Hz, 165Hz o 240Hz+ y detecta caídas de cuadros en tiempo real."
  }
};

let sessionRunCount = 1;
function bumpRunCounter() {
  sessionRunCount++;
  const el = document.getElementById('session-runs-counter');
  if (el) el.innerText = String(sessionRunCount).padStart(3, '0');
}

window.addEventListener('DOMContentLoaded', () => {
  initImageDropzone();
  initDriftLoop();
  initPollingRatePad();
  generateSecurePassword();
  setTimeout(generateQrCode, 250);

  const presetTool = document.body?.dataset?.tool || '';
  const presetLang = document.documentElement?.lang || 'en';
  if (presetLang === 'es') setLanguage('es');
  if (presetTool) switchTool(presetTool);
});

function setLanguage(lang) {
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerHTML = dict[key];
  });
  const btnEn = document.getElementById('lang-en');
  const btnEs = document.getElementById('lang-es');
  if (btnEn && btnEs) {
    if (lang === 'es') {
      btnEs.className = "px-2.5 py-1 rounded-lg bg-[#b8ff2c] text-[#05070b] transition";
      btnEn.className = "px-2.5 py-1 rounded-lg text-slate-400 hover:text-white transition";
    } else {
      btnEn.className = "px-2.5 py-1 rounded-lg bg-[#b8ff2c] text-[#05070b] transition";
      btnEs.className = "px-2.5 py-1 rounded-lg text-slate-400 hover:text-white transition";
    }
  }
}

function switchTool(toolKey) {
  document.querySelectorAll('.tool-pane').forEach((p) => p.classList.add('hidden'));
  document.querySelectorAll('[id^="btn-tool-"]').forEach((b) => {
    b.classList.remove('dock-btn-active');
  });
  const pane = document.getElementById(`pane-${toolKey}`);
  const btn = document.getElementById(`btn-tool-${toolKey}`);
  const qJump = document.getElementById('quick-jump-select');
  if (pane) pane.classList.remove('hidden');
  if (btn) btn.classList.add('dock-btn-active');
  if (qJump) qJump.value = toolKey;
  bumpRunCounter();
  if (toolKey === 'qr') generateQrCode();
  if (toolKey === 'keyboard') initKeyboardGrid();
  if (toolKey === 'fps') startFpsLoop();
  else stopFpsLoop();
}

// ============================================================================
// 1. IMAGE COMPRESSOR & WEBP CONVERTER
// ============================================================================
let loadedImageObj = null;
let loadedImageSize = 0;
let loadedImageName = 'image';
let compressedBlob = null;

function initImageDropzone() {
  const dz = document.getElementById('img-dropzone');
  if (!dz) return;
  dz.addEventListener('dragover', (e) => { e.preventDefault(); dz.classList.add('border-sky-400'); });
  dz.addEventListener('dragleave', () => dz.classList.remove('border-sky-400'));
  dz.addEventListener('drop', (e) => {
    e.preventDefault();
    dz.classList.remove('border-sky-400');
    if (e.dataTransfer?.files?.[0]) handleImageUpload(e.dataTransfer.files[0]);
  });
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(2) + ' MB';
}

function handleImageUpload(file) {
  if (!file || !file.type.startsWith('image/')) return;
  loadedImageSize = file.size;
  loadedImageName = file.name.replace(/\.[^/.]+$/, '');

  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      loadedImageObj = img;
      document.getElementById('img-empty-state').classList.add('hidden');
      document.getElementById('img-result-box').classList.remove('hidden');
      updateCompressionPreview();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function updateCompressionPreview() {
  const qEl = document.getElementById('img-quality');
  const qVal = document.getElementById('img-quality-val');
  if (qEl && qVal) qVal.innerText = qEl.value + '%';
  if (!loadedImageObj) return;

  const quality = parseInt(qEl.value, 10) / 100;
  const format = document.getElementById('img-format').value;
  const maxW = parseInt(document.getElementById('img-max-width').value, 10);

  let targetW = loadedImageObj.width;
  let targetH = loadedImageObj.height;
  if (maxW && maxW > 0 && targetW > maxW) {
    targetH = Math.round((targetH * maxW) / targetW);
    targetW = maxW;
  }

  const canvas = document.createElement('canvas');
  canvas.width = targetW;
  canvas.height = targetH;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(loadedImageObj, 0, 0, targetW, targetH);

  canvas.toBlob((blob) => {
    if (!blob) return;
    compressedBlob = blob;
    const saved = Math.max(0, Math.round(((loadedImageSize - blob.size) / loadedImageSize) * 100));
    document.getElementById('img-orig-size').innerText = formatBytes(loadedImageSize);
    document.getElementById('img-new-size').innerText = formatBytes(blob.size);
    document.getElementById('img-saved-pct').innerText = `-${saved}%`;
    document.getElementById('img-preview-el').src = URL.createObjectURL(blob);
  }, format, quality);
}

function downloadCompressedImage() {
  if (!compressedBlob) return;
  const format = document.getElementById('img-format').value;
  const ext = format === 'image/webp' ? 'webp' : format === 'image/png' ? 'png' : 'jpg';
  const a = document.createElement('a');
  a.href = URL.createObjectURL(compressedBlob);
  a.download = `${loadedImageName}-pulsekit.${ext}`;
  a.click();
}

// ============================================================================
// 2. CONTROLLER DRIFT, TRIGGER & VIBRATION TESTER
// ============================================================================
const GP_LABELS = ['A / X', 'B / O', 'X / □', 'Y / △', 'LB / L1', 'RB / R1', 'LT / L2', 'RT / R2', 'Back', 'Start', 'L3', 'R3', 'Up', 'Down', 'Left', 'Right'];

function initDriftLoop() {
  const grid = document.getElementById('gp-buttons-grid');
  if (grid && grid.children.length === 0) {
    GP_LABELS.forEach((label, i) => {
      const div = document.createElement('div');
      div.id = `pk-gp-btn-${i}`;
      div.className = 'p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-500 font-bold truncate';
      div.innerText = label;
      grid.appendChild(div);
    });
  }

  function drawRadar(id, x, y, color) {
    const c = document.getElementById(id);
    if (!c) return;
    const ctx = c.getContext('2d');
    const cx = c.width / 2, cy = c.height / 2, r = 74;
    ctx.clearRect(0, 0, c.width, c.height);

    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - r, cy); ctx.lineTo(cx + r, cy); ctx.moveTo(cx, cy - r); ctx.lineTo(cx, cy + r); ctx.stroke();

    ctx.strokeStyle = 'rgba(56,189,248,0.25)';
    ctx.beginPath(); ctx.arc(cx, cy, r * 0.1, 0, Math.PI * 2); ctx.stroke();

    const px = cx + x * r, py = cy + y * r;
    ctx.strokeStyle = color; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke();
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI * 2); ctx.fill();
  }

  function tick() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    let pad = null;
    for (let i = 0; i < pads.length; i++) {
      if (pads[i]?.connected) { pad = pads[i]; break; }
    }

    const bar = document.getElementById('gp-status-bar');
    const hzTag = document.getElementById('gp-hz-tag');

    if (pad) {
      if (bar) bar.className = 'p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-xs text-emerald-300 mb-5 flex items-center justify-between';
      if (bar) bar.querySelector('span').innerHTML = `<i class="fa-solid fa-circle-check mr-2"></i>CONNECTED: <b class="text-white">${pad.id.substring(0, 42)}</b>`;
      if (hzTag) { hzTag.innerText = 'LIVE 60HZ'; hzTag.className = 'font-mono-tech text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold'; }

      const lx = pad.axes[0] || 0, ly = pad.axes[1] || 0;
      const rx = pad.axes[2] || 0, ry = pad.axes[3] || 0;
      drawRadar('canvas-stick-l', lx, ly, '#38bdf8');
      drawRadar('canvas-stick-r', rx, ry, '#f472b6');

      const lPct = Math.min(100, Math.hypot(lx, ly) * 100);
      const rPct = Math.min(100, Math.hypot(rx, ry) * 100);
      document.getElementById('readout-l').innerText = `X: ${lx.toFixed(3)} | Y: ${ly.toFixed(3)}`;
      document.getElementById('readout-r').innerText = `X: ${rx.toFixed(3)} | Y: ${ry.toFixed(3)}`;

      const vl = document.getElementById('verdict-l');
      const vr = document.getElementById('verdict-r');
      vl.innerText = `OFFSET: ${lPct.toFixed(1)}% ${lPct > 8 ? '(DRIFT / ACTIVE)' : '(CENTERED)'}`;
      vl.className = lPct > 8 ? 'text-xs font-bold text-amber-400 mt-0.5' : 'text-xs font-bold text-emerald-400 mt-0.5';
      vr.innerText = `OFFSET: ${rPct.toFixed(1)}% ${rPct > 8 ? '(DRIFT / ACTIVE)' : '(CENTERED)'}`;
      vr.className = rPct > 8 ? 'text-xs font-bold text-amber-400 mt-0.5' : 'text-xs font-bold text-emerald-400 mt-0.5';

      const l2 = pad.buttons[6] ? Math.round(pad.buttons[6].value * 100) : 0;
      const r2 = pad.buttons[7] ? Math.round(pad.buttons[7].value * 100) : 0;
      document.getElementById('trig-l-bar').style.width = l2 + '%';
      document.getElementById('trig-r-bar').style.width = r2 + '%';
      document.getElementById('trig-l-txt').innerText = l2 + '%';
      document.getElementById('trig-r-txt').innerText = r2 + '%';

      GP_LABELS.forEach((_, idx) => {
        const el = document.getElementById(`pk-gp-btn-${idx}`);
        if (!el) return;
        const pressed = pad.buttons[idx]?.pressed;
        el.className = pressed
          ? 'p-1.5 rounded-lg bg-sky-400 border border-sky-200 text-slate-950 font-extrabold truncate'
          : 'p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-500 font-bold truncate';
      });
    } else {
      drawRadar('canvas-stick-l', 0, 0, '#38bdf8');
      drawRadar('canvas-stick-r', 0, 0, '#f472b6');
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

async function testRumble() {
  const pads = navigator.getGamepads ? navigator.getGamepads() : [];
  for (let i = 0; i < pads.length; i++) {
    if (pads[i]?.connected && pads[i].vibrationActuator?.playEffect) {
      await pads[i].vibrationActuator.playEffect('dual-rumble', {
        startDelay: 0, duration: 600, weakMagnitude: 0.7, strongMagnitude: 1.0
      });
      return;
    }
  }
  alert('Connect a controller via USB or Bluetooth and press any button first.');
}

// ============================================================================
// 3. MOUSE POLLING RATE (HZ), CPS & REACTION TIME
// ============================================================================
let lastPointerTs = 0;
let peakHz = 0;
let hzSamples = [];

function initPollingRatePad() {
  const pad = document.getElementById('hz-pad');
  if (!pad) return;
  const handler = (e) => {
    const now = performance.now();
    if (lastPointerTs > 0) {
      const dt = now - lastPointerTs;
      if (dt >= 0.4 && dt < 200) {
        const hz = Math.round(1000 / dt);
        hzSamples.push(hz);
        if (hzSamples.length > 15) hzSamples.shift();
        const avgHz = Math.round(hzSamples.reduce((a, b) => a + b, 0) / hzSamples.length);
        if (avgHz > peakHz) peakHz = avgHz;
        document.getElementById('hz-live').innerText = `${avgHz} Hz`;
        document.getElementById('hz-peak').innerText = `${peakHz} Hz`;
      }
    }
    lastPointerTs = now;
  };
  pad.addEventListener('pointermove', handler);
}

function resetPollingRate() {
  peakHz = 0;
  hzSamples = [];
  document.getElementById('hz-live').innerText = '0 Hz';
  document.getElementById('hz-peak').innerText = '0 Hz';
}

let cpsRunning = false, cpsClicks = 0, cpsBest = 0, cpsInterval = null;
function handleCpsClick() {
  if (!cpsRunning) {
    cpsRunning = true;
    cpsClicks = 1;
    const start = performance.now();
    const duration = 5000;
    document.getElementById('cps-score').innerText = '1 CLICK';
    cpsInterval = setInterval(() => {
      const elapsed = performance.now() - start;
      const rem = Math.max(0, (duration - elapsed) / 1000);
      document.getElementById('cps-timer').innerText = `${rem.toFixed(1)}s • ${cpsClicks} clicks`;
      if (elapsed >= duration) {
        clearInterval(cpsInterval);
        cpsRunning = false;
        const cps = (cpsClicks / 5).toFixed(1);
        document.getElementById('cps-score').innerText = `${cps} CPS!`;
        if (parseFloat(cps) > cpsBest) {
          cpsBest = parseFloat(cps);
          document.getElementById('cps-best').innerText = cps;
        }
      }
    }, 50);
  } else {
    cpsClicks++;
    document.getElementById('cps-score').innerText = `${cpsClicks} CLICKS`;
  }
}

let reactState = 'idle', reactTimeout = null, reactStartTs = 0, reactBest = Infinity;
function handleReactionClick() {
  const pad = document.getElementById('react-pad');
  const msg = document.getElementById('react-msg');
  const sub = document.getElementById('react-sub');

  if (reactState === 'idle' || reactState === 'done') {
    reactState = 'waiting';
    pad.className = 'w-full h-36 rounded-xl border-2 border-rose-500 bg-rose-600/30 flex flex-col items-center justify-center transition select-none mb-4';
    msg.innerText = 'WAIT FOR GREEN...';
    sub.innerText = 'Do not click yet!';
    const delay = 1400 + Math.random() * 2200;
    reactTimeout = setTimeout(() => {
      reactState = 'ready';
      reactStartTs = performance.now();
      pad.className = 'w-full h-36 rounded-xl border-2 border-emerald-400 bg-emerald-500 flex flex-col items-center justify-center transition select-none mb-4';
      msg.innerHTML = '<span class="text-slate-950">CLICK NOW!</span>';
      sub.innerHTML = '<span class="text-slate-900 font-bold">GO!</span>';
    }, delay);
  } else if (reactState === 'waiting') {
    clearTimeout(reactTimeout);
    reactState = 'idle';
    pad.className = 'w-full h-36 rounded-xl border-2 border-amber-500 bg-amber-500/20 flex flex-col items-center justify-center transition select-none mb-4';
    msg.innerText = 'TOO SOON!';
    sub.innerText = 'Tap to try again';
  } else if (reactState === 'ready') {
    const ms = Math.round(performance.now() - reactStartTs);
    reactState = 'done';
    pad.className = 'w-full h-36 rounded-xl border-2 border-indigo-500/40 bg-indigo-500/10 flex flex-col items-center justify-center transition select-none mb-4';
    msg.innerText = `${ms} ms`;
    sub.innerText = 'Tap to test again';
    if (ms < reactBest) {
      reactBest = ms;
      document.getElementById('react-best').innerText = `${ms} ms`;
    }
  }
}

// ============================================================================
// 4. MIC VISUALIZER & DEAD PIXEL SCREEN TEST
// ============================================================================
let micStream = null, micAnim = null, micAudioCtx = null;

async function startMicTest() {
  try {
    micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    micAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const src = micAudioCtx.createMediaStreamSource(micStream);
    const analyser = micAudioCtx.createAnalyser();
    analyser.fftSize = 256;
    src.connect(analyser);

    const badge = document.getElementById('mic-status-badge');
    badge.innerText = 'LIVE MIC';
    badge.className = 'text-[10px] font-mono-tech px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold';

    const canvas = document.getElementById('mic-canvas');
    const ctx = canvas.getContext('2d');
    const data = new Uint8Array(analyser.frequencyBinCount);

    function drawMic() {
      analyser.getByteFrequencyData(data);
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const barW = (canvas.width / data.length) * 2.2;
      let x = 0;
      for (let i = 0; i < data.length; i++) {
        const h = (data[i] / 255) * canvas.height;
        ctx.fillStyle = i % 2 === 0 ? '#38bdf8' : '#f472b6';
        ctx.fillRect(x, canvas.height - h, barW, h);
        x += barW + 2;
      }
      micAnim = requestAnimationFrame(drawMic);
    }
    drawMic();
  } catch (err) {
    alert('Please allow microphone access in your browser to test your mic.');
  }
}

function stopMicTest() {
  if (micAnim) cancelAnimationFrame(micAnim);
  if (micStream) micStream.getTracks().forEach((t) => t.stop());
  if (micAudioCtx) micAudioCtx.close();
  const badge = document.getElementById('mic-status-badge');
  if (badge) {
    badge.innerText = 'STOPPED';
    badge.className = 'text-[10px] font-mono-tech px-2 py-0.5 rounded bg-slate-900 text-slate-400';
  }
}

const PIXEL_COLORS = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF'];
let pixelIdx = 0;

function startDeadPixelTest() {
  pixelIdx = 0;
  const ov = document.getElementById('pixel-fullscreen-overlay');
  ov.style.backgroundColor = PIXEL_COLORS[0];
  ov.classList.add('active');
  document.getElementById('pixel-hint-pill').style.display = 'block';
  if (ov.requestFullscreen) ov.requestFullscreen().catch(() => {});
}

function cycleDeadPixelColor() {
  pixelIdx = (pixelIdx + 1) % PIXEL_COLORS.length;
  const ov = document.getElementById('pixel-fullscreen-overlay');
  ov.style.backgroundColor = PIXEL_COLORS[pixelIdx];
  document.getElementById('pixel-hint-pill').style.display = 'none';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('pixel-fullscreen-overlay')?.classList.remove('active');
  }
});
document.getElementById('pixel-fullscreen-overlay')?.addEventListener('dblclick', () => {
  document.getElementById('pixel-fullscreen-overlay').classList.remove('active');
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
});

// ============================================================================
// 5. QR CODE & WI-FI GENERATOR
// ============================================================================
let qrMode = 'url';
let qrInstance = null;

function setQrMode(mode) {
  qrMode = mode;
  document.getElementById('qr-url-fields').classList.toggle('hidden', mode !== 'url');
  document.getElementById('qr-wifi-fields').classList.toggle('hidden', mode !== 'wifi');
  document.getElementById('qr-mode-url').className = mode === 'url'
    ? 'px-3.5 py-2 rounded-lg bg-[#b8ff2c] text-[#05070b] font-bold'
    : 'px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-bold';
  document.getElementById('qr-mode-wifi').className = mode === 'wifi'
    ? 'px-3.5 py-2 rounded-lg bg-[#b8ff2c] text-[#05070b] font-bold'
    : 'px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-bold';
  generateQrCode();
}

function generateQrCode() {
  const box = document.getElementById('qr-output-box');
  if (!box || typeof QRCode === 'undefined') return;

  let text = 'https://pulsekit-tools.vercel.app';
  if (qrMode === 'url') {
    text = document.getElementById('qr-text-input').value.trim() || 'https://pulsekit-tools.vercel.app';
  } else {
    const ssid = document.getElementById('qr-wifi-ssid').value.trim() || 'MyWiFi';
    const pass = document.getElementById('qr-wifi-pass').value;
    text = `WIFI:T:WPA;S:${ssid};P:${pass};;`;
  }

  box.innerHTML = '';
  qrInstance = new QRCode(box, {
    text: text,
    width: 190,
    height: 190,
    colorDark: '#070b14',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.M
  });
}

function downloadQrPng() {
  const canvas = document.querySelector('#qr-output-box canvas');
  const img = document.querySelector('#qr-output-box img');
  const url = canvas ? canvas.toDataURL('image/png') : img?.src;
  if (!url) return;
  const a = document.createElement('a');
  a.href = url;
  a.download = 'pulsekit-qr.png';
  a.click();
}

// ============================================================================
// 6. CRYPTO PASSWORD GENERATOR & WORD COUNTER
// ============================================================================
function generateSecurePassword() {
  const lenEl = document.getElementById('pw-len');
  const lenVal = document.getElementById('pw-len-val');
  const outEl = document.getElementById('pw-output');
  if (!lenEl || !outEl) return;

  const length = parseInt(lenEl.value, 10) || 18;
  if (lenVal) lenVal.innerText = length;

  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_-+=';
  const values = new Uint32Array(length);
  crypto.getRandomValues(values);

  let pw = '';
  for (let i = 0; i < length; i++) {
    pw += charset[values[i] % charset.length];
  }
  outEl.value = pw;
}

function copyPassword() {
  const outEl = document.getElementById('pw-output');
  if (!outEl) return;
  navigator.clipboard?.writeText(outEl.value);
}

function updateWordCounter() {
  const text = document.getElementById('wc-input')?.value || '';
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const readSec = Math.ceil((words / 200) * 60);
  document.getElementById('wc-words').innerText = words;
  document.getElementById('wc-chars').innerText = chars;
  document.getElementById('wc-read').innerText = readSec < 60 ? `${readSec}s` : `${Math.ceil(readSec / 60)}m`;
}



// ============================================================================
// 7. SPEAKER L/R STEREO & SUB-BASS FREQUENCY TESTER
// ============================================================================
let toneCtx = null;
let toneOsc = null;
let toneRunning = false;

function playStereoChannel(panVal) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(panVal === -1 ? 440 : panVal === 1 ? 523.25 : 480, ctx.currentTime);
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.75);

    if (panner) {
      panner.pan.setValueAtTime(panVal, ctx.currentTime);
      osc.connect(panner);
      panner.connect(gain);
    } else {
      osc.connect(gain);
    }
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.78);

    const label = panVal === -1 ? 'LEFT CHANNEL ACTIVE' : panVal === 1 ? 'RIGHT CHANNEL ACTIVE' : 'CENTER STEREO ACTIVE';
    const st = document.getElementById('stereo-status');
    if (st) st.innerText = `Playing test tone -> ${label}`;
    bumpRunCounter();
  } catch (e) {}
}

function updateToneFreq() {
  const slider = document.getElementById('tone-hz-slider');
  const valEl = document.getElementById('tone-hz-val');
  if (!slider || !valEl) return;
  const hz = parseInt(slider.value, 10) || 165;
  valEl.innerText = `${hz} Hz`;
  if (toneOsc && toneCtx) {
    toneOsc.frequency.setValueAtTime(hz, toneCtx.currentTime);
  }
}

function setTonePreset(hz) {
  const slider = document.getElementById('tone-hz-slider');
  if (slider) slider.value = hz;
  updateToneFreq();
  if (!toneRunning) toggleToneGenerator();
}

function toggleToneGenerator() {
  const btn = document.getElementById('btn-tone-toggle');
  if (!toneRunning) {
    try {
      toneCtx = new (window.AudioContext || window.webkitAudioContext)();
      toneOsc = toneCtx.createOscillator();
      const gain = toneCtx.createGain();
      const hz = parseInt(document.getElementById('tone-hz-slider')?.value || '165', 10);
      toneOsc.type = 'sine';
      toneOsc.frequency.setValueAtTime(hz, toneCtx.currentTime);
      gain.gain.setValueAtTime(0.15, toneCtx.currentTime);
      toneOsc.connect(gain);
      gain.connect(toneCtx.destination);
      toneOsc.start();
      toneRunning = true;
      if (btn) btn.innerHTML = '<i class="fa-solid fa-stop mr-1.5"></i> Stop Tone';
      bumpRunCounter();
    } catch (e) {}
  } else {
    try {
      if (toneOsc) toneOsc.stop();
      if (toneCtx) toneCtx.close();
    } catch (e) {}
    toneRunning = false;
    toneOsc = null;
    if (btn) btn.innerHTML = '<i class="fa-solid fa-play mr-1.5"></i> Play Frequency Tone';
  }
}

// ============================================================================
// 8. IMAGE COLOR PALETTE EXTRACTOR & WCAG CONTRAST CHECKER
// ============================================================================
function extractImagePalette(file) {
  if (!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const w = 48, h = 48;
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      const data = ctx.getImageData(0, 0, w, h).data;

      const buckets = new Map();
      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] < 128) continue;
        // Quantize to 24-step buckets to find distinct dominant colors
        const r = Math.min(255, Math.round(data[i] / 24) * 24);
        const g = Math.min(255, Math.round(data[i + 1] / 24) * 24);
        const b = Math.min(255, Math.round(data[i + 2] / 24) * 24);
        const hex = '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('').toUpperCase();
        buckets.set(hex, (buckets.get(hex) || 0) + 1);
      }

      const topColors = Array.from(buckets.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map(entry => entry[0]);

      const box = document.getElementById('palette-swatches');
      if (box) {
        box.innerHTML = topColors.map(hex => `
          <button type="button" onclick="navigator.clipboard?.writeText('${hex}')" class="p-2 rounded-lg bg-[#05070b] border border-white/10 hover:border-[#b8ff2c] text-center transition" title="Copy ${hex}">
            <div class="w-full h-10 rounded mb-1.5 border border-white/10" style="background:${hex}"></div>
            <div class="text-[10px] font-mono-tech font-bold text-slate-200">${hex}</div>
          </button>
        `).join('');
      }
      bumpRunCounter();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function hexLuminance(hex) {
  const rgb = [1, 3, 5].map(idx => {
    const c = parseInt(hex.slice(idx, idx + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

function updateWcagContrast() {
  const fg = document.getElementById('wcag-fg')?.value || '#b8ff2c';
  const bg = document.getElementById('wcag-bg')?.value || '#05070b';
  const preview = document.getElementById('wcag-preview');
  const ratioEl = document.getElementById('wcag-ratio');
  const badgeEl = document.getElementById('wcag-badge');

  if (preview) {
    preview.style.color = fg;
    preview.style.backgroundColor = bg;
  }

  const l1 = hexLuminance(fg);
  const l2 = hexLuminance(bg);
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

  if (ratioEl) ratioEl.innerText = `${ratio.toFixed(2)}:1`;
  if (badgeEl) {
    if (ratio >= 7) {
      badgeEl.innerText = 'AAA PASS';
      badgeEl.className = 'px-2.5 py-1 rounded bg-[#b8ff2c]/15 text-[#b8ff2c] font-bold';
    } else if (ratio >= 4.5) {
      badgeEl.innerText = 'AA PASS';
      badgeEl.className = 'px-2.5 py-1 rounded bg-cyan-400/15 text-cyan-300 font-bold';
    } else {
      badgeEl.innerText = 'FAIL (<4.5)';
      badgeEl.className = 'px-2.5 py-1 rounded bg-[#ff6b35]/20 text-[#ff6b35] font-bold';
    }
  }
}


// ============================================================================
// 9. KEYBOARD GHOSTING, NKRO & SWITCH CHATTER TESTER
// ============================================================================
const KB_ROWS = [
  [['Escape','ESC'],['F1','F1'],['F2','F2'],['F3','F3'],['F4','F4'],['F5','F5'],['F6','F6'],['F7','F7'],['F8','F8'],['F9','F9'],['F10','F10'],['F11','F11'],['F12','F12']],
  [['Backquote','`'],['Digit1','1'],['Digit2','2'],['Digit3','3'],['Digit4','4'],['Digit5','5'],['Digit6','6'],['Digit7','7'],['Digit8','8'],['Digit9','9'],['Digit0','0'],['Minus','-'],['Equal','='],['Backspace','BKSP',2]],
  [['Tab','TAB',1.5],['KeyQ','Q'],['KeyW','W'],['KeyE','E'],['KeyR','R'],['KeyT','T'],['KeyY','Y'],['KeyU','U'],['KeyI','I'],['KeyO','O'],['KeyP','P'],['BracketLeft','['],['BracketRight',']'],['Backslash','\\',1.5]],
  [['CapsLock','CAPS',1.8],['KeyA','A'],['KeyS','S'],['KeyD','D'],['KeyF','F'],['KeyG','G'],['KeyH','H'],['KeyJ','J'],['KeyK','K'],['KeyL','L'],['Semicolon',';'],['Quote',"'"],['Enter','ENTER',2.2]],
  [['ShiftLeft','SHIFT',2.3],['KeyZ','Z'],['KeyX','X'],['KeyC','C'],['KeyV','V'],['KeyB','B'],['KeyN','N'],['KeyM','M'],['Comma',','],['Period','.'],['Slash','/'],['ShiftRight','SHIFT',2.7]],
  [['ControlLeft','CTRL',1.4],['MetaLeft','WIN/CMD',1.3],['AltLeft','ALT',1.3],['Space','SPACE',5.5],['AltRight','ALT',1.3],['ControlRight','CTRL',1.4],['ArrowLeft','←'],['ArrowUp','↑'],['ArrowDown','↓'],['ArrowRight','→']]
];

let kbActive = new Set();
let kbMaxNkro = 0;
let kbChatterCount = 0;
const kbLastPressTime = {};
let kbInitialized = false;

function initKeyboardGrid() {
  const grid = document.getElementById('kb-visual-grid');
  if (!grid || kbInitialized) return;
  kbInitialized = true;

  grid.innerHTML = KB_ROWS.map(row => `
    <div class="flex gap-1.5 mb-1.5 min-w-[640px]">
      ${row.map(([code, label, span = 1]) => `
        <div id="kb-key-${code}" style="flex:${span}" class="h-9 rounded-lg bg-[#0b0f17] border border-white/10 flex items-center justify-center text-[10px] font-mono-tech font-bold text-slate-300 transition-colors px-1">
          ${label}
        </div>
      `).join('')}
    </div>
  `).join('');

  window.addEventListener('keydown', (e) => {
    const pane = document.getElementById('pane-keyboard');
    if (!pane || pane.classList.contains('hidden')) return;
    if (['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Tab'].includes(e.code)) {
      e.preventDefault();
    }
    if (!e.repeat) {
      const now = performance.now();
      const prev = kbLastPressTime[e.code] || 0;
      if (prev && (now - prev) < 35) {
        kbChatterCount++;
        const chEl = document.getElementById('kb-chatter-count');
        const logEl = document.getElementById('kb-chatter-log');
        if (chEl) { chEl.innerText = kbChatterCount; chEl.className = 'text-xl font-extrabold text-[#ff6b35]'; }
        if (logEl) logEl.innerText = `Chatter detected on ${e.code} (${(now - prev).toFixed(1)}ms between presses)`;
      }
      kbLastPressTime[e.code] = now;
    }

    kbActive.add(e.code);
    if (kbActive.size > kbMaxNkro) kbMaxNkro = kbActive.size;

    const keyEl = document.getElementById(`kb-key-${e.code}`);
    if (keyEl) {
      keyEl.classList.remove('bg-[#0b0f17]', 'text-slate-300', 'border-white/10');
      keyEl.classList.add('bg-[#b8ff2c]', 'text-[#05070b]', 'border-[#b8ff2c]');
    }
    updateKbTelemetry(e.code);
  });

  window.addEventListener('keyup', (e) => {
    kbActive.delete(e.code);
    const keyEl = document.getElementById(`kb-key-${e.code}`);
    if (keyEl) {
      keyEl.classList.remove('bg-[#b8ff2c]', 'text-[#05070b]');
      keyEl.classList.add('bg-cyan-400/20', 'text-cyan-300', 'border-cyan-400/40');
    }
    updateKbTelemetry(e.code);
  });
}

function updateKbTelemetry(lastCode) {
  const actEl = document.getElementById('kb-active-count');
  const maxEl = document.getElementById('kb-max-nkro');
  const codeEl = document.getElementById('kb-last-code');
  if (actEl) actEl.innerText = kbActive.size;
  if (maxEl) maxEl.innerText = kbMaxNkro;
  if (codeEl && lastCode) codeEl.innerText = lastCode;
}

function resetKeyboardTest() {
  kbActive.clear();
  kbMaxNkro = 0;
  kbChatterCount = 0;
  document.querySelectorAll('[id^="kb-key-"]').forEach(el => {
    el.className = 'h-9 rounded-lg bg-[#0b0f17] border border-white/10 flex items-center justify-center text-[10px] font-mono-tech font-bold text-slate-300 transition-colors px-1';
  });
  const chEl = document.getElementById('kb-chatter-count');
  if (chEl) { chEl.innerText = '0'; chEl.className = 'text-xl font-extrabold text-slate-300'; }
  updateKbTelemetry('--');
}

// ============================================================================
// 10. PDF MERGER & IMAGE-TO-PDF STUDIO
// ============================================================================
let pdfQueue = [];

function handlePdfFiles(fileList) {
  if (!fileList || !fileList.length) return;
  for (const f of fileList) {
    if (f.type === 'application/pdf' || f.type === 'image/jpeg' || f.type === 'image/png') {
      pdfQueue.push(f);
    }
  }
  renderPdfQueue();
  bumpRunCounter();
}

function removePdfItem(index) {
  pdfQueue.splice(index, 1);
  renderPdfQueue();
}

function clearPdfQueue() {
  pdfQueue = [];
  const inp = document.getElementById('pdf-file-input');
  if (inp) inp.value = '';
  renderPdfQueue();
}

function renderPdfQueue() {
  const list = document.getElementById('pdf-queue-list');
  const count = document.getElementById('pdf-queue-count');
  const btn = document.getElementById('pdf-merge-btn');
  if (count) count.innerText = `${pdfQueue.length} file${pdfQueue.length === 1 ? '' : 's'}`;
  if (btn) btn.disabled = pdfQueue.length === 0;
  if (!list) return;

  if (!pdfQueue.length) {
    list.innerHTML = 'Add PDF documents or JPG/PNG photos to merge them in order.';
    return;
  }

  list.innerHTML = pdfQueue.map((f, i) => `
    <div class="flex items-center justify-between gap-2 bg-[#0b0f17] border border-white/10 rounded-lg px-3 py-2">
      <div class="flex items-center gap-2 min-w-0">
        <i class="fa-solid ${f.type === 'application/pdf' ? 'fa-file-pdf text-[#ff6b35]' : 'fa-image text-cyan-400'}"></i>
        <span class="text-slate-200 truncate">${f.name}</span>
        <span class="text-[10px] font-mono-tech text-slate-500 shrink-0">${formatBytes(f.size)}</span>
      </div>
      <button onclick="removePdfItem(${i})" class="text-slate-500 hover:text-[#ff6b35] px-1.5" aria-label="Remove file">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `).join('');
}

async function mergeAndDownloadPdf() {
  if (!pdfQueue.length || typeof PDFLib === 'undefined') return;
  const statusEl = document.getElementById('pdf-status');
  const btn = document.getElementById('pdf-merge-btn');
  if (btn) btn.disabled = true;
  if (statusEl) statusEl.innerText = 'Building merged PDF in local RAM...';

  try {
    const mergedPdf = await PDFLib.PDFDocument.create();
    for (const file of pdfQueue) {
      const bytes = await file.arrayBuffer();
      if (file.type === 'application/pdf') {
        const src = await PDFLib.PDFDocument.load(bytes);
        const pages = await mergedPdf.copyPages(src, src.getPageIndices());
        pages.forEach(p => mergedPdf.addPage(p));
      } else {
        const img = file.type === 'image/png'
          ? await mergedPdf.embedPng(bytes)
          : await mergedPdf.embedJpg(bytes);
        const page = mergedPdf.addPage([img.width, img.height]);
        page.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });
      }
    }
    const outBytes = await mergedPdf.save();
    const blob = new Blob([outBytes], { type: 'application/pdf' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `pulsekit-merged-${Date.now()}.pdf`;
    a.click();
    if (statusEl) statusEl.innerText = `Done! Merged ${pdfQueue.length} file(s) (${formatBytes(blob.size)}) locally.`;
    bumpRunCounter();
  } catch (err) {
    if (statusEl) statusEl.innerText = `Error: ${err.message}`;
  } finally {
    if (btn) btn.disabled = pdfQueue.length === 0;
  }
}

// ============================================================================
// 11. PHOTO EXIF VIEWER & GPS PRIVACY STRIPPER
// ============================================================================
let exifSourceImg = null;
let exifSourceName = 'clean-photo';

async function inspectAndPrepExif(file) {
  if (!file || !file.type.startsWith('image/')) return;
  exifSourceName = file.name.replace(/\.[^.]+$/, '');

  const table = document.getElementById('exif-table');
  const badge = document.getElementById('exif-gps-badge');
  const btn = document.getElementById('exif-strip-btn');

  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      exifSourceImg = img;
      if (btn) btn.disabled = false;
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);

  try {
    const data = (typeof exifr !== 'undefined') ? await exifr.parse(file) : null;
    if (!data || Object.keys(data).length === 0) {
      if (badge) { badge.innerText = 'CLEAN (NO EXIF)'; badge.className = 'text-[10px] font-mono-tech px-2 py-0.5 rounded bg-[#b8ff2c]/15 text-[#b8ff2c]'; }
      if (table) table.innerHTML = '<div class="text-slate-300">No EXIF tracking metadata found in this image.</div>';
    } else {
      const hasGps = (data.latitude !== undefined && data.longitude !== undefined);
      if (badge) {
        badge.innerText = hasGps ? 'GPS FOUND!' : 'EXIF PRESENT';
        badge.className = hasGps
          ? 'text-[10px] font-mono-tech px-2 py-0.5 rounded bg-[#ff6b35]/20 text-[#ff6b35] font-bold'
          : 'text-[10px] font-mono-tech px-2 py-0.5 rounded bg-amber-400/20 text-amber-300';
      }
      const rows = [
        ['Camera', `${data.Make || ''} ${data.Model || ''}`.trim() || 'Unknown'],
        ['Lens', data.LensModel || 'Unknown'],
        ['Date Taken', data.DateTimeOriginal ? String(data.DateTimeOriginal) : 'Unknown'],
        ['GPS Coords', hasGps ? `${data.latitude.toFixed(5)}, ${data.longitude.toFixed(5)}` : 'None'],
        ['ISO / Aperture', `${data.ISO || '--'} / f${data.FNumber || '--'}`],
        ['Software', data.Software || 'Unknown']
      ];
      if (table) {
        table.innerHTML = rows.map(([k, v]) => `
          <div class="bg-[#0b0f17] border border-white/10 rounded-lg p-2.5">
            <div class="text-[10px] text-slate-500">${k}</div>
            <div class="text-slate-200 truncate">${v}</div>
          </div>
        `).join('');
      }
    }
    bumpRunCounter();
  } catch {
    if (table) table.innerHTML = '<div>Could not parse EXIF headers, but you can still strip and re-save cleanly.</div>';
  }
}

function downloadStrippedPhoto() {
  if (!exifSourceImg) return;
  const canvas = document.createElement('canvas');
  canvas.width = exifSourceImg.width;
  canvas.height = exifSourceImg.height;
  canvas.getContext('2d').drawImage(exifSourceImg, 0, 0);
  canvas.toBlob((blob) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${exifSourceName}-clean-no-exif.jpg`;
    a.click();
    bumpRunCounter();
  }, 'image/jpeg', 0.95);
}

// ============================================================================
// 12. MONITOR REFRESH RATE (HZ) & FRAME-SKIP TEST
// ============================================================================
let fpsRafId = null;
let fpsLastTime = 0;
let fpsFrames = 0;
let fpsAccTime = 0;
let fpsDrops = 0;
let fpsPosX = 0;
let fpsPos30X = 0;
let fps30Acc = 0;

function startFpsLoop() {
  if (fpsRafId) return;
  fpsLastTime = performance.now();
  fpsFrames = 0;
  fpsAccTime = 0;
  fpsDrops = 0;

  const loop = (now) => {
    const dt = now - fpsLastTime;
    fpsLastTime = now;
    fpsFrames++;
    fpsAccTime += dt;

    if (fpsAccTime >= 500) {
      const hz = Math.round((fpsFrames * 1000) / fpsAccTime);
      const ms = (fpsAccTime / fpsFrames).toFixed(2);
      const hzEl = document.getElementById('fps-hz-val');
      const msEl = document.getElementById('fps-ms-val');
      const dropEl = document.getElementById('fps-drop-val');
      if (hzEl) hzEl.innerText = `${hz} Hz`;
      if (msEl) msEl.innerText = `${ms} ms`;
      if (dt > 40 && fpsFrames > 5) fpsDrops++;
      if (dropEl) dropEl.innerText = fpsDrops;
      fpsFrames = 0;
      fpsAccTime = 0;
    }

    const canvas = document.getElementById('fps-motion-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;
      ctx.fillStyle = '#05070b';
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.beginPath(); ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2); ctx.stroke();

      fpsPosX = (fpsPosX + dt * 0.45) % (w + 60);
      fps30Acc += dt;
      if (fps30Acc >= 33.33) {
        fpsPos30X = (fpsPos30X + fps30Acc * 0.45) % (w + 60);
        fps30Acc = 0;
      }

      // Top Track: Native Hz
      ctx.fillStyle = '#b8ff2c';
      ctx.fillRect(fpsPosX - 60, 26, 54, 34);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px monospace';
      ctx.fillText('NATIVE HZ', 12, 20);

      // Bottom Track: 30 FPS Reference
      ctx.fillStyle = '#22d3ee';
      ctx.fillRect(fpsPos30X - 60, h / 2 + 26, 54, 34);
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('30 FPS REFERENCE', 12, h / 2 + 20);
    }

    fpsRafId = requestAnimationFrame(loop);
  };
  fpsRafId = requestAnimationFrame(loop);
}

function stopFpsLoop() {
  if (fpsRafId) {
    cancelAnimationFrame(fpsRafId);
    fpsRafId = null;
  }
}
