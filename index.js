const textAnim = document.querySelector('span');

if (textAnim) {
    new Typewriter(textAnim, {
        loop: false,
    })
        .typeString("Bienvenue sur mon portfolio")
        .start();
}