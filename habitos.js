// Toggle de Alto Contraste
function toggleContrast() {
    const toggle = document.querySelector('.toggle');
    const circle = document.querySelector('.toggle-circle');
    toggle.classList.toggle('active');
    
    if (toggle.classList.contains('active')) {
        toggle.style.backgroundColor = '#3a9679';
        circle.style.left = '26px';
    } else {
        toggle.style.backgroundColor = '#ccc';
        circle.style.left = '2px';
    }
}

// Abrir Modal
function openModal() {
    document.getElementById('habitModal').classList.add('active');
}

// Fechar Modal
function closeModal() {
    document.getElementById('habitModal').classList.remove('active');
    document.getElementById('habitForm').reset();
}

// Adicionar Novo Hábito
document.getElementById('habitForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('habitName').value;
    const details = document.getElementById('habitDetails').value;
    const imageUrl = document.getElementById('habitImage').value || 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=100&h=100&fit=crop';
    
    const habitCard = document.createElement('div');
    habitCard.className = 'habit-card';
    habitCard.innerHTML = `
        <img src="${imageUrl}" alt="${name}" class="habit-image">
        <div class="habit-info">
            <div class="habit-title">${name}</div>
            <div class="habit-details-label">Detalhes:</div>
            <div class="habit-description">${details}</div>
        </div>
        <div class="habit-actions">
            <button class="btn btn-complete" onclick="completeHabit(this)">Concluir</button>
            <button class="icon-btn" onclick="editHabit(this)">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
            </button>
            <button class="icon-btn delete" onclick="deleteHabit(this)">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
            </button>
        </div>
    `;
    
    document.getElementById('habitsContainer').appendChild(habitCard);
    closeModal();
});

// Concluir Hábito
function completeHabit(btn) {
    const card = btn.closest('.habit-card');
    card.style.opacity = '0.6';
    btn.textContent = 'Concluído!';
    btn.style.backgroundColor = '#4caf50';
    
    setTimeout(() => {
        card.style.opacity = '1';
        btn.textContent = 'Concluir';
        btn.style.backgroundColor = '#3a9679';
    }, 2000);
}

// Editar Hábito
function editHabit(btn) {
    alert('Funcionalidade de edição em desenvolvimento!');
}

// Excluir Hábito
function deleteHabit(btn) {
    if (confirm('Tem certeza que deseja excluir este hábito?')) {
        const card = btn.closest('.habit-card');
        card.style.transition = 'all 0.3s';
        card.style.opacity = '0';
        card.style.transform = 'translateX(-100%)';
        
        setTimeout(() => {
            card.remove();
        }, 300);
    }
}

// Fechar modal ao clicar fora
document.getElementById('habitModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});