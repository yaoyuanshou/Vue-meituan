const express = require('express');
const jwt = require('../../utils/jwt');
const mongodb = require('../../utils/mongodb');
const bcrypt = require('../../utils/bcrypt');

let router = express.Router();

router.post('/', (req, res, next) => {
    //1获取username，password
    let {username, password} = req.body;

    //2设置必传参数
    if(!username || !password){
        res.send({
            err: 1,
            msg: '用户名和密码为必传参数'
        })
        return;
    }

    //在数据库查询
    mongodb.open({
        dbName: 'jinx',
        collectionName: 'user',
    }).then(
        ({collection, client}) => {
            collection.find({username}).toArray((err, result) => {
                if(err){
                    res.send({
                        err: 1,
                        msg: '数据库操作失败',
                        err: err
                    })
                }else{
                    if(result.length > 0){
                        let p1 = bcrypt.compareSync(password, result[0].password);
                        if(p1){
                            //生成token
                            let token = jwt.sign({username, _id: result[0]._id});
                            delete result[0].username
                            delete result[0].password;

                            res.send({
                                err: 0,
                                msg: '登录成功',
                                data: result[0],
                                token
                            })
                        }else{
                            res.send({
                                err: 1,
                                msg: '用户名或密码有误'
                            })
                        }
                    }else{
                        res.send({
                            err: 1,
                            msg: '用户名或密码有误'
                        })
                    }
                    client.close();
                }
            })
        }
    ).catch(
        err => {
            res.send({
                err: 1,
                msg: '数据库连接失败'
            })
            client.close();
        }
       
    )
})

module.exports = router;