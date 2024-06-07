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

