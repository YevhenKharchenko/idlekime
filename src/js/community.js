import Swiper from 'swiper';
import 'swiper/css/bundle';

const communityLeftArrow = document.getElementById('communityLeftArrow');
const communityRightArrow = document.getElementById('communityRightArrow');

let communitySwiper;

communitySwiper = new Swiper('.community-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  centeredSlides: false,
  initialSlide: 0,
  spaceBetween: 24,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  on: {
    init: () => {
      document
        .querySelector('.community-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updateCommunityArrows(this);
    },
  },
});

updateCommunityArrows(communitySwiper);

function updateCommunityArrows(swiper) {
  communityLeftArrow.disabled = swiper.isBeginning;
  communityRightArrow.disabled = swiper.isEnd;
}

communityLeftArrow.addEventListener('click', () => {
  communitySwiper.slidePrev();
});

communityRightArrow.addEventListener('click', () => {
  communitySwiper.slideNext();
});
