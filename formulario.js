document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');

    form.addEventListener('submit', function(event) {
        // Impede o envio padrão do formulário e o recarregamento da página
        event.preventDefault();

        // Cria um objeto com os dados do formulário
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Atualiza o texto de status para indicar que está enviando
        statusMessage.textContent = 'Enviando...';
        statusMessage.style.color = '#ff69b4'; // Rosa

        // Simula o envio de dados para o servidor
        // Em um cenário real, você faria uma requisição 'fetch' para um endpoint
        setTimeout(() => {
            // Supondo que o envio foi bem-sucedido
            statusMessage.textContent = 'Mensagem enviada com sucesso! 💖';
            statusMessage.style.color = '#4CAF50'; // Verde
            form.reset(); // Limpa os campos do formulário
        }, 2000); // Atraso de 2 segundos para simular a resposta do servidor
    });
});