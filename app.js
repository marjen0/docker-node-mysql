const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const booksRoutes = require('./routes/books');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index');
});
app.use('/books', booksRoutes);


const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

