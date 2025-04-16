import './fixedcenter.scss';

export interface Props {
}

export const create = ({
}: Props) => {
  const tag = document.createElement('div');
  tag.innerHTML = `
    <div style="height: 100vh; background: #ccc;"></div>
    <div class="fixed-container">
        <!-- 表示されるコンテンツ -->
        <div class="fixed-container__display-content">
          <div class="fixed-container__content-item active" data-index="1">表示コンテンツ 1</div>
          <div class="fixed-container__content-item" data-index="2">表示コンテンツ 2</div>
          <div class="fixed-container__content-item" data-index="3">表示コンテンツ 3</div>
        </div>
      
        <!-- 判定用セクションを JS で生成 -->
        <div class="fixed-container__spacer"></div>
        <div class="fixed-container__watchers-container"></div>
        <div class="fixed-container__spacer"></div>
      
        <!-- 中央ライン -->
        <div class="center-line"></div>
    </div>
    <div style="height: 100vh; background: #ccc;"></div>
  `;

  document.addEventListener("DOMContentLoaded", () => {
    const contentItems = document.querySelectorAll(".fixed-container__content-item");
    const watchersContainer = document.querySelector(".fixed-container__watchers-container");

    // 判定セクションを生成
    contentItems.forEach((item, i) => {
      const index = item.dataset.index;
      const div = document.createElement("div");
      div.className = "fixed-container__watcher";
      div.dataset.index = index;
      watchersContainer.appendChild(div);
    });

    // IntersectionObserverで交差判定
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // セクションが画面に交差しているとき
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            contentItems.forEach(item => {
              // 該当するセクションを表示
              item.classList.toggle("active", item.dataset.index === index);
            });
          }
        });
      },
      {
        root: null,
        threshold: 0,
        // rootMarginを調整して、交差するタイミングを遅延
        rootMargin: "-50% 0px"  // これにより、最初のセクションがすぐには表示されないようにする
      }
    );

    // 生成されたwatcherに監視設定
    const watchers = document.querySelectorAll(".fixed-container__watcher");
    watchers.forEach(el => observer.observe(el));
});


  return tag;
};