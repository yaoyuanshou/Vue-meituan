<template>
    <div>
        <div class="load"></div>
        <div class="load2"></div>
    </div>
</template>

<script>
    export default {

    }
</script>
<style scoped>
    .load2 {
        position: absolute;
        width:200px;
        height:160px;
         background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZWxsaXBzZSBjeD0iNDgiIGN5PSIxMi40NjMiIGZpbGw9IiNEM0U2RkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgcng9IjQ3Ljg5IiByeT0iMTIuMzY5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDM4KSIvPjwvc3ZnPg==') no-repeat;
        margin-left:-96px;
        margin-top:-100px;
        left:50%;
        top:70%;
        animation:small .8s infinite;
        background-position: center;
    }

    @keyframes small {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(.4);
        }
        100% {
            transform: scale(1);
        }
    }

    .load {
        position: absolute;
        left:50%;
        top:50%;
        background: url('./img/loading.png');
        height:100px;
        width:100px;
        margin-left:-50px;
        margin-top:-50px;
        animation:test 4.5s steps(6) infinite,updown .8s infinite;
        /*-webkit-animation:test 3.5s steps(6) infinite;*/
    }

    @keyframes test {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 0 600px;
        }
    }

    @keyframes updown{
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-50px);
        }
        100% {
            transform: translateY(0px);
        }
    }
</style>