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

