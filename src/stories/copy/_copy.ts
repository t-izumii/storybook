import './_copy.scss';

export interface Props {
}

export const create = ({
}: Props) => {
  const tag = document.createElement('div');
  tag.innerHTML = `
  テスト
  `;

  return tag;
};