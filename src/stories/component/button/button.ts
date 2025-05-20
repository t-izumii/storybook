import './button.scss';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  active ?: boolean;
  label: string;
  onClick?: () => void;
}

export const createButton = ({
  size = 'medium',
  active = true,
  label,
  onClick,
}: ButtonProps) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  if (onClick) {
    btn.addEventListener('click', onClick);
  }

  if (!active) {
    btn.disabled = true;
  }

  btn.className = ['c-button', `--${size}`].join(' ');

  return btn;
};
