import './radio.scss';

export interface Props {
  active?: boolean;
  label: string;
}

export const create = ({ active = false, label = 'Radio' }: Props) => {
  const tag = document.createElement('label');
  const radio = document.createElement('input');
  const frag = document.createElement('i');
  const text = document.createElement('span');

  tag.appendChild(radio);
  tag.appendChild(frag);
  tag.appendChild(text);

  radio.type = 'radio';
  radio.name = 'radio';
  radio.value = 'radio';

  text.innerText = label;

  if (!active) {
    radio.disabled = true;
  }

  tag.className = ['c-radio'].join(' ');
  radio.className = ['c-radio__input'].join(' ');
  frag.className = ['c-radio__frag'].join(' ');
  text.className = ['c-radio__text'].join(' ');

  return tag;
};
