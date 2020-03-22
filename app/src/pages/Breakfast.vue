<template>
    <div class="takeaway">
        <order-cell
            :data="$store.state.breakfast.breakfast[index]" 
            v-for="(item, index) in $store.state.breakfast.breakfast" :key="index"
            apiName="breakfast"
        />
    </div>
</template>

<script>
    import orderCell from '../components/order-cell'
    export default {
        name: 'breakfast',
        components:{orderCell},
        data() {
            return {
                data: {}
            }
        },
        methods: {
        },
        mounted() {
            this.$store.dispatch(`breakfast/${this.$types.BREAKFAST}`)
        },
        
    }
</script>
<style scoped>
    .takeaway{width:100%;flex:1;flex-flow: column;overflow: auto;margin-bottom:0.38rem;}
</style>