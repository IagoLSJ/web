const express = require('express')
const router = express.Router()
const EstudanteService = require('../services/EstudanteService')

router.get('/list',  (req, res, next) =>{
    EstudanteService.list(req, res);
});
router.post('/register',  (req, res, next) =>{
    EstudanteService.register(req, res);
});
router.put('/update/:id',  (req, res, next) =>{
    EstudanteService.update(req, res);
});
router.delete('/delete/:id',  (req, res, next) =>{
    EstudanteService.delete(req, res);
});
router.get('/retrieve/:id',  (req, res, next) =>{
    EstudanteService.retrieve(req, res);
});

module.exports = router