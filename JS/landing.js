
    function toggleMenu() {
        const menu = document.getElementById('mobileMenu');
        menu.classList.toggle('show');
    }

    // Cerrar el menú automáticamente al hacer clic en un enlace
    document.querySelectorAll('.menu nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobileMenu').classList.remove('show');
        });
    });
