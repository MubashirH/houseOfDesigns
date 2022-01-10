closeMenu = () => {
    $('#navcheck').prop('checked',false)
}
$('body').css('overflow-y','hidden')

$(document).ready(function() {
    $('body').css('overflow-y','auto')
    $('.loader-wrapper').fadeOut(3000)
    setTimeout( () => {$('.loader-wrapper').css('display','none')}, 3000)
    

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

        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
        navigation: {
        nextEl: '.supplier-next',
        prevEl: '.supplier-prev',
    }})
})