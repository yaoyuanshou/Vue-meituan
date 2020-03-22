<template>
	<div class="goods">
		<div class="menu-wrapper" ref="menuWrapper">
      <ul>
      	<li v-for="(item,index) in goods" :key="index" class="menu-item" @click="selectMenu(index,$event)" :class="{'current':currentIndex===index}">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
		<div class="foods-wrapper" ref="foodsWrapper">
      <ul>
      	<li v-for="(item,index) in goods" :key="index" class="food-list food-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
          	<li @click="selectFood(food,$event)" v-for="(food,index) in item.foods" class="food-item border-1px" :key="index">
              <div class="icon">
                <img :src="food.icon" alt="" width="57" height="57">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span>月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food" @add="addFood"></cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <shopcart :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice" ref="shopcart"></shopcart>
    </div>
    <food :food="selectedFood" ref="food"></food>
	</div>

</template>

<script>
  import BScroll from 'better-scroll'
  import cartcontrol from '../cartcontrol/cartcontrol.vue'
  import shopcart from '../shopcart/shopcart.vue'
  import food from '../foods/food.vue'
	export default {
		name:"goods",
		data(){
			return{
        goods:[],
        scrollY:0,
        listHeight:[],
        selectedFood:{}
        // seller:{}
      }
		},
    computed:{
      currentIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i;
          }
        }
        return 0;
      },
      selectFoods(){
        let foods = []
        this.goods.forEach((good)=>{
          good.foods.forEach((food)=>{
            if(food.count){
              foods.push(food)
            }
          })
        })
        return foods
      }
    },
		methods:{
      selectMenu(index,event){
        if(!event._constructed){
          return;
        }
        let foodList = this.$refs.foodsWrapper.getElementsByClassName("food-list-hook")
        let el = foodList[index]
        this.foodsScroll.scrollToElement(el,300)
      },
      selectFood(food,event){
        if(!event._constructed){
          return;
        }
        this.selectedFood=food
        this.$refs.food.show()
      },
      _drop(target){
        this.$refs.shopcart.drop(target)
      },
      _initScroll(){
        this.menuScroll=new BScroll(this.$refs.menuWrapper,{
          click:true
        })
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper,{
          click:true,
          probeType:3
        })
        this.foodsScroll.on("scroll",(pos)=>{
          this.scrollY=Math.abs(Math.round(pos.y))
        })
      },
      _calculateHeight(){
        let foodList = this.$refs.foodsWrapper.getElementsByClassName("foods-list-hook")
        let height=0
        this.listHeight.push(height)
        for(let i = 0; i < foodList.length;i++){
          let item = foodList[i]
          height+=item.clientHeight
          this.listHeight.push(height)
        }
      },
      addFood(target){
        this._drop(target)
      }
    },
    created() {
      this.$nextTick(()=>{
        this._initScroll()
        this._calculateHeight()
      })
      this.classMap=["decrease","discount","special","invoice","guarantee"]
      this.$axios({
        url:"/data/data.json"
      }).then(
        res=>{
          this.goods=res.data.goods
        }
      )
      /* this.$axios({
        url:"/api/seller"
      }).then(
        res=>this.seller=res.data.data
      ) */
    },
    components:{
      cartcontrol,shopcart,food
    },
    props:{
      seller:{
        type:Object
      }
    }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 80px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      ul
        background: #fff
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
