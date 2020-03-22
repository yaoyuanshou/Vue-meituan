<template>
  <div id="app">
    <Loading v-if="$store.state.bLoading"/>
    <Header v-if="$store.state.bHeader"/>   
    <router-view></router-view>
    <Footer v-if="$store.state.bFooter"/>
    <!-- <Login/> -->
  </div>
</template>

<script>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  import Loading from '../components/loading'
  export default {
    name: 'App',
    components: {
      Header,Footer,Loading
    },
    watch: {
      $route: {
        deep: true,
        immediate: true,
        handler(val, oldVal) {          
          let path = val.path;
          
          if(/home/.test(path)){//home follow column
            // this.$root.bHeader=this.$root.bFooter=true;
            this.$store.commit('UPDATA_HEADER', true)
            this.$store.commit('UPDATA_FOOTER', true)
            this.$store.commit('UPDATA_LOADING', false)  
          }
          
          if(/login|reg|set|details|goods|ratings|seller|oDetails|jinx/.test(path)){//detial login reg
            // this.$root.bHeader=this.$root.bFooter=false;
            this.$store.commit('UPDATA_HEADER', false)
            this.$store.commit('UPDATA_FOOTER', false)
          }
          
          if(/user|order|look/.test(path)){//user path.includes('/user')
           /*  this.$root.bHeader=false;
            this.$root.bFooter=true; */
            this.$store.commit('UPDATA_HEADER', false)
            this.$store.commit('UPDATA_FOOTER', true)
          }
        },
      },
    }
}
</script>

<style>
  #app{display: flex;flex-flow:column;background:#f7f7f7;height:100%;}
</style>
