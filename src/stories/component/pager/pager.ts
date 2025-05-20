import './pager.scss';

export interface Props {
}

export const create = ({
}: Props) => {
const tag = document.createElement('div');
tag.innerHTML = `
<ul class="c-pager">
    <li class="c-pager__item --prev">
        <a href="" class="c-pager__button --prev">
            <span class="c-icon-circle">
                <i class="c-icon"></i>
            </span>
            前のページ
        </a>
    </li>
    <li class="c-pager__item">
        <a href="" class="c-pager__link">1</a>
    </li>
    <li class="c-pager__item">
        <span class="c-pager__link --is-active">2</span>
    </li>
    <li class="c-pager__item">
        <a href="" class="c-pager__link">3</a>
    </li>
    <li class="c-pager__item">
        <a href="" class="c-pager__link">4</a>
    </li>
    <li class="c-pager__item">
        <a href="" class="c-pager__link">5</a>
    </li>
    <li class="c-pager__item --next">
        <a href="" class="c-pager__button --next">
            <span class="c-icon-circle">
                <i class="c-icon"></i>
            </span>
            次のページ
        </a>
    </li>
</ul>
`;

return tag;
};