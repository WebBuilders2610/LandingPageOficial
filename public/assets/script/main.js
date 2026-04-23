
        const hamburger = document.getElementById('hamburger');
        const navContainer = document.getElementById('nav-container');

        hamburger.addEventListener('click', () => {
            navContainer.classList.toggle('active');
            hamburger.textContent = navContainer.classList.contains('active') ? '✕' : '☰';
        });

        // Cerrar menú al hacer click en un link
        document.querySelectorAll('.nav_links a').forEach(link => {
            link.addEventListener('click', () => {
                navContainer.classList.remove('active');
                hamburger.textContent = '☰';
            });
        });