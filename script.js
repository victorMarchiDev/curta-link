function shortenUrl() {
    const url = document.getElementById("urlInput").value;
    const copyButton = document.getElementById("copyButton");

    // Restaura o estado do botão antes de gerar uma nova URL
    copyButton.innerText = "Copiar URL";  // Texto inicial do botão
    copyButton.style.opacity = 1;  // Opacidade normal
    copyButton.style.transition = "none";  // Remove transição enquanto muda o estado do botão

    fetch("https://api-13ah.onrender.com/shorten-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Resposta da API:", data);
        document.getElementById("shortUrl").href = data.url;
        document.getElementById("shortUrl").innerText = data.url;
        document.getElementById("result").style.display = "block";
    })
    .catch(error => console.error("Erro ao encurtar URL:", error));
}

function copyToClipboard() {
    const shortUrl = document.getElementById("shortUrl").href;
    const copyButton = document.getElementById("copyButton");

    // Usa a API de Clipboard para copiar o link
    navigator.clipboard.writeText(shortUrl)
        .then(() => {
            // Altera o texto e diminui a opacidade do botão
            copyButton.innerText = "Copiado!";
            copyButton.style.opacity = 0.5; // Reduz a opacidade

            // Adiciona uma transição suave para a opacidade
            copyButton.style.transition = "opacity 0.3s ease";
        })
        .catch(err => {
            console.error("Erro ao copiar para a área de transferência: ", err);
        });
}
