<template>
    <div class="login">
        <back nav="注册"/>
        <div class="input">
            <uc-input val="手机号" v-model="username"/>
            <uc-input val="密  码" type="password" v-model="password"/>
            <uc-input val="确认密码" type="password" v-model="nPassword"/>
        </div>
        <uc-button @click="submit" btn="注册"></uc-button>
        <div class="set">
            <span>忘记密码</span>
            <span @click="login">立即登录</span>
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
        <transition-group
            enter-active-class="animated bounceIn"
            leave-active-class="animated bounceOut"
        >
            <div class="error" v-if="bl" :key="1">{{errMsg}}</div>
            <div class="yes" v-if="bll" :key="2" style="animation-delay:1s">{{yesMsg}}</div>
        </transition-group>
    </div>
</template>

<script>
    import back from '../components/back'
    import UcButton from '../components/uc-button.vue'
    import UcInput from '../components/uc-input.vue'
    export default {
        name: 'reg',
        components: {
            back, UcButton, UcInput
        },
        data() {
            return {
                username: '',
                password: '',
                nPassword: '',
                errMsg: '',
                yesMsg: '注册成功',
                bl: false,
                bll: false
            }
        },
        methods: {
            submit(){
                if(this.username.length == 0 || this.password == '' || this.nPassword == ''){
                    this.bl = true
                    this.errMsg = '手机号密码为必传参数' 
                }
                if(this.password !== this.nPassword){
                    this.bl = true
                    this.errMsg = '两次密码必须一致' 
                }else{
                    let formData = new FormData();
                    formData.append('username', this.username)
                    formData.append('password', this.password)

                    //登录
                    axios({
                        method: 'post',
                        url:'/api/reg',
                        data: formData
                    }).then(
                        res => {
                            if(res.data.err == 0){
                                this.bl = false
                                this.bll = true
                                setTimeout(() => {
                                    this.$router.replace('/login')
                                },2000)
                            }else{
                                this.errMsg = res.data.msg
                                this.bl = true
                            }
                        }
                    )
                }
                
            },
            login(){
                this.$router.replace({name:'login'})
            },
        },
    }
    
</script>
<style scoped>
    .login{display:flex;flex-flow: column;align-items: center;width:100%;height:100%;position: relative;}
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

    .error{position:absolute;width:80%;height:0.4rem;top: 3.5rem;left:0;right:0;margin: auto;border-radius:10px;border:1px solid #ccc;display: flex;justify-content: center;align-items: center;font-size:0.14rem;color: red;}    
    .yes{position:absolute;width:80%;height:0.4rem;top: 3.5rem;left:0;right:0;margin: auto;border-radius:10px;border:1px solid #ccc;display: flex;justify-content: center;align-items: center;font-size:0.14rem;color: green;}    

</style>