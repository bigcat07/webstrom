/**
 * Created by dllo on 17/8/3.
 */
var express = require('express')
var router = express.Router()

router.get('/',function (req,res) {
    //参数1:response渲染页面,views/page
    res.render('page',{page:'扉页'});
})

//导出
module.exports = router;