function loadTextIntoContainer(containerId, filePath) {
    fetch(filePath)
        .then((response) => response.text())
        .then((text) => {
            const container = document.getElementById(containerId);
            if (!container) return;

            const paragraphs = text.split(/\n+/);
            paragraphs.forEach((p) => {
                const el = document.createElement("p");
                el.className = "text-gray-300 text-base text-justify";
                if (p.startsWith("**")) {
                    el.classList.add("italic", "font-semibold", "mt-4");
                    el.textContent = p.slice(2).trim();
                } else if (p.startsWith("*")) {
                    el.classList.add("italic", "mt-4");
                    el.textContent = p.slice(1).trim();
                } else {
                    el.textContent = p.trim();
                }
                container.appendChild(el);
            });
        });
}


loadTextIntoContainer("about-game-text", "assets/text/about_game.txt");
loadTextIntoContainer(
    "about-developer-text",
    "assets/text/about_developer.txt"
);
