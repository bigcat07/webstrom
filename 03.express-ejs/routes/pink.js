/**
 * Created by dllo on 17/8/3.
 */
var experss = require('express')
var router = experss.Router()

router.get('/',function (req,res) {
    res.render('01')
})

module.exports = router;