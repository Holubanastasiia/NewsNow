/*--------------определяем на каком устройстве открыт сайт--------------------*/

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android()
            || isMobile.BlackBerry()
            || isMobile.iOS()
            || isMobile.Opera()
            || isMobile.Windows()
        );
    }
};

/*------------------------------------Menu------------------------------------------*/

if (isMobile.any()) {
    document.body.classList.add("_touch");
} else {
    document.body.classList.add("_pc");
}

const menu = document.querySelector(".menu__mobile");
if (menu) {
    const menuBody = document.querySelector(".header__menu");
    const menuClose = document.querySelector(".menu__mobile_close");
    menu.addEventListener("click", function (e) {
        document.body.classList.toggle("_lock");
        menu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
        menuClose.classList.toggle("_active");
    })

    menuClose.addEventListener("click", function (e) {
        menuClose.classList.toggle("_active");
        menu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    })
}

/*------------------------------------Main part------------------------------------------*/

var showContainer = document.getElementsByClassName("read-more-container");
var extra = document.getElementsByClassName("extra");

for (i = 0; i < showContainer.length; i++) {
    showContainer[i].addEventListener("click", function (e) {
        console.log(e.currentTarget);
        e.preventDefault();
        e.currentTarget.classList.add("_pressed");
    }
    )
}

/*----------------------------------CONTENT BUTTON-----------------------------------------*/

let popup = document.querySelector(".content")
let btn = document.querySelector(".button")
let open = document.querySelector(".list")
let ring = document.querySelector(".ring")

popup.addEventListener("click", function (e) {
    e.currentTarget.classList.toggle("open")
})
