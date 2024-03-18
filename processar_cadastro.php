<?php
// Inclua o arquivo de configuração do banco de dados

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

// Recupere os dados do formulário
$nomeCompleto = $_POST['nomeCompleto'];
$cpf = $_POST['cpf'];
$razaoSocial = $_POST['razaoSocial'];
$nomeAcademia = $_POST['nomeAcademia'];
$nomeEquipe = $_POST['nomeEquipe'];
$dataCriacaoEquipe = $_POST['dataCriacaoEquipe'];
$responsavelTecnico = $_POST['responsavelTecnico'];
$email = $_POST['email'];
$numeroContato = $_POST['numeroContato'];
$cepAcademia = $_POST['cepAcademia'];
$logradouro = $_POST['logradouro'];
$bairro = $_POST['bairro'];
$estado = $_POST['estado'];
$cidade = $_POST['cidade'];
$assinaturaResponsavel = $_POST['assinaturaResponsavel'];

// Insira os dados na tabela do banco de dados
$sql = "INSERT INTO cadastro_professores (nomeCompleto, cpf, razaoSocial, nomeAcademia, nomeEquipe, dataCriacaoEquipe, responsavelTecnico, email, numeroContato, cepAcademia, logradouro, bairro, estado, cidade, assinaturaResponsavel) VALUES ('$nomeCompleto', '$cpf', '$razaoSocial', '$nomeAcademia', '$nomeEquipe', '$dataCriacaoEquipe', '$responsavelTecnico', '$email', '$numeroContato', '$cepAcademia', '$logradouro', '$bairro', '$estado', '$cidade', '$assinaturaResponsavel')";

if ($conn->query($sql) === TRUE) {
    echo "Cadastro realizado com sucesso.";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

// Feche a conexão com o banco de dados
$conn->close();
?>
