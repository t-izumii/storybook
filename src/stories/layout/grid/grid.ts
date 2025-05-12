import './grid.scss';

export interface Props {
  content?: number;
  column?: number;
  columnTab?: number;
  columnSp?: number;
  gap?: number;
  gapTab?: number;
  gapSp?: number;
}

export const create = ({ content = 2, column = 2, columnTab = 1, columnSp = 1, gap = 40 , gapTab = 20, gapSp= 20 }: Props) => {
  const tag = document.createElement('div');
  const col = document.createElement('div');
  col.className = 'l-grid__col';

  for (let i = 0; i < content; i++) {
    tag.appendChild(col.cloneNode());
  }

  tag.className = ['l-grid'].join('');

  function rem(px: number) {
    return px / 16 + 'rem';
  }

  tag.style.setProperty('--column', `${column}`);
  tag.style.setProperty('--column-Tab', `${columnTab}`);
  tag.style.setProperty('--column-sp', `${columnSp}`);
  tag.style.setProperty('--gap', rem(gap));
  tag.style.setProperty('--gap-tab', rem(gapTab));
  tag.style.setProperty('--gap-sp', rem(gapSp));

  return tag;
};
