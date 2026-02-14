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
const player = new Plyr('#audio-player', {
  controls: [
    'play',
    'progress',
    'current-time',
    'mute',
    'volume'
  ]
});

});
