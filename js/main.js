let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle("move")
}

// Education Swiper
var swiper = new Swiper(".education-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Email JS
function validate() {
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let msg = document.querySelector('.message');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    })
}
validate();

function sendmail(name, email, msg) {
    emailjs.send("service_re86sgl", "template_ucaxp3k", {
        from_name: email,
        to_name: name,
        message: msg,
    });
}

function emptyerror() {
    swal({
        title: "Oh No!",
        text: "Fields cannont be empty.",
        icon: "error",
        
      });
}
function success() {
    swal({
        title: "Email sent successfully",
        text: "We try to reply in 24 hours.",
        icon: "success",
        
      });
}

// Header Background Change On Scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});

//Scroll Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});