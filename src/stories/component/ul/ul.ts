import './ul.scss';

export interface Props {
}

export const create = ({
}: Props) => {
const tag = document.createElement('div');
tag.innerHTML = `
<ul class="c-list-ul">
    <li class="c-list-ul__item">テキスト</li>
    <li class="c-list-ul__item">テキスト</li>
    <li class="c-list-ul__item">テキスト</li>
    <li class="c-list-ul__item">テキスト</li>
    <li class="c-list-ul__item">テキスト</li>
    <li class="c-list-ul__item">テキスト</li>
</ul>
`;

return tag;
};