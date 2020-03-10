const express = require('express');
const chirpsStore = require('../chirpstore')
let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id
    if(id) {
        res.send(chirpsStore.GetChirp(id));
    } else {
        res.send(chirpsStore.GetChirps());
    }
});

router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id?', (req, res) => {
    let id = req.params.id
    chirpsStore.UpdateChirp(id, {
        name: req.body.name,
        message: req.body.message})
    res.json(id);
});

router.delete('/:id?', (req, res) => {
        chirpsStore.DeleteChirp(req.params.id)
        res.sendStatus(200);
});

module.exports = router;