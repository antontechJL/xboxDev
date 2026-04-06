document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. TUS DATOS DE APLICACIONES
    // ==========================================
    const appData = [
        {
            title: "XBOX USB PERMISSIONS TOOL",
            desc: "¡Una herramienta sencilla y esencial para configurar tu USB para consola!",
            warningText: "*¡SOLO EN WINDOWS!*",
            warningClass: "text-red",
            img: "img/xboxUsbTools.png",
            bgClass: "bg-blue",
            btnText: "Download",
            downloadUrl: "https://drive.google.com/uc?export=download&id=12oaHXpih-w_eajD0z9BR2VDoSrVit_5i", 
            officialUrl: "https://pagina-oficial.com"
        },
        {
            title: "SAFE EXIT",
            desc: "¡Te permite volver rápidamente al modo comercial (retail) con facilidad!",
            warningText: "",
            warningClass: "",
            img: "img/safeexit.png",
            bgClass: "bg-blue",
            btnText: "Download",
            downloadUrl: "https://drive.google.com/uc?export=download&id=1_7uDjTEgEUy9hEyXzxBIPRF9lVboNAFp", 
            officialUrl: "https://pagina-oficial.com"
        },
        /*{
            title: "SFTP",
            desc: "SFTP puede transferir archivos a tu Xbox a través de una red local, tanto al almacenamiento interno como al USB.",
            warningText: "",
            warningClass: "",
            img: "img/sftp.png",
            bgClass: "bg-dark-blue",
            btnText: "Download",
            downloadUrl: "https://t.me/tuGrupoDeTelegram", 
            officialUrl: "https://pagina-oficial.com"
        },*/
        {
            title: "LAUNCHPASS",
            desc: "¡La actualización de LaunchPass llegará PRONTO!",
            warningText: "",
            warningClass: "",
            img: "img/lauchpass.png",
            bgClass: "bg-purple",
            btnText: "Download",
            downloadUrl: "https://t.me/tuGrupoDeTelegram", 
            officialUrl: "https://pagina-oficial.com"
        },
        {
            title: "MOONLIGHT",
            desc: "¡Te permite transmitir tus juegos de PC a tu Xbox! Esta aplicación también está disponible en el modo comercial.",
            warningText: "",
            warningClass: "",
            img: "img/moonlight.png",
            bgClass: "bg-yellow",
            btnText: "Download",
            downloadUrl: "https://t.me/tuGrupoDeTelegram", 
            officialUrl: "https://pagina-oficial.com"
        },
        {
            title: "RETROPASS",
            desc: "Es una interfaz gráfica que te permite abrir juegos de Dolphin, PPSSPP, RetroArch, XBSX2, Duckstation y Xenia desde una sola app. Su diseño es muy similar al de Xbox Game Pass.",
            warningText: "*¡SE NECESITA USB!*",
            warningClass: "text-red",
            img: "img/retroPass.png",
            bgClass: "bg-green",
            btnText: "Download",
            downloadUrl: "https://t.me/tuGrupoDeTelegram", 
            officialUrl: "https://pagina-oficial.com"
        },
        {
            title: "Discord",
            desc: "Un port completo de la aplicación de Discord con soporte para envío de archivos (solo imágenes) y descargas.",
            warningText: "",
            warningClass: "",
            img: "img/discord.png",
            bgClass: "bg-blue",
            btnText: "Download",
            downloadUrl: "https://t.me/tuGrupoDeTelegram", 
            officialUrl: "https://pagina-oficial.com"
        },
        {
            title: "X",
            desc: "¡La famosa red social!",
            warningText: "",
            warningClass: "",
            img: "img/X.png",
            bgClass: "bg-dark",
            btnText: "Download",
            downloadUrl: "https://t.me/tuGrupoDeTelegram", 
            officialUrl: "https://pagina-oficial.com"
        },
        {
            title: "XB Cloud Gaming",
            desc: "Tiene un modo PIP (Picture in Picture), puede usarse como navegador, usar el chat de grupo de Xbox, y algunas funciones más.",
            warningText: "*¡CONFIGURAR COMO APP!*",
            warningClass: "text-orange",
            img: "img/XBCloudGaming.png",
            bgClass: "bg-green",
            btnText: "Download",
            downloadUrl: "https://t.me/tuGrupoDeTelegram", 
            officialUrl: "https://pagina-oficial.com"
        },
        {
            title: "Oberon",
            desc: "Entrada remota para consolas Xbox. Usa casi cualquier control de otra marca con tu Xbox. Esta aplicación también está disponible en modo comercial.",
            warningText: "",
            warningClass: "",
            img: "img/Oberon.png",
            bgClass: "bg-dark-blue",
            btnText: "Download",
            downloadUrl: "https://t.me/tuGrupoDeTelegram", 
            officialUrl: "https://pagina-oficial.com"
        }
    ];

    // ==========================================
    // 2. TUS DATOS DE JUEGOS
    // ==========================================
  // --- DATOS: JUEGOS ---
    const gameData = [
        { title: "Sonic Unleashed HD", 
            desc: "Port optimizado para arquitectura Series S.", 
            warningText: "*REQ. DEV MODE*", 
            warningClass: "text-orange", 
            img: "img/sonicUnleashed.png", 
            bgClass: "bg-green", 
            btnText: "Ver Guía", 
            downloadUrl: "#", 
            officialUrl: "#" }
    ];

    // --- DATOS: EMULADORES ---
    const emulatorData = [
        { title: "RetroArch Xbox One", 
            desc: "El todo en uno para consolas clásicas.", 
            warningText: "*ALTAMENTE RECOMENDADO*", 
            warningClass: "text-orange", 
            img: "img/Retroarch.png", 
            bgClass: "bg-dark-blue", 
            btnText: "Download", 
            downloadUrl: "#", 
            officialUrl: "#" 
        },
        { title: "RetroArch Xbox Series S/X", 
            desc: "El todo en uno para consolas clásicas.", 
            warningText: "*ALTAMENTE RECOMENDADO*", 
            warningClass: "text-orange", 
            img: "img/Retroarch.png", 
            bgClass: "bg-dark-blue", 
            btnText: "Download", 
            downloadUrl: "#", 
            officialUrl: "#" 
        },
        { title: "RetroArch Xbox One LITE", 
            desc: "El todo en uno para consolas clásicas.", 
            warningText: "*ALTAMENTE RECOMENDADO*", 
            warningClass: "text-orange", 
            img: "img/RetroarchLITE.png", 
            bgClass: "bg-dark-blue", 
            btnText: "Download", 
            downloadUrl: "#", 
            officialUrl: "#" 
        },
        { title: "RetroArch Xbox Series S/X LITE", 
            desc: "El todo en uno para consolas clásicas.", 
            warningText: "*ALTAMENTE RECOMENDADO*", 
            warningClass: "text-orange", 
            img: "img/RetroarchLITE.png", 
            bgClass: "bg-dark-blue", 
            btnText: "Download", 
            downloadUrl: "#", 
            officialUrl: "#" 
        },
        { 
            title: "Xenia Canary", 
            desc: "Testeo de juegos de Xbox 360 en Series S/X.", 
            warningText: "*SOLO SERIES S/X*", 
            warningClass: "text-red", 
            img: "img/xeniacanary.png", 
            bgClass: "bg-blue", 
            btnText: "Download", 
            downloadUrl: "#", 
            officialUrl: "#" 
        },
        { 
            title: "PPSSPP", 
            desc: "Emulador de PSP con escalado a 4K.", 
            warningText: "", warningClass: "", 
            img: "img/ppsspp.png", 
            bgClass: "bg-blue", 
            btnText: "Download", 
            downloadUrl: "#", 
            officialUrl: "#" 
        }
    ];

    // --- DATOS: MEDIA APPS ---
    const mediaData = [
        { title: "Kodi", desc: "Centro multimedia definitivo para streaming.", warningText: "", warningClass: "", img: "img/kodi.png", bgClass: "bg-dark-blue", btnText: "Download", downloadUrl: "#", officialUrl: "#" },
        { title: "VLC Player", desc: "Reproductor universal de archivos locales.", warningText: "", warningClass: "", img: "img/vlc.png", bgClass: "bg-orange", btnText: "Download", downloadUrl: "#", officialUrl: "#" }
    ];

    // --- DATOS: TOOLS ---
    const toolsData = [
        { 
            title: "Godot 3.5", 
            desc: "Motor grafico para creacion de videojuegos moviles, pc y consolas.", 
            warningText: "*SOLO WINDOWS*", 
            warningClass: "text-orange", 
            img: "img/godot.png", 
            bgClass: "bg-dark-blue",
            btnText: "Download", 
            downloadUrl: "#", 
            officialUrl: "#" 
        },
    ]
    // --- FUNCIÓN DE RENDERIZADO ---
    function renderCards(dataArray, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = dataArray.map(item => `
            <div class="card">
                <div class="card-header ${item.bgClass}">
                    <div class="badge badge-yt">▶</div>
                    <div class="badge badge-dl">⬇</div>
                    <img src="${item.img}" alt="${item.title}" class="center-img">
                </div>
                <div class="card-body">
                    <h2 class="card-title">${item.title}</h2>
                    <p class="card-desc ${item.warningClass === 'text-orange' ? 'text-orange' : ''}">${item.desc}</p>
                    <p class="card-desc ${item.warningClass !== 'text-orange' ? item.warningClass : ''}">${item.warningText}&nbsp;</p>
                    <div class="card-buttons">
                        <button class="btn btn-green" onclick="window.open('${item.downloadUrl}', '_blank')">${item.btnText}</button>
                        <button class="btn btn-black" onclick="window.open('${item.officialUrl}', '_blank')">Official</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Ejecutar renderizado
    renderCards(appData, 'apps-container');
    renderCards(gameData, 'games-container');
    renderCards(emulatorData, 'emulators-container');
    renderCards(mediaData, 'media-container');
    renderCards(toolsData, 'tools-container');

    // --- ANIMACIONES ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach((card, i) => {
        setTimeout(() => observer.observe(card), i * 80);
    });

    // --- BUSCADOR DINÁMICO ---
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const sections = [
                { cont: 'apps-container', msg: 'no-results-apps' },
                { cont: 'games-container', msg: 'no-results-games' },
                { cont: 'emulators-container', msg: 'no-results-emulators' },
                { cont: 'media-container', msg: 'no-results-media' },
                { cont: 'tools-container', msg: 'no-results-tools' }
            ];

            sections.forEach(sec => {
                const container = document.getElementById(sec.cont);
                const msg = document.getElementById(sec.msg);
                if (!container) return;

                const cards = container.querySelectorAll('.card');
                let found = 0;

                cards.forEach(card => {
                    const txt = card.innerText.toLowerCase();
                    if (txt.includes(term)) {
                        card.style.display = '';
                        found++;
                    } else {
                        card.style.display = 'none';
                    }
                });
                msg.style.display = found === 0 ? 'block' : 'none';
            });
        });
    }
});

// ==========================================
// LÓGICA DEL BANNER PROMOCIONAL
// ==========================================

// 1. Mostrar el banner si el usuario no lo ha cerrado antes
document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById('promo-banner');
    
    // Si NO existe el registro en la memoria del navegador, mostramos el banner
    if (!localStorage.getItem('bannerMLCerrado')) {
        // Le damos un pequeño retraso (ej. 2 segundos) para que no salga de golpe al cargar la página
        setTimeout(() => {
            banner.style.display = 'flex';
        }, 2000); 
    }
});

// 2. Función para cerrar el banner y guardarlo en la memoria
function cerrarBanner() {
    const banner = document.getElementById('promo-banner');
    
    // Animación de salida (se desvanece y baja un poco)
    banner.style.opacity = '0';
    banner.style.transform = 'translateY(20px)';
    
    // Esperamos 300ms a que termine la animación visual antes de quitarlo del HTML
    setTimeout(() => {
        banner.style.display = 'none';
    }, 300);
    
    // ¡EL TRUCO! Guardamos en el navegador que el usuario ya cerró este banner
    localStorage.setItem('bannerMLCerrado', 'true');
}