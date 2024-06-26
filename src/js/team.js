import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import team from './team.json';
import 'swiper/css/navigation';
import 'swiper/css';
const swiperParams = {
  modules: [Navigation],
  breakpoints: {
    375: { slidesPerView: 2, spaceBetween: 35 },
    768: { slidesPerView: 3, spaceBetween: 50 },
    1000: { slidesPerView: 4, spaceBetween: 50 },
    1440: { slidesPerView: 6, spaceBetween: 50 },
  },
  navigation: {
    nextEl: '.swiper-button-next-section-team',
    prevEl: '.swiper-button-prev-section-team',
  },
  slidesOffsetAfter: 25,
  slidesOffsetBefore: 10,
};
import icon from '../img/symbol.svg';

const swiperTeamGallery = photoId => {
  const elId = photoId;
  const swiper = new Swiper(`[data-id="${elId}"]`, swiperParams);
  return swiper;
};

swiperTeamGallery('photo-team');

const swiperWrapper = document.querySelector('.swiper-wrapper');
const developerSection = document.querySelector('.developer-section');
const closeModal = document.querySelector('.icon-close-section-team');
const openModal = document.querySelector('.team-button');

function toggleModal() {
  const isMenuOpen = developerSection.classList.toggle('is-open-section-team');
  document.body.style.overflow = isMenuOpen ? 'hidden' : '';
}

closeModal.addEventListener('click', toggleModal);
openModal.addEventListener('click', toggleModal);

const createMrkpSwiper = () => {
  const markup = team
    .map(({ small, large, userNameEn, developer, url, userNameUa }) => {
      return `<div class="swiper-slide">
      <div class="developer-container">
  <div class="container-img">
    <div class="box-img-team">
      <div class="icon-linkedin-team">
      <a href="${url}"  target="_blank"
        >
        <svg class="linkedin" width="16" height="16">
          <use href=${icon}#icon-linkedin></use>
        </svg>
        </a>
      </div>
      <a href="${url}" target="_blank"
        >
<picture class="qwe">
  <source
    media="(min-width: 768px)"
    srcset="team/${small} 1x, team/${large} 2x"
  />
  <source
    media="(max-width: 767.98px)"
    srcset="team/${small} 1x, team/${large} 2x"
  />
  <img
    class="dev-photo"
    src="team/${small}"
    alt="${userNameEn}"
  />
</picture>
        </a>
    </div>
  </div>
  <h3 class="dev-name" data-ua="${userNameUa}" data-en="${userNameEn}">${userNameEn}</h3>
  <p class="dev-desription" >${developer}</p>
  </div>
</div>`;
    })
    .join('');
  return markup;
};

swiperWrapper.innerHTML = createMrkpSwiper();
