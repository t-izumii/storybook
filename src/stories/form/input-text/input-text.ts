import './input-text.scss';

export interface Props {
  size?: 'small' | 'medium' | 'large' | 'max';
  active?: boolean;
  errorState?: boolean;
  label: string;
  placeholder: string;
}

export const create = ({
  size = 'medium',
  active = false,
  errorState = false,
  label = '',
  placeholder = '',
}: Props) => {
  const tag = document.createElement('input');
  tag.type = 'text';
  tag.value = label;
  tag.placeholder = placeholder;

  if (!active) {
    tag.disabled = true;
  }

  tag.className = ['c-input-text', `--${size}`, errorState ? 'is-error' : ''].filter(Boolean).join(' ');

  return tag;
};
