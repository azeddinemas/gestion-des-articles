const commentair = require('../models/commentairModel');



const Addcommentair = (req, res) => {
    const body = req.body;
    commentair.create({...body })
        .then(() => { res.redirect('http://localhost:3000/postpage') })
        .catch(() => { res.json({ msg: 'error' }) })
}
const getall = (req, res) => {
    commentair.findAll()
        .then((commentes) => { res.render("../views/pages/commentair.ejs", { commentes }) })
        .catch(() => { res.json({ msg: 'error' }) })


}


const deletecom = (req, res) => {
    const { id } = req.params;
    commentair.destroy({ where: { id: id } })
        .then(() => {
            res.redirect('http://localhost:3000/commentaire')
        }).catch(() => {
            res.json({ msg: 'not deleted' })
        })
}




module.exports = { Addcommentair, getall, deletecom }