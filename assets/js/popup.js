(function() {

    const expirationDate = new Date(2026, 3, 20, 23, 59);

    function updateTimer() {
        const now = new Date().getTime();
        const distance = expirationDate.getTime() - now;

        if (distance < 0) return;

        document.getElementById('days').innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById('hours').innerHTML = Math.floor((distance / (1000 * 60 * 60)) % 24);
        document.getElementById('minutes').innerHTML = Math.floor((distance / (1000 * 60)) % 60);
        document.getElementById('seconds').innerHTML = Math.floor((distance / 1000) % 60);
    }

    function showPopup() {
        document.getElementById('promoPopup').classList.add('active');
        document.body.style.overflow = 'hidden';
        localStorage.setItem('popupShown', 'true');
    }

    function closePopup() {
        document.getElementById('promoPopup').classList.remove('active');
        document.body.style.overflow = '';
    }

    function gerarUnidades() {
        const qtd = Math.floor(Math.random() * 8) + 5;
        document.getElementById('qtdUnidades').innerText = qtd;
    }

    function init() {
        gerarUnidades();
        updateTimer();
        setInterval(updateTimer, 1000);

        document.getElementById('closePopupBtn').onclick = closePopup;

        // MOSTRAR IMEDIATAMENTE
        showPopup();
    }

    document.addEventListener('DOMContentLoaded', init);

})();