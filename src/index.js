// index.js
'use strict';

import "./styles.css";
import mobileVideo from './assets/background-mobile.mp4';
import desktopVideo from './assets/background-desktop.mp4';

class PageLoader {
  constructor() {
  this.initialLoadScreen = document.getElementById('initialLoad');
  this.header = document.querySelector('header');
  }

  init() {
    if (this.initialLoadScreen) {
      this.initialLoadScreen.classList.add('is-loaded');
    }

    if (this.header) {
      this.header.classList.add('is-loaded');
    }
  }
}

class MobileMenu {
  constructor() {
    this.hamburgerButton = document.querySelector('.hamburger-menu');
    this.nav = document.querySelector('nav');
  }

  #toggle() {
    this.hamburgerButton.classList.toggle('is-active');
    this.nav.classList.toggle('is-active');
  }

  #bindEvents() {
    this.hamburgerButton.addEventListener('click', () => {
      this.#toggle();
    });
  }

  init() {
    if (this.hamburgerButton && this.nav) {
      this.#bindEvents();
    }
  }
}

class VideoLoader {
  constructor() {
    this.video = document.querySelector('.video-background video');
  }

  #loadAndPlay() {
    const videoSource = document.createElement('source');

    if(window.matchMedia("(max-width: 768px)").matches) {
      videoSource.setAttribute('src', mobileVideo);
    } else {
      videoSource.setAttribute('src', desktopVideo);
    }

    videoSource.type = 'video/mp4';

    this.video.appendChild(videoSource);
    this.video.load();
    this.video.play();
  }

  init() {
    if(this.video) {
      this.#loadAndPlay();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new PageLoader().init();
  new VideoLoader().init();
  new MobileMenu().init();
});
