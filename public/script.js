let lastSignClick = null;


async function showHoroscope(signs, url, elementId){
    const result = document.getElementById(elementId);
    if (lastSignClicke === `${signs}-${elementId}`) {
        result.innerText = "Ton horoscope apparaîtra ici ✨";
        lastSignClick = null;
        return;
    }
    const response = await fetch(url);
    const data = await response.json();
    result.innerText = data[signs];
    lastSignClick = `${signs}-${elementId}`;
}