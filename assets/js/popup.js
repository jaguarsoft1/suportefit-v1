(function () {

    // ALTERE A DATA DA PROMOÇÃO AQUI
    const expirationDate = new Date(2026, 8, 30, 23, 59, 59);

    function promotionExpired() {
        return new Date().getTime() > expirationDate.getTime();
    }

    function updateTimer() {

        const now = new Date().getTime();
        const distance = expirationDate.getTime() - now;

        if (distance <= 0) {

            closePopup();

            const popup = document.getElementById("promoPopup");
            if (popup) {
                popup.remove(); // remove o popup do HTML
            }

            return;
        }

        document.getElementById("days").textContent =
            Math.floor(distance / (1000 * 60 * 60 * 24));

        document.getElementById("hours").textContent =
            Math.floor((distance / (1000 * 60 * 60)) % 24);

        document.getElementById("minutes").textContent =
            Math.floor((distance / (1000 * 60)) % 60);

        document.getElementById("seconds").textContent =
            Math.floor((distance / 1000) % 60);
    }

    function showPopup() {

        if (promotionExpired()) return;

        document.getElementById("promoPopup").classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closePopup() {

        document.getElementById("promoPopup").classList.remove("active");
        document.body.style.overflow = "";
    }

    function gerarUnidades() {
        const qtd = Math.floor(Math.random() * 8) + 5;
        document.getElementById("qtdUnidades").textContent = qtd;
    }

    function init() {

        // Se a promoção acabou, remove o popup e encerra
        if (promotionExpired()) {

            const popup = document.getElementById("promoPopup");

            if (popup) {
                popup.remove();
            }

            return;
        }

        gerarUnidades();

        updateTimer();

        setInterval(updateTimer, 1000);

        document.getElementById("closePopupBtn").onclick = closePopup;

        showPopup();
    }

    document.addEventListener("DOMContentLoaded", init);

})();