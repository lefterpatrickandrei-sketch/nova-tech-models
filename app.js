/**
 * NOVA TECH MODELS - CLIENT INTERACTION ENGINE
 * Built with Master Web Design & Modern Frontend Skill
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. THEME TOGGLE (DARK / LIGHT MODE)
  const themeToggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('nova-theme') || 'dark';

  if (currentTheme === 'light') {
    document.documentElement.classList.add('light');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '🌙';
  } else {
    document.documentElement.classList.remove('light');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '☀️';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('light');
      const isLight = document.documentElement.classList.contains('light');
      localStorage.setItem('nova-theme', isLight ? 'light' : 'dark');
      themeToggleBtn.innerHTML = isLight ? '🌙' : '☀️';
    });
  }

  // 2. BENTO GRID CATEGORY FILTER
  const tabButtons = document.querySelectorAll('.tab-btn');
  const bentoItems = document.querySelectorAll('.bento-item');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      bentoItems.forEach(item => {
        const categories = item.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          item.style.display = 'block';
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            item.style.opacity = '1';
          }, 50);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 3. INTERACTIVE 3D MODEL CONFIGURATOR
  const configCategory = document.getElementById('config-category');
  const configScale = document.getElementById('config-scale');
  const configMaterial = document.getElementById('config-material');
  const configAI = document.getElementById('config-ai');
  const configPropulsion = document.getElementById('config-propulsion');
  const priceDisplay = document.getElementById('calculated-price');
  const configModelTitle = document.getElementById('config-preview-title');
  const configModelSpecs = document.getElementById('config-preview-specs');

  function updateConfigurator() {
    let basePrice = 280;
    const categoryVal = configCategory ? configCategory.value : 'aero';
    const scaleVal = configScale ? configScale.value : '1:18';
    const materialVal = configMaterial ? configMaterial.value : 'carbon';

    let catName = 'Model Tehnologic NOVA';
    if (categoryVal === 'aero') { basePrice = 390; catName = 'Avion Supersonic Stealth Mach-4 (Aero)'; }
    if (categoryVal === 'navo') { basePrice = 450; catName = 'Crucișător Naval Stealth Aegis (Navo)'; }
    if (categoryVal === 'auto') { basePrice = 340; catName = 'Hypercar Aerodinamic V12 Concept (Auto)'; }
    if (categoryVal === 'racheto') { basePrice = 490; catName = 'Rachetă Orbitală Treapta 2 (Racheto)'; }
    if (categoryVal === 'drone') { basePrice = 320; catName = 'Dronă Hexacopter Autonomă LiDAR (Drone)'; }
    if (categoryVal === 'robotica') { basePrice = 580; catName = 'Braț Robotic Industrial 6-Axe (AI/Robot)'; }

    let scaleMult = 1;
    if (scaleVal === '1:12') scaleMult = 1.35;
    if (scaleVal === '1:8') scaleMult = 1.75;
    if (scaleVal === '1:4') scaleMult = 2.4;

    let materialCost = 0;
    let matName = 'Fibră de Sticlă Ranforsată';
    if (materialVal === 'carbon') { materialCost = 140; matName = 'Fibră de Carbon Forjată 3K'; }
    if (materialVal === 'titanium') { materialCost = 280; matName = 'Titan Aerospațial Grad 5'; }
    if (materialVal === 'kevlar') { materialCost = 90; matName = 'Compozit Kevlar-Polimer'; }

    let extras = 0;
    const isAIChecked = configAI ? configAI.checked : false;
    const isPropChecked = configPropulsion ? configPropulsion.checked : false;
    if (isAIChecked) extras += 160;
    if (isPropChecked) extras += 110;

    const finalPrice = Math.round((basePrice * scaleMult) + materialCost + extras);
    if (priceDisplay) priceDisplay.textContent = '€' + finalPrice;
    if (configModelTitle) configModelTitle.textContent = catName;
    if (configModelSpecs) configModelSpecs.textContent = `Scară ${scaleVal} • ${matName} • ${isAIChecked ? 'Copilot AI' : 'Telemetrie Standard'} • ${isPropChecked ? 'Brushless High-Torque' : 'Servo Standard'}`;
  }

  [configCategory, configScale, configMaterial, configAI, configPropulsion].forEach(el => {
    if (el) el.addEventListener('change', updateConfigurator);
  });
  updateConfigurator();

  // 4. SPOTLIGHT MOUSE TRACKING
  const cards = document.querySelectorAll('.bento-item, .pillar-card, .configurator-wrapper');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    });
  });

  // 5. INQUIRY FORM SUBMISSION WITH TOAST
  const orderForm = document.getElementById('nova-order-form');
  const toast = document.getElementById('toast-notification');

  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = orderForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Trimite Solicitarea';
      if (submitBtn) {
        submitBtn.innerHTML = '⏳ Se procesează...';
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        if (submitBtn) submitBtn.innerHTML = '✅ Solicitare Înregistrată!';
        orderForm.reset();
        updateConfigurator();

        if (toast) {
          toast.classList.add('show');
          setTimeout(() => {
            toast.classList.remove('show');
            if (submitBtn) {
              submitBtn.innerHTML = originalText;
              submitBtn.disabled = false;
            }
          }, 4000);
        }
      }, 800);
    });
  }

  // 5. ACADEMY TECH-TREE ACCORDION
  const treePillars = document.querySelectorAll('.tree-pillar');
  treePillars.forEach(pillar => {
    const header = pillar.querySelector('.pillar-header');
    if (header) {
      header.addEventListener('click', () => {
        pillar.classList.toggle('open');
        const grid = pillar.querySelector('.steps-grid');
        if (grid) {
          grid.style.display = pillar.classList.contains('open') ? 'grid' : 'none';
        }
      });
    }
  });

  // Default: Open first two pillars
  treePillars.forEach((pillar, idx) => {
    const grid = pillar.querySelector('.steps-grid');
    if (idx < 2) {
      pillar.classList.add('open');
      if (grid) grid.style.display = 'grid';
    } else {
      pillar.classList.remove('open');
      if (grid) grid.style.display = 'none';
    }
  });

  // 6. ACADEMY LIGHTBOX MODAL
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxClose = document.getElementById('lightbox-close');
  const blueprintItems = document.querySelectorAll('.blueprint-item');

  blueprintItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-full');
      const title = item.getAttribute('data-title');
      const desc = item.getAttribute('data-desc');

      if (lightbox && lightboxImg) {
        lightboxImg.src = src;
        lightboxImg.alt = title;
        if (lightboxTitle) lightboxTitle.textContent = title;
        if (lightboxDesc) lightboxDesc.textContent = desc;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // 7. ACADEMY AERODYNAMIC CALCULATOR
  const massInput = document.getElementById('calc-mass');
  const spanInput = document.getElementById('calc-span');
  const chordInput = document.getElementById('calc-chord');

  const massVal = document.getElementById('val-mass');
  const spanVal = document.getElementById('val-span');
  const chordVal = document.getElementById('val-chord');

  const resArea = document.getElementById('res-area');
  const resLoad = document.getElementById('res-load');
  const resCG = document.getElementById('res-cg');
  const resDiag = document.getElementById('res-diag');

  function updateCalculator() {
    if (!massInput || !spanInput || !chordInput) return;

    const mass = parseFloat(massInput.value);
    const span = parseFloat(spanInput.value);
    const chord = parseFloat(chordInput.value);

    if (massVal) massVal.textContent = `${mass} g`;
    if (spanVal) spanVal.textContent = `${span} cm`;
    if (chordVal) chordVal.textContent = `${chord} cm`;

    const areaDm2 = (span * chord) / 100;
    const wingLoad = areaDm2 > 0 ? (mass / areaDm2) : 0;
    const cgMin = (chord * 0.28).toFixed(1);
    const cgMax = (chord * 0.33).toFixed(1);

    if (resArea) resArea.textContent = `${areaDm2.toFixed(2)} dm²`;
    if (resLoad) resLoad.textContent = `${wingLoad.toFixed(1)} g/dm²`;
    if (resCG) resCG.textContent = `${cgMin} – ${cgMax} cm`;

    if (resDiag) {
      if (wingLoad < 15) {
        resDiag.textContent = "⚡ Profil Termic Ușor: Planare lentă de mare eficiență, excelent pentru curenți ascendenți (F1A, zmee, carton ușor).";
      } else if (wingLoad <= 28) {
        resDiag.textContent = "✈️ Profil Echilibrat de Antrenament: Stabilitate optimă la rafale moderate de vânt, recomandat pentru nivelul Mediu (M1–M3).";
      } else if (wingLoad <= 45) {
        resDiag.textContent = "🚀 Profil Sportiv & Propulsat: Viteză sporită de înaintare, manevrabilitate dinamică și rezistență structurală ridicată.";
      } else {
        resDiag.textContent = "🔥 Profil Înaltă Viteză (Piloni/RC): Necesită viteză mare de lansare, aterizare pe pistă netedă și pilotaj experimentat.";
      }
    }
  }

  if (massInput && spanInput && chordInput) {
    massInput.addEventListener('input', updateCalculator);
    spanInput.addEventListener('input', updateCalculator);
    chordInput.addEventListener('input', updateCalculator);
    updateCalculator();
  }

  // 8. OPTION 2: GATED ACCESS MODAL FOR CLOUD DOCUMENTATION
  const accessModal = document.getElementById('access-modal');
  const openAccessBtn1 = document.getElementById('open-access-modal');
  const openAccessBtn2 = document.getElementById('open-access-modal-2');
  const closeAccessBtn = document.getElementById('access-modal-close');
  const accessForm = document.getElementById('access-request-form');
  const accessIntro = document.getElementById('access-modal-intro');
  const accessSuccessBox = document.getElementById('access-success-box');

  function openAccessModal() {
    if (accessModal) {
      accessModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAccessModal() {
    if (accessModal) {
      accessModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (openAccessBtn1) openAccessBtn1.addEventListener('click', openAccessModal);
  if (openAccessBtn2) openAccessBtn2.addEventListener('click', openAccessModal);
  if (closeAccessBtn) closeAccessBtn.addEventListener('click', closeAccessModal);

  if (accessModal) {
    accessModal.addEventListener('click', (e) => {
      if (e.target === accessModal) closeAccessModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAccessModal();
  });

  if (accessForm) {
    accessForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('btn-submit-access');
      if (submitBtn) {
        submitBtn.innerHTML = '⏳ Se validează autorizarea...';
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        if (accessIntro) accessIntro.style.display = 'none';
        accessForm.style.display = 'none';
        if (accessSuccessBox) accessSuccessBox.style.display = 'block';
        if (toast) {
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 3500);
        }
      }, 750);
    });
  }

  // 9. INTERACTIVE 3D BLUEPRINT & ENGINEERING WORKBENCH
  const canvas3D = document.getElementById('atelier-3d-canvas');
  if (canvas3D) {
    const ctx = canvas3D.getContext('2d');
    let width = canvas3D.width = canvas3D.parentElement.clientWidth || 1000;
    let height = canvas3D.height = 480;

    window.addEventListener('resize', () => {
      if (canvas3D.parentElement) {
        width = canvas3D.width = canvas3D.parentElement.clientWidth;
        height = canvas3D.height = canvas3D.parentElement.clientHeight || 480;
      }
    });

    let rotX = 0.35;
    let rotY = 0.75;
    let zoom = 1.35;
    let currentModel = 'planor';
    let currentMode = 'wire';
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let autoRotate = true;

    const hudMode = document.getElementById('hud-mode-text');
    const hudModel = document.getElementById('hud-model-text');
    const hudRot = document.getElementById('hud-rot-text');

    const modelNames = {
      planor: 'Planor Faza II (Balsa & Tei)',
      fokker: 'Fokker D.VII Biplan Structural',
      stealth: 'Mach-4 Supersonic Stealth',
      cruiser: 'Crucișător Naval Autonom'
    };

    const modeNames = {
      wire: 'WIREFRAME SCHELET',
      solid: 'FUZELAJ PLACAT / SOLID',
      xray: 'X-RAY & LINII DE COTĂ'
    };

    function getModelGeometry(type) {
      const vertices = [];
      const edges = [];
      const faces = [];

      if (type === 'planor') {
        vertices.push([0, 0, -180]); // nose
        vertices.push([0, 15, -60]);  // cabin top
        vertices.push([0, -12, -60]); // cabin bot
        vertices.push([0, 6, 120]);   // tail boom top
        vertices.push([0, -6, 120]);  // tail boom bot
        vertices.push([0, 0, 180]);   // tail end

        edges.push([0, 1], [1, 3], [3, 5], [0, 2], [2, 4], [4, 5], [1, 2], [3, 4]);

        const wingSpan = 220;
        const chord = 45;
        const ribCount = 8;
        for (let i = 0; i <= ribCount; i++) {
          const t = i / ribCount;
          const x = -wingSpan + t * (2 * wingSpan);
          const dihedral = Math.abs(x) * 0.08;
          const y = -10 - dihedral;
          const zLead = -20;
          const zTrail = zLead + chord;

          const idx = vertices.length;
          vertices.push([x, y, zLead]);
          vertices.push([x, y + 5, zLead + chord * 0.3]);
          vertices.push([x, y, zTrail]);

          edges.push([idx, idx + 1], [idx + 1, idx + 2]);
          if (i > 0) {
            edges.push([idx - 3, idx]);
            edges.push([idx - 2, idx + 1]);
            edges.push([idx - 1, idx + 2]);
            faces.push([idx - 3, idx, idx + 2, idx - 1]);
          }
        }

        const stabSpan = 60;
        const sZ = 160;
        vertices.push([-stabSpan, -2, sZ], [stabSpan, -2, sZ], [-stabSpan, -2, sZ + 25], [stabSpan, -2, sZ + 25]);
        const sIdx = vertices.length - 4;
        edges.push([sIdx, sIdx + 1], [sIdx + 2, sIdx + 3], [sIdx, sIdx + 2], [sIdx + 1, sIdx + 3]);
        faces.push([sIdx, sIdx + 1, sIdx + 3, sIdx + 2]);

        vertices.push([0, -28, sZ + 15]);
        const rIdx = vertices.length - 1;
        edges.push([3, rIdx], [5, rIdx]);

      } else if (type === 'fokker') {
        const span = 170;
        vertices.push([-span, -35, -20], [span, -35, -20], [span, -35, 25], [-span, -35, 25]);
        vertices.push([-span * 0.85, 5, -15], [span * 0.85, 5, -15], [span * 0.85, 5, 20], [-span * 0.85, 5, 20]);

        edges.push([0, 1], [1, 2], [2, 3], [3, 0]);
        edges.push([4, 5], [5, 6], [6, 7], [7, 4]);
        faces.push([0, 1, 2, 3], [4, 5, 6, 7]);

        edges.push([0, 4], [1, 5], [2, 6], [3, 7]);

        vertices.push([0, 0, -110]);
        vertices.push([-18, -12, 110], [18, -12, 110], [18, 12, 110], [-18, 12, 110]);
        edges.push([8, 0], [8, 1], [8, 4], [8, 5]);
        edges.push([8, 9], [8, 10], [8, 11], [8, 12]);
        edges.push([9, 10], [10, 11], [11, 12], [12, 9]);

        vertices.push([-30, 35, -10], [30, 35, -10]);
        edges.push([13, 14], [4, 13], [5, 14]);

      } else if (type === 'stealth') {
        vertices.push([0, -5, -160]);
        vertices.push([-140, 2, 80]);
        vertices.push([-50, 0, 140]);
        vertices.push([0, -10, 120]);
        vertices.push([50, 0, 140]);
        vertices.push([140, 2, 80]);
        vertices.push([0, 12, 0]);

        edges.push([0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]);
        edges.push([0, 6], [6, 3], [6, 1], [6, 5]);
        faces.push([0, 1, 2, 3], [0, 5, 4, 3]);

        vertices.push([-35, -35, 110], [35, -35, 110]);
        edges.push([2, 7], [3, 7], [4, 8], [3, 8]);

      } else if (type === 'cruiser') {
        vertices.push([0, 5, -170]);
        vertices.push([-35, -10, -80], [35, -10, -80]);
        vertices.push([-40, -10, 140], [40, -10, 140]);
        vertices.push([0, 18, 150]);
        vertices.push([0, 18, -100]);

        edges.push([0, 1], [0, 2], [1, 2], [1, 3], [2, 4], [3, 4]);
        edges.push([0, 6], [6, 5], [3, 5], [4, 5], [1, 6], [2, 6]);
        faces.push([0, 1, 3, 5], [0, 2, 4, 5]);

        vertices.push([-18, -40, -10], [18, -40, -10], [18, -40, 50], [-18, -40, 50]);
        edges.push([7, 8], [8, 9], [9, 10], [10, 7]);
        edges.push([1, 7], [2, 8], [4, 9], [3, 10]);
      }

      return { vertices, edges, faces };
    }

    const wrapper = document.getElementById('canvas-3d-wrapper');
    if (wrapper) {
      wrapper.addEventListener('mousedown', (e) => {
        isDragging = true;
        autoRotate = false;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        wrapper.style.cursor = 'grabbing';
      });

      window.addEventListener('mouseup', () => {
        isDragging = false;
        if (wrapper) wrapper.style.cursor = 'grab';
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - lastMouseX;
        const dy = e.clientY - lastMouseY;
        rotY += dx * 0.008;
        rotX = Math.max(-1.4, Math.min(1.4, rotX + dy * 0.008));
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      });

      wrapper.addEventListener('wheel', (e) => {
        e.preventDefault();
        zoom = Math.max(0.6, Math.min(2.5, zoom - e.deltaY * 0.0015));
      }, { passive: false });

      wrapper.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          isDragging = true;
          autoRotate = false;
          lastMouseX = e.touches[0].clientX;
          lastMouseY = e.touches[0].clientY;
        }
      });

      window.addEventListener('touchend', () => { isDragging = false; });
      window.addEventListener('touchmove', (e) => {
        if (!isDragging || e.touches.length !== 1) return;
        const dx = e.touches[0].clientX - lastMouseX;
        const dy = e.touches[0].clientY - lastMouseY;
        rotY += dx * 0.01;
        rotX = Math.max(-1.4, Math.min(1.4, rotX + dy * 0.01));
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
      });
    }

    document.querySelectorAll('.btn-3d-model').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.btn-3d-model').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentModel = btn.getAttribute('data-model');
        if (hudModel) hudModel.textContent = modelNames[currentModel] || currentModel;
      });
    });

    const btnWire = document.getElementById('btn-mode-wire');
    const btnSolid = document.getElementById('btn-mode-solid');
    const btnXray = document.getElementById('btn-mode-xray');
    const btnReset = document.getElementById('btn-reset-3d');

    function setMode(mode, activeBtn) {
      currentMode = mode;
      [btnWire, btnSolid, btnXray].forEach(b => { if (b) b.classList.remove('active'); });
      if (activeBtn) activeBtn.classList.add('active');
      if (hudMode) hudMode.textContent = modeNames[mode];
    }

    if (btnWire) btnWire.addEventListener('click', () => setMode('wire', btnWire));
    if (btnSolid) btnSolid.addEventListener('click', () => setMode('solid', btnSolid));
    if (btnXray) btnXray.addEventListener('click', () => setMode('xray', btnXray));
    if (btnReset) btnReset.addEventListener('click', () => {
      rotX = 0.35;
      rotY = 0.75;
      zoom = 1.35;
      autoRotate = true;
    });

    function render3D() {
      if (autoRotate && !isDragging) {
        rotY += 0.005;
      }

      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(0, 229, 255, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      if (hudRot) {
        const degX = Math.round(rotX * 180 / Math.PI);
        const degY = Math.round((rotY % (Math.PI * 2)) * 180 / Math.PI);
        hudRot.textContent = `X: ${degX}° | Y: ${degY}° | ZOOM: ${zoom.toFixed(2)}x`;
      }

      const { vertices, edges, faces } = getModelGeometry(currentModel);

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      const projected = vertices.map(([x, y, z]) => {
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        const fov = 450;
        const scale = (fov / (fov + z2)) * zoom;
        const px = width / 2 + x1 * scale;
        const py = height / 2 + y2 * scale;
        return { px, py, z: z2, scale };
      });

      if (currentMode === 'solid') {
        faces.forEach(face => {
          if (face.length >= 3) {
            ctx.beginPath();
            ctx.moveTo(projected[face[0]].px, projected[face[0]].py);
            for (let i = 1; i < face.length; i++) {
              ctx.lineTo(projected[face[i]].px, projected[face[i]].py);
            }
            ctx.closePath();
            ctx.fillStyle = 'rgba(0, 229, 255, 0.12)';
            ctx.fill();
            ctx.strokeStyle = 'rgba(0, 229, 255, 0.45)';
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        });
      }

      ctx.lineWidth = currentMode === 'xray' ? 1.8 : 1.4;
      edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        if (p1 && p2) {
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          if (currentMode === 'xray') {
            ctx.strokeStyle = 'rgba(245, 158, 11, 0.8)';
          } else {
            ctx.strokeStyle = 'rgba(0, 229, 255, 0.85)';
          }
          ctx.stroke();
        }
      });

      if (currentMode === 'xray') {
        projected.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.px, p.py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = '#00e5ff';
          ctx.fill();
        });

        const cg = projected[0];
        if (cg) {
          ctx.fillStyle = '#10b981';
          ctx.font = '10px JetBrains Mono, monospace';
          ctx.fillText(`⌖ Centru Greutate (CG)`, cg.px + 10, cg.py - 10);
        }
      }

      requestAnimationFrame(render3D);
    }

    render3D();
  }

  // 10. 3D CARD PERSPECTIVE TILT
  const tiltCards = document.querySelectorAll('.blueprint-item, .bento-item');
  tiltCards.forEach(card => {
    card.classList.add('tilt-card');
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((centerY - y) / centerY) * 7;
      const rotateY = ((x - centerX) / centerX) * 7;
      card.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
});
