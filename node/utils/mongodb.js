const mongodb = require('mongodb');
let mongodbCt = mongodb.MongoClient;
let ObjectId = mongodb.ObjectId;

let open = ({dbName, collectionName, url = 'mongodb://127.0.0.1:27017'}) => {
    return new Promise((resovle, reject) => {
        mongodbCt.connect(url, { useUnifiedTopology: true }, (err, client)=> {
            if(err){
                reject(err)
            }else{
                let db = client.db(dbName);
                let collection = db.collection(collectionName);
                resovle({collection, client, ObjectId});
            }
        })
    })
}

let findList = ({
    dbName = 'jinx',
    collectionName,
    _page, _limit, _sort, q
}) => {
    let sule = q ? {username: eval(`/${q}/`)} : {}
    return new Promise((resovle, reject) => {
        open({
            dbName, collectionName
        }).then(
            ({collection, client}) => {
                collection.find(sule, {
                    skip: _page * _limit,
                    limit: _limit,
                    projection: {},
                    sort: {[_sort]: 1}
                }).toArray((err, result) => {
                    if(!err && result.length > 0){
                        resovle({
                            err: 0,
                            data: result
                        })
                        client.close();
                    }else{
                        reject({
                            err: 1,
                            msg: '查无数据'
                        })
                    }
                })
            }
        ).catch(
            err => {
                reject({
                    err: 1,
                    msg: '库连接失败'
                })
                client.close();
            }
        )
    })
}

let findDetail = ({dbName = 'jinx', collectionName, _id}) => {
    return new Promise((resovle, reject) => {
        open({dbName, collectionName}).then(
            ({collection, client}) => {
                if(_id.length === 24){

                    collection.find({
                        _id: ObjectId(_id)
                    },{projection:{_id: 0}}).toArray((err, result) => {
                        if(!err && result.length > 0){
                            resovle({
                                err: 0,
                                data: result[0]
                            })
                            client.close();
                        }else{
                            resovle({
                                err: 1,
                                msg: '查无数据'
                            })
                            client.close();
                        }
                    })
                }else{
                    reject({
                        err: 1,
                        msg: '_id长度不匹配'
                    })
                    client.close();
                }
            }
        )
    
    
    })
}

module.exports = {open, findList, findDetail}