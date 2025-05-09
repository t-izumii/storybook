import './breadcrumb.scss';

export interface Props {
}

export const create = ({
}: Props) => {
  const tag = document.createElement('div');
  tag.innerHTML = `
    <nav class="c-breadcrumb" aria-label="パンくずリスト">
      <ol class="c-breadcrumb__list">
        <li class="c-breadcrumb__item">
          <a href="/" class="c-breadcrumb__link">ホーム</a>
        </li>
        <li class="c-breadcrumb__item">
          <a href="/category" class="c-breadcrumb__link">カテゴリー</a>
        </li>
        <li class="c-breadcrumb__item">
          <span class="c-breadcrumb__text">現在のページ</span>
        </li>
      </ol>
    </nav>
  `;

  return tag;
};