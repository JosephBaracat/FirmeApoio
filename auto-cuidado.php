<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FIRME APOIO - Auto Cuidado</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="css/auto-cuidado.css">
    <link rel="stylesheet" href="css/sidebar.css">
</head>
<body>
    <div class="desktop-container">
        
        <?php include 'sidebar.php'; ?>

        <!-- Conteúdo Principal -->
        <main class="main-content">
            <div class="container">
                <h1>Como você está se sentindo hoje?</h1>
                <h2>Poderia responder algumas perguntas?</h2>
                
                <div class="question-container">
                    <div class="question-text">
                        <span class="question-number">1</span>
                        O que aconteceu com você?
                    </div>
                    <div class="checkbox-container">
                        <!-- <input type="checkbox" id="situation"> -->
                        <label for="situation" class="checkbox-label">Fale sobre uma situação (positiva/negativa) que aconteceu.</label>
                    </div>
                    <textarea class="text-input" placeholder="Descreva a situação aqui..."></textarea>
                </div>
                
                <div class="question-container">
                    <div class="question-text">
                        <span class="question-number">2</span>
                        O que você pensou ou sentiu sobre isso?
                    </div>
                    <div class="checkbox-container">
                        <!-- <input type="checkbox" id="feelings"> -->
                        <label for="feelings" class="checkbox-label">Digite como você agiu e se sentiu na hora da situação.</label>
                    </div>
                    <textarea class="text-input" placeholder="Descreva seus pensamentos e sentimentos aqui..."></textarea>
                </div>
                
                <div class="question-container">
                    <div class="question-text">
                        <span class="question-number">3</span>
                        Como você lidou com esta situação?
                    </div>
                    <div class="checkbox-container">
                        <!-- <input type="checkbox" id="coping"> -->
                        <label for="coping" class="checkbox-label">Conte como você agiu durante ou após a situação.</label>
                    </div>
                    <textarea class="text-input" placeholder="Descreva como você lidou com a situação aqui..."></textarea>
                </div>
                
                <button class="submit-btn">Enviar Respostas</button>
            </div>
        </main>
    </div>

    <script src="script.js"></script>
</body>
</html>