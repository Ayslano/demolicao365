// Função para formatar CPF
function formatCPF(cpf) {
  cpf = cpf.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  
  // Adiciona os pontos e o traço de acordo com o formato do CPF
  if (cpf.length > 3 && cpf.length <= 6) {
    cpf = cpf.replace(/(\d{3})(\d{1,3})/, '$1.$2');
  } else if (cpf.length > 6 && cpf.length <= 9) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
  } else if (cpf.length > 9) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
  }

  return cpf;
}

// Função para formatar CEP
function formatCEP(cep) {
  cep = cep.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  
  // Adiciona o traço de acordo com o formato do CEP
  if (cep.length > 5) {
    cep = cep.replace(/(\d{5})(\d{1,3})/, '$1-$2');
  }

  return cep;
}

// Adiciona os eventos de input para os campos de CPF e CEP
document.getElementById("cpf").addEventListener("input", function(event) {
  this.value = formatCPF(this.value);
});

document.getElementById("cepAcademia").addEventListener("input", function(event) {
  this.value = formatCEP(this.value);
});

// Faz a busca do endereço e do bairro ao inserir o CEP
document.getElementById("cepAcademia").addEventListener("blur", function(event) {
  var cep = this.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  if (cep != "") {
    var url = "https://viacep.com.br/ws/"+ cep +"/json/";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (!data.erro) {
          document.getElementById("logradouro").value = data.logradouro;
          document.getElementById("bairro").value = data.bairro;
          document.getElementById("cidade").value = data.localidade; // Adicionando cidade
          document.getElementById("estado").value = data.uf; // Adicionando estado
        } else {
          alert("CEP não encontrado. Por favor, insira um CEP válido.");
        }
      })
      .catch(error => {
        console.error('Erro ao buscar CEP:', error);
      });
  }
});

// Adicione o restante do seu código aqui
document.getElementById("cadastroProfessorForm").addEventListener("submit", function(event) {
  event.preventDefault(); // previne o envio do formulário para teste
  
  // Pegar os valores dos campos
  var nomeCompleto = document.getElementById("nomeCompleto").value.trim();
  var cpf = document.getElementById("cpf").value.trim();
  var razaoSocial = document.getElementById("razaoSocial").value.trim();
  var nomeAcademia = document.getElementById("nomeAcademia").value.trim();
  var nomeEquipe = document.getElementById("nomeEquipe").value.trim();
  var dataCriacaoEquipe = document.getElementById("dataCriacaoEquipe").value.trim();
  var responsavelTecnico = document.getElementById("responsavelTecnico").value.trim();
  var email = document.getElementById("email").value.trim();
  var numeroContato = document.getElementById("numeroContato").value.trim();
  var cepAcademia = document.getElementById("cepAcademia").value.trim();
  var assinaturaResponsavel = document.getElementById("assinaturaResponsavel").value.trim();
  var logoEquipe = document.getElementById("logoEquipe").value.trim(); // Verificação de upload de arquivo seria diferente
  
  // Validar os campos (coloque aqui a lógica de validação)
  
  // Se todos os campos estiverem válidos, redirecione para a página de sucesso
  window.location.href = "cadastro_sucesso.html";
});

// Script para apos ter feito o login
document.addEventListener("DOMContentLoaded", function() {
  // Seleciona o formulário de login
  const loginForm = document.getElementById('loginForm');

  // Adiciona um evento de submissão ao formulário
  loginForm.addEventListener('submit', function(event) {
    // Impede o comportamento padrão de envio do formulário
    event.preventDefault();

    // Obtém os valores de usuário e senha
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar lógica para verificar o nome de usuário e senha
    // Se as credenciais estiverem corretas, redirecione o usuário para outra página
    // Por exemplo:
    if (username === 'usuario' && password === 'senha') {
      // Redireciona para a página desejada
      window.location.href = 'dashboard.html';
    } else {
      // Se as credenciais estiverem incorretas, você pode exibir uma mensagem de erro ou fazer o que for apropriado
      //alert('Credenciais incorretas. Tente novamente.');
    }
  });
});
