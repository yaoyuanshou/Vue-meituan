const express = require('express');
const cookieSession = require('cookie-session');
let router = express.Router();

router.get('/', (req, res, next) => {
    //token 后端注销，无作为，需要前端删除cookie/localStarge里面的token

    //session的后端注销，需要服务端有作为  ,存时 nz1909='username+id'
    req.session['jinx'] = undefined;
    res.send({err:0,msg:'注销成功'})
})

module.exports = router;