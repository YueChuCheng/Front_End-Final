<template>
  <div>
    <Nav/>
    <article>
      <section>
        <!-- <div>
          <div class="restaurant_info">
            <div class="restaurantname_container">
              <div class="">{{restaurantName}}</div>
              <h3 class="">{{restaurantName}}</h3>
              <hr class="">
            </div>
            <h3>{{restaurantName}}</h3>
            <p>{{restaurantAddress}}</p>
            <p>TEL：{{restaurantTEL}}</p>
            <p>外送時間：{{restaurantOpenTime}}</p>
          </div>
        </div> -->
      </section>
      <section>
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
            <transition
              enter-active-class="fade-enter-active"
              leave-active-class="fade-leave-active"
            >
              <img
                src="../assets/icon/notshowbtn.png"
                class="showtypebtn_container"
                v-bind:id="'showtypebtn_container'+index"
                v-on:click="parent.isShow=!parent.isShow"
                v-show="parent.isShow"
              >
            </transition>
            <transition
              enter-active-class="fade-enter-active"
              leave-active-class="fade-leave-active"
            >
              <img
                src="../assets/icon/toshowbtn.png"
                class="showtypebtn_container"
                v-bind:id="'showtypebtn_container'+index"
                v-on:click="parent.isShow=!parent.isShow"
                v-show="!parent.isShow"
              >
            </transition>
            <div class="food_container" v-show="(!small)||parent.isShow">
              <div class="food" v-for="child,cindex in parent.food" :key="child.index">
                <ul>
                  <li>
                    <img src="../assets/food.png" class="img_food">
                    <div class="foodinfo_container">
                      <p class="foodname">{{ child.name }}</p>
                      <p class="foodprice">NT${{ child.price }}</p>
                      <button class="foodbtn_container" v-on:click="DeleteFood(index,cindex)">
                        <img
                          src="../assets/icon/middelete.png"
                          alt
                          class="img_foodbtn img_deletebtn"
                        >
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="food">
                <ul>
                  <li class="addfoodli">
                    <div class="img_addfood_container">
                      <img src="../assets/icon/picture.png" class="img_addpicture">
                    </div>
                    <div class="foodinfo_container inputinfo_container">
                      <input
                        class="inputfoodname"
                        type="text"
                        placeholder="輸入餐點名稱"
                        v-model="newFoodNameText[index]"
                        required
                      >
                      <div class="inputfoodprice_container">
                        NT $
                        <input
                          class="inputfoodprice"
                          type="number"
                          min="0"
                          max="9"
                          placeholder="輸入價格"
                          v-model="newFoodPriceText[index]"
                          required
                        >
                      </div>
                      <button
                        type="submit"
                        class="foodbtn_container foodaddbtn"
                        v-on:click="AddFood(index)"
                      >
                        <img src="../assets/icon/midplus.png" alt class="img_foodbtn">
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="addtype_container">
          <button class="addtypebtn_container" v-on:click="AddType()">
            <img src="../assets/icon/bigplus.png" alt class="img_addtypebtn">
          </button>
          <input
            class="inputtypename"
            type="text"
            placeholder="新增餐點種類"
            v-model="newTypeNameText"
            required
          >
        </div>
      </section>
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
      newFoodNameText: [],
      newFoodPriceText: [],
      newTypeNameText: "",
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
        isShow: false,
        newFoodNameText: this.newFoodNameText.push(""),
        newFoodPriceText: this.newFoodPriceText.push("")
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
    AddFood: function(index) {
      console.log(this.newFoodNameText);
      console.log(this.newFoodPriceText);
      this.SetNewFood(index);
    },
    DeleteFood: function(index, cindex) {},
    SetNewFood(index) {
      this.SetLocalNewFood(index);
      this.SetFoodFirestore(index);
    },
    SetLocalNewFood(index) {
      //local
      this.type[index].food.push({
        name: this.newFoodNameText[index],
        price: this.newFoodPriceText[index],
        count: 0
      });
      console.log(this.type);
    },
    async SetFoodFirestore(index) {
      //firestore
      let setNewFood = await this.$firestore.colTypeRef
        .doc("Type" + (index + 1))
        .collection("Food")
        .doc("Food" + this.type[index].food.length)
        .set({
          Name: this.newFoodNameText[index],
          Price: this.newFoodPriceText[index]
        });
    },
    DeleteFood(index, cindex) {
      this.DeleteLocalFood(index, cindex);
      this.DeleteFoodFirestore(index, cindex);
    },
    DeleteLocalFood(index, cindex) {
      //local
      this.type[index].food.splice(cindex, 1);
    },
    async DeleteFoodFirestore(index, cindex) {
      //firestore
      let DeleteFood = await this.$firestore.colTypeRef
        .doc("Type" + (index + 1))
        .collection("Food")
        .doc("Food" + (cindex + 1))
        .delete();
    },
    AddType() {
      this.AddLocalType();
      this.AddTypeFirestore();
    },
    AddLocalType() {
      //local
      this.type.push({
        name: this.newTypeNameText,
        food: [],
        isShow: false,
        newFoodNameText: this.newFoodNameText.push(""),
        newFoodPriceText: this.newFoodPriceText.push("")
      });
      console.log(this.type);
    },
    async AddTypeFirestore() {
      // this.type.length已新增
      // firestore
      let SetType = await this.$firestore.colTypeRef
        .doc("Type" + this.type.length)
        .set({
          Name: this.newTypeNameText
        });
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
  color: #262626;
}
/* nav */
.main {
  padding: 14px 10px;
  background-color: #262626;
}
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
input {
  border: none;
  border-bottom: #7c7c7c 1px solid;
  background-color: rgba(0, 0, 0, 0);
  color: #686868;
  font-weight: 300;
}
.img_restaurant {
  border: none;
  width: 100%;
  box-sizing: border-box;
}
/* .restaurant_info {
  width: 32.5%;
  padding: 2vw 3vw;
  right: 0vw;
  margin-top: 15vw;
  display: grid;
  grid-row-gap: 0.01vw;
} */

/* article */
article {
  width: 100%;
  display: grid;
  justify-content: center;
  /* justify-items: center; */
  background-color: #f8f8f8;
  padding-top: 12vw;
  padding-bottom: 8vw;
}
.menuheader_container {
  display: grid;
  justify-content: center;
  margin-bottom: 4vw;
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
  height: 9vw;
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 9vw auto;
  box-shadow: 0.1px 0.1px 7px 0.5px #eeeeee;
  position: relative;
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
  position: absolute;
  background-color: #ff794a;
  border: #ff794a;
  border-radius: 50%;
  width: 3.5vw;
  height: 3.5vw;
  top: -12.5%;
  left: -3%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.foodaddbtn {
  top: 70%;
  left: 90%;
}
.img_foodbtn {
  width: 2vw;
  height: 2vw;
}
.img_deletebtn {
  width: 1.6vw;
  height: 1.6vw;
}
.foodbtn_container:active {
  background-color: #c95932;
}
.addtype_container {
  display: flex;
  justify-content: start;
  align-content: center;
  align-items: center;
}
.addtypebtn_container {
  background-color: #219e91;
  border: #219e91;
  border-radius: 50%;
  width: 5vw;
  height: 5vw;
  margin-left: -2vw;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.img_addtypebtn {
  width: 2.75vw;
  height: 2.75vw;
}
.inputtypename {
  margin-left: 1.5vw;
  height: 3vw;
  font-size: 2vw;
  width: 20vw;
  padding-bottom: 0.1vw;
}
.inputinfo_container {
  justify-content: end;
  justify-items: end;
  grid-row-gap: 1vw;
  margin: 0;
  padding-right: 1.5vw;
  padding-left: 0vw;
}
.inputfoodprice_container {
  color: #262626;
}
.inputfoodname {
  text-align: end;
  height: 3vw;
  font-size: 1.75vw;
  width: 12vw;
  height: 2.5vw;
}
.inputfoodprice {
  text-align: end;
  height: 2.15vw;
  font-size: 1.5vw;
  width: 8vw;
  padding-bottom: 0vw;
}
.img_addfood_container {
  border: #dddddd solid 0.5px;
  width: 8vw;
  height: 8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0% 6%;
}
.addfoodli {
  padding: 0.5%;
}
.img_addpicture {
  width: 3vw;
  height: auto;
}
.showtypebtn_container {
  position: absolute;
  display: none;
}
</style>