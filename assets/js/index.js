// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

// Import CSS
import "../css/index.css";

// Import JS
import menuOpen from "./menuOpen";
import infiniteScroll from "./infiniteScroll";


// Call the menu and infinite scroll functions
menuOpen();
infiniteScroll();

document.addEventListener('DOMContentLoaded', () => {
  const audioElement = document.querySelector('#audio-player');
  const playlistElement = document.querySelector('.playlist');

  if (!audioElement || !playlistElement) return;

  const player = new Plyr(audioElement, {
    controls: ['play', 'progress', 'current-time', 'mute', 'volume']
  });

  fetch('/assets/data/playlist.json')
    .then(response => response.json())
    .then(tracks => {
      tracks.forEach((track, index) => {
        const li = document.createElement('li');
        li.textContent = track.title;
        li.dataset.src = track.src;

        if (index === 0) {
          li.classList.add('active');
          player.source = {
            type: 'audio',
            sources: [{ src: track.src, type: 'audio/mp3' }]
          };
        }

        playlistElement.appendChild(li);
      });

      playlistElement.addEventListener('click', (e) => {
        const item = e.target.closest('li');
        if (!item) return;

        const src = item.dataset.src;

        player.source = {
          type: 'audio',
          sources: [{ src: src, type: 'audio/mp3' }]
        };

        document.querySelectorAll('.playlist li')
          .forEach(li => li.classList.remove('active'));

        item.classList.add('active');
        player.play();
      });
    });
});


  const playlistItems = document.querySelectorAll('.playlist li');

  playlistItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-src');

      player.source = {
        type: 'audio',
        sources: [
          {
            src: src,
            type: 'audio/mp3'
          }
        ]
      };

      playlistItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      player.play();
    });
  });
});
 
