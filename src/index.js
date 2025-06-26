// index.js

'use strict';

import "./styles.css";

import mobileVideo from './assets/background-mobile.mp4';
import desktopVideo from './assets/background-desktop.mp4';

function loadResponsiveVideo() {
  const video = document.querySelector('.video-background video');
  if(!video) return;

  const videoSource = document.createElement('source');
  
  if(window.matchMedia("(max-width: 768px)").matches) {
    videoSource.setAttribute('src', mobileVideo);
  } else {
    videoSource.setAttribute('src', desktopVideo);
  }

  videoSource.setAttribute('type', 'video/mp4');

  video.appendChild(videoSource)
  video.load();
  video.play();
}

// wait for doc to load
document.addEventListener('DOMContentLoaded', () => {

  // cache dom
  const hamburgerButton = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('nav');
  const initialLoad = document.getElementById('initialLoad');
  const header = document.querySelector('header');

  // add events if elements are present, on click toggle .is-active on $button and $nav
  if (hamburgerButton && nav) {

    hamburgerButton.addEventListener('click', () => {
      hamburgerButton.classList.toggle('is-active');
      nav.classList.toggle('is-active');
    });
  }

  initialLoad.classList.add('is-loaded');
  header.classList.add('is-loaded');
  loadResponsiveVideo();
});
