closeMenu = () => {
    $('#navcheck').prop('checked',false)
}
$('body').css('overflow-y','hidden')

$(document).ready(function() {
    AOS.init() 
    $('body').css('overflow-y','auto')
    $('.loader-wrapper').fadeOut(1000)
    setTimeout( () => {$('.loader-wrapper').css('display','none')}, 1001)
    

    function openProjectImages(projectName) {
        $('#project-modal').load(`${projectName}.html`)
    }

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