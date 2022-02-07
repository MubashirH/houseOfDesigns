




closeMenu = () => {
    $('#navcheck').prop('checked',false)
}

$('body').css('overflow-y','hidden')

$(window).on('load',function() {
    $('body').css('overflow-y','auto')
    $('.loader-wrapper').fadeOut()
    $('.loader-wrapper').css('display','none')
})

$(document).ready(function() {
    AOS.init() 
    function openProjectImages(projectName) {
        $('#project-modal').load(`${projectName}.html`)
    }

    var animation = lottie.loadAnimation({
        container: document.getElementById('loader-image'),
        path: 'https://assets4.lottiefiles.com/packages/lf20_xhwgqrsh.json',
        // animationData: animation,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        name: "Logo Animation",
      });

    var supplierSlider = new Swiper('.supplier-container', {
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
        slidesPerView: 6,
        observer: true,
        observeParents: true,
        breakpoints: {
            320: {
                slidesPerView: 4,
                spaceBetween: 10 
            },       
            1024: {       
               slidesPerView: 6,
               spaceBetween: 10     
            }
        },
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
        navigation: {
        nextEl: '.supplier-next',
        prevEl: '.supplier-prev',
    }})
})