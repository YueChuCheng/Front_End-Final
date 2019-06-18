<template>
  <div>
    <Nav/>
    <article>
      <section>
        <div>
          <div class="restaurantname_container">
            <h3 class="restaurantname_font_bg">{{restaurantName}}</h3>
            <h3 class="restaurantname">{{restaurantName}}</h3>
            <div class="restaurantname_hr">{{restaurantName}}</div>
            <input class="inputinfoedit editname" type="text" v-model="restaurantNewName" required>
            <img
              class="img_edit editbtnimg0"
              v-on:click="EditInfo(0)"
              src="../assets/icon/graywrite.png"
              alt
            >
            <button
              class="finisheditbtn finisheditnamebtn editbtnimg0"
              v-on:click="FinishEditInfo(0)"
            >完成</button>
          </div>
          <div class="restaurantotherinfo_container">
            <div class="restaurantotherinfoheader">
              <p>地址：</p>
              <p>TEL：</p>
              <p>外送時間：</p>
            </div>
            <div class="restaurantotherinfo">
              <p class="inputinfoedit_p editaddress_p">{{restaurantAddress}}</p>
              <input
                class="inputinfoedit editaddress"
                type="text"
                placeholder="輸入地址"
                v-model="restaurantAddress"
                required
              >
              <p class="inputinfoedit_p editTEL_p">{{restaurantTEL}}</p>
              <input
                class="inputinfoedit editTEL"
                type="text"
                placeholder="輸入電話"
                v-model="restaurantTEL"
                required
              >

              <p class="inputinfoedit_p editopentime_p">{{restaurantOpenTime}}</p>
              <input
                class="inputinfoedit editopentime"
                type="text"
                placeholder="輸入外送時間"
                v-model="restaurantOpenTime"
                required
              >
            </div>
            <div class="restaurantinfoset_container">
              <div class="editbtn">
                <img
                  class="img_edit editbtnimg1"
                  v-on:click="EditInfo(1)"
                  src="../assets/icon/graywrite.png"
                  alt
                >
                <button class="finisheditbtn finisheditaddressbtn" v-on:click="FinishEditInfo(1)">完成</button>
              </div>
              <div class="editbtn">
                <img
                  class="img_edit editbtnimg2"
                  v-on:click="EditInfo(2)"
                  src="../assets/icon/graywrite.png"
                  alt
                >
                <button class="finisheditbtn finisheditTELbtn" v-on:click="FinishEditInfo(2)">完成</button>
              </div>
              <div class="editbtn">
                <img
                  v-on:click="EditInfo(3)"
                  class="img_edit editbtnimg3"
                  src="../assets/icon/graywrite.png"
                  alt
                >
                <button
                  class="finisheditbtn finisheditopentimebtn"
                  v-on:click="FinishEditInfo(3)"
                >完成</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="menuheader_container">
          <h4>菜單管理</h4>
          <h4>Menu Manager</h4>
          <hr>
        </div>
        <div class="type_container">
          <div class="type" v-for="parent,index in type" :key="index">
            <div>
              <h5 class="font_bg">{{parent.name}}</h5>
              <h5>
                {{parent.name}}
                <div class="typedeletebtn" v-on:click="DeleteType(index)">
                  <img class="img_typedeletebtn" src="../assets/icon/greendelete.png" alt>
                </div>
              </h5>
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
      restaurantNewName: "",
      newFoodNameText: [],
      newFoodPriceText: [],
      newTypeNameText: "",
      newInfoName: "",
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
    userid: state => state.user.userid
  }),
  firestore() {
    return {
      // Collection
      // colRestaurantRef: firebase.firestore().collection("Restaurant"),
      // docRestaurantRef: firebase
      //   .firestore()
      //   .collection("Restaurant")
      //   .doc("Info"),
      // colTypeRef: firebase
      //   .firestore()
      //   .collection("Restaurant")
      //   .doc("Info")
      //   .collection("Menu"),
      // colOrderRef: firebase
      //   .firestore()
      //   .collection("Restaurant")
      //   .doc("Info")
      //   .collection("Order")
      colRestaurantRef: firebase.firestore().collection("test"),
      docRestaurantRef: firebase.firestore().collection("test").doc(this.$store.state.user.userid),
      colTypeRef: firebase
        .firestore()
        .collection("test")
        .doc(this.$store.state.user.userid)
        .collection("Menu"),
      colOrderRef: firebase
        .firestore()
        .collection("test")
        .doc(this.$store.state.user.userid)
        .collection("Order")
    };
  },
  mounted: async function() {
    this.$store.state.totalPrice = 0;
    this.$store.state.order = [];
    //店家資料
    let doc = await this.$firestore.docRestaurantRef.get();
    if (doc.exists) {
      this.restaurantName = doc.data().Name;
      this.restaurantNewName = this.restaurantName;
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
        newFoodPriceText: this.newFoodPriceText.push(""),
        fooddatacount: docSnapshot.data().FoodDataCount
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
          price: docSnapshot.data().Price
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
      this.type[index].fooddatacount++;
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
        .doc("Food" + this.type[index].fooddatacount)
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
        newFoodPriceText: this.newFoodPriceText.push(""),
      });
      console.log(this.type);
    },
    async AddTypeFirestore() {
      // this.type.length已新增
      // firestore
      let SetType = await this.$firestore.colTypeRef
        .doc("Type" + this.type.length)
        .set({
          Name: this.newTypeNameText,
          FoodDataCount:0
        });
    },
    DeleteType(index) {
      this.DeleteLocalType(index);
      this.DeleteTypeFirestore(index);
    },
    DeleteLocalType(index) {
      //local
      console.log(index);
      this.type.splice(index, 1);
    },
    async DeleteTypeFirestore(index) {
      let querySnapshot = await this.$firestore.colTypeRef
        .doc("Type" + (index + 1))
        .collection("Food")
        .get();
      querySnapshot.forEach(docSnapshot => docSnapshot.ref.delete());
      let DeleteType = await this.$firestore.colTypeRef
        .doc("Type" + (index + 1))
        .delete();
    },
    EditInfo(number) {
      switch (number) {
        case 0:
          $(".editbtnimg0").css({ display: "none" });
          $(".restaurantname").css({ display: "none" });
          $(".editname").css({ display: "block" });
          $(".finisheditnamebtn").css({ display: "block" });
          break;
        case 1:
          $(".editbtnimg1").css({ display: "none" });
          $(".editaddress_p").css({ display: "none" });
          $(".editaddress").css({ display: "block" });
          $(".finisheditaddressbtn").css({ display: "block" });
          break;
        case 2:
          $(".editbtnimg2").css({ display: "none" });
          $(".editTEL_p").css({ display: "none" });
          $(".editTEL").css({ display: "block" });
          $(".finisheditTELbtn").css({ display: "block" });
          break;
        case 3:
          $(".editbtnimg3").css({ display: "none" });
          $(".editopentime_p").css({ display: "none" });
          $(".editopentime").css({ display: "block" });
          $(".finisheditopentimebtn").css({ display: "block" });
          break;
        default:
          break;
      }
    },
    async FinishEditInfo(number) {
      switch (number) {
        case 0:
          $(".editbtnimg0").css({ display: "inline-block" });
          $(".restaurantname").css({ display: "block" });
          $(".editname").css({ display: "none" });
          $(".finisheditnamebtn").css({ display: "none" });
          this.restaurantName = this.restaurantNewName;
          await this.SetInfoFirestore(0);
          break;
        case 1:
          $(".editbtnimg1").css({ display: "inline-block" });
          $(".editaddress_p").css({ display: "block" });
          $(".editaddress").css({ display: "none" });
          $(".finisheditaddressbtn").css({ display: "none" });
          await this.SetInfoFirestore(1);
          break;
        case 2:
          $(".editbtnimg2").css({ display: "inline-block" });
          $(".editTEL_p").css({ display: "block" });
          $(".editTEL").css({ display: "none" });
          $(".finisheditTELbtn").css({ display: "none" });
          await this.SetInfoFirestore(2);
          break;
        case 3:
          $(".editbtnimg3").css({ display: "inline-block" });
          $(".editopentime_p").css({ display: "block" });
          $(".editopentime").css({ display: "none" });
          $(".finisheditopentimebtn").css({ display: "none" });
          await this.SetInfoFirestore(3);
          break;
        default:
          break;
      }
    },
    async SetInfoFirestore(number) {
      let self = this;
      switch (number) {
        case 0:
          let setName = await self.$firestore.colRestaurantRef.doc("Info").set(
            {
              Name: this.restaurantName
            },
            { merge: true }
          );
          console.log(this.restaurantNewName);
          console.log(this.restaurantName);
          break;
        case 1:
          //address
          console.log(this.restaurantAddress);
          let setAddress = await self.$firestore.colRestaurantRef
            .doc("Info")
            .set(
              {
                Address: this.restaurantAddress
              },
              { merge: true }
            );
          break;
        case 2:
          //tel
          console.log(this.restaurantTEL);
          let setTELCount = await await self.$firestore.colRestaurantRef
            .doc("Info")
            .set(
              {
                TEL: this.restaurantTEL
              },
              { merge: true }
            );
          break;
        case 3:
          //opentime
          console.log(this.restaurantOpenTime);
          let setOpenTimeCount = await self.$firestore.colRestaurantRef
            .doc("Info")
            .set(
              {
                OpenTime: this.restaurantOpenTime
              },
              { merge: true }
            );
          break;
        default:
          break;
      }
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
  font-size: 3.5vw;
  font-weight: 400;
  text-align: center;
  width: auto;
}
.restaurantname_hr {
  width: auto;
  height: 5vw;
  font-size: 3.5vw;
  font-weight: 400;
  position: absolute;
  top: 0%;
  text-align: center;
  color: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 0.2vw solid #262626;
  padding: 1vw 0;
}
h4 {
  font-size: 3vw;
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
  font-size: 2vw;
  font-weight: 350;
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
section {
  display: grid;
  justify-content: center;
  margin-bottom: 5vw;
}

.img_restaurant {
  border: none;
  width: 100%;
  box-sizing: border-box;
}
.restaurantname_container {
  position: relative;
  display: flex;
  justify-content: center;
}
.restaurantname_font_bg {
  background-color: #219e91;
  color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 65%;
  margin: 0 0 0 5%;
  border-radius: 20px;
  height: 3vw;
}
.restaurantname {
  z-index: 0;
}
.editname {
  height: 4.5vw;
  font-size: 3vw;
  width: 20vw;
  text-align: center;
  z-index: 1;
}
.restaurantotherinfo_container {
  margin-top: 3vw;
  display: grid;
  grid-template-columns: 11vw auto 6vw;
  grid-column-gap: 1vw;
  letter-spacing: 0.5px;
  line-height: 3vw;
}
.restaurantotherinfoheader {
  width: 11vw;
  text-align: end;
  display: grid;
  grid-row-gap: 1.1vw;
}
.restaurantinfoset_container {
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(3, 2.5vw);
  grid-template-columns: 2.5vw;
  align-content: space-around;
  align-items: start;
}
.restaurantotherinfo {
  display: grid;
  grid-row-gap: 1vw;
}
.inputinfoedit {
  /* position:absolute; */
  border: #7c7c7c 1px solid;
  border-radius: 7.5px;
  padding-left: 5px;
  background-color: #ffffff;
  display: none;
}
.img_edit {
  height: 2.5vw;
  margin-top: -1vw;
}
.editbtnimg0 {
  position: absolute;
  left: 87%;
  top: 70%;
}
.finisheditbtn {
  display: none;
  position: absolute;
  text-decoration: underline;
  color: #686868;
  border: none;
  background-color: rgba(0, 0, 0, 0);
}
.finisheditnamebtn {
  top: 45%;
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
  padding-bottom: 10vw;
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
.typedeletebtn {
  margin-top: 2.5vw;
  margin-left: 1vw;
}
.img_typedeletebtn {
  width: 2.5vw;
}
.showtypebtn_container {
  position: absolute;
  display: none;
}

@media screen and (max-width: 768px) {
  h3,
  .restaurantname_hr {
    font-size: 4.5vw;
  }
  h4 {
    font-size: 4vw;
  }
  h4:nth-child(2) {
    font-size: 2.75vw;
  }
  h5 {
    font-size: 5vw;
    line-height: 1em;
    width: auto;
    text-align: center;
    position: relative;
  }
  hr {
    border-top: 1px solid #262626;
    width: 22vw;
    margin-top: 10px;
  }
  p {
    font-size: 2.5vw;
  }
  /* article */
  article {
    padding-top: 15vw;
  }
  /* header */
  .restaurantname_hr {
    padding: 3vw 0;
  }
  .restaurantinfoset_container {
    grid-template-rows: repeat(3, 3.5vw);
    grid-row-gap: 1vw;
  }
  .menuheader_container {
    margin-bottom: 4.5vw;
  }
  .inputinfoedit {
    font-size: 2.25vw;
    /* position:absolute; */
    border: #7c7c7c 1px solid;
    border-radius: 7.5px;
    padding-left: 5px;
    background-color: #ffffff;
    display: none;
  }
  .img_edit {
    height: 3.5vw;
    width: auto;
  }
  .editbtnimg0 {
    left: 90%;
  }
  .editname {
    font-size: 4vw;
    width: 25vw;
    height: 5vw;
  }
  .finisheditbtn {
    width: 5vw;
    font-size: 2vw;
  }
  .restaurantotherinfo_container {
    grid-template-columns: 15vw auto 6vw;
    grid-column-gap: 1vw;
  }
  .restaurantotherinfoheader {
    width: 15vw;
  }
  /* food */
  .type_container {
    margin-top: 0px;
  }
  .type {
    padding-bottom: 7.5vw;
    grid-column-gap: 3vw;
  }
  .font_bg {
    width: 4vw;
    margin-left: 2%;
    position: absolute;
  }
  .food_container {
    grid-template-columns: repeat(2, 32.5vw);
    margin: 0;
    grid-column-gap: 2.5vw;
  }
  .food ul li {
    padding: 0.3vw 0px;
    height: auto;
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
  /* new */
  .img_typedeletebtn {
    width: 3vw;
  }
  .foodbtn_container {
    width: 5vw;
    height: 5vw;
    left: -5%;
  }
  .foodaddbtn {
    left: 90%;
  }
  .img_foodbtn,
  .img_deletebtn {
    width: 2.5vw;
    height: 2.5vw;
  }
  .img_addfood_container {
    border: #dddddd solid 1px;
    width: 15vw;
    max-width: 90px;
    height: 15vw;
    max-height: 90px;
  }
  .inputfoodname {
    font-weight: 200;
    font-size: 2vw;
    width: 16vw;
    height: 3.25vw;
  }
  .inputfoodprice_container {
    color: #262626;
    font-size: 1.75vw;
  }
  .inputfoodprice {
    font-weight: 200;
    height: 2.75vw;
    font-size: 1.75vw;
    width: 10vw;
  }
  .addtypebtn_container {
    width: 7vw;
    height: 7vw;
    margin-left: -1vw;
  }
  .img_addtypebtn {
    width: 3.5vw;
    height: 3.5vw;
  }
  .inputtypename {
    margin-left: 2vw;
    height: 4vw;
    font-size: 2.5vw;
    width: 22.5vw;
    padding-bottom: 0.1vw;
  }
}
@media screen and (max-width: 480px) {
  h3,
  .restaurantname_hr {
    font-size: 1.75em;
    letter-spacing: 0.1vw;
  }
  h4 {
    font-size: 1.4em;
  }
  h4:nth-child(2) {
    display: none;
  }
  h5 {
    font-size: 1.5em;
    line-height: 1em;
    width: auto;
    text-align: center;
    position: relative;
  }
  hr {
    border-top: 1px solid #262626;
    width: 100px;
    margin-top: 5px;
  }
  p {
    font-size: 4vw;
  }
  /* article */
  article {
    padding-top: 90px;
    padding-bottom: 15vw;
  }
  section {
    margin-bottom: 25px;
  }
  /* header */
  .restaurantname_font_bg {
    height: 22.5px;
  }
  .restaurantname_hr {
    padding: 20px 0;
  }
  .restaurantotherinfo_container {
    margin-top: 25px;
    grid-template-columns: 100px auto 30px;
    grid-column-gap: 1.5vw;
    line-height: 25px;
  }
  .restaurantotherinfoheader {
    width: 100px;
  }
  .restaurantinfoset_container {
    grid-template-rows: repeat(3, 3.5vw);
    grid-row-gap: 1.5vw;
  }
  .inputinfoedit {
    border: #7c7c7c 1px solid;
    border-radius: 7.5px;
    padding-left: 5px;
    background-color: #ffffff;
    display: none;
  }
  .img_edit {
    height: 22.5px;
    margin-top: -2vw;
  }
  .editbtnimg0 {
    left: 92.5%;
  }
  .editname {
    font-size: 4vw;
    width: 25vw;
    height: 5vw;
  }
  .finisheditbtn {
    width: 10vw;
    font-size: 2vw;
  }
  .menuheader_container {
    margin-bottom: 4.5vw;
  }
  /* food */
  .type {
    width: 75vw;
    grid-template-columns: 100%;
    justify-content: center;
    justify-items: center;
    grid-template-rows: 10vw auto;
    grid-row-gap: 15px;
    padding-bottom: 4vw;
  }
  .font_bg {
    width: auto;
    height: 0.8em;
    margin-top: 12.5px;
    margin-left: 7.5px;
  }
  .food_container {
    grid-row-gap: 5%;
    grid-template-columns: auto;
    padding-bottom: 50px;
  }
  .food ul li {
    padding: 0% 10% 1.5% 5%;
    width: 73vw;
    grid-template-columns: 20vw auto;
    justify-content: start;
    justify-content: space-between;
    height: 20vw;
  }
  .img_food {
    /* border:1px solid #000000;  */
    height: 20vw;
    width: auto;
  }
  .foodinfo_container {
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-column-gap: 4vw;
    grid-row-gap: 0.5vw;
    padding: 0.5vw 0;
    margin-top: 0vw;
  }
  .foodinfo_container p {
    font-size: 4vw;
  }
  .foodinfo_container p:nth-child(2) {
    font-size: 4vw;
    top: 70%;
  }
  .foodinfo_container p:nth-child(2) {
    font-size: 3vw;
    margin: 0.5vw 0 0 1vw;
  }
  /* new */
  .img_typedeletebtn {
    position: absolute;
    top: 2.5vw;
    width: 22px;
    height: auto;
    margin-left: 30vw;
    margin-top: -0.5vw;
  }
  .foodbtn_container {
    width: 7vw;
    height: 7vw;
    left: -3.5%;
  }
  .foodaddbtn {
    left: 92.5%;
  }
  .img_foodbtn,
  .img_deletebtn {
    width: 3.5vw;
    height: 3.5vw;
  }
  .img_addfood_container {
    width: 17.5vw;
    max-width: 90px;
    height: 17.5vw;
    max-height: 90px;
    margin-top: 5px;
  }
  .inputfoodname {
    font-weight: 200;
    font-size: 4vw;
    width: 35vw;
    height: 5.25vw;
  }
  .inputfoodprice_container {
    font-size: 3vw;
  }
  .inputfoodprice {
    height: 4.25vw;
    font-size: 3vw;
    width: 20vw;
  }
  .addtypebtn_container {
    width: 10vw;
    height: 10vw;
    margin-top:5vw;
  }
  .img_addtypebtn {
    width: 5vw;
    height: 5vw;
  }
  .inputtypename {
    margin-left: 3vw;
    height: 6vw;
    font-size: 4vw;
    width: 35vw;
    padding-bottom:0vw;
    margin-top:4vw;
  }
  .showtypebtn_container {
    display: block;
    width: 30px;
    height: auto;
    margin-left: 55vw;
    margin-top: 2.5vw;
    position: absolute;
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