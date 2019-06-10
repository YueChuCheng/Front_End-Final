<template>
  <div>
    <header>
      <div>
      <div class="restaurant_info">
        <h3>{{restaurantName}}</h3>
        <p>{{restaurantAdress}}</p>
        <p>TEL：{{restaurantTEL}}</p>
        <p>外送時間：{{restaurantOpenTime}}</p>
      </div>
      <img src="../assets/restaurant/restaurant (5).png" class="img_restaurant"></div>
    </header>
    <article>
      <div class="type" v-for="parent,index in type" :key="index">
        <div>
          <h5>{{parent.name}}</h5>
          <div class="font_bg"></div>
        </div>
        <div class="food" v-for="child,cindex in parent.food" :key="child.index">
          <ul>
            <li>
              <div class="name">{{ child.name }}</div>
              <div class="price">NT${{ child.price }}</div>
              <div class="btn">
                <button v-on:click="Increase(index,cindex)">increase</button>
                <p>{{child.count}}</p>
                <button v-on:click="Decrease(index,cindex)">decrease</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <p>共計：NT$ {{ totalPrice }}</p>
      <div class="btn">
          <button v-on:click="Order">確認訂單</button>
      </div>
    </article>
  </div>
</template>

      
<script>
import db from "../db";
import {mapState} from "vuex";


export default {
  name: "#app",
  data() {
    return {
      restaurantName: "",
      restaurantAdress: "",
      restaurantTEL: "",
      restaurantOpenTime: "",
      type: [
        // {
        //   name: "",
        //   food: [{ name: "", price: 0,count:0}]
        // }
      ],
    };
  },
  computed: mapState({
    totalPrice: state => state.totalPrice
  }),
  firestore() {
    return {
      // Collection
      docRestaurantRef: firebase.firestore().collection("Restaurant").doc("Info"),
      colTypeRef: firebase
        .firestore()
        .collection("Restaurant")
        .doc("Info")
        .collection("Menu"),
      colOrderRef: firebase
        .firestore()
        .collection("Restaurant")
        .doc("Info")
        .collection("Order")
    };
  },
  mounted: async function() {
    this.$store.state.totalPrice=0
    this.$store.state.order=[]
    //店家資料
    let doc = await this.$firestore.docRestaurantRef.get();
    if (doc.exists) {
      this.restaurantName = doc.data().Name;
      this.restaurantAdress = doc.data().Adress;
      this.restaurantTEL = doc.data().TEL;
      this.restaurantOpenTime = doc.data().OpenTime;
    }
    console.log(this.restaurantOpenTime)
    //餐點類型資料
    let querySnapshot = await this.$firestore.colTypeRef.get();
    let typearray = [];
    let i = 0;
    querySnapshot.forEach(docSnapshot => {
      typearray.push({
        name: docSnapshot.data().Name,
        food:[],
      });
    });
    this.type = typearray;
    //餐點細項資料
    const colTypeRef=this.$firestore.colTypeRef
    this.type.forEach(async function(item, index, array){
      querySnapshot = await colTypeRef.doc('Type'+(index+1)).collection('Food').get();
        let foodarray = [];
        querySnapshot.forEach(docSnapshot => {
        foodarray.push({
          name: docSnapshot.data().Name,
          price: docSnapshot.data().Price,
          count:0
        });
        item.food=foodarray
      });
    })
  },
  methods: {
    Increase: function (index,cindex) {
      this.type[index].food[cindex].count++
      this.$store.state.totalPrice+=this.type[index].food[cindex].price
    },
    Decrease: function (index,cindex) {
      let count=this.type[index].food[cindex].count
      if(count>0){
        count--
        this.type[index].food[cindex].count=count
        this.$store.state.totalPrice-=this.type[index].food[cindex].price
      }
    },
    Order: function () {
      this.type.forEach(item=>{
        item.food.forEach(item=>{
          if(item.count>0){
            this.$store.state.order.push({
              name:item.name,
              count:item.count,
              totalPrice:item.price*item.count
            })
          }
        });
      })
      if(this.$store.state.totalPrice==0)
        alert("請選擇餐點")
      else
        this.$router.push('/Order')
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/base.css";
*{
  /* border: 1px solid #000000; */
  font-family: 'Noto Sans TC', sans-serif;
}
h1,
h2,
h3 {
  font-weight: normal;
}
h3 {
  font-size: 2em;
  font-weight: 300;
}
h5{
  /* writing-mode:vertical-lr; */
  color:#262626;
  border:1px solid #000000;
  font-size: 2.5em;
  font-weight: 300;
  line-height: 1.1em;
  position: absolute;
  width:1em;
}
p{
  font-size: 1.2em;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight:100
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.img_restaurant{
  width:100%
}
.restaurant_info{
  width: 400px;
  padding:20px 40px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  color:#ffffff;
  right: 0px;
  margin-top:calc(150px + 2%);
}
article{
  display: grid;
  justify-content:center;
  background-color: #f8f8f8
}
.type {
  border: 1px solid #000000;
  width: 100%;
  display: grid;
  grid-template-columns: 20% 30%;
  grid-template-rows: 100%;
}
.font_bg{
  height:10em;
  width:2em;
  border-radius: 50px;
  background-color: #219e91;
  top:10px
}
.food {
  border: 1px solid #000000;
  width: 100px;
}
</style>
