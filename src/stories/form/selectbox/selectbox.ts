import './selectbox.scss';

export interface Props {
  active?: boolean;
  size?: 'small' | 'medium' | 'large' | 'max';
}

export const create = ({ size = 'medium', active = false }: Props) => {
  const tag = document.createElement('div');
  const select = document.createElement('select');
  const icon = document.createElement('i');
  tag.appendChild(select);
  tag.appendChild(icon);
  select.innerHTML = `
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  `;

  if (!active) {
    select.disabled = true;
  }

  tag.className = ['c-selectbox', `--${size}`].join(' ');
  select.className = ['c-selectbox__field'].join(' ');
  icon.className = ['c-selectbox__icon c-icon'].join(' ');

  return tag;
};
