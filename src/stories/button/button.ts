import './button.scss';

export interface ButtonProps {
  mode?: string;
  size?: 'small' | 'medium' | 'large';
  active ?: boolean;
  label: string;
  onClick?: () => void;
}

export const createButton = ({
  mode = '',
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

  const buttonMode = mode ?   `--${mode}`: '';
  btn.className = ['c-button', `--${size}`, buttonMode].join(' ');

  return btn;
};
