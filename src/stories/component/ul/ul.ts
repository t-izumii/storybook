import './ul.scss';

export interface Props {
    length: number;
    childLength: number;
}

export const create = ({
    length,
    childLength,
}: Props) => {
const tag = document.createElement('div');
tag.innerHTML = `
<ul class="c-list-ul">
    <li class="c-list-ul__item">テキスト${childLength > 0 ? `<ul class="c-list-ul">${Array.from({ length: childLength }, () => `<li class="c-list-ul__item">テキスト</li>`).join('')}</ul>` : ''}</li>
    ${Array.from({ length: length - 1 }, () => `<li class="c-list-ul__item">テキスト</li>`).join('')}
</ul>
`;

return tag;
};