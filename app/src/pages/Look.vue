<template>
    <div class="look">
        <back :bl=0 bgColor="#ffc74a" nav="发现"/>
        <article>
            <img src="../assets/img/bg.png" alt="">
        </article>
    </div>
</template>

<script>
    import back from '../components/back'
    import Loading from '../components/loading'
    export default {
        name: 'Look',
        components: {
            back,Loading
        }
    }
</script>
<style scoped>
    article{width:180px;height:300px;margin:50px auto;overflow:hidden;}
    article:hover img{animation-play-state:paused;}
    article img{animation:love 1s step-start infinite;}
    @keyframes love{0%{transform:translate(0);}14%{transform:translate(-180px);}28%{transform:translate(-360px);}42%{transform:translate(-540px);}56%{transform:translate(-720px);}70%{transform:translate(-900px);}84%{transform:translate(-1080px);}100%{transform:translate(0);}}
</style>