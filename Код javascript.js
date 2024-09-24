// scripts.js

document.addEventListener('DOMContentLoaded', function () {
  // Меню
  var menuToggle = document.querySelector('.menu-toggle');
  var menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', function () {
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  });

  // Відео
  const video = document.getElementById('video');
  const thumbnail = document.getElementById('video-thumbnail');
  const playButton = document.getElementById('play-button');

  playButton.addEventListener('click', function() {
    thumbnail.style.display = 'none';
    video.style.display = 'block';
    setTimeout(() => {
      video.play();
    }, 3000); // Затримка 3 секунди перед відтворенням відео
  });

  // Сховати відео за замовчуванням
  video.style.display = 'none';
});

// Функція для перемикання відображення посилань
function toggleLinks(id) {
  var links = document.getElementById(id);
  if (links.style.display === "none") {
    links.style.display = "block";
  } else {
    links.style.display = "none";
  }
}