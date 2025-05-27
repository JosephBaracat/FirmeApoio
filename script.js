document.addEventListener('DOMContentLoaded', function() {
    // Inicializa os círculos de progresso
    initProgressCircles();
    
    // Navegação da sidebar
    const navItems = document.querySelectorAll('.main-nav li');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Interação com os cards do dashboard
    const dashboardCards = document.querySelectorAll('.dashboard-card');
    dashboardCards.forEach(card => {
        card.addEventListener('click', function() {
            // Efeito visual ao clicar
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Aqui você pode adicionar a navegação real
            const cardTitle = this.querySelector('h3').textContent;
            console.log(`Card clicado: ${cardTitle}`);
        });
    });
    
    // Botões dos cards
    const cardButtons = document.querySelectorAll('.card-button');
    cardButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Evita que o evento do card seja acionado
            console.log(`Botão clicado: ${this.textContent}`);
        });
    });
    
    // Notificações
    const notifications = document.querySelector('.notifications');
    notifications.addEventListener('click', function() {
        console.log('Notificações clicadas');
        // Aqui você pode mostrar um dropdown de notificações
    });
});

function initProgressCircles() {
    const progressCircles = document.querySelectorAll('.progress-circle');
    
    progressCircles.forEach(circle => {
        const progress = circle.getAttribute('data-progress');
        const fill = circle.querySelector('.progress-fill');
        
        // Calcula o comprimento da circunferência (2πr)
        const radius = fill.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        
        // Define o comprimento do traço
        fill.style.strokeDasharray = circumference;
        
        // Define o deslocamento do traço com base no progresso
        const offset = circumference - (progress / 100) * circumference;
        fill.style.strokeDashoffset = offset;
    });
}

//  Modal de Login 
const userSection = document.querySelector('.user-section');
const loginModal = document.getElementById('loginModal');
const closeModal = document.querySelector('.close-modal');
const loginForm = document.querySelector('.login-form');

// Abrir modal ao clicar no user-section
if (userSection && loginModal) {
    userSection.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    // Fechar modal ao clicar no X
    closeModal.addEventListener('click', function() {
        loginModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    // Fechar modal ao clicar fora do conteúdo
    loginModal.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Fechar modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && loginModal.classList.contains('show')) {
            loginModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Simular login (substituir por chamada real à API)
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Validação básica
        if (!email || !password) {
            alert('Por favor, preencha todos os campos');
            return;
        }
        
        // Simulação de login (substitua por chamada AJAX/API real)
        console.log('Tentativa de login:', { email, password });
        
        // Simulação de login bem-sucedido
        setTimeout(() => {
            loginModal.classList.remove('show');
            document.body.style.overflow = 'auto';
            
            // Atualiza a seção do usuário (opcional)
            const userNameElement = document.querySelector('.user-name');
            if (userNameElement) {
                userNameElement.textContent = email.split('@')[0];
            }
            
            // Exemplo de feedback visual
            const userAvatar = document.querySelector('.user-avatar');
            if (userAvatar) {
                userAvatar.style.border = '2px solid #4CAF50';
                setTimeout(() => {
                    userAvatar.style.border = 'none';
                }, 2000);
            }
            
            alert('Login realizado com sucesso!');
        }, 1000);
    });
}
;

// Função para inicializar os círculos de progresso (mantida igual)
function initProgressCircles() {
const progressCircles = document.querySelectorAll('.progress-circle');

progressCircles.forEach(circle => {
    const progress = circle.getAttribute('data-progress');
    const fill = circle.querySelector('.progress-fill');
    
    // Calcula o comprimento da circunferência (2πr)
    const radius = fill.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    
    // Define o comprimento do traço
    fill.style.strokeDasharray = circumference;
    
    // Define o deslocamento do traço com base no progresso
    const offset = circumference - (progress / 100) * circumference;
    fill.style.strokeDashoffset = offset;
});
}