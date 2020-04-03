const express = require('express');
const router = express();

// route incoming traffic to index.pug file
router.get('/', (req, res) => {
    res.render('index');
});


module.exports = router;