document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorElement = document.getElementById('loginError');

    // Verificar os dados no localStorage
    const storedUser = localStorage.getItem('user_' + email);

    if (storedUser) {
        const userData = JSON.parse(storedUser);
        if (userData.password === password) {
            errorElement.textContent = '';
            alert('Login bem-sucedido!');
            window.location.href = './inicio.html';
            // Redirecionar para a página desejada após o login
        } else {
            errorElement.textContent = 'Senha incorreta.';
        }
    } else {
        errorElement.textContent = 'Usuário não encontrado.';
    }
});