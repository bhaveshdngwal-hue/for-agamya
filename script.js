/**
 * Luxury National Girlfriend Day Script
 * Tailored for Agamya
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Hide Preloader
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.display = 'none', 800);
  }, 1600);

  // 2. Custom Cursor Tracking
  const cursorDot = document.getElementById('cursor-dot');
  const cursorOutline = document.getElementById('cursor-outline');

  window.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    cursorDot.style.left = `${x}px`;
    cursorDot.style.top = `${y}px`;

    cursorOutline.animate({
      left: `${x}px`,
      top: `${y}px`
    }, { duration: 500, fill: "forwards" });
  });

  // 3. Light/Dark Theme Switch
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    themeToggle.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  });

  // 4. Particle Background Canvas
  const canvas = document.getElementById('ambient-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.speedY = (Math.random() - 0.5) * 0.8;
      this.opacity = Math.random() * 0.6 + 0.2;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
      ctx.fillStyle = `rgba(255, 105, 180, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < 50; i++) particles.push(new Particle());

  function renderParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(renderParticles);
  }
  renderParticles();

  // 5. Relationship Live Counter
  const startDate = new Date('2023-01-01T00:00:00');

  function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
  }
  setInterval(updateCounter, 1000);
  updateCounter();

  // 6. Typewriter Love Letter
  const letterText = "Every moment with you becomes a beautiful memory. Thank you for filling my life with happiness, laughter, and countless smiles. Happy National Girlfriend Day ❤️ I promise to stand beside you, support you, and cherish every little moment we create together. You are my favorite person, my biggest comfort, and one of the brightest parts of my life.";
  let letterIndex = 0;
  let typed = false;

  const envelope = document.getElementById('envelope');
  envelope.addEventListener('click', () => {
    if (!typed) {
      typed = true;
      function typeWriter() {
        if (letterIndex < letterText.length) {
          document.getElementById('typewriter-text').innerHTML += letterText.charAt(letterIndex);
          letterIndex++;
          setTimeout(typeWriter, 30);
        }
      }
      typeWriter();
    }
  });

  // 7. Automatic Rotating Flirty Pickup Lines
  const pickupLines = [
    "Are you Google? Because you've got everything I've been searching for.",
    "I don't believe in magic anymore... until I met you.",
    "You're my favorite notification.",
    "If hugs were stars, I'd give you the whole galaxy.",
    "I still smile every time I see your name.",
    "You're the reason ordinary days become unforgettable.",
    "Home isn't a place anymore—it's wherever you're with me."
  ];

  let lineIdx = 0;
  const pickupText = document.getElementById('pickup-text');

  setInterval(() => {
    lineIdx = (lineIdx + 1) % pickupLines.length;
    pickupText.style.opacity = '0';
    setTimeout(() => {
      pickupText.innerText = `"${pickupLines[lineIdx]}"`;
      pickupText.style.opacity = '1';
    }, 300);
  }, 5000);

  // 8. Gallery Lightbox Preview
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');

  document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    });
  });

  lightboxClose.addEventListener('click', () => lightbox.style.display = 'none');

  // 9. Surprise Fireworks Trigger
  const surpriseBtn = document.getElementById('surprise-btn');
  const fwCanvas = document.getElementById('fireworks-canvas');
  const fwCtx = fwCanvas.getContext('2d');

  function triggerFireworks() {
    fwCanvas.width = window.innerWidth;
    fwCanvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 0.5) * 12,
        color: `hsl(${Math.random() * 360}, 100%, 60%)`,
        alpha: 1
      });
    }

    function drawFireworks() {
      fwCtx.clearRect(0, 0, fwCanvas.width, fwCanvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.015;
        fwCtx.fillStyle = p.color;
        fwCtx.globalAlpha = Math.max(p.alpha, 0);
        fwCtx.beginPath();
        fwCtx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        fwCtx.fill();
      });

      if (particles.some(p => p.alpha > 0)) {
        requestAnimationFrame(drawFireworks);
      } else {
        fwCtx.clearRect(0, 0, fwCanvas.width, fwCanvas.height);
        alert("Agamya, thank you for making my world brighter every single day.");
      }
    }
    drawFireworks();
  }

  surpriseBtn.addEventListener('click', triggerFireworks);

  // 10. Hidden Secret Modal
  const secretModal = document.getElementById('secret-modal');
  const secretBtn = document.getElementById('secret-btn');
  const closeModal = document.querySelector('.close-modal');

  secretBtn.addEventListener('click', () => secretModal.style.display = 'flex');
  closeModal.addEventListener('click', () => secretModal.style.display = 'none');

  // 11. Scroll Reveal Animation
  const reveals = document.querySelectorAll('.scroll-reveal');
  function revealOnScroll() {
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // 12. Audio Player Logic
  const audio = document.getElementById('bg-music');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const musicToggle = document.getElementById('music-toggle');
  const volumeSlider = document.getElementById('volume-slider');

  function toggleAudio() {
    if (audio.paused) {
      audio.play();
      playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
      audio.pause();
      playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
  }

  musicToggle.addEventListener('click', toggleAudio);
  playPauseBtn.addEventListener('click', toggleAudio);
  volumeSlider.addEventListener('input', (e) => audio.volume = e.target.value);
});