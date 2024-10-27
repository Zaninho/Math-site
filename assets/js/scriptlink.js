    // Detecta o sistema operacional do dispositivo
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const appLinks = document.querySelectorAll('.app-link'); // Seleciona todos os links com a classe 'app-link'

    appLinks.forEach(link => {
        let iosLink = link.getAttribute('data-ios-link');
        let androidLink = link.getAttribute('data-android-link');
        let webLink = link.getAttribute('data-web-link');

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            // Dispositivo Apple (iOS)
            link.href = iosLink; // Define o link para a App Store
        } else if (/android/i.test(userAgent)) {
            // Dispositivo Android
            link.href = androidLink; // Define o link para o Google Play
        } else if (/Win/.test(userAgent)) {
            // Dispositivo Windows
            link.href = webLink; // Define o link para a versão Web
        } else {
            link.href = "#"; // Caso contrário, mantém o link em branco ou define uma mensagem
            link.textContent = "App não disponível para este dispositivo.";
        }
    });