var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    },
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

window.onload = function() {
    const popUp = document.querySelector('.pop-up');
    popUp.classList.add('hide');
}

function popUpJs() {
    const popUp = document.querySelector('.pop-up');
    popUp.classList.remove('hide');
}

function closePopUp() {
    const popUp = document.querySelector('.pop-up');
    popUp.classList.add('hide');
}