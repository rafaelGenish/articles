const router = require('express').Router()
const { title } = require('process')
const Query = require('../db')

router.get('/', async (req, res) => {
    const results = await Query(`SELECT * FROM articles`)
    res.status(200).json(results)
})

router.get('/:id', async (req, res) => {
    let q = `SELECT * FROM articles WHERE id = ?`
    const result = await Query(q, [req.params.id])
    res.status(200).json(result)
})

router.post('/add', async (req, res) => {
    const {title, body} = req.body
    try {
        const q = `INSERT INTO articles (title, body) VALUES (?, ?)`
        const result = await Query(q, [title, body])
        console.log(result)
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
})

router.delete('/:id',async (req, res) => {
    const q = `DELETE FROM articles WHERE id = ?`
    const result = await Query (q, [req.params.id])
    res.status(201).json({err: false, msg: 'Deleted'})
})


module.exports = router