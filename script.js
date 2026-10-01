/* =========================================================
   MOMMY SALON
   JAVASCRIPT
========================================================= */


/* =========================================================
   LOADING SCREEN
========================================================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 900);

});



/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (mobileMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });


    /* Tutup menu ketika memilih menu */

    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            const icon =
                menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });

}



/* =========================================================
   DARK MODE
========================================================= */

const themeBtn =
    document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const icon =
            themeBtn.querySelector("i");


        if (document.body.classList.contains("dark")) {

            icon.classList.remove("fa-moon");

            icon.classList.add("fa-sun");

        } else {

            icon.classList.remove("fa-sun");

            icon.classList.add("fa-moon");

        }

    });

}



/* =========================================================
   CURSOR GLOW
========================================================= */

const cursorGlow =
    document.querySelector(".cursor-glow");

if (cursorGlow) {

    document.addEventListener("mousemove", (event) => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    });

}



/* =========================================================
   REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =========================================================
   BACK TO TOP
========================================================= */

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (!backTop) return;


    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


if (backTop) {

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}



/* =========================================================
   NAVBAR ACTIVE MENU
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-menu a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});



/* =========================================================
   3D HOVER CARD
========================================================= */

const cards =
    document.querySelectorAll(".service-card");


cards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;


        const rotateX =
            (y - centerY) / 18;

        const rotateY =
            (centerX - x) / 18;


        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});



/* =========================================================
   GALLERY IMAGE CLICK EFFECT
========================================================= */

const galleryItems =
    document.querySelectorAll(".gallery-item");


galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        item.classList.toggle("gallery-active");

    });

});



/* =========================================================
   BOOKING WHATSAPP
========================================================= */

const bookingForm =
    document.getElementById("bookingForm");


if (bookingForm) {

    bookingForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const nama =
            document.getElementById("nama").value;

        const layanan =
            document.getElementById("layananSelect").value;

        const tanggal =
            document.getElementById("tanggal").value;

        const nomor =
            document.getElementById("nomor").value;


        if (
            !nama ||
            !layanan ||
            !tanggal ||
            !nomor
        ) {

            alert(
                "Mohon isi semua data booking terlebih dahulu 💕"
            );

            return;

        }


        /* =========================================
           GANTI NOMOR INI DENGAN NOMOR WHATSAPP
           MOMMY SALON
        ========================================= */

        const nomorSalon =
            "6282388311969";


        const pesan =

`Halo Mommy Salon 
Saya ingin melakukan booking.

 1. Nama:
${nama}

 2. Layanan:
${layanan}

 3. Tanggal acara:
${tanggal}

 4. Nomor WhatsApp:
${nomor}


Mohon informasi ketersediaan jadwal dan detailnya.

Terima kasih `;


        const whatsappURL =
            `https://wa.me/${nomorSalon}?text=${encodeURIComponent(pesan)}`;


        window.open(
            whatsappURL,
            "_blank"
        );

    });

}



/* =========================================================
   BUTTON HOVER SOUND / FEEDBACK
========================================================= */

const buttons =
    document.querySelectorAll(
        ".btn-primary, .btn-outline, .nav-booking"
    );


buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-3px)";

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});



/* =========================================================
   SMOOTH IMAGE LOADING
========================================================= */

const images =
    document.querySelectorAll("img");


images.forEach(image => {

    image.addEventListener("load", () => {

        image.style.opacity = "1";

    });

});



/* =========================================================
   RANDOM SPARKLE ANIMATION
========================================================= */

const sparkles =
    document.querySelectorAll(".floating-sparkle");


sparkles.forEach((sparkle, index) => {

    sparkle.style.animationDelay =
        `${index * 0.7}s`;

});



/* =========================================================
   DATE MINIMUM = TODAY
========================================================= */

const dateInput =
    document.getElementById("tanggal");


if (dateInput) {

    const today =
        new Date();

    const year =
        today.getFullYear();

    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            today.getDate()
        ).padStart(2, "0");


    const todayString =
        `${year}-${month}-${day}`;


    dateInput.min =
        todayString;

}



/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "%c💕 Mommy Salon",
    "font-size:25px;font-weight:bold;color:#c96f83;"
);

console.log(
    "%cMake Every Moment Beautiful ✨",
    "font-size:14px;color:#e99aaa;"
);