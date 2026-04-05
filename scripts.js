/* ============================================================
   SCRIPTS.JS — 2026 한화시스템 ICT부문 AX직무 집중 채용
   ============================================================ */

(function () {
  'use strict';

  /* ===== GSAP SETUP ===== */
  gsap.registerPlugin(ScrollTrigger);

  /* ===== INTERVIEW DATA ===== */
  const ivData = [
    {
      initial: 'K',
      dept:  'DX담당 · AI팀',
      name:  '김○○',
      rank:  '선임',
      role:  'AI 엔지니어 · LLM 솔루션 개발',
      qa: [
        {
          q: '어떤 업무를 담당하고 계신가요?',
          a: 'LLM 기반의 기업형 AI 어시스턴트와 RAG 파이프라인을 설계·개발하고 있습니다. 고객사의 내부 데이터를 AI가 이해할 수 있는 형태로 변환하고, 실제 업무 자동화까지 연결하는 end-to-end 솔루션을 구현합니다.'
        },
        {
          q: '한화시스템 ICT부문만의 강점은 무엇인가요?',
          a: '실제 대형 고객사 프로젝트를 통해 기술을 검증하고 성장할 수 있다는 점이 가장 큰 강점입니다. 이론이 아니라 현장에서 AX 기술이 비즈니스 난제를 해결하는 과정을 직접 경험할 수 있습니다.'
        },
        {
          q: '입사를 고민하는 분들께 한 마디 부탁드립니다.',
          a: 'AI 기술로 실제 문제를 해결하고 싶은 분이라면 이보다 좋은 환경은 없습니다. 성장할 준비가 되어 있다면 한화시스템 ICT부문이 그 무대가 되어 드릴 것입니다.'
        }
      ]
    },
    {
      initial: 'L',
      dept:  'DX담당 · 데이터플랫폼팀',
      name:  '이○○',
      rank:  '책임',
      role:  '데이터 엔지니어 · 데이터플랫폼 운영',
      qa: [
        {
          q: '현재 주로 어떤 작업을 하시나요?',
          a: '대규모 데이터 파이프라인의 설계·구축과 데이터 레이크하우스 운영을 담당합니다. Spark, Kafka, Airflow 등을 활용해 실시간·배치 데이터 처리 환경을 구성하고 안정적으로 운영합니다.'
        },
        {
          q: '이 일을 하며 가장 보람찼던 순간은 언제인가요?',
          a: '데이터 파이프라인을 개선했더니 고객사 임원의 의사결정 속도가 이틀에서 5분으로 줄었다는 피드백을 받았을 때입니다. 데이터가 실제 비즈니스를 바꾸는 순간, 그게 진짜 AX라고 느꼈습니다.'
        },
        {
          q: '어떤 분이 함께하면 좋을 것 같나요?',
          a: '데이터 그 자체보다 "이 데이터가 어떤 가치를 만드는가"를 끊임없이 고민하는 분과 함께하고 싶습니다. 기술 스택은 배울 수 있지만 문제 해결 마인드셋은 여러분이 갖고 오셔야 합니다.'
        }
      ]
    },
    {
      initial: 'P',
      dept:  'DX담당 · 클라우드팀',
      name:  '박○○',
      rank:  '수석',
      role:  '클라우드 아키텍트 · MSA 설계',
      qa: [
        {
          q: '담당 업무를 소개해 주세요.',
          a: '고객사의 온프레미스 시스템을 클라우드 네이티브 환경으로 전환하는 아키텍처를 설계합니다. Multi-cloud 전략 수립부터 MSA 마이그레이션, 비용 최적화까지 전 영역을 아우릅니다.'
        },
        {
          q: '한화시스템 ICT부문에서 어떻게 성장하셨나요?',
          a: '입사 후 5년 만에 클라우드 아키텍트로 성장했습니다. 다양한 산업군의 대형 프로젝트를 경험하면서 기술 역량뿐 아니라 고객과 소통하고 문제를 프레이밍하는 능력도 키울 수 있었습니다.'
        },
        {
          q: '앞으로의 목표가 있다면요?',
          a: '클라우드와 AI가 만나는 영역, 즉 AI 인프라 최적화와 MLOps 아키텍처에서 국내 최고의 전문가가 되는 것이 목표입니다. 한화시스템은 그 꿈을 이룰 수 있는 최적의 환경이라고 확신합니다.'
        }
      ]
    },
    {
      initial: 'C',
      dept:  'DX담당 · DX컨설팅팀',
      name:  '최○○',
      rank:  '선임',
      role:  'DX 컨설턴트 · AX 전략 수립',
      qa: [
        {
          q: 'DX 컨설턴트는 어떤 일을 하나요?',
          a: '고객사의 현황을 진단하고 AX 전략을 수립한 뒤, 실제 구현까지 함께 이끕니다. 단순한 전략 보고서가 아니라 기술팀과 협력해 실행 가능한 로드맵을 만드는 것이 핵심입니다.'
        },
        {
          q: '컨설팅과 IT 기술이 결합된 역할의 매력은 무엇인가요?',
          a: '"왜"를 고민하는 컨설팅과 "어떻게"를 구현하는 기술이 만나는 지점이 바로 DX컨설팅팀입니다. 전략부터 구현까지 고객의 AX 여정 전체를 주도할 수 있다는 것이 가장 큰 매력입니다.'
        },
        {
          q: '이 분야를 희망하는 분들께 조언 부탁드립니다.',
          a: '기술과 비즈니스 양쪽 모두에 호기심이 있는 분이라면 강력히 추천합니다. 처음에는 어색하게 느껴질 수 있지만, 두 언어를 동시에 구사하게 되는 순간 세상이 달라 보입니다.'
        }
      ]
    },
    {
      initial: 'J',
      dept:  'DX담당 · 보안팀',
      name:  '정○○',
      rank:  '책임',
      role:  '보안 전문가 · 정보보안 체계 구축',
      qa: [
        {
          q: '보안팀의 역할을 설명해 주세요.',
          a: 'AX 솔루션의 설계 단계부터 보안을 내재화하는 "Security by Design"을 실현합니다. 취약점 분석, 침투 테스트, 보안 거버넌스 체계 구축까지 폭넓게 담당합니다.'
        },
        {
          q: 'ICT부문에서 보안의 중요성은 어느 정도인가요?',
          a: 'AX 시대에 데이터와 AI 모델 자체가 핵심 자산이 되었습니다. 보안은 이제 선택이 아닌 AX의 근본 요건입니다. 신뢰할 수 없는 시스템 위에서 고객의 디지털 혁신을 논할 수 없습니다.'
        },
        {
          q: '함께 일하고 싶은 동료는 어떤 분인가요?',
          a: '보안을 "제약"이 아닌 "신뢰 구축"으로 바라보는 분과 함께하고 싶습니다. 공격자의 시각으로 생각하고, 방어자의 자세로 행동하는 호기심 많은 분을 환영합니다.'
        }
      ]
    }
  ];

  /* ======================================================
     1. NAVBAR
  ====================================================== */
  const navbar   = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');

  // Scroll → scrolled class
  let lastScrollY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScrollY = y;
  }, { passive: true });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
  });

  // Close nav when a link is clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close nav when clicking outside
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  /* ======================================================
     2. HERO ANIMATIONS (GSAP timeline)
  ====================================================== */
  function initHero() {
    // Words 3D fly-in
    const words = document.querySelectorAll('.hw');
    gsap.set(words, { opacity: 0, y: 50, rotateX: -35, transformPerspective: 1000 });
    words.forEach((w, i) => {
      gsap.to(w, {
        opacity: 1, y: 0, rotateX: 0,
        duration: 1,
        delay: 0.45 + i * 0.15,
        ease: 'power4.out'
      });
    });

    // Hero 3D bg word parallax on scroll
    const bg3d = document.getElementById('hero3dWord');
    if (bg3d) {
      gsap.to(bg3d, {
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5
        },
        rotateY: 30,
        rotateX: -12,
        scale: 0.7,
        opacity: 0,
        y: -80
      });
    }

    // Hero content parallax
    gsap.to('.hero-content', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: -60,
      opacity: 0.3
    });

    // Dot grid subtle movement
    gsap.to('.hero-dot-grid', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 2
      },
      y: 80,
      opacity: 0
    });
  }

  /* ======================================================
     3. GSAP SCROLL TRIGGER ANIMATIONS
  ====================================================== */
  function initScrollAnimations() {

    // Generic helper: animate a selector with ScrollTrigger
    function staggerReveal(selector, xFrom, yFrom, staggerAmt) {
      const els = document.querySelectorAll(selector);
      if (!els.length) return;
      els.forEach(el => {
        const delay = parseFloat(el.dataset.delay || '0');
        gsap.fromTo(el,
          { opacity: 0, x: xFrom, y: yFrom },
          {
            opacity: 1, x: 0, y: 0,
            duration: 0.9,
            delay: delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 86%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }

    staggerReveal('.gs-up',    0,  44, 0.12);
    staggerReveal('.gs-left', -44,  0, 0.12);
    staggerReveal('.gs-right', 44,  0, 0.12);
    staggerReveal('.gs-fade',   0,  0, 0.1);

    // ---- Intro brand name character split ----
    const brandName = document.querySelector('.brand-name');
    if (brandName) {
      const text = brandName.textContent;
      brandName.innerHTML = text.split('').map(c =>
        c === ' ' ? '<span>&nbsp;</span>' : `<span class="char">${c}</span>`
      ).join('');
      const chars = brandName.querySelectorAll('.char, span');
      gsap.set(chars, { opacity: 0, y: 30, rotateX: -40, transformPerspective: 600 });
      ScrollTrigger.create({
        trigger: brandName,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(chars, {
            opacity: 1, y: 0, rotateX: 0,
            duration: 0.6,
            stagger: 0.04,
            ease: 'back.out(1.5)'
          });
        }
      });
    }

    // ---- Table rows stagger ----
    const rows = document.querySelectorAll('.trow');
    rows.forEach((row, i) => {
      ScrollTrigger.create({
        trigger: row,
        start: 'top 88%',
        onEnter: () => {
          gsap.to(row, {
            opacity: 1,
            x: 0,
            duration: 0.55,
            delay: i * 0.08,
            ease: 'power3.out',
            onStart: () => row.classList.add('row-in')
          });
        }
      });
    });

    // ---- Section headings split ----
    document.querySelectorAll('.sec-heading').forEach(el => {
      gsap.fromTo(el,
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        {
          clipPath: 'inset(0 0% 0 0)',
          opacity: 1,
          duration: 1.1,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%'
          }
        }
      );
    });

    // ---- Process cards 3D stagger ----
    gsap.fromTo('.proc-card',
      { opacity: 0, y: 50, rotateY: -8, transformPerspective: 800 },
      {
        opacity: 1, y: 0, rotateY: 0,
        duration: 0.85,
        stagger: {
          each: 0.08,
          from: 'start'
        },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.process-grid',
          start: 'top 80%'
        }
      }
    );

    // ---- Benefits cards ----
    gsap.fromTo('.ben-card',
      { opacity: 0, y: 60, scale: 0.94 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.benefits-grid',
          start: 'top 78%'
        }
      }
    );

    // ---- Values cards directional ----
    ['gs-left','gs-right'].forEach(cls => {
      // Already handled by generic staggerReveal
    });

    // ---- CTA countdown section ----
    gsap.fromTo('.cd-num',
      { opacity: 0, y: 40, scale: 0.8 },
      {
        opacity: 1, y: 0, scale: 1,
        stagger: 0.08,
        duration: 0.7,
        ease: 'back.out(1.8)',
        scrollTrigger: {
          trigger: '.countdown',
          start: 'top 82%'
        }
      }
    );

    // ---- Marquee speed control (slow on mobile) ----
    const mq  = window.matchMedia('(max-width: 600px)');
    const trk = document.querySelector('.marquee-track');
    if (trk && mq.matches) {
      trk.style.animationDuration = '36s';
    }

    // ---- Bonus banner number pop ----
    const bonusNum = document.querySelector('.bonus-num');
    if (bonusNum) {
      gsap.fromTo(bonusNum,
        { opacity: 0, scale: 0.6, y: 20 },
        {
          opacity: 1, scale: 1, y: 0,
          duration: 0.85,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: { trigger: '.bonus-banner', start: 'top 80%' }
        }
      );
    }

    // ---- Interview cards fly in ----
    gsap.fromTo('.iv-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.carousel-wrap',
          start: 'top 82%'
        }
      }
    );

    // ---- Values icon bounce ----
    gsap.fromTo('.val-icon-bg',
      { scale: 0, opacity: 0 },
      {
        scale: 1, opacity: 1,
        stagger: 0.12,
        duration: 0.75,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: '.values-grid',
          start: 'top 80%'
        }
      }
    );

    // ---- Footer slide in ----
    gsap.fromTo('.footer',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.footer', start: 'top 95%' }
      }
    );

    // ---- Text highlight on scroll (intro body) ----
    document.querySelectorAll('.intro-body').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0,
          duration: 0.85,
          delay: i * 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 84%'
          }
        }
      );
    });

    // ---- Dotted bg parallax in CTA ----
    gsap.to('.cta-dots', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2
      },
      backgroundPositionY: '40px'
    });
  }

  /* ======================================================
     4. CAROUSEL
  ====================================================== */
  function initCarousel() {
    const track    = document.getElementById('carouselTrack');
    const prevBtn  = document.getElementById('cPrev');
    const nextBtn  = document.getElementById('cNext');
    const dotsWrap = document.getElementById('cDots');
    const viewport = document.getElementById('carouselViewport');
    if (!track || !prevBtn || !nextBtn) return;

    const cards = Array.from(track.querySelectorAll('.iv-card'));
    const total = cards.length;
    let current = 0;

    function getVisible() {
      const w = window.innerWidth;
      if (w >= 960) return 3;
      if (w >= 600) return 2;
      return 1;
    }

    function buildDots() {
      dotsWrap.innerHTML = '';
      const vis = getVisible();
      const count = Math.ceil(total / vis);
      for (let i = 0; i < count; i++) {
        const btn = document.createElement('button');
        btn.className = 'c-dot' + (i === 0 ? ' active' : '');
        btn.setAttribute('aria-label', `슬라이드 ${i + 1}`);
        btn.dataset.slide = i;
        btn.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(btn);
      }
    }

    function updateDots() {
      const vis = getVisible();
      const idx = Math.floor(current / vis);
      dotsWrap.querySelectorAll('.c-dot').forEach((d, i) => {
        d.classList.toggle('active', i === idx);
      });
    }

    function updateCards() {
      const vis  = getVisible();
      const gap  = 24;
      const vpW  = viewport.offsetWidth;
      const cW   = (vpW - gap * (vis - 1)) / vis;

      cards.forEach(card => {
        card.style.width = cW + 'px';
        card.style.flexShrink = '0';
      });

      const offset = current * (cW + gap);
      track.style.transform = `translateX(-${offset}px)`;

      prevBtn.disabled = current === 0;
      nextBtn.disabled = current >= total - vis;
      prevBtn.style.opacity = current === 0 ? '0.35' : '1';
      nextBtn.style.opacity = current >= total - vis ? '0.35' : '1';
      updateDots();
    }

    function goTo(pageIndex) {
      const vis = getVisible();
      current = Math.min(pageIndex * vis, total - vis);
      updateCards();
    }

    prevBtn.addEventListener('click', () => {
      if (current > 0) { current--; updateCards(); }
    });
    nextBtn.addEventListener('click', () => {
      const vis = getVisible();
      if (current < total - vis) { current++; updateCards(); }
    });

    // Touch / swipe
    let touchStartX = 0;
    track.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        const vis = getVisible();
        if (diff > 0 && current < total - vis) { current++; updateCards(); }
        if (diff < 0 && current > 0)           { current--; updateCards(); }
      }
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        current = 0;
        buildDots();
        updateCards();
      }, 200);
    });

    buildDots();
    updateCards();
  }

  /* ======================================================
     5. MODAL
  ====================================================== */
  function initModal() {
    const backdrop = document.getElementById('modalBackdrop');
    const body     = document.getElementById('modalBody');
    const closeBtn = document.getElementById('modalClose');
    if (!backdrop || !body || !closeBtn) return;

    function openModal(id) {
      const d = ivData[id];
      if (!d) return;

      const qaHTML = d.qa.map(item => `
        <p class="m-q">${item.q}</p>
        <p class="m-a">${item.a}</p>
      `).join('<div class="m-divider"></div>');

      body.innerHTML = `
        <div class="m-dept">${d.dept}</div>
        <div class="m-avatar">${d.initial}</div>
        <div class="m-name">${d.name} <em>${d.rank}</em></div>
        <div class="m-role">${d.role}</div>
        <div class="m-divider"></div>
        ${qaHTML}
      `;

      backdrop.classList.add('open');
      backdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    function closeModal() {
      backdrop.classList.remove('open');
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    // Delegate iv-btn clicks
    document.addEventListener('click', e => {
      const btn = e.target.closest('.iv-btn');
      if (btn) {
        const id = parseInt(btn.dataset.iv, 10);
        openModal(id);
      }
      // Card click
      const card = e.target.closest('.iv-card');
      if (card && !e.target.closest('.iv-btn')) {
        const id = parseInt(card.dataset.iv, 10);
        openModal(id);
      }
    });

    closeBtn.addEventListener('click', closeModal);

    backdrop.addEventListener('click', e => {
      if (e.target === backdrop) closeModal();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && backdrop.classList.contains('open')) {
        closeModal();
      }
    });
  }

  /* ======================================================
     6. YOUTUBE EMBED
  ====================================================== */
  function initYoutube() {
    const player   = document.getElementById('ytPlayer');
    const playBtn  = document.getElementById('ytPlay');
    const thumb    = document.getElementById('ytThumb');
    const frameWrap = document.getElementById('ytFrameWrap');
    const frame    = document.getElementById('ytFrame');
    if (!playBtn || !frameWrap || !frame) return;

    const VIDEO_ID = 'LLSEWEpvAnA';

    function loadVideo() {
      frame.src = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;
      frameWrap.classList.remove('hidden');
      thumb.style.display = 'none';
      playBtn.style.display = 'none';
    }

    playBtn.addEventListener('click', loadVideo);
    // Also clicking the thumbnail area triggers play
    if (thumb) thumb.addEventListener('click', loadVideo);
  }

  /* ======================================================
     7. COUNTDOWN TIMER
  ====================================================== */
  function initCountdown() {
    const dEl = document.getElementById('cdDays');
    const hEl = document.getElementById('cdHours');
    const mEl = document.getElementById('cdMins');
    const sEl = document.getElementById('cdSecs');
    if (!dEl) return;

    // Target: 2026-05-24 23:59:59 KST
    const target = new Date('2026-05-24T23:59:59+09:00').getTime();

    function pad(n) { return String(Math.max(0, n)).padStart(2, '0'); }

    function flip(el, newVal) {
      if (el.textContent === pad(newVal)) return;
      // Quick flash effect
      el.style.transform = 'translateY(-6px)';
      el.style.opacity = '0';
      requestAnimationFrame(() => {
        el.textContent = pad(newVal);
        el.style.transition = 'none';
        setTimeout(() => {
          el.style.transition = 'transform 0.25s ease, opacity 0.25s ease';
          el.style.transform = 'translateY(0)';
          el.style.opacity = '1';
        }, 16);
      });
    }

    function tick() {
      const now  = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        dEl.textContent = hEl.textContent = mEl.textContent = sEl.textContent = '00';
        return;
      }

      const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs  = Math.floor((diff % (1000 * 60)) / 1000);

      flip(dEl, days);
      flip(hEl, hours);
      flip(mEl, mins);
      flip(sEl, secs);
    }

    tick();
    setInterval(tick, 1000);
  }

  /* ======================================================
     8. SMOOTH SCROLL (nav links)
  ====================================================== */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const id = link.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--nav-h'), 10) || 70;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ======================================================
     9. EXTRA SCROLL TEXT EFFECTS
  ====================================================== */
  function initTextEffects() {
    // Intro section — word-by-word reveal
    document.querySelectorAll('.intro-body').forEach(el => {
      const words = el.innerHTML.split(/(\s+)/).map(w =>
        w.trim() ? `<span class="wrd" style="display:inline-block;opacity:0;transform:translateY(12px)">${w}</span>` : w
      ).join('');
      el.innerHTML = words;

      const wEls = el.querySelectorAll('.wrd');
      gsap.to(wEls, {
        opacity: 1,
        y: 0,
        stagger: 0.025,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%'
        }
      });
    });

    // Section labels — letter spread
    document.querySelectorAll('.sec-label').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, letterSpacing: '0.5em' },
        {
          opacity: 1,
          letterSpacing: '0.18em',
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        }
      );
    });

    // Bonus badge pop
    const badge = document.querySelector('.bonus-badge');
    if (badge) {
      gsap.fromTo(badge,
        { opacity: 0, scale: 0.5, rotation: -8 },
        {
          opacity: 1, scale: 1, rotation: 0,
          duration: 0.75,
          ease: 'back.out(2)',
          scrollTrigger: { trigger: '.bonus-banner', start: 'top 80%' }
        }
      );
    }

    // Hero badge float
    gsap.to('#heroBadge', {
      y: -5,
      duration: 2,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: 2
    });

    // Floating CTA button
    gsap.to('.hero-cta', {
      y: -4,
      duration: 1.8,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: 2.5
    });
  }

  /* ======================================================
     10. ACTIVE NAV HIGHLIGHT (ScrollSpy)
  ====================================================== */
  function initScrollSpy() {
    const sections = ['intro','jobs','process','benefits','interview','values','cta'];
    const links = {};
    sections.forEach(id => {
      const el = document.querySelector(`.nav-link[href="#${id}"]`);
      if (el) links[id] = el;
    });

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.id;
        if (links[id]) {
          links[id].style.color = entry.isIntersecting ? 'var(--orange)' : '';
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px' });

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
  }

  /* ======================================================
     INIT — Wait for GSAP to be ready
  ====================================================== */
  function init() {
    initHero();
    initScrollAnimations();
    initTextEffects();
    initCarousel();
    initModal();
    initYoutube();
    initCountdown();
    initSmoothScroll();
    initScrollSpy();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
