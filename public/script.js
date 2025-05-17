let lastSignClick = null;

async function showHoroscope(signs, url, elementId) {
    const result = document.getElementById(elementId);

    if (lastSignClick === `${signs}-${elementId}`) {
        result.innerText = "Ton horoscope apparaîtra ici ✨";
        lastSignClick = null;
        return;
    }

    const response = await fetch(url);
    const data = await response.json();
    result.innerText = data[signs];
    lastSignClick = `${signs}-${elementId}`;
};

async function showWeekHoroscope(signs, url, elementId) {
    const result = document.getElementById(elementId);
    
    if (lastSignClick === `${signs}-${elementId}`) {
        result.innerText = "Ton horoscope apparaîtra ici ✨";
        lastSignClick = null;
        return;
    }
    
    const response = await fetch(url);
    const data = await response.json();
    const paragraphs = data[signs].slice(1);
    console.log(data);
    result.innerHTML = "";

    paragraphs.forEach(text => {
        console.log(`Texte brut : "${text}"`);
        if (text.trim() !== "") {
            const newParagraph = document.createElement("p");
            newParagraph.innerText = text.trim().replace(/^[^a-zA-Z0-9À-ÿ]+/, ''); // Saut de ligne entre chaque paragraphe et insertion dans newParagraph
            const fixed = newParagraph.innerText.replace(/([.!?])([A-ZÉÈÀÇÂÊÎÔÛÄËÏÖÜ])/g, '$1 $2'); // On assigne à fixed, le contenu de newParagraph formaté (rajoute d'espace après les points)
            newParagraph.innerText = fixed; // On ré-injecte fixed (version formatée du texte) dans newParagraph (pour rappel est le <p></p>)
            result.appendChild(newParagraph);  // On ajoute le new paragraph
         } 
    });
        
    lastSignClick = `${signs}-${elementId}`;
};

// Tableau de paragraphe [1, 2, 3, 4]
// paragraphe[1] espace ou saut de ligne paragraphe[2]

// regex pour ajouter