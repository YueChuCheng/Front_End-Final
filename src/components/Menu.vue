<template>
  <div class="app" id="app">
    <h1>{{msg}}</h1>
    <h3>{{restaurantName}}</h3>
    <p>{{restaurantAdress}}</p>
    <p>TEL：{{restaurantTEL}}</p>
    <p>外送時間：{{restaurantOpenTime}}</p>
    <div class="type" v-for="parent,index in type" :key="index">
      <h5>{{parent.name}}</h5>
      <div class="food" v-for="child,cindex in parent.food" :key="child.index">
        <ul>
          <li>
            <div></div>
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
      <router-link to="/Order" tage="button" >
        確認訂單
      </router-link>
    </div>
  </div>
</template>

      
<script>
import db from "../db";

export default {
  name: "#app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      restaurantName: "",
      restaurantAdress: "",
      restaurantTEL: "",
      restaurantOpenTime: "",
      type: [
        {
          name: "test",
          food: [{ name: "testfood", price: 0,count:0}]
        }
      ],
      totalPrice:0
    };
  },
  firestore() {
    return {
      // Collection
      docRestaurantRef: firebase
        .firestore()
        .collection("Restaurant")
        .doc("Info"),
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
    //店家資料
    let doc = await this.$firestore.docRestaurantRef.get();
    if (doc.exists) {
      this.restaurantName = doc.data().Name;
      this.restaurantAdress = doc.data().Adress;
      this.restaurantTEL = doc.data().TEL;
      this.restaurantOpenTime = doc.data().OpenTime;
    }
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
      this.totalPrice+=this.type[index].food[cindex].price
    },
    Decrease: function (index,cindex) {
      let count=this.type[index].food[cindex].count
      if(count>0){
        count--
        this.type[index].food[cindex].count=count
        this.totalPrice-=this.type[index].food[cindex].price
      }
    },
    // Order: async function () {
    //   let doc = await this.$firestore.docRestaurantRef.get();
    //   let i=0;
    //   if (doc.exists) {
    //     i=doc.data().OrderCount
    //     i++
    //   }
    //   let setOrderCount = await this.$firestore.docRestaurantRef.set({
    //     OrderCount: i
    //   }, { merge: true })

    //   let orderArray=[]
    //   this.type.forEach(item=>{
    //     item.food.forEach(item=>{
    //       if(item.count>0){
    //         orderArray.push({
    //           name:item.name,
    //           count:item.count 
    //         })
    //       }
    //     });
    //   })
    //   orderArray.forEach(async (item,index) =>{
    //     console.log(index)
    //     let setOrder=await this.$firestore.colOrderRef.doc('Order'+i).collection('Food').doc('Food'+(index+1)).set({
    //       Name:item.name,
    //       Count:item.count
    //     })
    //     let setTotalPrice=await this.$firestore.colOrderRef.doc('Order'+i).collection('Info').doc('Info').set({
    //       TotalPrice:this.totalPrice
    //     })
    //   })
    // }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.type {
  border: 1px solid #000000;
  width: 200px;
}
.food {
  border: 1px solid #000000;
  width: 100px;
}
</style>
