import './grid.scss';

export interface Props {
  content?: number;
  column?: number;
  columnTablet?: number;
  columnSp?: number;
  gap?: number;
  gapTablet?: number;
  gapSp?: number;
}

export const create = ({ content = 2, column = 2, columnTablet = 1, columnSp = 1, gap = 40 , gapTablet = 20, gapSp= 20 }: Props) => {
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
  tag.style.setProperty('--column-tablet', `${columnTablet}`);
  tag.style.setProperty('--column-sp', `${columnSp}`);
  tag.style.setProperty('--gap', rem(gap));
  tag.style.setProperty('--gap-tab', rem(gapTablet));
  tag.style.setProperty('--gap-sp', rem(gapSp));

  return tag;
};
