document.addEventListener('DOMContentLoaded', function() {
    // Navegação da sidebar
    const navItems = document.querySelectorAll('.main-nav li');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Efeito de clique suave
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Funcionalidade do formulário de auto-cuidado
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const textareas = document.querySelectorAll('.text-input');
    const submitBtn = document.querySelector('.submit-btn');
    
    // Adiciona interação aos checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const textarea = this.closest('.question-container').querySelector('.text-input');
            const container = this.closest('.checkbox-container');
            
            if (this.checked) {
                textarea.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                textarea.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                container.style.background = 'rgba(255, 255, 255, 0.2)';
                container.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            } else {
                textarea.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                textarea.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                container.style.background = 'rgba(255, 255, 255, 0.1)';
                container.style.borderColor = 'transparent';
            }
        });
    });
    
    // Adiciona interação aos textareas
    textareas.forEach(textarea => {
        textarea.addEventListener('focus', function() {
            const checkbox = this.closest('.question-container').querySelector('input[type="checkbox"]');
            const container = this.closest('.question-container').querySelector('.checkbox-container');
            
            checkbox.checked = true;
            this.style.borderColor = 'rgba(255, 255, 255, 0.6)';
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            container.style.background = 'rgba(255, 255, 255, 0.2)';
            container.style.borderColor = 'rgba(255, 255, 255, 0.4)';
        });
        
        textarea.addEventListener('blur', function() {
            if (this.value === '') {
                const checkbox = this.closest('.question-container').querySelector('input[type="checkbox"]');
                const container = this.closest('.question-container').querySelector('.checkbox-container');
                
                checkbox.checked = false;
                this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                container.style.background = 'rgba(255, 255, 255, 0.1)';
                container.style.borderColor = 'transparent';
            }
        });
        
        // Contador de caracteres
        textarea.addEventListener('input', function() {
            const questionContainer = this.closest('.question-container');
            let counter = questionContainer.querySelector('.char-counter');
            
            if (!counter) {
                counter = document.createElement('div');
                counter.className = 'char-counter';
                counter.style.cssText = 'font-size: 12px; color: rgba(255, 255, 255, 0.8); text-align: right; margin-top: 5px; font-weight: 500;';
                this.parentNode.appendChild(counter);
            }
            
            const count = this.value.length;
            counter.textContent = `${count} caracteres`;
            
            if (count > 500) {
                counter.style.color = 'rgba(73, 166, 79, 0.9)';
            } else if (count > 200) {
                counter.style.color = 'rgba(58, 132, 140, 0.9)';
            } else {
                counter.style.color = 'rgba(255, 255, 255, 0.8)';
            }
        });
    });
    
    // Adiciona funcionalidade ao botão de enviar
    submitBtn.addEventListener('click', function() {
        const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const filledTextareas = Array.from(textareas).filter(textarea => textarea.value.trim() !== '');
        
        if (checkedBoxes.length === 0 && filledTextareas.length === 0) {
            showNotification('Por favor, responda pelo menos uma pergunta antes de enviar.', 'warning');
            return;
        }
        
        // Simulação de envio
        const originalText = this.textContent;
        this.textContent = 'Enviando...';
        this.disabled = true;
        this.style.opacity = '0.8';
        
        // Efeito de loading
        const loadingInterval = setInterval(() => {
            this.textContent = this.textContent + '.';
            if (this.textContent.length > originalText.length + 3) {
                this.textContent = 'Enviando';
            }
        }, 500);
        
        setTimeout(() => {
            clearInterval(loadingInterval);
            showNotification('Obrigado por compartilhar suas respostas! Suas reflexões foram salvas com sucesso.', 'success');
            
            this.textContent = originalText;
            this.disabled = false;
            this.style.opacity = '1';
            
            // Limpar formulário
            checkboxes.forEach(checkbox => checkbox.checked = false);
            textareas.forEach(textarea => {
                textarea.value = '';
                textarea.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                textarea.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                const counter = textarea.parentNode.querySelector('.char-counter');
                if (counter) counter.remove();
            });
            
            // Reset dos containers
            document.querySelectorAll('.checkbox-container').forEach(container => {
                container.style.background = 'rgba(255, 255, 255, 0.1)';
                container.style.borderColor = 'transparent';
            });
            
        }, 3000);
    });

    // Funcionalidade do toggle de alto contraste
    const contrastToggle = document.querySelector('.contraste input[type="checkbox"]');
    contrastToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('high-contrast');
            showNotification('Modo alto contraste ativado', 'info');
        } else {
            document.body.classList.remove('high-contrast');
            showNotification('Modo alto contraste desativado', 'info');
        }
    });

    // Sistema de notificações
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px 24px;
            border-radius: 12px;
            color: white;
            font-weight: 600;
            z-index: 1000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 400px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
        `;
        
        // Aplicar gradientes baseados no tipo
        if (type === 'success') {
            notification.style.background = 'linear-gradient(135deg, #3F8C68 0%, #49A64F 100%)';
        } else if (type === 'warning') {
            notification.style.background = 'linear-gradient(135deg, #3A848C 0%, #2B678C 100%)';
        } else {
            notification.style.background = 'linear-gradient(135deg, #2B678C 0%, #3A848C 50%, #3F8C68 100%)';
        }
        
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animação de entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remover após 5 segundos
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    // Efeito de digitação no título
    const title = document.querySelector('h1');
    const originalTitle = title.textContent;
    title.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < originalTitle.length) {
            title.textContent += originalTitle.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Iniciar efeito de digitação após um breve delay
    setTimeout(typeWriter, 500);
});