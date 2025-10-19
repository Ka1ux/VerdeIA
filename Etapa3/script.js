const form = document.getElementById('cadastro-form');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita reload

    // Simulação de validação
    if(form.checkValidity()) {
        feedback.textContent = "✅ Formulário enviado com sucesso!";
        feedback.className = "alert alert-success";
    } else {
        feedback.textContent = "❌ Preencha todos os campos corretamente!";
        feedback.className = "alert alert-error";
    }
    feedback.style.display = "block";


});
