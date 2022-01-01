closeMenu = () => {
    $('#navcheck').prop('checked',false)
}

$(document).ready(function() {
    function openProjectImages(projectName) {
        console.log(projectName)
        $('#project-modal').load(`${projectName}.html`)
    }
})