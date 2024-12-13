const textAnim = document.querySelector('span');

new Typewriter(textAnim, {
    loop: false,
})
    .typeString("Bienvenue sur mon portfolio")
    .start()




//JQuery
$('.btn-opened').on('click', function () {
    $('.aff').css('display', 'none');
    $('.btn-opened').css('display', 'none');
    $('.cacher').css('display', 'block');
    $('.cacher').css('transition', 'ease-in-out 1s');
})

$('.btn-closed').on('click', function () {
    $('.btn-opened').css('display', 'flex');
    $('.cacher').css('display', 'none');
})

window.scrollTo(0, 0);