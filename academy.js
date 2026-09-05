/**
 * NOVA TECH MODELS - ACADEMY INTERACTION ENGINE
 * Handles Theme, Tech-Tree accordions, Aerodynamic Calculator & Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. SHARED THEME TOGGLE
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

  // 2. TECH-TREE ACCORDION
  const treePillars = document.querySelectorAll('.tree-pillar');
  treePillars.forEach(pillar => {
    const header = pillar.querySelector('.pillar-header');
    if (header) {
      header.addEventListener('click', () => {
        const isOpen = pillar.classList.contains('open');
        // If clicking an already open pillar, keep open or toggle
        pillar.classList.toggle('open');
        const grid = pillar.querySelector('.steps-grid');
        if (grid) {
          grid.style.display = pillar.classList.contains('open') ? 'grid' : 'none';
        }
      });
    }
  });

  // Default: Open the first two pillars (Basic & Mediu)
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

  // 3. LIGHTBOX MODAL
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

  // 4. AERODYNAMIC CALCULATOR
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

    const mass = parseFloat(massInput.value); // g
    const span = parseFloat(spanInput.value); // cm
    const chord = parseFloat(chordInput.value); // cm

    if (massVal) massVal.textContent = `${mass} g`;
    if (spanVal) spanVal.textContent = `${span} cm`;
    if (chordVal) chordVal.textContent = `${chord} cm`;

    // Suprafața alară = (Anvergura * Coarda) / 100 [dm²]
    const areaDm2 = (span * chord) / 100;
    // Încărcarea alară = Masa / Suprafață [g/dm²]
    const wingLoad = areaDm2 > 0 ? (mass / areaDm2) : 0;
    // Centraj optim = 28% - 33% din coardă (recomandare de bază 30%)
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
