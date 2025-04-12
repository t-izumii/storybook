import './fixedcenter.scss';

export interface Props {
}

export const create = ({
}: Props) => {
  const tag = document.createElement('div');
  tag.innerHTML = `
<div class="p-fcswiper-01 fcswiper js-fcps">
    <div class="fcswiper-inner">
        <div class="fcswiper-wrap">
            <div class="fcswiper-item">
                <div class="p-fcswiper-01__slide">
                    <div class="p-fcswiper-01__content fcswiper-scrollbox">
                        <div class="p-fcswiper-01__content-inner">
                            01
                            <br /><br />
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            <br /><br />
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            <br /><br />
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            <br /><br />
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
                            end
                        </div>
                    </div>
                </div>
            </div>
            <div class="fcswiper-item">
                <div class="p-fcswiper-01__slide">
                    <div class="p-fcswiper-01__content fcswiper-scrollbox">
                        <div class="p-fcswiper-01__content-inner">
                            02
                            <br /><br />
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            <br /><br />
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            <br /><br />
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
                            end
                        </div>
                    </div>
                </div>
            </div>
            <div class="fcswiper-item">
                <div class="p-fcswiper-01__slide">
                    <div class="p-fcswiper-01__content fcswiper-scrollbox">
                        <div class="p-fcswiper-01__content-inner">
                            03
                            <br /><br />
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            <br /><br />
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            <br /><br />
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            <br /><br />
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            <br /><br />
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            <br /><br />
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            <br /><br />
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            <br /><br />
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            <br /><br />
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            <br /><br />
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            <br /><br />
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            <br /><br />
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br />
                            end
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-fcswiper-01__control">
            <button class="fcswiper-button-prev">prev</button>
            <div class="fcswiper-pagination"></div>
            <button class="fcswiper-button-next">next</button>
        </div>
    </div>
</div>
  `;

  class FixedScrollSwiper {
    // set FixedScrollSwiper.classNames
    static classNames = {
        slideItem: 'fcswiper-item',
        paginationBullet: 'fcswiper-pagination-bullet',
        statusInitialized: 'fcswiper-initialized',
        observer: 'fcswiper-observer',
        observerItem: 'fcswiper-observer-item',
        scrollBox: 'fcswiper-scrollbox',
    };

    constructor(selector, options = {}) {
        this.handleResize = this.handleResize.bind(this);
        window.addEventListener('resize', this.handleResize);

        this.handleScroll = this.handleScroll.bind(this);
        window.addEventListener('scroll', this.handleScroll);
        this.el = typeof selector === 'string' ? document.querySelector(selector) : selector;
        if (!this.el) {
            throw new Error('element not found');
        }
        this.el.FCSwiper = this;
        this.slides = Array.from(this.el.querySelectorAll('.' + FixedScrollSwiper.classNames.slideItem));
        this.params = {
            spaceObScrollSlide: 200,
            initialSlide: null,
            navigation: {
                nextEl: null,
                prevEl: null,
            },
            pagination: {
                el: null,
            },
        };
        this.passedParams = options;

        this.params = (() => {
            const _this = this;
            const privatePropes = ['initialSlide'];
            const merged = Object.assign({}, this.params, this.passedParams);
            privatePropes.forEach(function (ele) {
                merged[ele] = _this.params[ele];
            });
            return merged;
        })();
        // check and update this.useSimplebar
        this.useSimplebar = (() => {
            if (!this.params.useSimplebar) return false;
            if (typeof SimpleBar === 'undefined') {
                return false;
            } else {
                return true;
            }
        })();

        // set this.activeIndex [null || Number]
        this.activeIndex = this.params.initialSlide;

        // set component this.navigation [Object]
        this.navigation = (() => {
            const _this = this;
            const nav = {
                $nextEle: null,
                $prevEle: null,
            };

            nav.init = () => {
                this.navigation.$nextEle = typeof this.params.navigation.nextEl === 'string' ? document.querySelector(this.params.navigation.nextEl) : this.params.navigation.nextEl;
                this.navigation.$prevEle = typeof this.params.navigation.prevEl === 'string' ? document.querySelector(this.params.navigation.prevEl) : this.params.navigation.prevEl;

                if (!this.navigation.$nextEle && !this.navigation.$prevEle) return;

                if (this.navigation.$nextEle) {
                    this.navigation.$nextEle.addEventListener('click', handleClickNext);
                }
                if (this.navigation.$prevEle) {
                    this.navigation.$prevEle.addEventListener('click', handleClickPrev);
                }
            };

            nav.destroy = () => {
                if (this.navigation.$prevEle) {
                    this.navigation.$prevEle.removeEventListener('click', handleClickPrev);
                }
                if (this.navigation.$nextEle) {
                    this.navigation.$nextEle.removeEventListener('click', handleClickNext);
                }
            };

            function handleClickPrev() {
                const prevIndex = Math.max(_this.activeIndex - 1, 0);
                _this.slideTo(prevIndex);
            }

            function handleClickNext() {
                const nextIndex = Math.min(_this.activeIndex + 1, _this.slides.length - 1);
                _this.slideTo(nextIndex);
            }

            return nav;
        })();

        // set component this.scrollbox [Object]
        this.scrollbox = (() => {
            // const _this = this;
            const scrollbox = {
                boxEle: null,
            };
            scrollbox.init = () => {
                scrollbox.boxEle = Array.from(this.el.querySelectorAll('.' + FixedScrollSwiper.classNames.scrollBox));
                // init simple bar
                if (!this.useSimplebar) return;
                scrollbox.boxEle.forEach(function (ele) {
                    new SimpleBar(ele, { autoHide: false });
                });
            };
            return scrollbox;
        })();

        // set component this.pagination [Object]
        // create bullet [Element node]
        // set this.pagination.bullets [Array]
        this.pagination = (() => {
            const _this = this;
            const pagination = {
                $el: null,
                bullets: [],
            };

            pagination.init = () => {
                this.pagination.$el = typeof this.params.pagination.el === 'string' ? document.querySelector(this.params.pagination.el) : this.params.pagination.el;
                if (!this.pagination.$el) return;

                this.slides.forEach(function () {
                    const bullet = _this.#createEle({ tag: 'span', classNames: [FixedScrollSwiper.classNames.paginationBullet] });
                    bullet.setAttribute('role', 'button');

                    _this.pagination.$el.appendChild(bullet);
                    _this.pagination.bullets.push(bullet);
                });

                this.pagination.bullets.forEach(function (el, index) {
                    el.addEventListener('click', handleClick);
                });
            };

            pagination.destroy = () => {
                this.pagination.bullets.forEach(function (el, index) {
                    el.removeEventListener('click', handleClick);
                });
            };

            function handleClick(e) {
                _this.slideTo(_this.pagination.bullets.indexOf(this));
            }

            return pagination;
        })();

        // init()
        this.init();

        // return this
        return this;
    }

    init() {
        // set this.scrollbox.boxEle
        this.scrollbox.init();

        // create, set observer [Element node]
        // create, set observerItems [Array]
        this.createObserver();

        // check scrollbox to calc + set height for each item in this.observerItems
        // calc + set height this.el
        this.updateObserver();

        // set this.navigation.$nextEle,this.navigation.$prevEle [Element node]
        // navigation CLICK
        this.navigation.init();

        // set this.pagination.$el [Element node],
        // create bullet [Element node], this.pagination.bullets [Array]
        // bullet CLICK
        this.pagination.init();

        // check inter section
        // call updateSlidesClasses (update class slides, bullets)
        this.interSectionObserver();

        // calc activeIndex right after screen load
        // call updateSlidesClasses (update class slides, bullets)
        this.initFistView();

        // scroll content follow position observer scroll
        this.scrollContent();

        // update status Element this.el
        this.el.classList.add(FixedScrollSwiper.classNames.statusInitialized);
    }

    createObserver() {
        // create observer [Element node]
        // set this.observer [Element node]
        const div = document.createElement('div');
        div.classList.add(FixedScrollSwiper.classNames.observer);
        this.el.appendChild(div);
        this.observer = div;

        // create observerItem [Element node]
        // set this.observerItems [Array]
        const fragment = new DocumentFragment();

        fragment.appendChild(this.#createEle({ height: 50 + 'vh' }));

        // create observer-item
        for (let i = 0; i < this.slides.length; i++) {
            const div = this.#createEle({ classNames: [FixedScrollSwiper.classNames.observerItem] });
            div.innerHTML = `${i}`;
            fragment.appendChild(div);
        }

        fragment.appendChild(this.#createEle({ height: 50 + 'vh' }));

        this.observer.appendChild(fragment);

        // get observer-item
        this.observerItems = Array.from(this.observer.querySelectorAll('.' + FixedScrollSwiper.classNames.observerItem));
    }

    // update observer
    updateObserver() {
        // check scrollbox, calc + set height each item in this.observerItems
        this.observerItems.forEach((ele, index) => {
            const slide = this.slides[index];
            const scrollbox = slide.querySelector('.' + FixedScrollSwiper.classNames.scrollBox);
            if (!scrollbox) return;
            let scrollContent = scrollbox;
            if (this.useSimplebar) {
                scrollContent = SimpleBar.instances.get(scrollbox).getScrollElement();
            }
            if (scrollContent.scrollHeight > scrollContent.clientHeight) {
                ele.style.height = (scrollContent.scrollHeight - scrollContent.clientHeight) * 1 + this.params.spaceObScrollSlide + 'px';
            } else {
                ele.style.height = '';
            }
        });

        // set height this.el
        this.el.style.height = this.observer.clientHeight + 'px';
    }

    // inter section observer
    interSectionObserver() {
        const option = {
            threshold: 0,
            rootMargin: '-50% 0px',
        };

        this.observerInstance = new IntersectionObserver(callback.bind(this), option);
        this.observerItems.forEach((target) => {
            this.observerInstance.observe(target);
        });

        function callback(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const targetElement = entry.target;
                    this.activeIndex = this.observerItems.indexOf(targetElement);

                    this.updateSlidesClasses();
                }
            });
        }
    }

    // slide to
    slideTo(index) {
        // this.activeIndex = index;
        const y = this.observerItems[index].getBoundingClientRect().top + window.scrollY - 0.49 * window.innerHeight;
        window.scrollTo({
            left: 0,
            top: y,
            behavior: 'smooth',
        });
    }

    updateSlidesClasses() {
        const slides = this.slides;
        slides.forEach((target, index) => {
            if (index <= this.activeIndex) {
                target.classList.add('is-active');
            } else {
                target.classList.remove('is-active');
            }

            if (index !== this.activeIndex) {
                target.classList.remove('is-current');
            } else {
                target.classList.add('is-current');
            }
        });
        this.pagination.bullets.forEach((el) => {
            el.classList.remove('is-active');
        });
        this.pagination.bullets[this.activeIndex].classList.add('is-active');
    }

    initFistView() {
        if (this.activeIndex !== null) return;
        const firstObserver = this.observerItems[0];
        if (firstObserver.offsetTop > 0) {
            this.activeIndex = 0;
        } else {
            this.activeIndex = this.slides.length - 1;
        }

        this.updateSlidesClasses();
    }

    scrollContent() {
        const reactEle = this.el.getBoundingClientRect();
        if (!(reactEle.top <= 0 && reactEle.bottom >= window.innerHeight)) return;

        const observerCurrent = this.observerItems[this.activeIndex];
        const observerCurrentHeight = observerCurrent.clientHeight;

        const slideCurrent = this.slides[this.activeIndex];
        const content = slideCurrent.querySelector('.' + FixedScrollSwiper.classNames.scrollBox);

        // check to get scrollbox
        let scrollElement = content;
        if (this.useSimplebar) {
            const simplebarInstance = SimpleBar.instances.get(content);
            scrollElement = simplebarInstance.getScrollElement();
        }
        if (scrollElement.scrollHeight <= scrollElement.clientHeight) return;
        if (!observerCurrent || !scrollElement) return;

        // calc scrollover of current observer
        const offsetY = this.params.spaceObScrollSlide / 2;
        let scrollOver = window.innerHeight / 2 - observerCurrent.getBoundingClientRect().top;
        if (scrollOver < 0) {
            scrollOver = 0;
        } else if (scrollOver > observerCurrentHeight) {
            scrollOver = observerCurrentHeight;
        }
        // calc percent scroll
        let percent;
        if (scrollOver >= offsetY && scrollOver <= observerCurrentHeight - offsetY) {
            percent = (scrollOver - offsetY) / (observerCurrentHeight - offsetY * 2);
        } else if (scrollOver < offsetY) {
            percent = 0;
        } else if (scrollOver > observerCurrentHeight - offsetY) {
            percent = 1;
        }
        scrollElement.scrollTop = (scrollElement.scrollHeight - scrollElement.clientHeight) * percent;
    }

    intersectionBackup() {
        const observeRect = this.observer.getBoundingClientRect();
        if (observeRect.top >= 0 && this.activeIndex !== 0) {
            this.activeIndex = 0;
            this.updateSlidesClasses();
        } else if (observeRect.bottom <= window.clientHeight && this.activeIndex !== this.slides.length) {
            this.activeIndex = this.slides.length;
            this.updateSlidesClasses();
        }
    }

    // handle resize
    handleResize() {
        this.updateObserver();
        this.scrollContent();
        this.intersectionBackup();
    }

    // handle scroll
    handleScroll() {
        this.scrollContent();
        this.intersectionBackup();
    }

    // destroy
    destroy() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('scroll', this.handleScroll);
        this.observerInstance.disconnect();
        // this.scrollbox.destroy();
        this.navigation.destroy();
        this.pagination.destroy();
    }

    // private function [Snippet]
    #createEle({ height, classNames, tag = 'div' } = {}) {
        const el = document.createElement(tag);
        if (height !== undefined) {
            el.style.height = height;
        }
        if (classNames) {
            classNames.forEach((className) => {
                el.classList.add(className);
            });
        }
        return el;
    }
  }

  const fixedScrollSwiper01 = new FixedScrollSwiper('.js-fcps', {
    navigation: {
        nextEl: '.fcswiper-button-next',
        prevEl: '.fcswiper-button-prev',
    },
    pagination: {
        el: '.fcswiper-pagination',
    },
});


  return tag;
};