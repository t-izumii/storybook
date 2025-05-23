import './fade.scss';

export interface Props {
  active?: boolean;
  movementx?: number;
  movementy?: number;
  duration?: number;
  delay?: number;
  opacity?: number;
  easeMovement?: string;
  easeOpacity?: string;
}

export const create = ({
  active = true,
  movementx = 0,
  movementy = 0,
  duration = 0.5,
  delay = 0,
  opacity = 0,
  easeMovement = 'linear',
  easeOpacity = 'linear',
}: Props) => {
  const tag = document.createElement('div');
  tag.innerHTML = `
  テスト
  `;
  tag.className = 'box u-anime-fade';
  if (active) {
    setTimeout(() => {
      tag.classList.add('is-active');
    }, 100);
  }

  tag.style.setProperty('--duration', `${duration}`);
  tag.style.setProperty('--delay', `${delay}`);
  tag.style.setProperty('--movementx', `${movementx}`);
  tag.style.setProperty('--movementy', `${movementy}`);
  tag.style.setProperty('--opacity', `${opacity}`);
  tag.style.setProperty('--ease1', `${easeMovement}`);
  if (easeOpacity) {
    tag.style.setProperty('--ease2', `${easeOpacity}`);
  } else {
    tag.style.setProperty('--ease2', `${easeMovement}`);
  }
  
  return tag;
};