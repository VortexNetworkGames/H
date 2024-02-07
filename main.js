document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("startBot").addEventListener("click", function() {
        // Função para iniciar o bot
        alert("Bot iniciado!");
    });

    document.getElementById("stopBot").addEventListener("click", function() {
        // Função para parar o bot
        alert("Bot parado!");
    });

    document.getElementById("restartBot").addEventListener("click", function() {
        // Função para reiniciar o bot
        alert("Bot reiniciado!");
    });

    // Função para buscar e exibir arquivos do bot
    function fetchBotFiles() {
        // Simulação de busca de arquivos
        const files = ["file1.js", "file2.js", "file3.js"];

        // Atualizar a lista de arquivos no HTML
        const fileListElement = document.getElementById("fileList");
        fileListElement.innerHTML = ""; // Limpar lista existente

        files.forEach(file => {
            const listItem = document.createElement("li");
            listItem.textContent = file;
            fileListElement.appendChild(listItem);
        });
    }

    // Chamada à função de buscar arquivos quando a página carregar
    fetchBotFiles();
});
