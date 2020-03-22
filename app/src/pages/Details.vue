<template>
  <div id="details">
    <div class="backHome" @click="backHome"></div>
    <Header :seller="seller"></Header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link :to="{name: 'goods'}">商品</router-link>
       </div>
      <div class="tab-item">
        <router-link :to="{name: 'ratings'}">评论</router-link>
       </div>
      <div class="tab-item">
        <router-link :to="{name: 'seller'}">商家</router-link>
       </div>
    </div>
    <router-view  :seller="seller"></router-view>
  </div>
</template>

<script>
  import Header from '../components/header/header.vue'
export default {
  name: 'Details',
  components:{
    Header
  },
  data(){
    return {
      seller:{}
    }
  },
  mounted() {
    axios({
      url:"/data/data.json"
    }).then(
      res=>{
        // console.log(res.data);
        this.seller = res.data.seller
      }
    )
  },
  methods: {
      backHome(){
          this.$router.replace('/')
      }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/mixin.styl"
  #details
    .backHome
      position absolute
      width:20px
      height:20px
      background-image: url(../assets/img/back.png) 
      background-size: 100%
      left:0
      top: 40px
      z-index: 30
    .tab
      display:flex
      width:100%
      height:40px
      line-height 40px
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex:1
        text-align: center
        & > a
          display: block
          font-size:14px
          color:rgb(77,85,93)
          &.active
            color:rgb(240,20,20)
</style>
