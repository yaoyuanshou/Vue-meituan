import axios from '../plugins/axios.js'

//通用服务
function get({apiName, params, type, commit, _id=null}){
    if(!apiName || !type || !commit){
        console.log('apiName, type, commit为必传参数');
        return
    }

    let url = _id ? '/api/goods/' + apiName + '/' + _id : 'api/goods/' + apiName
    axios({
        url, params
    }).then(
        res => commit(type, res.data.data)
    )
}

export {get}
