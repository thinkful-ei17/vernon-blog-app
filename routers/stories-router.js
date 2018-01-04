'use strict';

const express = require('express');
const router = express.Router();

const { DATABASE } = require('../config');
var data = require('../db/dummy-data');
const knex = require('knex')(DATABASE);

// const { DATABASE } = require('../config');
// const knex = require('knex')(DATABASE);
router.get('/', (req, res) => {
    res.send('Home.');
});

/* ========== GET/READ ALL ITEMS ========== */
router.get('/stories', (req, res) => {
    if (req.query.search) {

        knex.select()
            .from('stories')
            .then((results) => {
                console.log('HERE! search');

                const filtered = results.filter((obj) => obj.title.toLowerCase().includes(req.query.search.toLowerCase()));
                console.log(filtered);

                res.json(filtered);
            });

    } else {
        knex.select()
            .from('stories')
            .then((results) => {
                console.log('HERE!');

                console.log(results);
                res.json(results);
            });
    }
});

/* ========== GET/READ SINGLE ITEMS ========== */
router.get('/stories/:id', (req, res) => {
    const id = Number(req.params.id);

    knex.select()
        .from('stories')
        .where('id', id)
        .then((results) => {
            console.log('HERE! stories id');

            res.json(results);
        });
});

/* ========== POST/CREATE ITEM ========== */
router.post('/stories', (req, res) => {
    const {title, content} = req.body;

    /***** Never Trust Users! *****/
    const newItem = {
        id: data.nextVal++,
        title: title,
        content: content
    };
    data.push(newItem);

    res.location(`${req.originalUrl}/${newItem.id}`).status(201).json(newItem);
});

/* ========== PUT/UPDATE A SINGLE ITEM ========== */
router.put('/stories/:id', (req, res) => {
    const {title, content} = req.body;

    /***** Never Trust Users! *****/

    const id = Number(req.params.id);
    const item = data.find((obj) => obj.id === id);
    Object.assign(item, {title, content});
    res.json(item);
});

/* ========== DELETE/REMOVE A SINGLE ITEM ========== */
router.delete('/stories/:id', (req, res) => {
    const id = Number(req.params.id);
    knex.select()
        .from('stories')
        .where('id', id)
        .del()
        .then(() => {
            console.log('HERE! delete');
            res.status(204).end();
        });
    res.status(204).end();
});

module.exports = router;
