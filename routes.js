// require apps
const express = require('express');
const data = require('./data');

// variable to access active express instance
const router = express();

// route incoming traffic to index.pug file
router.get('/', (req, res) => {
    res.render('index', {data});
});
// route to about file
router.get('/about', (req, res) => {
    res.render('about');
});
// route to projects file & send project info
router.get(['/project', '/projects'], (req, res) => {
    const { id } = req.query;
    const project  = data.data.projects[id];
    res.render('project', {project});
});
// route for 404 error
router.use((req, res, next) => {
    const err = new Error();
    err.status = 404;
    err.message = 'Oh no! Page Not Found.';
    res.render('error', {err});
});
// route for 500 error
router.use((err, req, res, next) => {
    err.status = 500;
    err.message = 'Oh no! Internal Server Error.';
    res.render('error', {err});
});

module.exports = router;