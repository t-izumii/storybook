import './ol.scss';

export interface Props {
}

export const create = ({
}: Props) => {
const tag = document.createElement('div');
tag.innerHTML = `
<ol class="c-list-ol">
    <li class="c-list-ol__item">テキスト</li>
    <li class="c-list-ol__item">テキスト</li>
    <li class="c-list-ol__item">テキスト</li>
    <li class="c-list-ol__item">テキスト</li>
    <li class="c-list-ol__item">テキスト</li>
    <li class="c-list-ol__item">テキスト</li>

</ol>
`;

return tag;
};