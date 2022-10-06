const db = require('../models/commentairModel');
const express = require('express');
const app = express();


const Addcommentair = (req, res) => {
    const { body } = req;
    commentair.create({...body })
        .then(() => { res.json({ msg: "commentair added success" }) })
        .catch(() => { res.json({ msg: 'error' }) })
}

const getAll = (req, res) => {
    commentair.findAll().then(comments => {
        res.json({ comments })
    })
}

const deletecom = (req, res) => {
    const { id } = req.body;
    commentair.destroy({ where: { id: id } }).then(() => {
        res.json({ msg: 'deleted' })
    }).catch(() => {
        res.json({ msg: 'not deleted' })
    })
}

module.exports = { Addcommentair, getAll, deletecom }