import './modal.scss';

export interface Props {}

export const create = ({}: Props) => {
  const tag = document.createElement('div');
  tag.innerHTML = `
  <button class="js-modal-trigger" data-modal="1">モーダルを開く</button>
  <div class="c-modal js-modal" data-modal="1" hidden role="dialog">
      <div class="c-modal__overlay js-modal-overlay"></div>
      <div class="c-modal__content">
          <div class="c-modal__body">
              <h2 class="c-modal__title">モーダルタイトル</h2>
              <p class="c-modal__text">ここにモーダルのコンテンツが入ります。</p>
              <button class="js-modal-close">閉じる</button>
          </div>
      </div>
  </div>
  `;

  const modalTriggers = tag.querySelectorAll('.js-modal-trigger');
  const modals = tag.querySelectorAll('.js-modal');

  modalTriggers.forEach(function (modalTrigger) {
    modalTrigger.addEventListener('click', function (event) {
      const target = event.target;
      const dataModal = target.dataset.modal;
      const modal = document.querySelector('.js-modal[data-modal="' + dataModal + '"]');
      modal.style.display = 'block';
      trapFocus(modal);
    });
  });

  modals.forEach(function (modal) {
    modal.addEventListener('click', function (event) {
      const target = event.target;
      if (target.classList.contains('js-modal-close')) {
        modal.closest('.js-modal').style.display = 'none';
        document.activeElement.blur();
      } else if (target.classList.contains('js-modal-overlay')) {
        target.parentNode.style.display = 'none';
        document.activeElement.blur();
      }
    });
  });

  //フォーカストラップ
  function trapFocus(element) {
    const focusableEls = element.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
    );
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    const KEYCODE_TAB = 9;

    element.addEventListener('keydown', function (e) {
      const isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    });

    firstFocusableEl.focus();
  }

  return tag;
};
