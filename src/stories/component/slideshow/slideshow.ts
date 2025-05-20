import './slideshow.scss';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export interface Props {
}

export const create = ({
}: Props) => {
  const tag = document.createElement('div');
  tag.innerHTML = `
  <div class="c-slideshow">
    <div class="c-slideshow__swiper swiper js-slideshow-swiper">
        <div class="c-slideshow__swiper-wrapper swiper-wrapper">
            <div class="c-slideshow__swiper-slide swiper-slide">
                <img src="https://placehold.jp/240x200.png" alt="" />
            </div>
            <div class="c-slideshow__swiper-slide swiper-slide">
                <img src="https://placehold.jp/240x200.png" alt="" />
            </div>
            <div class="c-slideshow__swiper-slide swiper-slide">
                <img src="https://placehold.jp/240x200.png" alt="" />
            </div>
            <div class="c-slideshow__swiper-slide swiper-slide">
                <img src="https://placehold.jp/240x200.png" alt="" />
            </div>
            <div class="c-slideshow__swiper-slide swiper-slide">
                <img src="https://placehold.jp/240x200.png" alt="" />
            </div>
            <div class="c-slideshow__swiper-slide swiper-slide">
                <img src="https://placehold.jp/240x200.png" alt="" />
            </div>
            <div class="c-slideshow__swiper-slide swiper-slide">
                <img src="https://placehold.jp/240x200.png" alt="" />
            </div>
        </div>
    </div>
  </div>
  `;

  const slideshowElements = tag.querySelectorAll('.js-slideshow-swiper');
  slideshowElements.forEach((element) => {
    setTimeout(() => {
      new Swiper(element, {
          modules: [Autoplay],
          loop: true,
          speed: 8000,
          allowTouchMove: false,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 10,
          autoplay: {
              delay: 0,
              disableOnInteraction: false,
          },
          breakpoints: {
              768: {
                  spaceBetween: 20,
              },
          },
      });
    }, 0);
  });

  return tag;
};