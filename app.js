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
});
