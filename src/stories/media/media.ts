import './media.scss';

export interface Props {
  title: string;
  text: string;
  button: string;
  reverse?: boolean;
}

export const create = ({
  title = 'Title',
  text = 'Text',
  button = 'Button',
  reverse = false,
}: Props) => {
  const tag = document.createElement('div');
  const image = document.createElement('div');
  const content = document.createElement('div');
  const heading = document.createElement('h1');
  const p = document.createElement('p');
  const b = document.createElement('button');

  heading.textContent = title;
  p.textContent = text;
  b.textContent = button;

  tag.appendChild(image);
  tag.appendChild(content);
  if (title) {
    content.appendChild(heading);
  }

  if (text) {
    content.appendChild(p);
  }

  if (button) {
    content.appendChild(b);
  }

  tag.className = ['c-media', reverse ? '--reverse' : ''].join(' ');
  image.className = ['c-media__image'].join('');
  content.className = ['c-media__content'].join('');
  heading.className = ['c-media__title'].join('');
  p.className = ['c-media__text'].join('');
  b.className = ['c-media__button'].join('');

  return tag;
};
