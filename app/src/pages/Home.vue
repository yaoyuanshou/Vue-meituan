<template>
        <div v-if="true" class="h_s">
            <nav class="nav1" @click="$router.push('/jinx')">
                <img src="/img/wy_03.png" alt="">
            </nav>
            <nav class="nav2" @click="$router.push('/jinx')">
                <img src="/img/wy_06.png" alt="">
            </nav>
            <div class="cd">
                <div v-for="(item, index) in $store.state.home.home.choose" :key="index" class="choose">
                    <choose
                        :val="item.val"
                        :img="item.img"
                        v-for="(item, index) of $store.state.home.home.choose[index]" :key="index"
                    />
            </div>
            </div>
            <div class="footer">
                <h2>附近商家</h2>
            </div>
            <aside class="main">
                <cell
                 :data="$store.state.home.home.home[index]"
                 v-for="(item, index) in $store.state.home.home.home" :key="index"
                 :apiName="'home'"
                />
            </aside>
        </div>
        
</template>

<script>
    import Choose from '../components/choose' 
    import Cell from '../components/cell'
    import FrameScreen from '../components/frame-screen.vue' 
    export default {
        name:'home',
        components: {
            Choose,Cell,FrameScreen
        },
        data() {
            return {
                first:[],
                second: [],
            }
        },
        mounted() {
            /* axios({
                url:'data/choose.json'
            }).then(
                res => {
                    this.first = res.data[0].first
                    this.second = res.data[0].second
                }
            ) */
            this.$store.dispatch(`home/${this.$types.HOME}`)
        },
    }
</script>
<style scoped>
    .h_s{padding:0.15rem 0.1rem;background: #fff;flex:1;overflow:auto;}
    .h_s nav img{width:100%;}
    .h_s .nav2{margin:0.05rem 0 0.11rem 0;}
    .h_s .cd{display: flex;flex-flow: column;height:1.5rem;width:100%;}
    .h_s .choose{display:flex;justify-content:space-between;padding:0 0.05rem;margin-bottom: 0.11rem;}
    .h_s div{display:flex;justify-content:center;}
    .h_s div aside{width:0.15rem;height:0.04rem;background:red;border-radius:10px;}
    .h_s div aside:last-of-type{background:#e4e4e4;margin-left:5px;}
    .h_s div aside:first-of-type{background:#ffd161;margin-right:5px;}
    .h_s .footer{height:0.59rem;justify-content:flex-start;align-items:flex-end;}
    .h_s .footer h2{font-size:0.20rem;font-weight: bold;}
    .h_s .main{display: flex;flex-flow: column;padding-top:0.19rem}
</style>