<template>
    <div class="takeaway">
        <order-cell 
            :data="$store.state.takeaway.takeaway[index]"
            v-for="(item, index) in $store.state.takeaway.takeaway" :key="index"
            apiName="takeaway"
        />
    </div>
</template>

<script>
    import orderCell from '../components/order-cell'
    export default {
        name: 'takeaway',
        components:{orderCell},
        data() {
            return {
                data: {}
            }
        },
        methods: {
        },
        mounted() {
            /* axios({
                url: '/api/goods/takeaway'
            }).then(
                res => {
                    this.data = res.data.data
                }
            ) */
            this.$store.dispatch(`takeaway/${this.$types.TAKEAWAY}`)
        },
        
    }
</script>
<style scoped>
    .takeaway{width:100%;flex:1;flex-flow: column;overflow: auto;margin-bottom:0.38rem;}
</style>