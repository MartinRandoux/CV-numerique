const textAnim = document.querySelector('span');

new Typewriter(textAnim, {
    loop: false,
})
    .typeString("Bienvenue sur mon portfolio")
    .start()


window.scrollTo(0, 0);