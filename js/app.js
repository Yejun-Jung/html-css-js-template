// alert("hello javascript")

const body = document.querySelector('body')
const header =document.querySelector('header')
const fixedArrow =document.querySelector('.fixed-arrow')
const mobNavBtn = document.querySelector('.mob-nav-btn')
const navList = document.querySelectorAll('.nav-list li')

// [0, 1, 2, 3]
navList.forEach((btn, i)=>{
    btn.addEventListener('click', (e)=>{
        e.preventDefault()
        console.log(
        document.querySelector(`#sec-${i}`));
        document.querySelector(`#sec-${i+1}`).scrollIntoView({
            behavior:'smooth'
        })
    })
})

// classList.toggle() 주체 body 

// console.log(fixedArrow)


mobNavBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    body.classList.toggle('mob-nav-open')
})

window.addEventListener('scroll',()=>{

    if(window.scrollY>=100){

        body.classList.add('scroll')
    }else{
        
        body.classList.remove('scroll')
    }
})


fixedArrow.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})

const menuList = document.querySelectorAll(".sec-5-menu li");
const contentList = document.querySelectorAll(".content");

let i = 0;
init(i);
function init(x){
    menuList[x].classList.add("active");
    contentList[x].classList.add("on");
}
function rest(){
    for(let i=0; i<menuList.length; i++){
            menuList[i].classList.remove("active");
            contentList[i].classList.remove("on");
    }
}
menuList.forEach((menu,index)=>{
    menu.addEventListener("click",(e)=>{
        e.preventDefault();
        console.log(menu, index);
        rest();
        init(index);
    });
}); 

var swiper = new Swiper(".main-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop:true,
    autoplay:true
});

const sec3Bg = document.querySelectorAll('.sec-3 .bg-wrap > div');
const colors = ['#EBD55A', '#E6A23C', '#E0F2F1'];
const titWrap = document.querySelector('.sec-3 .tit-wrap');
const numList = document.querySelectorAll('.num')

var swiperSec3 = new Swiper(".sec-3-slider", {
    loop: true,
    navigation: {
        nextEl: ".sec-3 .swiper-button-next",
        prevEl: ".sec-3 .swiper-button-prev",
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
            sec3Bg[this.realIndex].classList.add('active');
            titWrap.style.backgroundColor = colors[this.realIndex];
            numList.forEach((nums) => {
                nums.style.backgroundColor = colors[this.realIndex];
            })
        }
    }
});