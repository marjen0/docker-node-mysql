const express = require('express');
const router = express.Router({ mergeParams: true });
const db = require('../db');

router.get('/', (req, res) => {
    db.query("select * from book", (err, results) => {
        return res.render('books', { books: results });
    });
});
router.get('/{title}', (req, res) => {
    return res.render('book');
});

module.exports = router;