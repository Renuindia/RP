
let doorsOpened = false;

function openWeddingDoors() {

    if (doorsOpened) return;

    doorsOpened = true;

    document.getElementById("entrance")
        .classList.add("open");

    // Wait until the doors open
    setTimeout(() => {

        // Show your second page here
        const page2 = document.getElementById("page2");

        if (page2) {
            page2.scrollIntoView({
                behavior: "smooth"
            });
        }

    }, 2000);
}

// Open doors when visitor scrolls
window.addEventListener("wheel", function(e) {

    if (!doorsOpened && e.deltaY > 0) {
        openWeddingDoors();
    }

}, { passive: true });
