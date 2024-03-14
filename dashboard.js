document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll('.menu');
    menuLinks.forEach(function(menuLink) {
        menuLink.addEventListener('click', function(event) {
            event.preventDefault();
            const submenu = this.nextElementSibling;
            const isSubMenuVisible = submenu.style.display === 'block';

            // Oculta todos os submenus
            document.querySelectorAll('.submenu').forEach(function(item) {
                item.style.display = 'none';
            });

            // Exibe o submenu clicado, se estiver oculto; oculta, caso contrário
            submenu.style.display = isSubMenuVisible ? 'none' : 'block';
        });
    });

    // Referência ao botão de logout
    const logoutButton = document.getElementById('logoutButton');

    // Adiciona um evento de clique ao botão de logout
    logoutButton.addEventListener('click', () => {
        // Exibe um prompt de confirmação
        const confirmLogout = confirm("Tem certeza que deseja sair?");
        
        // Verifica se o usuário confirmou o logout
        if (confirmLogout) {
            // Adicione a lógica de logout aqui
            // Por exemplo, redirecionar para uma página de login
            window.location.href = 'index.html';
        }
    });

    $(document).ready(function(){
        $(".menu").click(function(){
            $(".keep").toggleClass("width");
        });
    });
});
