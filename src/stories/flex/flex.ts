import './flex.scss';

export interface Props {
  column?: number;
  gap?: number;
  gapSp?: number;
}

export const create = ({ column = 2, gap = 40 , gapSp= 20}: Props) => {
  const tag = document.createElement('div');
  const col = document.createElement('div');
  col.className = 'l-flex__col';

  for (let i = 0; i < column; i++) {
    tag.appendChild(col.cloneNode());
  }

  tag.className = ['l-flex'].join('');

  function rem(px: number) {
    return px / 16 + 'rem';
  }

  tag.style.setProperty('--column', `${column}`);
  tag.style.setProperty('--gap', rem(gap));
  tag.style.setProperty('--gap-sp', rem(gapSp));

  return tag;
};
