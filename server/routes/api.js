const express = require('express')
const router = express.Router()

// GET /api/v1/games
router.get('/', (req, res)=>{
    res.json([
        {
            id:1,
            text:'api route'
        }
    ])
})

// POST /api/v1/games
module.exports = router