<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Firme Apoio - Conteúdo</title>
    <link rel="stylesheet" href="./css/conteudo.css">
</head>
<body>
    <!-- Sidebar -->
    <div class="sidebar">
        <div class="logo">
            <div class="logo-icon">+</div>
            <div class="logo-text">FIRME APOIO</div>
        </div>

        <div class="menu">
            <div class="menu-item">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
                <span>Início</span>
            </div>

            <div class="menu-item">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                <span>Conteúdos</span>
            </div>

            <div class="menu-item active">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
                <span>Auto Cuidado</span>
            </div>

            <div class="menu-item">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <span>Desabafo</span>
            </div>

            <div class="menu-item">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <span>Ajuda Externa</span>
            </div>
        </div>

        <div class="sidebar-footer">
            <div class="contrast-toggle">
                <span>Alto Contraste</span>
                <div class="toggle" onclick="toggleContrast()">
                    <div class="toggle-circle"></div>
                </div>
            </div>

            <div class="user-profile">
                <div class="user-avatar">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                </div>
                <div class="user-info">
                    <div class="user-name">Rosimeire Webber</div>
                    <div class="user-status">Online</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
        <div class="header">
            <div class="nav-tabs">
                <div class="nav-tab">Análise</div>
                <div class="nav-tab active">Hábitos</div>
                <div class="nav-tab">Exercícios</div>
            </div>
        </div>

        <div class="content-area">
            <h1 class="page-title">Seus Hábitos</h1>

            <div id="habitsContainer">
                <!-- Habit 1 -->
                <div class="habit-card">
                    <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=100&h=100&fit=crop" alt="Livros" class="habit-image">
                    <div class="habit-info">
                        <div class="habit-title">Ler um Livro</div>
                        <div class="habit-details-label">Detalhes:</div>
                        <div class="habit-description">Leia pelo menos 1 livro neste mês</div>
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
                </div>

                <!-- Habit 2 -->
                <div class="habit-card">
                    <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=100&h=100&fit=crop" alt="Meditação" class="habit-image">
                    <div class="habit-info">
                        <div class="habit-title">Meditação</div>
                        <div class="habit-details-label">Detalhes:</div>
                        <div class="habit-description">Medite por 30 minutos por dia</div>
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
                </div>
            </div>
        </div>

        <!-- New Habit Button -->
        <button class="new-habit-btn" onclick="openModal()">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
            </svg>
            Novo Hábito
        </button>
    </div>

    <!-- Modal -->
    <div class="modal" id="habitModal">
        <div class="modal-content">
            <h2 class="modal-title">Novo Hábito</h2>
            <form id="habitForm">
                <div class="form-group">
                    <label class="form-label">Nome do Hábito</label>
                    <input type="text" class="form-input" id="habitName" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Detalhes</label>
                    <input type="text" class="form-input" id="habitDetails" required>
                </div>
                <div class="form-group">
                    <label class="form-label">URL da Imagem</label>
                    <input type="url" class="form-input" id="habitImage" placeholder="https://...">
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-cancel" onclick="closeModal()">Cancelar</button>
                    <button type="submit" class="btn btn-submit">Adicionar</button>
                </div>
            </form>
        </div>
    </div>

    <script src="conteudo.js"></script>
</body>
</html>