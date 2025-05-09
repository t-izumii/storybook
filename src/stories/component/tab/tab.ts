import './tab.scss';

export interface Props {
}

export const create = ({
}: Props) => {
  const tag = document.createElement('div');
  tag.innerHTML = `
    <div class="c-tab js-tabs">
      <nav class="c-tab__buttons js-tab-buttons" role="tablist">
        <button class="c-tab__button js-tab-button is-active" role="tab" aria-selected="true">リスト1</button>
        <button class="c-tab__button js-tab-button" role="tab" aria-selected="false">リスト2</button>
        <button class="c-tab__button js-tab-button" role="tab" aria-selected="false">リスト3</button>
      </nav>
      <div class="c-tab__content js-tab-content">
        <div class="c-tab__item js-tab-item" role="tabpanel">コンテンツ1</div>
        <div class="c-tab__item js-tab-item" role="tabpanel" hidden>コンテンツ2</div>
        <div class="c-tab__item js-tab-item" role="tabpanel" hidden>コンテンツ3</div>
      </div>
    </div>
  `;

  // タブの機能を初期化
  const tabGroups = tag.querySelectorAll('.js-tabs');
  tabGroups.forEach((tabGroup) => {
    const tabButtons = tabGroup.querySelectorAll('.js-tab-button');
    const tabItems = tabGroup.querySelectorAll('.js-tab-item');

    tabButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        tabItems.forEach((item) => {
          item.setAttribute('hidden', '');
        });
        tabItems[index].removeAttribute('hidden');

        tabButtons.forEach((tabButton) => {
          tabButton.classList.remove('is-active');
          tabButton.setAttribute('aria-selected', 'false');
        });
        button.classList.add('is-active');
        button.setAttribute('aria-selected', 'true');
      });
    });
  });

  return tag;
};