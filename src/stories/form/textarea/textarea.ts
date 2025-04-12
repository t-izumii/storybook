import './textarea.scss';

export interface Props {
  active?: boolean;
  errorState?: boolean;
  label: string;
  placeholder: string;
}

export const create = ({ active = false, label = '', placeholder = '' , errorState = false, }: Props) => {
  const tag = document.createElement('textarea');
  tag.value = label;
  tag.placeholder = placeholder;
  tag.rows = 8;
  tag.cols = 50;
  if (!active) {
    tag.disabled = true;
  }

  tag.className = ['c-textarea' , errorState ? 'is-error' : ''].filter(Boolean).join(' ');

  return tag;
};
