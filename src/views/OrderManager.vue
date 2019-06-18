<template>
  <div class="hello">
    <Nav/>
    <article>
      <div class="menuheader_container">
        <h4>訂單管理</h4>
        <h4>Order Manager</h4>
        <hr>
      </div>
      <section>
        <div class="order_container" v-for="parent,index in order" :key="index">
          <div class="orderheader">
            <div class="ordernumber orderheadertext">{{ index+1 }}</div>
            <div class="orderheadertext">餐點</div>
            <div class="orderheadertext">數量</div>
          </div>
          <div>
            <ul>
              <li class="food_container" v-for="child,cindex in parent.food" :key="child.index">
                <div>{{ child.name }}</div>
                <div>{{ child.count }}</div>
              </li>
              <li class="orderinfo">
                <div class="infoheader_container">
                  <div>共計</div>
                  <div>訂購人</div>
                  <div>送達時間</div>
                  <div>手機</div>
                  <div>外送地址</div>
                  <div>備註</div>
                </div>
                <div class="info_container">
                  <div>{{ parent.info.totalPrice}} 元</div>
                  <div>{{ parent.info.name }}</div>
                  <div>{{ parent.info.time }}</div>
                  <div>{{ parent.info.TEL }}</div>
                  <div>{{ parent.info.address }}</div>
                  <div>{{ parent.info.message }}</div>
                </div>
                <button class="deletebtn" v-on:click="Finish(index)">完成</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <img src="../assets/draw_new (2).png" alt class="img_draw">
    </article>
    <Footer/>
  </div>
</template>

<script>
import db from "../firebase/index";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { mapState } from "vuex";

export default {
  name: "OrderManager",
  components: {
    Nav,
    Footer
  },
  data() {
    return {
      order: [
        // {
        //   info:{
        //   name:'',
        //   address:'',
        //   TEL:'',
        //   time:'',
        //   totalPrice:0,
        //   message:''
        //   },
        // food:[]
        // }
      ],
      orderNumber: []
    };
  },
  computed: mapState({
    userid: state => state.user.userid
  }),

  firestore() {
    return {
      // docInfoRef: firebase
      //   .firestore()
      //   .collection("Restaurant")
      //   .doc("Info"),
      // colOrderRef: firebase
      //   .firestore()
      //   .collection("Restaurant")
      //   .doc("Info")
      //   .collection("Order")
      docInfoRef: firebase
        .firestore()
        .collection("test")
        .doc(this.$store.state.user.userid),
      colOrderRef: firebase
        .firestore()
        .collection("test")
        .doc(this.$store.state.user.userid)
        .collection("Order")
    };
  },

  methods: {
    async getOrderInfo(id) {
      // get order info with orderNumber
      let self = this;

      //AJAX
      let doc = await this.$firestore.colOrderRef
        .doc("Order" + id)
        .collection("Info")
        .doc("Info")
        .get();

      let food = await this.$firestore.colOrderRef.doc("Order" + id).get();

      //Format
      if (doc.exists) {
        let data = {
          info: {
            name: doc.data().Name,
            address: doc.data().Address,
            TEL: doc.data().TEL,
            time: doc.data().Time,
            totalPrice: doc.data().TotalPrice,
            message: doc.data().Message
          },
          food: []
        };

        let foodCount = food.data().FoodCount;
        for (var foodId = 1; foodId <= foodCount; foodId++) {
          data.food.push(await self.getFoodInfo(id, foodId));
        }

        return data;
      } else {
        return "error";
      }
    },

    async getFoodInfo(orderNumber, id) {
      // get food inf with foodId in orderNumber
      let doc = await this.$firestore.colOrderRef
        .doc("Order" + orderNumber)
        .collection("Food")
        .doc("Food" + id)
        .get();

      if (doc.exists) {
        let data = {
          name: doc.data().Name,
          count: doc.data().Count
        };
        return data;
      } else {
        return "food error";
      }
    },

    Finish: async function(orderindex) {
      //刪除修改firebase資料
      this.$firestore.colOrderRef
        .doc("Order" + this.orderNumber[orderindex])
        .delete();
      //刪除render
      this.order.splice(orderindex, 1);
      //修改data
      this.orderNumber.splice(orderindex, 1);
      let setOrderCount = await this.$firestore.docInfoRef.set(
        {
          OrderCount: this.order.length,
          OrderNumber: this.orderNumber
        },
        { merge: true }
      );
    }
  },

  created: async function() {
    console.log("id= " + this.$store.state.user.userid);
    let self = this;
    let doc = await this.$firestore.docInfoRef.get();
    this.orderNumber = doc.data().OrderNumber;
    // console.log(this.orderNumber);

    this.orderNumber.forEach(async ele => {
      this.order.push(await self.getOrderInfo(ele));
    });

    let changeId = "empty";

    //監聽資料
    this.$firestore.colOrderRef.onSnapshot(
      {
        // Listen for document metadata changes
        includeMetadataChanges: false
      },
      async res => {
        const changes = res.docChanges();
        changes.forEach(async change => {
          changeId = change.doc.id;
          changeId = changeId.substring(changeId.length, 5);
          if (change.type === "modified") {
            console.log(await self.getOrderInfo(changeId));
          }
          // if (change.type === "removed") console.log(changeId);
        });
      }
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
  font-family: "Noto Sans TC", sans-serif;
  margin: 0;
  padding: 0;
}
/* nav */
.main {
  padding: 14px 10px;
  background-color: #262626;
}
h1,
h2 {
  font-weight: normal;
}
h4 {
  font-size: 3vw;
  font-weight: 400;
}
h4:nth-child(2) {
  font-size: 2vw;
  font-weight: 400;
  text-align: center;
  margin-top: 4px;
}
hr {
  border: none;
  border-top: 0.15vw solid #262626;
  width: 18vw;
  margin-top: 0.5vw;
}
p {
  font-size: 2vw;
  font-weight: 300;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
}
article {
  width: 100%;
  display: grid;
  justify-content: center;
  background-color: #f8f8f8;
  padding-top: 10vw;
  padding-bottom: 3vw;
  grid-template-columns: 100%;
}
.menuheader_container {
  display: grid;
  justify-content: center;
  margin-bottom: 5vw;
  justify-items: center;
}
section {
  display: grid;
  grid-template-columns: repeat(2, 35vw);
  grid-template-rows: auto;
  justify-content: center;
  grid-column-gap: 5vw;
  grid-row-gap: 4vw;
  /* grid-auto-rows: 1px; */
  grid-auto-flow: row dense;
  align-items: start;
}
.order_container {
  /* border: 1px solid #000000; */
  width: 35vw;
  display: grid;
  justify-content: center;
  align-content: start;
  grid-template-columns: 100%;
  height: auto;
}
.orderheader {
  background-color: #219e91;
  border-radius: 20px 20px 0px 0px;
  display: grid;
  height: 4.5vw;
  grid-template-columns: 20% 60% 20%;
  color: #ffffff;
  font-size: 2vw;
  font-weight: 200;
  padding: 0 3vw;
  align-content: center;
  align-items: center;
  z-index: 1;
}
.ordernumber {
  font-size: 2.5vw;
  font-weight: 400;
}
.food_container {
  background-color: #ffffff;
  box-shadow: 0px 0px 5px 0.5px #e6e6e6;
  width: 100%;
  z-index: 0;
  padding: 5px 4vw;
  font-size: 1.8vw;
  display: grid;
  grid-template-columns: 45% 25%;
  justify-items: center;
  grid-column-gap: 32%;
}
.orderinfo {
  background-color: #ffffff;
  box-shadow: 0px 0px 5px 0.5px #e6e6e6;
  width: 100%;
  z-index: -1;
  font-size: 1.5vw;
  padding: 1.5vw 1.5vw;
  display: grid;
  grid-template-columns: 20% repeat(auto-fill, 60%);
  grid-template-rows: auto 5vw;
  justify-content: center;
  grid-column-gap: 5%;
  border-radius: 0px 0px 20px 20px;
}
.deletebtn {
  margin-top: 2vw;
  background-color: #ff794a;
  border: #ff794a;
  text-align: center;
  color: #ffffff;
  font-weight: 200;
  font-size: 1.5vw;
  width: 8vw;
  height: 3vw;
  border-radius: 60px;
  grid-column-start: 2;
  grid-column-end: 3;
  transform: translateX(1vw);
}
.deletebtn:active {
  background-color: #c95932;
}
.img_draw {
  width: 18vw;
  margin-top: 5vw;
  margin-left: 77.5vw;
}

@media screen and (max-width: 768px) {
  h4{
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
  article {
    padding-top: 15vw;
  }
  section {
    display: grid;
    grid-template-columns: repeat(1, 50vw);
    grid-column-gap: 0vw;
  }
  .order_container {
    width: 50vw;
  }
  .orderheader {
    height: 5.25vw;
    grid-template-columns: 25% 60% 20%;
    font-size: 2.25vw;
    padding: 0 5vw;
  }
  .ordernumber {
    font-size: 2.75vw;
    font-weight: 400;
  }
  .food_container {
    font-size: 2vw;
  }
  .orderinfo {
    font-size: 2vw;
    padding: 1.75vw 1.5vw;
    grid-template-columns: 25% repeat(auto-fill, 55%);
    grid-template-rows: auto 7vw;
    grid-column-gap: 2%;
  }
  .deletebtn {
    font-size: 1.85vw;
    width: 12vw;
    height: 4vw;
    transform: translateX(0vw);
  }
}

/* 480px */
@media screen and (max-width: 480px) {
  h4{
    font-size: 1.4em;
  }
  h4:nth-child(2) {
    display: none;
  }
  hr {
    border-top: 1px solid #262626;
    width: 120px;
    margin-top: 10px;
  }
  .menuheader_container {
    margin-bottom: 4.5vw;
  }
  article {
    padding-top: 20vw;
    padding-bottom: 15vw;
  }
  section {
    grid-template-columns: repeat(1, 75vw);
  }
  .order_container {
    width: 75vw;
  }
  .orderheader {
    height: 35px;
    font-size: 1em;
    padding: 0 40px;
  }
  .ordernumber {
    font-size: 1.2em;
  }
  .food_container {
    font-size: 0.9em;
    grid-template-columns: 45% 15%;
  }
  .orderinfo {
    font-size: 0.8em;
    padding: 10px 0px;
    justify-content: center;
    grid-template-columns: 22.5% repeat(auto-fill, 60%);
    grid-template-rows: auto 30px;
  }
  .deletebtn {
    font-size: 0.5em;
    width: 70px;
    height: 22.5px;
    transform: translateX(5vw);
  }
  .img_draw {
    display: none;
  }
}
</style>
