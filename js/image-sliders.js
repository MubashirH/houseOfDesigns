var $modalElement = $('#project-modal')

async function openProjectImages(e) {
    console.log(e)
    $('body').css('overflow','hidden')
    $modalElement.empty()
    $modalElement.load(`./projects/${e}.html`)
    $modalElement.css('display', 'block')
    setTimeout(function(){
        var projectSwipper = new Swiper(".mySwiper", {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            centeredSlides: true,
            slidesPerView: 1,
            observer: true,
            observeParents: true,
            spaceBetween: 50,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
        })
    }, 3000)
}

closeProjects = () => {
    $('body').css('overflow-y','auto')
    $modalElement.empty()
    $modalElement.css('display', 'none')
}
