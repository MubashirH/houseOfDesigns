closeMenu = () => {
    $('#navcheck').prop('checked',false)
}

$(document).ready(function() {
    function openProjectImages(projectName) {
        console.log(projectName)
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