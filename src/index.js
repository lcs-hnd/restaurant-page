// index.js
'use strict';

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import "./styles.css";
import 'swiper/css';
import 'swiper/css/pagination';
import mobileVideo from './assets/background-mobile.mp4';
import desktopVideo from './assets/background-desktop.mp4';

//$ ------------ Page Fade-in ------------

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

//$ ------------ Mobile Menu Logic ------------

class MobileMenu {
  constructor() {
    this.hamburgerButton = document.querySelector('.hamburger-menu');
    this.nav = document.querySelector('nav');
  }

  //* ------ Class Toggle ------

  #toggle() {
    this.hamburgerButton.classList.toggle('is-active');
    this.nav.classList.toggle('is-active');
  }

  //* ------ Event Binder ------
  
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

//$ ------------ Background Video Logic ------------

class VideoLoader {
  constructor() {
    this.video = document.querySelector('.video-background video');
  }

  //* ------ Event Delegation ------

  #loadAndPlay() {
    //' create the source for video
    const videoSource = document.createElement('source');

    //' media query used to choose the correct `src` attribute
    if(window.matchMedia("(max-width: 768px)").matches) {
      videoSource.setAttribute('src', mobileVideo);
    } else {
      videoSource.setAttribute('src', desktopVideo);
    }

    videoSource.type = 'video/mp4';

    //' load and play
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

//$ ------------ Navigation Logic ------------

class navOptions {
  constructor() {
    //' cache DOM elements
    this.content = document.querySelector('#content');
    this.navWrapper = document.querySelector('.nav-wrapper');

    //' keeping track of the `activeOption`
    this.activeOption = null;

    //' innerHTML values with keys mappped to [data-option] on $nav $button
    this.contentMap = {
      menu: `
      <div class="menu-wrapper">
        <div class="menu-filmstrip">

          <div class="menu-starter">
            <span class=menu-title><span>Starters</span></span>
            <div class="menu-item">
              <span class="dish-name"><span>Edamame  7</span></span>
              <span class="dish-description"><span>Steamed young soybeans, lightly salted. A classic start.</span></span>
            </div>
            <div class="menu-item">
              <span class="dish-name"><span>Seaweed Salad  8</span></span>
              <span class="dish-description"><span>Wakame seaweed with a light sesame vinaigrette.</span></span>
            </div>
            <div class="menu-item">
              <span class="dish-name"><span>Spicy Tuna Crispy Rice  14</span></span>
              <span class="dish-description"><span>Crispy fried rice topped with spicy tuna, avocado, and a sweet soy glaze.</span></span>
            </div>
            <div class="menu-item">
              <span class="dish-name"><span>Pork Gyoza  10</span></span>
              <span class="dish-description"><span>Pan-fried dumplings served with a citrus-soy dipping sauce.</span></span>
            </div>
            <div class="menu-item">
              <span class="dish-name"><span>Agedashi Tofu  9</span></span>
              <span class="dish-description"><span>Lightly fried soft tofu served in a warm, savory dashi broth with grated daikon and scallions.</span></span>
            </div>
          </div>

          <div class="menu-starter">
            <span class="menu-title"><span>Nigiri & Sashimi</span></span>
            <div class="menu-item">
              <span class="dish-name"><span>Maguro (Bluefin Tuna)  16</span></span>
              <span class="dish-description"><span>Lean, deep red flesh with a clean, savory profile.</span></span>
            </div>
            <div class="menu-item">
              <span class="dish-name"><span>Ōtoro (Fatty Tuna Belly)  28</span></span>
              <span class="dish-description"><span>The most prized cut, exceptionally rich and meltingly tender.</span></span>
            </div>
            <div class="menu-item">
              <span class="dish-name"><span>Sake (King Salmon)  14</span></span>
              <span class="dish-description"><span>Vibrant orange, rich in oils with a buttery texture.</span></span>
            </div>
            <div class="menu-item">
              <span class="dish-name"><span>Unagi (Freshwater Eel)  15</span></span>
              <span class="dish-description"><span>Grilled and glazed with a sweet soy-based tare sauce.</span></span>
            </div>
            <div class="menu-item">
              <span class="dish-name"><span>Hotate (Hokkaido Scallop)  18</span></span>
              <span class="dish-description"><span>Plump, sweet, and succulent scallop from the cold waters of Hokkaido.</span></span>
            </div>
          </div>
          
          <div class="menu-starter">
            <span class="menu-title"><span>Signature Rolls</span></span>
            <div class="menu-item">
              <span class="dish-name"><span>The Yunai Dragon  26</span></span>
              <span class="dish-description"><span>Shrimp tempura and cucumber, topped with grilled unagi, avocado, and tobiko.</span></span>
            </div>
            <div class="menu-item">
              <span class="dish-name"><span>Kyoto Garden (V)  22</span></span>
              <span class="dish-description"><span>Asparagus, avocado, and yamagobo, wrapped in cucumber with a yuzu-miso sauce.</span></span>
            </div>
            <div class="menu-item">
              <span class="dish-name"><span>Ocean's Embrace  28</span></span>
              <span class="dish-description"><span>Spicy tuna and tempura flakes, topped with seared salmon, Ōtoro, and gold leaf.</span></span>
            </div>
            <div class="menu-item">
              <span class="dish-name"><span>Volcano Scallop  25</span></span>
              <span class="dish-description"><span>California roll topped with baked Hokkaido scallop in a creamy, spicy tobiko sauce.</span></span>
            </div>
            <div class="menu-item">
              <span class="dish-name"><span>Wagyu Truffle Roll  32</span></span>
              <span class="dish-description"><span>Torched A5 Wagyu beef over asparagus and crispy onion, finished with black truffle aioli.</span></span>
            </div>
          </div>


          <div class="menu-starter">
            <span class="menu-title"><span>From the Kitchen</span></span>
            <div class="menu-item">
              <span class="dish-name"><span>Miso Glazed Black Cod  42</span></span>
              <span class="dish-description"><span>Marinated for 72 hours in sweet miso, broiled to perfection. Served with pickled ginger root.</span></span>
            </div>
            <div class="menu-item">
              <span class="dish-name"><span>Duck Confit & Soba  38</span></span>
              <span class="dish-description"><span>Crispy duck leg served over chilled soba noodles with a rich dashi dipping sauce.</span></span>
            </div>
            <div class="menu-item">
              <span class="dish-name"><span>A5 Wagyu Ishiyaki  75</span></span>
              <span class="dish-description"><span>Thinly sliced Japanese A5 Wagyu, cooked tableside on a hot stone. Served with ponzu and sesame sauces.</span></span>
            </div>
            <div class="menu-item">
              <span class="dish-name"><span>Assorted Tempura  24</span></span>
              <span class="dish-description"><span>Two black tiger prawns and seasonal vegetables, lightly battered and fried. Served with a warm tentsuyu broth.</span></span>
            </div>
          </div>

          <div class="menu-starter">
            <span class="menu-title"><span>Drinks & Saké</span></span>
            <div class="menu-item">
              <span class="dish-name"><span>Dassai "45" (Junmai Daiginjo) 25/BTL</span></span>
              <span class="dish-description"><span>Smooth and fragrant with notes of crisp apple and white peach.</span></span>
            </div>
            <div class="menu-item">
              <span class="dish-name"><span>Kikusui (Junmai Ginjo) 18/BTL</span></span>
              <span class="dish-description"><span>A light, crisp, and dry saké with a refreshing finish.</span></span>
            </div>
            <div class="menu-item">
              <span class="dish-name"><span>Hakutsuru "Superior" (Junmai Ginjo) 14/BTL</span></span>
              <span class="dish-description"><span>Floral and fragrant, named for the elegant white crane.</span></span>
            </div>
            <div class="menu-item">
              <span class="dish-name"><span>Yuzu Highball 16</span></span>
              <span class="dish-description"><span>Suntory Toki Whisky, fresh yuzu juice, and sparkling water.</span></span>
            </div>
            <div class="menu-item">
              <span class="dish-name"><span>Matcha (Ceremonial Grade) 14</span></span>
              <span class="dish-description"><span>Prepared traditionally, offering a rich and umami-filled experience.</span></span>
            </div>
          </div>

        </div>
        <div class="menu-pagination"></div>
      </div>`,

      contact: `
      <div class="contact-wrapper">
        <span><span>Contact Us</span></span>
        <p><span>555-123-4567</span></p>
        <p><span>events@yunai.com</span></p>
      </div>`,

      location: `
      <div class="location-wrapper">
        <span><span>Our Location</span></h2>
        <p><span>123 Serenity Lane, Kyoto</span></p>
      </div>`
    }
  }

  //* ------ Swiper Handler  ------

  #initSwiper() {
    //' menu-wrapper becomes the main container
    const swiperContainer = this.content.querySelector('.menu-wrapper');

    if (swiperContainer) {
      new Swiper(swiperContainer, {
        modules: [Pagination],

        //' custom class names to reduce css changes
        wrapperClass: 'menu-filmstrip',
        slideClass: 'menu-starter',

        //' pagination dot placement
        pagination: {
          el: '.menu-pagination',
          clickable: true,
        },
      });
    }
  }

  //* ------ Click Handler  ------

  #handleOptionClick(option) {
    //' closes clicked option if active 
    if (this.activeOption === option) {
      this.#updateContent(null);
      return;
    }

    //' if anything else is active fade it out first
    if (this.activeOption !== null) {
      this.#updateContent(null);

      //' fades in new content after transition
      setTimeout(() => {
        this.#updateContent(option);        
      }, 400);

    //' if nothing is showing just fade in the content directly
    } else {
      setTimeout(() => {
        this.#updateContent(option);
      }, 200);
    }
  }

  //* ------ DOM/Animation Updates  ------

  #updateContent(option) {
    //' fade content out
    this.content.classList.add('is-fading');

    setTimeout(() => {
      //' set new content given an option
      if (option) {
        this.content.innerHTML = this.contentMap[option];

        //' fade content back in
        this.content.classList.remove('is-fading');
        this.activeOption = option;

        //' call swiper initializer
        this.#initSwiper();
        //' given nothing clear and keep it faded
      } else {
        this.content.innerHTML = '';
        this.activeOption = null;
      }
    }, 200); //' half the transition time used for a crossfade effect
  }

  //* ------ Event Delegation ------
  
  #bindEvents() {
    //' listen for click on `nav-wrapper`
    this.navWrapper.addEventListener('click', (event) => {
      const clickedButton = event.target.closest('button');

      //' return if click not on button $el
      if (!clickedButton) return;

      //' retrieve option from `data-option` attribute
      const option = clickedButton.dataset.option;
      this.#handleOptionClick(option);
    })
  }

  init() {
    if (this.navWrapper && this.content) {
      this.#bindEvents();
    }
  }
}

//$ ------------ Main DOMContent Loaded Listener ------------
document.addEventListener('DOMContentLoaded', () => {
  new PageLoader().init();
  new VideoLoader().init();
  new MobileMenu().init();
  new navOptions().init();
});