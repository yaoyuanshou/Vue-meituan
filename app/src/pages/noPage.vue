<template>
    <div class="noPage">
        <back bgColor="#fff" nav="sorry"/>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584702528229&di=d84784184010eb6107ede90d4d600c8b&imgtype=0&src=http%3A%2F%2Fimage.uisdc.com%2Fwp-content%2Fuploads%2F2018%2F01%2Fuisdc-404pagesummary-20180110-27.jpeg" alt="">
    </div>
</template>

<script>
    import back from '../components/back'
    export default {
        components: {
            back
        }
    }
</script>
<style>
    .noPage{
        background: #fff;width:100%;height:100%;
    }
    .noPage img{
        width:3rem;height:3rem;position: absolute;left:0;top:0;bottom:0;right:0;margin:auto
    }
</style>