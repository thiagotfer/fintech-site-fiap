// Função para validar CPF e senha
function validarLogin(event) {
    event.preventDefault();


    const cpf = document.querySelector('.campo-cpf').value;
    const senha = document.querySelector('.campo-senha').value;

    // Verifica se CPF e senha são "123"
    if (cpf === "123" && senha === "123") {
        window.location.href = "dashboard.html"; 
    } else {
        alert("CPF ou senha inválidos. Tente novamente!");
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.querySelector('.form-login');
    if (formLogin) {
        formLogin.addEventListener('submit', validarLogin);
    }
});





    // Função para formatar a data e hora
function atualizarDataHora() {
    const opcoes = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const agora = new Date();

    // Formata data
    const dataFormatada = agora.toLocaleDateString('pt-BR', opcoes);

    // Formata hora
    const horaFormatada = agora.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
        });

    // Atualiza o elemento no cabeçalho
    document.getElementById('data-hora').textContent = `${dataFormatada} - ${horaFormatada}`;
    }

// Atualiza a data e hora ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    atualizarDataHora();
    setInterval(atualizarDataHora, 1000);
    });

