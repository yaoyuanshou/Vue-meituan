<template>
    <div class="login">
        <back nav="登录"/>
        <div class="input">
            <uc-input val="手机号" v-model="username"/>
            <uc-input val="密  码" type="password" v-model="password"/>
        </div>
        <uc-button @click="submit" btn="登录"></uc-button>
        <div class="set">
            <span>忘记密码</span>
            <span @click="reg">立即注册</span>
        </div>
        <div class="vx-qq">
            <dl>
                <dt></dt>
                <dd>微信登录</dd>
            </dl>
            <dl>
                <dt></dt>
                <dd>QQ登录</dd>
            </dl>
        </div>
        <transition
            enter-active-class="animated bounceIn"
            leave-active-class="animated bounceOut"
        >
            <div class="error" v-if="bl" :key="1">{{errMsg}}</div>
        </transition>
    </div>
</template>

<script>
    import back from '../components/back'
    import UcButton from '../components/uc-button.vue'
    import UcInput from '../components/uc-input.vue'
    export default {
        name: 'login',
        data() {
            return {
                username: '',
                password: '',
                errMsg: '',
                bl: false
            }
        },
        components: {
            back, UcButton, UcInput
        },
        methods: {
            submit(){
                axios({
                    url: '/api/login',
                    method: 'post',
                    data: {
                        username: this.username,
                        password: this.password
                    }
                }).then(
                    res => {
                        if(res.data.err !== 0){
                           this.bl = true;
                           this.errMsg = res.data.msg;
                        }else{

                            this.bl = false;
                            setTimeout(() => {
                                //本地种用户信息
                                window.localStorage.setItem('user', JSON.stringify(res.data))
                                this.$store.commit(`user/USER`, res.data)
                                
                                //跳转到之前的页面
                                if(this.$route.query.p){
                                    this.$router.replace(this.$route.query.p)
                                }else{
                                    this.$router.replace('/user')
                                }
                            },1000)
                          
                        }
                    }
                )
            },
            reg(){
                this.$router.replace('/reg')
            }
        },

    }
    
</script>
<style scoped>
    .login{display:flex;flex-flow: column;align-items: center;width:100%;height:100%}
    .login .input{padding-top:0.54rem;width:2.79rem;margin-bottom:0.14rem;}
    .login .set{display:flex;justify-content: space-between;width: 2.79rem;padding-top:0.18rem;margin-bottom: 1.2rem;}
    .login .set span{font-size: 0.12rem;}
    .login .set span:nth-child(1){color:#89c7f5;}
    .login .set span:nth-child(2){color:#f7cb54;}
    .login .vx-qq{display: flex; justify-content: space-between;width: 2rem;}    
    .login .vx-qq dl{display: flex; justify-content: space-between;flex-flow: column;}    
    .login .vx-qq dl dt{width:0.45rem;height:0.45rem;background-size: 100%;margin-bottom:0.14rem;}    
    .login .vx-qq dl:nth-child(1) dt{background-image:url(../assets/img/vx_login.png);}    
    .login .vx-qq dl:nth-child(2) dt{background-image:url(../assets/img/qq_login.png);}    
    .login .vx-qq dl dd{font-size:0.12rem;color:#999;}    

    .error{position:absolute;width:80%;height:0.4rem;top: 3rem;left:0;right:0;margin: auto;border-radius:10px;border:1px solid #ccc;display: flex;justify-content: center;align-items: center;font-size:0.14rem;color: red;}    
</style>