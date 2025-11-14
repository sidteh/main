// Инициализируем все виджеты на странице
  document.querySelectorAll('.video-widget').forEach((widget) => {
    const previewWrap  = widget.querySelector('.video-preview');
    const previewVideo = widget.querySelector('.preview-video');
    const playBtn      = widget.querySelector('.btn-play');
    let   modalEl      = widget.querySelector('.modal');       // модалка этого виджета
    const modalVideo   = modalEl.querySelector('.modal-video');
    const closeBtn     = modalEl.querySelector('.btn-clouse');

    // Переносим модалку в <body>, чтобы избежать проблем со stacking context
    if (modalEl.parentElement !== document.body) {
      document.body.appendChild(modalEl);
    }

    // Тихий автозапуск превью
    (async () => {
      try { await previewVideo.play(); }
      catch { previewVideo.addEventListener('loadeddata', () => previewVideo.play().catch(()=>{}), { once:true }); }
    })();

    function openModal() {
      const t = previewVideo.currentTime || 0;
      modalEl.classList.add('open');
      modalEl.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      modalVideo.muted = false;
      try { modalVideo.currentTime = t; } catch(e) {}
      modalVideo.play().catch(()=>{});
      previewVideo.pause();
    }

    function closeModal() {
      modalEl.classList.remove('open');
      modalEl.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      modalVideo.pause();
      const backTime = modalVideo.currentTime || 0;
      try { previewVideo.currentTime = backTime; } catch(e) {}
      previewVideo.muted = true;
      previewVideo.play().catch(()=>{});
    }

    // Открытие модалки
    previewWrap.addEventListener('click', (e) => {
      if (e.target.classList.contains('muted-badge') || e.target.classList.contains('click-hint')) return;
      openModal();
    });
    if (playBtn) {
      playBtn.addEventListener('click', (e) => { e.stopPropagation(); openModal(); });
    }

    // Закрытие модалки
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modalEl.addEventListener('click', (e) => { if (e.target === modalEl) closeModal(); });

    // Esc — закрыть (несколько обработчиков не страшно, каждый следит за своей модалкой)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalEl.classList.contains('open')) closeModal();
    });

    // Блокируем контекстное меню
    [previewWrap, modalEl].forEach(el => el.addEventListener('contextmenu', (e) => e.preventDefault()));
  });
