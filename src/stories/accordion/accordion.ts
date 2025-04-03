import './accordion.scss';

export interface Props {}

export const create = ({}: Props) => {
  const tag = document.createElement('div');
  tag.innerHTML = `
  <div class="c-accordion">
    <button class="c-accordion__head js-accordion">
        タイトル
        <i class="c-accordion__icon"></i>
    </button>
    <div class="c-accordion__content" style="height: 0; overflow: hidden;">
        <div class="c-accordion__content-inner">
            <p>
              テキスト
            </p>
        </div>
    </div>
  </div>
    `;

  // アコーディオンの機能を初期化
  const accordionButtons = tag.querySelectorAll('.js-accordion');
  accordionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      button.classList.toggle('is-active');
      if (content.style.height === '0px' || content.style.height === '') {
        content.style.height = content.scrollHeight + 'px';
      } else {
        content.style.height = '0px';
      }
    });
  });

  // リサイズ時にアコーディオンの高さを再計算
  window.addEventListener('resize', () => {
    accordionButtons.forEach((button) => {
      const content = button.nextElementSibling;
      if (content.style.height !== '0px') {
        content.style.height = content.scrollHeight + 'px';
      }
    });
  });

  return tag;
};
