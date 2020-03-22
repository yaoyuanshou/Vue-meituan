const express = require('express');
const mongodb = require('../../utils/mongodb');

let router = express.Router();

router.get('/', (req, res, next) => {
    //在数据库查询
    mongodb.open({
        dbName: 'jinx',
        collectionName: 'user',
    }).then(
        ({collection, client, ObjectId}) => {
            console.log(req.query.decode.username);
            console.log(ObjectId(req.query.decode._id));
            collection.find({username: req.query.decode.username,_id: ObjectId(req.query.decode._id)}).toArray((err, result) => {
                console.log(result[0]);
                if(!err && result.length > 0){
                    delete result[0].username;
                    delete result[0].password;
                    res.send({
                        err: 0,
                        msg: '自动登录成功',
                        data: result[0]
                    })
                }else{
                    res.send({
                        err: 1,
                        msg: '自动登录失败',
                        err: err
                    })
                }
                client.close();
            })
        }
    ).catch(
        err => res.send({
            err: 1,
            msg: '数据库连接失败'
        })
    )
})

module.exports = router;