document.addEventListener("DOMContentLoaded", function() {
    var imageUrl = "https://lh3.googleusercontent.com/pw/AP1GczPJzUfqeLXChFTBsV6ACOu2yrBwaO9b9b3xP8AQVOlldgXR8jGcPxwJq60og6nquJ-ggUYdIvhSuMDA8Q5nEyLmoJ3exzsf8CdBdV_rL4sOoDdLHZz8ykLC0uzyYqaMS4m39q7ke84vyZieUj36fs52YhUX1UQ4mxD7ErieUSLxfkhszZgm7zT9Nmj7DH75QejIDrnexYZIrbZdVY9asfXQoLb7yEIQZnWrXUxjFBYxXLVk2ZS5cqMldD7QoUf5dEwdHXFCocTqiu_zGbYUmTy_ZntvvnjXm7J5xPm47cB2QX1Uz3saS_MQ1eIi6bcWV_ZZmve-GAyvTsZ7_QdowGpzF5sONll0rrUF7lb4Z5ZBORG4eng3HD76_r-E_Ki357jlyO5MgIeFnyJ_bZ78b7P4tRztWcf49_vI0JxtB76cx3DuZyiE91r7msu4gX8lmM5vc6G6HSZ0E6aGc0Do0VcU-G_UB_q-efyEfeLwFDBM3UmIlI32Y-4ZCyeIaY1L2embje01Or9WGzVvdc3qe0s9inuekX9atvAbG6BGs3lWvujW8cZ7QlMlDhjx0c4xko9wvoYeRP4_HxdNg5bOiY2ygmLFCKMzy3qtvdofvpbvnS8UbIvSYUqhiT1Ce3smsJXyGkjVwtJ5flvwhzPrJHCAvMmjNnvQlwh2sE_pbcT2ekFgs4wxdALt5fXwYwUHpi821P55A88OhE4gpZ7E3SJHG6BuKgCGJDMNg8Lz79iIWH2oxEXt7BYSrcyv4B_o5gmu35Ql68z9q-7V0YeuSO3pmrpqOGZhDrXcX9F4q_p07nOKbEQp4h3xnPbWcLwDwTYktlfgwu7HsmQEtMDM6x3oMbHjB5BGhH_1x-Uj7LTyZMQhcR020lviRo9-o5CMs7BCDxkZGMlrE3NEnQIkDP3jCvNZboxDZsOByi_bAXhjtURo3HieZQDEEjDW=w500-h500-s-no-gm?authuser=0"; // URL da sua imagem

    // Cria uma nova imagem
    var img = new Image();

    // Define a URL da imagem
    img.src = imageUrl;

    // Ao carregar a imagem
    img.onload = function() {
        // Define a função para ajustar o tamanho da imagem
        function adjustImageSize() {
            var imageSize = Math.min(window.innerWidth, window.innerHeight) * 1.9; // Defina a porcentagem desejada (por exemplo, 80% da menor dimensão)
            document.body.style.backgroundImage = "url('" + imageUrl + "')";
            document.body.style.backgroundColor = 
            document.body.style.backgroundSize = "520px"; // Ajusta o tamanho da imagem para cobrir toda a tela
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "no-repeat"; // Não repete a imagem
            document.body.style.minHeight = "100vh";
            document.body.style.margin = "0";
            document.body.style.padding = "0";
            document.body.style.display = "flex";
            document.body.style.justifyContent = "center";
            document.body.style.alignItems = "center";
        }
        // Chama a função para ajustar o tamanho da imagem
        adjustImageSize();

        // Adiciona um ouvinte de evento de redimensionamento da janela
        window.addEventListener("resize", adjustImageSize);
    };

    // Login falhou
    session_start();
    $_SESSION['mensagem'] = "E-mail ou senha incorretos. Por favor, reveja suas credenciais.";
    header("Location: index.html");
    exit(); // Finaliza o script para evitar que o restante do código seja executado
});