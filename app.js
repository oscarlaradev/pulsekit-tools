/**
 * ============================================================================
 * PULSEKIT TOOLS // 100% CLIENT-SIDE UTILITY & HARDWARE LAB
 * ============================================================================
 */

const I18N = {
  en: {
    tagline: "Precision Hardware & Browser Utility Lab",
    heroTitle: '8 Precision Browser Tools. <span class="text-[#b8ff2c]">Zero Uploads.</span>',
    heroSub: "Engineered for instant speed and total privacy. Everything executes inside your device memory—no accounts, no server queues.",
    tabCompress: "Compress",
    tabDrift: "Drift Test",
    tabMouse: "Mouse Hz",
    tabHardware: "Mic & Pixels",
    tabAudio: "Speakers",
    tabPalette: "Colors",
    tabQr: "QR & Wi-Fi",
    tabText: "Security",
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
    textHeading: "Crypto Password Generator & Word Counter"
  },
  es: {
    tagline: "Laboratorio de Hardware y Utilidades en Navegador",
    heroTitle: '8 Herramientas de Precisión. <span class="text-[#b8ff2c]">Sin Subir Archivos.</span>',
    heroSub: "Todo corre directo en la memoria de tu dispositivo—sin registros, sin esperas y 100% privado.",
    tabCompress: "Comprimir",
    tabDrift: "Test Drift",
    tabMouse: "Mouse Hz",
    tabHardware: "Mic/Píxeles",
    tabAudio: "Audio L/R",
    tabPalette: "Colores",
    tabQr: "QR y Wi-Fi",
    tabText: "Claves",
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
    textHeading: "Generador de Contraseñas Seguras y Contador de Palabras"
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
