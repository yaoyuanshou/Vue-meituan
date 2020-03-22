const express = require('express');
const mongodb = require('../../utils/mongodb');

let router = express.Router();

router.get('/:goodsname', (req, res, next) => {
    if(req.query._id){
        res.redirect(`/api/goods/${req.params.goodsname}/${req.query._id}`)//后端跳转
        return;
    }
    let collectionName = req.params.goodsname
    let {_page, _limit, _sort, q} = req.query;
    mongodb.findList({
        collectionName,
        _page, _limit, _sort, q
    }).then(
        result => res.send(result)
    ).catch(
        err => res.send(err)
    )
})

router.get('/:goodsname/:_id', (req, res, next) => {
    let collectionName = req.params.goodsname;
    let _id = req.params._id
    console.log(_id);
    mongodb.findDetail({
        collectionName,
        _id
    }).then(
        result => res.send(result)
    ).catch(
        err => res.send(err)
    )
    console.log('详情');
})

module.exports = router;