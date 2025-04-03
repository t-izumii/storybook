import './grid.scss';

export interface Props {
  column?: number;
  gap?: number;
}

export const create = ({ column = 2, gap = 40 }: Props) => {
  const tag = document.createElement('div');
  const col = document.createElement('div');
  col.className = 'l-grid__col';

  for (let i = 0; i < column; i++) {
    tag.appendChild(col.cloneNode());
  }

  tag.className = ['l-grid'].join('');

  const gapRem = gap / 16 + 'rem';

  tag.style.setProperty('--column', `${column}`);
  tag.style.setProperty('--gap', gapRem);

  return tag;
};
