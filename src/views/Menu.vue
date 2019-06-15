<template>
  <div>
    <Nav/>
    <header>
      <div>
        <div class="restaurant_info">
          <h3>{{restaurantName}}</h3>
          <p>{{restaurantAddress}}</p>
          <p>TEL：{{restaurantTEL}}</p>
          <p>外送時間：{{restaurantOpenTime}}</p>
        </div>
        <img src="../assets/restaurant/restaurant (5).png" class="img_restaurant">
      </div>
    </header>
    <article>
      <div class="menuheader_container">
        <h4>菜單</h4>
        <h4>Menu</h4>
        <hr>
      </div>
      <div class="type_container">
        <div class="type" v-for="parent,index in type" :key="index">
          <div>
            <h5 class="font_bg">{{parent.name}}</h5>
            <h5>{{parent.name}}</h5>
          </div>
          <transition enter-active-class="fade-enter-active" leave-active-class="fade-leave-active">
            <img
              src="../assets/icon/notshowbtn.png"
              class="showtypebtn_container"
              v-bind:id="'showtypebtn_container'+index"
              v-on:click="parent.isShow=!parent.isShow"
              v-show="parent.isShow"
            >
          </transition>
          <transition enter-active-class="fade-enter-active" leave-active-class="fade-leave-active">
            <img
              src="../assets/icon/toshowbtn.png"
              class="showtypebtn_container"
              v-bind:id="'showtypebtn_container'+index"
              v-on:click="parent.isShow=!parent.isShow"
              v-show="!parent.isShow"
            >
          </transition>
          <div class="food_container" v-show="(!small)||parent.isShow">
            <div
              class="food"
              v-for="child,cindex in parent.food"
              :key="child.index"
              v-if="child.count > 0"
              v-bind:style="{ outline:'3px solid #ff794a'}"
            >
              <ul>
                <li>
                  <img src="../assets/food.png" class="img_food">
                  <div class="foodinfo_container">
                    <p class="foodname">{{ child.name }}</p>
                    <p class="foodprice">NT${{ child.price }}</p>
                    <div class="foodbtn_container">
                      <button v-on:click="Decrease(index,cindex)" class="foodbtn decrease">
                        <img src="../assets/icon/minus.png" class="img_foodbtn minus">
                      </button>
                      <div class="count">{{child.count}}</div>
                      <button v-on:click="Increase(index,cindex)" class="foodbtn increase">
                        <img src="../assets/icon/plus.png" class="img_foodbtn plus">
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="food" v-else-if="child.count === 0">
              <ul>
                <li>
                  <img src="../assets/food.png" class="img_food">
                  <div class="foodinfo_container">
                    <p class="foodinfo">{{ child.name }}</p>
                    <p class="foodprice">NT${{ child.price }}</p>
                    <div class="foodbtn_container">
                      <button v-on:click="Decrease(index,cindex)" class="foodbtn decrease">
                        <img src="../assets/icon/minus.png" class="img_foodbtn minus">
                      </button>
                      <div class="count">{{child.count}}</div>
                      <button v-on:click="Increase(index,cindex)" class="foodbtn increase">
                        <img src="../assets/icon/plus.png" class="img_foodbtn plus">
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h4 class="totalprice">共計 NT$ {{ totalPrice }}</h4>
      <button v-on:click="Order" class="mainbtn">確認訂單</button>
    </article>
    <Footer/>
  </div>
</template>

      
<script>
import db from "../firebase/index";
import { mapState } from "vuex";
import $ from "jquery";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default {
  components: {
    Nav,
    Footer
  },
  data() {
    return {
      small: false,
      imgsrc: "",
      isShow: [],
      restaurantName: "",
      restaurantAddress: "",
      restaurantTEL: "",
      restaurantOpenTime: "",
      type: [
        // {
        //   name: "",
        //   food: [{ name: "", price: 0,count:0}]
        // }
      ]
    };
  },
  computed: mapState({
    totalPrice: state => state.totalPrice,
    clickID: state => state.clickID
  }),
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
      // docRestaurantRef: firebase.firestore().collection("test").doc(this.$store.state.clickID),
      // colTypeRef: firebase
      //   .firestore()
      //   .collection("test")
      //   .doc(this.$store.state.clickID)
      //   .collection("Menu"),
      // colOrderRef: firebase
      //   .firestore()
      //   .collection("test")
      //   .doc(this.$store.state.clickID)
      //   .collection("Order")
    };
  },
  mounted: async function() {
    this.$store.state.totalPrice = 0;
    this.$store.state.order = [];
    //店家資料
    let doc = await this.$firestore.docRestaurantRef.get();
    if (doc.exists) {
      this.restaurantName = doc.data().Name;
      this.restaurantAddress = doc.data().Address;
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
        food: [],
        isShow: false
      });
    });
    this.type = typearray;
    //餐點細項資料
    const colTypeRef = this.$firestore.colTypeRef;
    this.type.forEach(async function(item, index, array) {
      querySnapshot = await colTypeRef
        .doc("Type" + (index + 1))
        .collection("Food")
        .get();
      let foodarray = [];
      querySnapshot.forEach(docSnapshot => {
        foodarray.push({
          name: docSnapshot.data().Name,
          price: docSnapshot.data().Price,
          count: 0
        });
        item.food = foodarray;
      });
    });

    // jquery
    if ($(window).width() <= 480) {
      this.small = true;
    } else {
      this.small = false;
    }
  },
  methods: {
    Increase: function(index, cindex) {
      this.type[index].food[cindex].count++;
      this.$store.state.totalPrice += this.type[index].food[cindex].price;
    },
    Decrease: function(index, cindex) {
      let count = this.type[index].food[cindex].count;
      if (count > 0) {
        count--;
        this.type[index].food[cindex].count = count;
        this.$store.state.totalPrice -= this.type[index].food[cindex].price;
      }
    },
    Order: function() {
      this.type.forEach(item => {
        item.food.forEach(item => {
          if (item.count > 0) {
            this.$store.state.order.push({
              name: item.name,
              count: item.count,
              totalPrice: item.price * item.count
            });
          }
        });
      });
      if (this.$store.state.totalPrice == 0) alert("請選擇餐點");
      else this.$router.push("/order");
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/base.css";
* {
  box-sizing: border-box;
  font-family: "Noto Sans TC", sans-serif;
  margin: 0;
  padding: 0;
}
.main {
  padding: 14px 10px;
  background-color: #262626;
}
header {
  padding-top: 70px;
}
h1,
h2,
h3 {
  font-weight: normal;
}
h3,
h4 {
  font-size: 3vw;
  font-weight: 300;
}
h4 {
  font-weight: 400;
  text-align: center;
}
h4:nth-child(2) {
  font-size: 2vw;
  font-weight: 400;
  text-align: center;
  margin-top: 4px;
}
h5 {
  /* writing-mode:vertical-lr; */
  color: #262626;
  /* border:1px solid #000000; */
  font-size: 4vw;
  font-weight: 300;
  line-height: 4.25vw;
  position: absolute;
  width: 3vw;
}
hr {
  border: none;
  border-top: 0.2vw solid #262626;
  width: 18vw;
  margin-top: 1vw;
}
p {
  font-size: 1.75vw;
  font-weight: 100;
  margin-bottom: 0.1vw;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
.img_restaurant {
  border: none;
  width: 100%;
  box-sizing: border-box;
}
.restaurant_info {
  width: 32.5%;
  padding: 2vw 3vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  color: #ffffff;
  right: 0vw;
  margin-top: 15vw;
  display: grid;
  grid-row-gap: 0.01vw;
}

/* article */
article {
  width: 100%;
  display: grid;
  justify-content: center;
  /* justify-items: center; */
  background-color: #f8f8f8;
  padding-top: 4vw;
  padding-bottom: 8vw;
}
.menuheader_container {
  display: grid;
  justify-content: center;
  margin-bottom: 1.5vw;
}
.type_container {
  margin-top: 20px;
}
.type {
  margin-left: -2vw;
  width: 80vw;
  padding-bottom: 5vw;
  display: grid;
  grid-template-columns: 6vw auto;
  grid-template-rows: 100%;
}
.font_bg {
  width: 3vw;
  border-radius: 50px;
  background-color: #219e91;
  margin-top: 2%;
  margin-left: 1.25%;
  color: rgba(0, 0, 0, 0);
}
.food_container {
  /* border:1px solid #000000; */
  grid-row-gap: 2vw;
  grid-column-gap: 1.5vw;
  display: grid;
  grid-template-columns: repeat(3, 24vw);
}
.food ul li {
  background-color: #ffffff;
  height: auto;
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 9vw auto;
  box-shadow: 0.1px 0.1px 7px 0.5px #eeeeee;
}
.img_food {
  height: 9vw;
  margin-left: 12%;
}
.foodinfo_container {
  padding: 0.75vw 1.25vw;
  display: grid;
  grid-template-rows: repeat(2, 30%) auto;
  grid-row-gap: 0.4vw;
}
.foodinfo_container p {
  font-size: 2vw;
  font-weight: 350;
  text-align: right;
  margin: 0 0 1vw 0;
}
.foodinfo_container p:nth-child(2) {
  font-size: 1.5vw;
  margin: 0.5vw 0 0 0;
}
.foodname {
  font-weight: 400;
}
.foodbtn_container {
  border-radius: 60px;
  display: grid;
  align-content: center;
  align-items: start;
  grid-template-columns: repeat(3, 3vw);
  grid-template-rows: 2vw;
  margin: -0.5vw 0 0 0;
}
.foodbtn_container .count {
  font-weight: 300;
  font-size: 1.5vw;
  border: #ff794a solid 1px;
  border-left: none;
  border-right: none;
  text-align: center;
  height: 2.5vw;
}
.foodbtn {
  background-color: #ff794a;
  border: #ff794a 1px solid;
  border-radius: 50px 0px 0px 50px;
  height: 2.5vw;
  display: flex;
  justify-content: center;
  align-content: center;
}
.increase {
  border-radius: 0px 50px 50px 0px;
}
.foodbtn:active {
  background-color: #c95932;
}
.img_foodbtn {
  height: 50%;
  width: 50%;
}
.totalprice {
  font-size: 2.5vw;
  text-align: end;
}
.mainbtn {
  margin-top: 3vw;
  background-color: #ff794a;
  border: #ff794a;
  text-align: center;
  color: #ffffff;
  font-weight: 200;
  font-size: 2vw;
  width: 13vw;
  height: 4.5vw;
  border-radius: 60px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.mainbtn:active {
  background-color: #c95932;
}
.showtypebtn_container {
  position: absolute;
  display: none;
}

/* 768px */
@media screen and (max-width: 768px) and (min-width: 481px) {
  header {
    padding-top: 60px;
  }
  h3,
  h4 {
    font-size: 4vw;
  }
  h4:nth-child(2) {
    font-size: 2.75vw;
  }
  hr {
    border-top: 1.5px solid #262626;
    width: 25vw;
    margin-top: 1vw;
  }
  h5 {
    font-size: 5vw;
    line-height: 1em;
    width: auto;
    text-align: center;
    position: relative;
  }
  p {
    font-size: 2vw;
  }
  .restaurant_info {
    width: 45%;
    padding: 2.5vw 4vw;
    top: 17%;
    margin-top: 17.5vw;
  }
  /* article */
  .menuheader_container {
    margin-bottom: 4.5vw;
  }
  .type_container {
    margin-top: 0px;
  }
  .type {
    justify-content: center;
    justify-items: center;
    grid-template-rows: 100%;
    padding-bottom: 5vw;
    grid-column-gap: 2vw;
  }
  .font_bg {
    width: 4vw;
    margin-left: 2%;
    position: absolute;
  }
  .food_container {
    grid-template-columns: repeat(2, 32vw);
    margin: 0;
  }
  .food ul li {
    padding: 0.3vw 0px;
  }
  .img_food {
    width: 15vw;
    max-width: 90px;
    height: auto;
    margin-left: 10%;
  }
  .foodinfo_container {
    padding: 0px 2vw;
    margin: 1vw 0;
  }
  .foodinfo_container p {
    font-size: 2.5vw;
  }
  .foodinfo_container p:nth-child(2) {
    font-size: 2vw;
    margin: 0.5vw 0 0 1vw;
  }
  .foodbtn_container .count {
    font-size: 2vw;
    height: 3vw;
  }
  .foodbtn {
    height: 3vw;
  }
  .foodbtn_container {
    grid-template-columns: repeat(3, 3.5vw);
  }
  .totalprice {
    font-size: 3.5vw;
    margin-right: 4vw;
  }
  .mainbtn {
    margin-top: 3vw;
    font-size: 1em;
    height: 35px;
    width: 6em;
    border-radius: 60px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
/* 480px */
@media screen and (max-width: 480px) {
  header {
    padding-top: 60px;
  }
  h3,
  h4 {
    font-size: 1.4em;
  }
  h4:nth-child(2) {
    display: none;
  }
  hr {
    border-top: 1px solid #262626;
    width: 18vw;
    margin-top: 10px;
  }
  h5 {
    /* border:1px solid #000000;  */
    font-size: 1.5em;
    line-height: 1em;
    width: auto;
    text-align: center;
    position: relative;
  }
  p {
    font-size: 0.8em;
  }
  .restaurant_info {
    width: 60vw;
    padding: 15px 25px;
    top: 22vw;
    margin-top: 0px;
  }
  /* article */
  .menuheader_container {
    margin-bottom: 4.5vw;
  }
  .type_container {
    margin-top: 0px;
  }
  .type {
    /* border:1px solid #000000;  */
    width: 75vw;
    grid-template-columns: 100%;
    justify-content: center;
    justify-items: center;
    grid-template-rows: 10vw auto;
    grid-row-gap: 15px;
    /* margin-bottom: 30px; */
    padding-bottom: 0px;
  }
  .font_bg {
    width: auto;
    height: 0.8em;
    margin-top: 12.5px;
    margin-left: 7.5px;
    color: rgba(0, 0, 0, 0);
    position: absolute;
  }
  .showtypebtn_container {
    display: block;
    width: 30px;
    height: auto;
    margin-left: 55vw;
    margin-top: 2.5vw;
    position: absolute;
  }
  .food_container {
    grid-row-gap: 2.5%;
    grid-template-columns: auto;
    padding-bottom: 50px;
  }
  .food ul li {
    padding: 1.5% 0px;
    /* border:1px solid #000000;  */
    width: 73vw;
    grid-template-columns: 9vw auto;
    justify-content: start;
    grid-column-gap: 15%;
  }
  .img_food {
    /* border:1px solid #000000;  */
    height: 20vw;
    margin-left: 10%;
  }
  .foodinfo_container {
    grid-template-columns: 25vw auto;
    grid-template-rows: auto;
    grid-column-gap: 4vw;
    padding: 3vw 0;
    position: relative;
    margin-top: -5vw;
  }
  .foodinfo_container p {
    font-size: 1em;
  }
  .foodinfo_container p:nth-child(2) {
    font-size: 0.8em;
    right: 48%;
    top: 70%;
    position: absolute;
  }
  .foodbtn_container .count {
    font-size: 0.8em;
    height: 22.5px;
  }
  .foodbtn {
    height: 22.5px;
  }
  .foodbtn_container {
    margin-top: 2.5vw;
    grid-template-columns: repeat(3, 6vw);
  }
  .totalprice {
    font-size: 1.1em;
  }
  .mainbtn {
    font-size: 1em;
    width: 100px;
    height: 35px;
    margin-top: 30px;
  }
}

/* vue transition */
.fade-enter-active {
  animation: go 0.1s;
}
.fade-leave-active {
  animation: back 0.1s;
}

@keyframes go {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes back {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>