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
});
