document.addEventListener('DOMContentLoaded', function () {
  const tracks = [
    'https://fs.getcourse.ru/fileservice/file/download/a/59475/sc/15/h/6b6e2f1b985192b4874b81425ca19657.mp3'
  ];

  const audio = document.getElementById('gc-audio');
  let current = 0;

  function loadTrack(i, autoplay = true) {
    current = ((i % tracks.length) + tracks.length) % tracks.length;
    audio.src = tracks[current];

    if (autoplay) {
      audio.play().catch(() => {
        const resume = () => {
          audio.play().catch(()=>{});
          window.removeEventListener('click', resume);
          window.removeEventListener('touchstart', resume);
        };
        window.addEventListener('click', resume, { once: true });
        window.addEventListener('touchstart', resume, { once: true });
      });
    }
  }

  audio.addEventListener('ended', () => loadTrack(current + 1, true));

  loadTrack(0, true); // автостарт при загрузке
});
