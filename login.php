<?php
// Verifica se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se ambos os campos de e-mail e senha foram preenchidos
    if (!empty($_POST['email']) && !empty($_POST['senha'])) {
        // Supondo que você tenha um banco de dados configurado e uma tabela de usuários chamada 'usuarios'

        $servername = "sql105.infinityfree.com"; // ou o endereço do seu servidor MySQL
        $username = "if0_36104329"; // Nome de usuário do MySQL
        $password = "XNHKF7e5ib"; // Senha do MySQL
        $dbname = "if0_36104329_users"; // Nome do banco de dados

        // Cria uma conexão com o banco de dados
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Verifica a conexão
        if ($conn->connect_error) {
            die("Erro na conexão: " . $conn->connect_error);
        }

        // Escapa os valores dos campos para evitar injeção de SQL
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $senha = mysqli_real_escape_string($conn, $_POST['senha']);

        // Consulta SQL para verificar se o usuário existe
        $sql = "SELECT * FROM usuarios WHERE email='$email' AND senha='$senha'";
        $result = $conn->query($sql);

        // Verifica se o resultado da consulta retornou algum registro
        if ($result->num_rows > 0) {
            // Login bem-sucedido
            echo "Login bem-sucedido!";
            // Redireciona para a página de perfil do usuário
             header("Location: dashboard.html");

        } else {
            
           // Login falhou
                session_start();
                $_SESSION['mensagem'] = "E-mail ou senha incorretos. Por favor, reveja suas credenciais.";
                header("Location: index.html");
                exit(); // Finaliza o script para evitar que o restante do código seja executado
            }
            
            

        // Fecha a conexão com o banco de dados
        $conn->close();
    } else {
        // Mensagem de erro se os campos estiverem vazios
        echo "Por favor, preencha todos os campos!";
    }
}

<?php

// Conectando ao banco de dados MySQL

$servername = "sql105.infinityfree.com"; // ou o endereço do seu servidor MySQL
$username = "if0_36104329"; // Nome de usuário do MySQL
$password = "XNHKF7e5ib"; // Senha do MySQL
$dbname = "if0_36104329_users"; // Nome do banco de dados

// Criando a conexão
$conexao = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conexao->connect_error) {
    die("Conexão falhou: " . $conexao->connect_error);
}

// Obter os dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];

// Inserir os dados na tabela "usuarios"
$sql = "INSERT INTO usuarios (nome, email, senha) VALUES ('$nome', '$email', '$senha')";

if ($conexao->query($sql) === TRUE) {
    // Redirecionar para cadastro_sucesso.html após o cadastro bem-sucedido
    header("Location: cadastro_sucesso.html");
    exit;
} else {
    echo "Erro ao cadastrar: " . $conexao->error;
}

// Fechar a conexão com o banco de dados
$conexao->close();

?>

