/* =========================================================
   BIRTHDAY SURPRISE
   FRESH SCRIPT.JS
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           MUSIC
        ================================================= */

        const music =
            document.getElementById(
                "backgroundMusic"
            );

        const musicButton =
            document.getElementById(
                "musicButton"
            );


        if (music) {

            music.volume = 0.35;

        }


        /* =================================================
           OPEN SURPRISE
        ================================================= */

        const surpriseButton =
            document.querySelector(
                'a[href="./mystery.html"]'
            );


        if (
            surpriseButton &&
            music
        ) {

            surpriseButton.addEventListener(
                "click",
                function () {

                    music.play()
                        .then(function () {

                            localStorage.setItem(
                                "birthdayMusic",
                                "playing"
                            );

                        })
                        .catch(function (error) {

                            console.log(
                                "Music autoplay blocked:",
                                error
                            );

                        });

                }
            );

        }


        /* =================================================
           MUSIC BUTTON
        ================================================= */

        if (
            music &&
            musicButton
        ) {

            musicButton.addEventListener(
                "click",
                function () {

                    if (music.paused) {

                        music.play()
                            .then(function () {

                                musicButton.innerHTML =
                                    "🔊";

                                musicButton.classList.add(
                                    "playing"
                                );

                                localStorage.setItem(
                                    "birthdayMusic",
                                    "playing"
                                );

                            })
                            .catch(function () {

                                console.log(
                                    "Music could not play."
                                );

                            });

                    } else {

                        music.pause();

                        musicButton.innerHTML =
                            "🎵";

                        musicButton.classList.remove(
                            "playing"
                        );

                        localStorage.setItem(
                            "birthdayMusic",
                            "paused"
                        );

                    }

                }
            );


            /* =============================================
               RESTORE MUSIC STATE
            ============================================= */

            const savedState =
                localStorage.getItem(
                    "birthdayMusic"
                );


            if (
                savedState === "playing"
            ) {

                music.play()
                    .then(function () {

                        musicButton.innerHTML =
                            "🔊";

                        musicButton.classList.add(
                            "playing"
                        );

                    })
                    .catch(function () {

                        musicButton.innerHTML =
                            "🎵";

                    });

            }

        }


        /* =================================================
           GIFT BOX ANIMATION
        ================================================= */

        const giftBoxes =
            document.querySelectorAll(
                ".cute-gift"
            );


        giftBoxes.forEach(
            function (gift) {

                gift.addEventListener(
                    "click",
                    function () {

                        gift.classList.add(
                            "gift-clicked"
                        );


                        setTimeout(
                            function () {

                                gift.classList.remove(
                                    "gift-clicked"
                                );

                            },
                            500
                        );

                    }
                );

            }
        );


        /* =================================================
           FINAL PAGE HEARTS
        ================================================= */

        const finalPage =
            document.querySelector(
                ".final-page"
            );


        if (finalPage) {

            setInterval(
                createHeart,
                900
            );

        }


    }
);


/* =========================================================
   CREATE FLOATING HEART
========================================================= */

function createHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "floating-heart";


    heart.innerHTML =
        Math.random() > 0.5
            ? "❤️"
            : "💕";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (14 + Math.random() * 22)
        + "px";


    heart.style.animationDuration =
        (4 + Math.random() * 3)
        + "s";


    document.body.appendChild(
        heart
    );


    setTimeout(
        function () {

            heart.remove();

        },
        7000
    );

}