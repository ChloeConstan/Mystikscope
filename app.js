const express = require('express');
const app = express();
const PORT = 3000;


app.set ('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    const signes = [
        {nom: 'belier', label: 'Bélier ♈'},
        {nom: 'taureau', label: 'Taureau ♉'},
        {nom: 'gemeaux', label: 'Gémeaux ♊'},
        {nom: 'cancer', label: 'Cancer ♋'},
        {nom: 'lion', label: 'Lion ♌'},
        {nom: 'vierge', label: 'Vierge ♍'},
        {nom: 'balance', label: 'Balance ♎'},
        {nom: 'scorpion', label: 'Scorpion ♏'},
        {nom: 'sagittaire', label: 'Sagittaire ♐'},
        {nom: 'capricorne', label: 'Capricorne ♑'},
        {nom: 'verseau', label: 'Verseau ♒'},
        {nom: 'poissons', label: 'Poissons ♓'},
    ];
    

    res.render('index', {signes});

});
    
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});






