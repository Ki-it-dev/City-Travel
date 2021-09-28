// Menu mobile start
$('.packages-btn').click(function(){
    $('.header-menu-mobile .subMobile').toggleClass('show')
    $('.header-menu__list-mobile .iconsMobileDown').toggleClass('rotate')
})
$('.tour-btn').click(function(){
    $('.subMobile__items .subMobile__listChild').toggleClass('show')
    $('.subMobile__items .iconsMobileDown-2').toggleClass('rotate')
})
$('.shop-btn').click(function(){
    $('.header-menu__list-items-mobile .subMobile-1').toggleClass('show')
    $('.header-menu__list-items-mobile .iconsMobileDown-1-2').toggleClass('rotate')
})
$('.aboutus-btn').click(function(){
    $('.header-menu__list-items-mobile .subMobile-2').toggleClass('show')
    $('.header-menu__list-items-mobile .iconsMobileDown-1-3').toggleClass('rotate')
})
$('.pages-btn').click(function(){
    $('.header-menu__list-items-mobile .subMobile-3').toggleClass('show')
    $('.header-menu__list-items-mobile .iconsMobileDown-1-4').toggleClass('rotate')
})
$('.aboutus2-btn').click(function(){
    $('.subMobile__listChild-1').toggleClass('show')
    $('.iconsMobileDown-2-1').toggleClass('rotate')
})
$('.contact-btn').click(function(){
    $('.subMobile__listChild-2').toggleClass('show')
    $('.iconsMobileDown-2-2').toggleClass('rotate')
})
$('.news-btn').click(function(){
    $('.subMobile-4').toggleClass('show')
    $('.iconsMobileDown-1-5').toggleClass('rotate')
})
$('.contact2-btn').click(function(){
    $('.subMobile-5').toggleClass('show')
    $('.iconsMobileDown-1-6').toggleClass('rotate')
})
$('.post-btn').click(function(){
    $('.subMobile__listChild-3').toggleClass('show')
    $('.iconsMobileDown-2-3').toggleClass('rotate')
})
// Menu mobile end

// Slider start

const slider = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

timer = setInterval(autoPlay,5000);

function prevSlide(){
    if(index == 0){
        index = slider.length - 1;
    }else{
        index--;
    }
    changeSlide();
}

function nextSlide(){
    if(index == slider.length - 1){
        index = 0;
    }else{
        index++;
    }
    changeSlide();
}

function changeSlide(){
    for(let i =0;i<slider.length;i++){
        slider[i].classList.remove('active');
    }
    slider[index].classList.add('active');
}

function resetTimer(){
    timer = setInterval(autoPlay,5000);
    clearInterval(timer);
}

function autoPlay(){
    nextSlide();
}

prev.addEventListener('click',function(){
    prevSlide();
    resetTimer();
})

next.addEventListener('click',function(){
    nextSlide();
    resetTimer();
})

//Slider end
