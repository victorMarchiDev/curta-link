function shortenUrl() {
    const url = document.getElementById("urlInput").value; // Agora "url" está definida!

    fetch("http://localhost:8080/shorten-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url }) // Agora funciona!
    })
    .then(response => response.json())
    .then(data => {
        console.log("Resposta da API:", data); // Debug no console
        document.getElementById("shortUrl").href = data.url;
        document.getElementById("shortUrl").innerText = data.url;
        document.getElementById("result").style.display = "block";
    })
    .catch(error => console.error("Erro ao encurtar URL:", error));
}
