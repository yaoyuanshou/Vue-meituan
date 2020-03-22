<template>
    <div class="order">
        <back :bl=0 bgColor="#ffc74a" nav="订单"/>
        <div class="v-z">
            <p @click="copmV" :class="vzActive">外卖
                <span></span>
            </p>
            <p @click="copmZ" :class="vz">早餐
                <span></span>
            </p>
        </div>
        <keep-alive>
            <component :is="comp"></component>
        </keep-alive>  
    
    </div>
</template>

<script>
    import back from '../components/back'
    import Takeaway from './Takeaway.vue'
    import Breakfast from './Breakfast.vue'
    
    export default {
        name: 'Order',
        components: {
            back,Breakfast,Takeaway
        },
        data() {
            return {
                comp: 'Takeaway',
                vzActive: 'vz-active',
                vz: 'vz'
            }
        },
        methods: {
            copmV(){
                this.comp='Takeaway'
                this.vz = 'vz',
                this.vzActive = 'vz-active'
            },
            copmZ(){
                this.comp='Breakfast'
                this.vzActive = 'vz'
                this.vz =  'vz-active'
            }
        },
    }
</script>
<style scoped>
    .order{height:100%;display:flex;flex-flow: column;}
    .v-z{display: flex;justify-content: space-between;height:0.41rem;padding:0 0.8rem;align-items:center;background:#fff;}
    .v-z .vz {font-size:0.14rem;position:relative}
    .v-z .vz span{width:0.31rem;height:2px;background:rgba(255,199,74,0);position: absolute;left:0;bottom:-3px}

    .v-z .vz-active {font-size:0.14rem;position:relative;color:rgba(255,199,74,1);}
    .v-z .vz-active span{width:0.31rem;height:2px;background:rgba(255,199,74,1);position: absolute;left:0;bottom:-3px}
</style>