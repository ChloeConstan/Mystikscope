const express = require('express');
const app = express();
const PORT = 3000;


app.set ('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    const signs = [
        {name: 'belier', label: 'Bélier ♈'},
        {name: 'taureau', label: 'Taureau ♉'},
        {name: 'gemeaux', label: 'Gémeaux ♊'},
        {name: 'cancer', label: 'Cancer ♋'},
        {name: 'lion', label: 'Lion ♌'},
        {name: 'vierge', label: 'Vierge ♍'},
        {name: 'balance', label: 'Balance ♎'},
        {name: 'scorpion', label: 'Scorpion ♏'},
        {name: 'sagittaire', label: 'Sagittaire ♐'},
        {name: 'capricorne', label: 'Capricorne ♑'},
        {name: 'verseau', label: 'Verseau ♒'},
        {name: 'poissons', label: 'Poissons ♓'},
    ];
    

    res.render('index', {signs});

});
    
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});






