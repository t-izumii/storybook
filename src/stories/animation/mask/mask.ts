import './mask.scss';

export interface Props {
  active?: boolean;
  duration?: number;
  delay?: number;
  opacity?: number;
  ease?: string;
}

export const create = ({
  active = true,
  duration = 1,
  delay = 0,
  ease = 'linear',
}: Props) => {
  const tag = document.createElement('div');
  tag.innerHTML = `
  mask用のテキストです
  `;
  tag.className = 'u-anime-mask';
  if (active) {
    setTimeout(() => {
      tag.classList.add('is-active');
    }, 100);
  }

  tag.style.setProperty('--duration', `${duration}`);
  tag.style.setProperty('--delay', `${delay}`);
  tag.style.setProperty('--ease', `${ease}`);
  
  return tag;
};