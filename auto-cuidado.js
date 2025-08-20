document.addEventListener('DOMContentLoaded', function() {
    // Seleção de emoji com feedback visual
    const emojiOptions = document.querySelectorAll('.emoji-option');
    let selectedEmotion = null;

    emojiOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove seleção anterior
            emojiOptions.forEach(opt => {
                opt.classList.remove('selected');
                opt.querySelector('.emoji-circle').style.transform = 'scale(1)';
            });
            
            // Adiciona seleção atual com animação
            this.classList.add('selected');
            this.querySelector('.emoji-circle').style.transform = 'scale(1.1)';
            selectedEmotion = this.getAttribute('data-value');
            
            // Feedback tátil
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Envio do formulário
    const form = document.getElementById('assessmentForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação
            if (!selectedEmotion) {
                showAlert('Por favor, selecione como você está se sentindo hoje');
                return;
            }
            
            const formData = {
                emotion: selectedEmotion,
                question1: form.querySelector('textarea:nth-of-type(1)').value,
                question2: form.querySelector('textarea:nth-of-type(2)').value,
                question3: form.querySelector('textarea:nth-of-type(3)').value,
                timestamp: new Date().toISOString()
            };

            // Valida respostas
            if (!formData.question1 || !formData.question2 || !formData.question3) {
                showAlert('Por favor, responda todas as perguntas');
                return;
            }
            
            // Feedback visual durante envio
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;
            
            // Simulação de envio (substituir por AJAX)
            setTimeout(() => {
                console.log('Dados enviados:', formData);
                
                // Reset do formulário
                form.reset();
                emojiOptions.forEach(opt => opt.classList.remove('selected'));
                selectedEmotion = null;
                
                // Restaura botão
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Feedback de sucesso
                showAlert('Avaliação enviada com sucesso!', 'success');
                
                // Redirecionar após 2 segundos (opcional)
                // setTimeout(() => window.location.href = 'dashboard.html', 2000);
            }, 2000);
        });
    }
    
    // Função para mostrar alertas estilizados
    function showAlert(message, type = 'error') {
        const alertBox = document.createElement('div');
        alertBox.className = `alert-box ${type}`;
        alertBox.innerHTML = `
            <i class="fas fa-${type === 'error' ? 'exclamation-circle' : 'check-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(alertBox);
        
        setTimeout(() => {
            alertBox.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            alertBox.classList.remove('show');
            setTimeout(() => alertBox.remove(), 300);
        }, 4000);
    }
});