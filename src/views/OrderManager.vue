<template>
  <div class="hello">
    <Nav/>
    <div class="food" v-for="parent,index in order" :key="index">
      <div>{{ index+1 }}</div>
      <ul>
        <li v-for="child,cindex in parent.food" :key="child.index">
          <div>{{ child.name }}</div>
          <div>數量：{{ child.count }}</div>
        </li>
        <li>
          <div>共計：{{ parent.info.totalPrice }}</div>
          <div>訂購人：{{ parent.info.name }}</div>
          <div>送達時間：{{ parent.info.time }}</div>
          <div>手機：{{ parent.info.TEL }}</div>
          <div>外送地址：{{ parent.info.address }}</div>
          <div>備註：{{ parent.info.message }}</div>
          <button v-on:click="Finish(index)">完成</button>
        </li>
      </ul>
    </div>
    <Footer/>
  </div>
</template>

<script>
import db from "../firebase/index";
import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default {
  name: "OrderManager",
  components:{
    Nav,
    Footer,
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

  firestore() {
    return {
      docInfoRef: firebase
        .firestore()
        .collection("Restaurant")
        .doc("Info"),
      colOrderRef: firebase
        .firestore()
        .collection("Restaurant")
        .doc("Info")
        .collection("Order")
      // docInfoRef: firebase
      //   .firestore()
      //   .collection("Restaurant")
      //   .doc(this.$store.state.useruid),
      // colOrderRef: firebase
      //   .firestore()
      //   .collection("Restaurant")
      //   .doc(this.$store.state.useruid)
      //   .collection("Order")
    };
  },


  methods: {
    async getOrderInfo(id){
      // get order info with orderNumber
      let self = this;

      //AJAX
      let doc = await this.$firestore.colOrderRef
        .doc("Order" + id)
        .collection("Info")
        .doc("Info")
        .get();

      let food = await this.$firestore.colOrderRef
        .doc("Order" + id)
        .get();


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
        }
    
        let foodCount = food.data().FoodCount;
        for (var foodId = 1; foodId <= foodCount; foodId++) {
          data.food.push(await self.getFoodInfo(id, foodId))
        }

        return data;
      }
      else {
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
        }
        return data;
      }
      else {
        return "food error"
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
    let self = this;
    let doc = await this.$firestore.docInfoRef.get();
    this.orderNumber = doc.data().OrderNumber;
    console.log(this.orderNumber);

    this.orderNumber.forEach(async ele => {
      this.order.push(await self.getOrderInfo(ele))
    })
    console.log(this.order);


    this.$firestore.colOrderRef.onSnapshot(async res => {
      const changes = res.docChanges();
      let changeId = "empty";
      
      changes.forEach(async change => {
        if (change.type === "added") changeId = change.doc.id;
        if (change.type === "removed") console.log(change.doc.id);
      });
      if (changeId !== "empty") {
        let doc = await this.$firestore.colOrderRef
          .doc(changeId)
          .collection("Info")
          .doc("Info")
          .get();
        if (doc.exists) {
          this.order.push({
            info: {
              name: doc.data().Name,
              address: doc.data().Address,
              TEL: doc.data().TEL,
              time: doc.data().Time,
              totalPrice: doc.data().TotalPrice,
              message: doc.data().Message
            },
            food: []
          });
        }
        doc = await this.$firestore.colOrderRef.doc(changeId).get();
        let foodCount = 0;
        if (doc.exists) {
          foodCount = doc.data().FoodCount;
        }
        for (var j = 1; j <= foodCount; j++) {
          let doc = await this.$firestore.colOrderRef
            .doc(changeId)
            .collection("Food")
            .doc("Food" + j)
            .get();
          if (doc.exists) {
            this.order[i].food.push({
              name: doc.data().Name,
              count: doc.data().Count
            });
          }
        }
      }
    });
  },



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
.food {
  border: 1px solid #000000;
  width: 100px;
}
</style>
