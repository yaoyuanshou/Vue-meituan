<template>
	<div class="star" :class="starType">
		<span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" :key="index"></span>
	</div>
</template>

<script>
  let length=5
  let on = "on"
  let half= "half"
  let off = "off"
	export default {
		name:"star",
		data(){
			return{}
		},
		methods:{},
		props:{
      size:{
        type:Number,
        default:0
      },
      score:{
        type:Number,
        default:0
      }
    },
    computed:{
      starType(){
        return "star-" + this.size
      },
      itemClasses(){
        let result = []
        let score = Math.floor(this.score*2)/2
        let hasDecimal = score % 1 !== 0
        let integer = Math.floor(score)
        for(let i = 0; i< integer;i++){
          result.push(on)
        }
        if(hasDecimal){
          result.push(half)
        }
        while(result.length<length){
          result.push(off)
        }
        return result
      }
    }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  .star
    font-size:0
    &.star-48
      .star-item
        width:20px
        height:20px
        margin-right:22px
        background-size:20px 20px
        &:last-child
          margin-right:0
        &.on
          bg-image("star48_on")
        &.half
          bg-image("star48_half")
        &.off
          bg-image("star48_off")
    &.star-36
      .star-item
        width:15px
        height:15px
        margin-right:16px
        background-size:15px 15px
        &:last-child
          margin-right:0
        &.on
          bg-image("star36_on")
        &.half
          bg-image("star36_half")
        &.off
          bg-image("star36_off")
    &.star-24
      .star-item
        width:10px
        height:10px
        margin-right:3px
        background-size:10px 10px
        &:last-child
          margin-right:0
        &.on
          bg-image("star24_on")
        &.half
          bg-image("star24_half")
        &.off
          bg-image("star24_off")
    .star-item
      display:inline-block
      background-repeat:no-repeat
      
</style>
