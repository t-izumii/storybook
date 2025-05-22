import './ol.scss';

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
<ol class="c-list-ol">
    <li class="c-list-ol__item">テキスト${childLength > 0 ? `<ol class="c-list-ol">${Array.from({ length: childLength }, () => `<li class="c-list-ol__item">テキスト</li>`).join('')}</ol>` : ''}</li>
    ${Array.from({ length: length - 1 }, () => `<li class="c-list-ol__item">テキスト</li>`).join('')}
</ol>
`;

return tag;
};