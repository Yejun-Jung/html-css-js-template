const body = document.querySelector('body')
const header = document.querySelector('header')
const fixedArrow = document.querySelector('.fixed-arrow')
const mobNavBtn = document.querySelector('.mob-nav-btn')
const navList = document.querySelectorAll('.nav-list li')

navList.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector(`#sec-${i+1}`).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

mobNavBtn.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.toggle('mob-nav-open')
})

window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        body.classList.add('scroll')
    } else {
        body.classList.remove('scroll')
    }
})

fixedArrow.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

const menuList = document.querySelectorAll(".sec-5-menu li");
const contentList = document.querySelectorAll(".content");

let i = 0;
init(i);

function init(x) {
    menuList[x].classList.add("active");
    contentList[x].classList.add("on");
}

function rest() {
    for (let i = 0; i < menuList.length; i++) {
        menuList[i].classList.remove("active");
        contentList[i].classList.remove("on");
    }
}
menuList.forEach((menu, index) => {
    menu.addEventListener("click", (e) => {
        e.preventDefault();
        rest();
        init(index);
    });
});

var swiperSec1 = new Swiper(".sec-1 .main-slider", {
    loop: true,
    autoplay: true,
    speed: 1000,
    navigation: {
        nextEl: ".sec-1 .swiper-button-next",
        prevEl: ".sec-1 .swiper-button-prev",
    },
    pagination: {
        el: ".sec-1 .swiper-pagination",
        clickable: true,
    },
    on: {
        slideChangeTransitionStart: function() {
            if(typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        }
    }
});

const sec3Bg = document.querySelectorAll('.sec-3 .bg-wrap > div');
const colors = ['#EBD55A', '#E6A23C', '#E0F2F1'];
const titWrap = document.querySelector('.sec-3 .tit-wrap');
const numList = document.querySelectorAll('.num')

var swiperSec3 = new Swiper(".sec-3-slider", {
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".sec-3 .swiper-button-next",
        prevEl: ".sec-3 .swiper-button-prev",
    },
    pagination: {
        el: ".sec-3 .swiper-pagination",
        clickable: true,
    },
    on: {
        init: function() {
            sec3Bg[0].classList.add('active');
            titWrap.style.backgroundColor = colors[0];
            numList.forEach((nums) => {
                nums.style.backgroundColor = colors[0];
            })
        },
        slideChange: function() {
            sec3Bg.forEach(bg => bg.classList.remove('active'));
            if(sec3Bg[this.realIndex]){
                sec3Bg[this.realIndex].classList.add('active');
                titWrap.style.backgroundColor = colors[this.realIndex];
                numList.forEach((nums) => {
                    nums.style.backgroundColor = colors[this.realIndex];
                })
            }
        }
    }
});