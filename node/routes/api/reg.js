const express = require('express');
const fs = require('fs');
const pathLib = require('path');
const mongodb = require('../../utils/mongodb');
const bcrypt = require('../../utils/bcrypt');

let router = express.Router();

//注册

router.post('/', (req, res, next) => {
    //1获取username, password, nikename, icon
    let {username, password, nikename} = req.body;

    //2必传参数做校验
    if(!username || !password){
        res.send({
            err: 1,
            msg:'用户名和密码是必传参数'
        })
        return;
    }

    //3整理其他需要入库的参数 nikename, icon, time, follow, fans
    nikename = nikename || '系统给的昵称';
    let follow = 0;//关注数
    let fans = 0; //粉丝数
    let time = Date.now();//系统生成的时间

    let icon = '/upload/default.jpg'//默认头像

    //判断用户是否传头像
    if(req.files && req.files.length > 0){
        //图片加后缀，覆盖默认头像

        //更名
        fs.renameSync(req.files[0].path, req.files[0].path + pathLib.parse(req.files[0].originalname).ext);

        //覆盖默认头像
        icon = '/upload/user/' + req.files[0].filename + pathLib.parse(req.files[0].originalname).ext
    }

    //数据库查询用户名是否存在

    mongodb.open({dbName: 'jinx', collectionName: 'user'}).then(
        ({collection, client}) => {
            collection.find({username}).toArray((err, result) => {
                if(err){
                    res.send({
                        err: 1,
                        msg: '数据库操作失败'
                    })
                    client.close();
                }else{
                    if(result.length === 0){
                        //用户名不存在，入库

                        //密码加密
                        password = bcrypt.hashSync(password);

                        //入库
                        collection.insertOne({
                            username, password, nikename, follow, fans, icon, time
                        }, (err, result) => {
                            if(!err){
                                //插入后的数据，返回客户端不包括用户名和密码
                                delete result.ops[0].username;
                                delete result.ops[0].password;

                                res.send({
                                    err: 0,
                                    msg: '注册成功',
                                    data: result.ops[0]
                                })
                            }else{
                               
                                res.send({
                                    err: 1,
                                    msg: '注册失败'
                                })
                            }
                            client.close();
                        })
                    }else{
                        if(icon.indexOf('default') === -1){
                            fs.unlinkSync('./public' + icon);
                        }
                        res.send({
                            err: 1,
                            msg: '用户名已存在'
                        })
                    }
                }
            })
        }
    ).catch(
        err => {
            res.send({
                err: 1,
                msg: '数据库操作失败'
            })
        }
    )

})

module.exports = router;