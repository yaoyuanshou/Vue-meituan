<template>
  <section class="frame-screen">
    <div class="div1"></div>
    <div class="div2"></div>
    <ul class="div3">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="div4">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div class="div5"></div>
    <div class="div6">
      <div class="l"></div>
      <div class="r">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="div6">
      <div class="l"></div>
      <div class="r">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="div6">
      <div class="l"></div>
      <div class="r">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="div6">
      <div class="l"></div>
      <div class="r">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="div6">
      <div class="l"></div>
      <div class="r">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name:'frame-screen',
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
    section .div1{width:100%;height:0.91rem;background:#ccc;margin-bottom: 0.05rem;}
    section .div2{width:100%;height:0.86rem;background:#ccc;margin-bottom: 0.05rem;}
    section .div3, section .div4{width:100%;height:0.64rem;background:#ccc;margin: 0.05rem 0;display:flex;justify-content: space-between;padding:0.05rem}
    section ul li{width:0.6rem;background:#999;border-radius: 10px;}
    section .div5{width:0.9rem;height:0.32rem;background:#ccc;margin:0.27rem 0 0.1rem 0;}
    section .div6{width:100%;height:0.71rem;background:#ccc;margin-bottom: 0.42rem;display: flex;padding: 0.05rem;}
    section .div6 .l{width:1.01rem;height:0.61rem;background: #999;margin-right:0.4rem;border-radius: 10px;}
    section .div6 .r{width:2rem;display: flex;justify-content: space-between;flex-flow: column}
    section .div6 .r div{height:0.15rem;background: #999;border-radius: 5px;}
</style>
