const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({msg: 'Get Request Recieved In Router'});
})

module.exports = router;