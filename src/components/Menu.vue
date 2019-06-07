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
          </li>
        </ul>
      </div>
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
          food: [{ name: "testfood", price: 0 }]
        }
      ]
    };
  },
  firestore() {
    return {
      // Collection
      docRestaurantRef: firebase
        .firestore()
        .collection("Restaurant")
        .doc("Restaurant1"),
      colTypeRef: firebase
        .firestore()
        .collection("Restaurant")
        .doc("Restaurant1")
        .collection("Menu")
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
        name: docSnapshot.id,
        food:[]
      });
    });
    this.type = typearray;
    //餐點細項資料
    const colTypeRef=this.$firestore.colTypeRef
    this.type.forEach(async function(item, index, array){
      querySnapshot = await colTypeRef.doc(item.name).collection('Food').get();
        let foodarray = [];
        querySnapshot.forEach(docSnapshot => {
        foodarray.push({
          name: docSnapshot.id,
          price: docSnapshot.data().Price
        });
        item.food=foodarray
        console.log(item.food)
      });
    })
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
