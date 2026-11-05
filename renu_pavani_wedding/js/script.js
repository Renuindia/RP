
let doorsOpened = false;

function openWeddingDoors() {

    if (doorsOpened) return;

    doorsOpened = true;

    const entrance = document.getElementById("entrance");

    if (entrance) {
        entrance.classList.add("open");
    }

    // Wait until doors finish opening
    setTimeout(() => {

        const page2 = document.getElementById("page2");

        if (page2) {
            page2.scrollIntoView({
                behavior: "smooth"
            });
        }

    }, 2500);

}


// Automatically open doors when visitor scrolls
window.addEventListener("scroll", function () {

    if (!doorsOpened && window.scrollY > 50) {
        openWeddingDoors();
    }

});
