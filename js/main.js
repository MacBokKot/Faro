const langToggle = document.getElementById("lang-toggle");

const content = {
    en: {
        title: "Arecibo Lighthouse & Historical Park",
        subtitle: "Where history meets the beauty of the Atlantic Ocean",
        featuresTitle: "Highlights",
        feature1Title: "Historic Lighthouse",
        feature1Text: "Explore the 1898 structure and enjoy breathtaking views of the Atlantic.",
        feature2Title: "Cultural Exhibits",
        feature2Text: "Journey through Puerto Rico's history from 1493 to the Spanish-American War.",
        feature3Title: "Family Attractions",
        feature3Text: "Enjoy interactive exhibits, whale watching (in season), and more!",
        footerText: "Come visit the park and enjoy history and amazing views!",
        langToggle: "Español",
        historyTitle: "History of the Park",
        historyText: "The Arecibo Lighthouse and Historical Park is a unique cultural theme park located at the iconic 'Los Morrillos' lighthouse. Established in 1898, the lighthouse offers breathtaking views of the Atlantic Ocean and showcases a rich history, from the Spanish Conquest in 1493 to the Spanish-American War. Visitors can explore restored artifacts, enjoy interactive exhibits, and immerse themselves in Puerto Rico's vibrant past."
    },
    es: {
        title: "Faro de Arecibo y Parque Histórico",
        subtitle: "Donde la historia se encuentra con la belleza del Océano Atlántico",
        featuresTitle: "Destacados",
        feature1Title: "Faro Histórico",
        feature1Text: "Explora la estructura de 1898 y disfruta de impresionantes vistas del Atlántico.",
        feature2Title: "Exhibiciones Culturales",
        feature2Text: "Viaja por la historia de Puerto Rico desde 1493 hasta la Guerra Hispanoamericana.",
        feature3Title: "Atracciones Familiares",
        feature3Text: "Disfruta de exhibiciones interactivas, avistamiento de ballenas (en temporada) y más.",
        footerText: "Visita el parque y disfruta de la historia y las increíbles vistas.",
        langToggle: "English",
        historyTitle: "Historia del Parque",
        historyText: "El Faro de Arecibo y el Parque Histórico son un parque temático cultural único ubicado en el icónico faro 'Los Morrillos'. Establecido en 1898, el faro ofrece impresionantes vistas del Océano Atlántico y muestra una rica historia, desde la conquista española en 1493 hasta la Guerra Hispanoamericana. Los visitantes pueden explorar artefactos restaurados, disfrutar de exhibiciones interactivas y sumergirse en el vibrante pasado de Puerto Rico."
    }
};

let currentLang = "en";

langToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "es" : "en";
    updateContent();
});

function updateContent() {
    document.getElementById("title").textContent = content[currentLang].title;
    document.getElementById("subtitle").textContent = content[currentLang].subtitle;
    document.getElementById("features-title").textContent = content[currentLang].featuresTitle;
    document.getElementById("feature-1-title").textContent = content[currentLang].feature1Title;
    document.getElementById("feature-1-text").textContent = content[currentLang].feature1Text;
    document.getElementById("feature-2-title").textContent = content[currentLang].feature2Title;
    document.getElementById("feature-2-text").textContent = content[currentLang].feature2Text;
    document.getElementById("feature-3-title").textContent = content[currentLang].feature3Title;
    document.getElementById("feature-3-text").textContent = content[currentLang].feature3Text;
    document.getElementById("footer-text").textContent = content[currentLang].footerText;
    document.getElementById("history-title").textContent = content[currentLang].historyTitle;
    document.getElementById("history-text").textContent = content[currentLang].historyText;

    langToggle.textContent = content[currentLang].langToggle;
}

// Initialize content
updateContent();
