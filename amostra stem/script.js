document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links de navegação que apontam para âncoras
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previne o comportamento padrão de "pular" para a âncora
            e.preventDefault();

            // Pega o ID da seção de destino (ex: #sumario)
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Realiza a rolagem suave até a seção
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});