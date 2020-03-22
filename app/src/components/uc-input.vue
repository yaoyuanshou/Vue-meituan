<template>
    <div>
        <input :type="type" :placeholder="val" @input="$emit('input',$event.target.value)">
    </div>
</template>

<script>
    export default {
        name: 'uc-input',
        props: {
            type: {
                type: String,
                defalut: 'text'
            },
            val: {
                type: String,
                defalut: ' '
            }
        }
    }
</script>
<style scoped>
    div input{width:100%;height:0.31rem;border-bottom:1px solid #ccc;background:rgba(0,0,0,0);font-size:0.14rem;margin-bottom:0.16rem;}
</style>