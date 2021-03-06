const express = require('express');
const app = express();

const PORT = 3000;

app.use('/public',express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/movies', (req, res) => {
	res.send('Bientôt des films sur cette page');
});

app.get('/movies/add', (req, res) => {
	res.send('Prochainement, un formulaire d\'ajout sera creer sur cette page');
});

app.get('/movies/:id', (req,res) => {
	const id = req.params.id;
	res.send(`film numéro ${id}`);
});

app.get('/', (req, res) => {
	//res.send('Hello <b>World</b>');
	res.render('index');
});

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`); 
});