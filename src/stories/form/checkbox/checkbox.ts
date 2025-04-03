import './checkbox.scss';

export interface Props {
  active?: boolean;
  label: string;
}

export const create = ({ active = false, label = 'checkbox' }: Props) => {
  const tag = document.createElement('label');
  const checkbox = document.createElement('input');
  const frag = document.createElement('i');
  const text = document.createElement('span');

  tag.appendChild(checkbox);
  tag.appendChild(frag);
  tag.appendChild(text);

  checkbox.type = 'checkbox';
  checkbox.name = 'checkbox';
  checkbox.value = 'checkbox';

  text.innerText = label;

  if (!active) {
    checkbox.disabled = true;
  }

  tag.className = ['c-checkbox'].join(' ');
  checkbox.className = ['c-checkbox__input'].join(' ');
  frag.className = ['c-checkbox__frag'].join(' ');
  text.className = ['c-checkbox__text'].join(' ');

  return tag;
};
