window.onload = function() {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 2500,
        loop: true,
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        longSwipesRatio: 0.3,
        touchRatio: 1,
        slidesPerView: 3,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
    })
}