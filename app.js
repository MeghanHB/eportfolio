// template_z2kwtgc
// service_h4ys1if
// rsHLmSV7wPXyb9hIP


let contrastToggle = false
const scaleFactor = 1/20

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor
    

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }


}

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
    document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function toggleModal() {
    document.body.classList.toggle("modal--open");
        document.body.classList.toggle(".modal--open");
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')
loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm( 
            'service_h4ys1if',
            'template_z2kwtgc',
            event.target,
            'rsHLmSV7wPXyb9hIP'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable.  Please contact me directly on meghanhb31@gmail.com"
            );
        })
} 

let isModalOpen = false;
function ToggleModal() {
    isModalOpen = !isModalOpen;
    if (isModalOpen) {
        return document.body.classList.remove("modal--open");
    }
 document.body.classList += " modal--open"
}

