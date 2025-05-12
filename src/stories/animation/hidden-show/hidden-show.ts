import './hidden-show.scss';

export interface Props {
  active?: boolean;
  duration?: number;
  delay?: number;
  opacity?: number;
  ease?: string;
}

export const create = ({
  active = true,
  duration = 0.25,
  delay = 0.05,
  ease = 'linear',
}: Props) => {
  const tag = document.createElement('div');
  tag.innerHTML = `
  hidden-show用のテキストです
  `;
  tag.className = 'u-anime-hidden-show';
  const text = tag.innerText;
  const chars = text.split('');
  tag.innerHTML = chars.map((char, index) => `<span class="u-anime-hidden-show__char" style="--delay: calc(${delay} * ${index}); --duration: ${duration}; --ease: ${ease};"><span>${char}</span></span>`).join('');
  if (active) {
    setTimeout(() => {
      tag.classList.add('is-active');
    }, 100);
  }
  
  return tag;
};