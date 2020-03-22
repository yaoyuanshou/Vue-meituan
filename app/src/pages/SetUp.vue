<template>
    <div class="set">
        <back nav="设置"/>
        <set-cell p="账户安全" span="开启小额免密支付"/>
        <set-cell p="通用"/>
        <set-cell p="欢迎评分"/>
        <set-cell p="关于App"/>
        <set-cell p="隐私"/>
        <set-cell p="意见反馈"/>
        <button @click.prevent="loginOut">退出登录</button>
    </div>
</template>

<script>
    import back from '../components/back'
    import setCell from '../components/set-cell.vue'
    export default {
        name: 'set',
        components: {
            back,setCell
        },
        methods: {
            loginOut(){
                //删除 本地 token
                window.localStorage.removeItem('user')
                //删除状态管理的token
                this.$store.commit(`user/${this.$types.USER}`, {err: 1})
                //发送注销请求
                this.$router.replace('/login')
            }
        },
    }
</script>
<style scoped>
    .set{display: flex;flex-flow:column;position: absolute;width:100%;z-index:30;background: #f7f7f7;height:100%;}
    .set button{display: flex;width:100%;height:0.53rem;justify-content: center;border:0;outline: none;color:red;font-size: 0.18rem;background:rgba(0,0,0,0);border-bottom: 1px solid #ececec;}
</style>