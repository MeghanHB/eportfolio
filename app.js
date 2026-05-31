// template_x87ekvm
// service_60nvk4l
// -Trnv2qDy8CJGhv8u

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
            'service_60nvk4l',
            'template_x87ekvm',
            event.target,
            '-Trnv2qDy8CJGhv8u'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable.  Please contact me directly on meghanshoffman@gmail.com"
            );
        })
} 

