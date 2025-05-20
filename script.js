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