let dernierSigneClique = null;


async function afficherHoroscope(signe, url, elementId){
    const resultat = document.getElementById(elementId);
    if (dernierSigneClique === `${signe}-${elementId}`) {
        resultat.innerText = "Ton horoscope apparaîtra ici ✨";
        dernierSigneClique = null;
        return;
    }
    const response = await fetch(url);
    const data = await response.json();
    resultat.innerText = data[signe];
    dernierSigneClique = `${signe}-${elementId}`;
}