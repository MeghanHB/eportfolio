// template_z2kwtgc
// service_h4ys1if
// rsHLmSV7wPXyb9hIP

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
            'gpu7iywtk26Lw_n5G'
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

