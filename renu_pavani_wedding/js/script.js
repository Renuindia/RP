function openWeddingDoors() {
    const entrance = document.getElementById("entrance");

    if (entrance.classList.contains("open")) {
        return;
    }

    entrance.classList.add("open");

    setTimeout(function () {
        const page2 = document.getElementById("page2");

        if (page2) {
            page2.scrollIntoView({ behavior: "smooth" });
        }
    }, 2600);
}
