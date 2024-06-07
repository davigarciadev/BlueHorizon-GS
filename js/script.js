let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Initialize the slider
showSlide(currentSlide);





document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorElement = document.getElementById('signupError');

    function isEmailValid(signupEmail) {
        const emailRegex = new RegExp(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/
        );
        return emailRegex.test(signupEmail);
    }

    if (email === "" || !isEmailValid(email)) {
        errorElement.textContent = "Por favor, preencha o seu email corretamente.";
        return;
    }

    if (password === "") {
        errorElement.textContent = "Por favor, crie uma senha.";
        return;
    }

    if (password !== confirmPassword) {
        errorElement.textContent = "As senhas não coincidem.";
        return;
    }

    errorElement.textContent = '';
    alert('Cadastro bem-sucedido!');


    document.getElementById("signupEmail").value = "";
    document.getElementById("signupPassword").value = "";
    document.getElementById("confirmPassword").value = "";

    const userData = { email: email, password: password };
            localStorage.setItem('user_' + email, JSON.stringify(userData));

            errorElement.textContent = '';
            alert('Cadastro bem-sucedido!');
            window.location.href = './login.html';
});

let indiceAtual = 0;
        const imagensBackground = [
            'imagem1.jpg',
            'imagem2.jpg',
            'imagem3.jpg'
        ];

        const containerMain = document.getElementById('containerMain');
        const tituloMain = document.querySelector('.titulo-main');

        function trocarImagem(n) {
            indiceAtual += n;
            if (indiceAtual >= imagensBackground.length) {
                indiceAtual = 0;
            } else if (indiceAtual < 0) {
                indiceAtual = imagensBackground.length - 1;
            }
            const imagemAtual = imagensBackground[indiceAtual];
            containerMain.style.backgroundImage = `url(${imagemAtual})`;
            // Atualiza o texto conforme a imagem atual (opcional)
            atualizarTexto(imagemAtual);
        }

        function atualizarTexto(imagem) {
            switch (imagem) {
                case 'imagem1.jpg':
                    tituloMain.innerHTML = 'Texto para a Imagem 1';
                    break;
                case 'imagem2.jpg':
                    tituloMain.innerHTML = 'Texto para a Imagem 2';
                    break;
                case 'imagem3.jpg':
                    tituloMain.innerHTML = 'Texto para a Imagem 3';
                    break;
                default:
                    tituloMain.innerHTML = 'Texto padrão';
                    break;
            }
        }