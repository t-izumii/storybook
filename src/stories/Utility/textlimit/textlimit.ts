import './textlimit.scss';

export interface Props {
  text : string;
  limit : number;
}

export const create = ({
  text = '文字数制限用のテキスト',
  limit = 1,
}: Props) => {
  const tag = document.createElement('p');
  tag.innerHTML = text;
  tag.style.setProperty('--text-limit', `${limit}`);
  tag.setAttribute('data-text-limit', `${limit}`);

  tag.className = ['u-textlimit'].join(' ');

  return tag;
};