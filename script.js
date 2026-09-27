document.addEventListener("DOMContentLoaded", function () {

    /* ================= MOBILE MENU ================= */

    const menuButton =
        document.querySelector(".menu-toggle");

    const navigation =
        document.querySelector(".nav");


    if (menuButton && navigation) {

        menuButton.addEventListener(
            "click",
            function () {

                navigation.classList.toggle("open");

            }
        );

    }


    /* ================= YEAR ================= */

    const yearElements =
        document.querySelectorAll("#year");


    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });


    /* ================= SUBSCRIBERS ================= */

    const countKey =
        "vijayashanti_art_subscribers";

    const emailsKey =
        "vijayashanti_subscriber_emails";


    function getSubscribers() {

        return JSON.parse(
            localStorage.getItem(emailsKey) || "[]"
        );

    }


    function updateCount() {

        const subscribers =
            getSubscribers();


        document
            .querySelectorAll(".subscribe-count")
            .forEach(function (element) {

                element.textContent =
                    subscribers.length;

            });

    }


    updateCount();


    /* ================= SUBSCRIBE FORM ================= */

    const form =
        document.getElementById(
            "subscribeForm"
        );


    const message =
        document.getElementById(
            "subscribeMessage"
        );


    if (form) {

        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const emailInput =
                    document.getElementById(
                        "email"
                    );


                const email =
                    emailInput.value
                        .trim()
                        .toLowerCase();


                if (!email) {

                    return;

                }


                const subscribers =
                    getSubscribers();


                /* Prevent duplicate emails */

                if (
                    subscribers.includes(email)
                ) {

                    message.textContent =
                        "This email is already subscribed.";

                    return;

                }


                subscribers.push(email);


                localStorage.setItem(
                    emailsKey,
                    JSON.stringify(subscribers)
                );


                localStorage.setItem(
                    countKey,
                    String(subscribers.length)
                );


                message.textContent =
                    "Subscribed successfully ✦";


                form.reset();


                updateCount();

            }
        );

    }

});