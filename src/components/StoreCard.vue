<template>
  <div class="card_style">
    <div>
      <img src="../assets/restaurant/restaurant (1).png" alt>
      <h5 class="storeName">{{storename}}</h5>
      <div class="info">
        <p class="info_time_p">地址：</p>
        <p class="info_span">{{storeAddress}}</p>
        <p class="info_time_p">營業時間：</p>
        <p class="info_span">{{storeTime}}</p>
      </div>
      <div class="submit">
        <div @click="readClickID(id)" class="submit_btn">吃這家吧</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
import "../firebase/index.js";
export default {
  name: "StoreCard",
  props: ["storename", "storeAddress", "storeTime", "id"],
  data() {
    return {
      store: {
        Name: "",
        Address: "",
        OpenTime: "",
        TEL: ""
      },
      hello: {
        Name: "",
        Address: "",
        OpenTime: "",
        TEL: ""
      }
    };
  },
  methods: {
    ...mapActions(["doStoreDataRead"]),
    ...mapActions(["read"]),
    ...mapState(["storeData"]),
    ...mapState(["clickID"]),

    save(storeString) {
      //按下查看店家資訊案件 儲存店家ID
      this.$store.state.store.storClick = storeString;
      console.log(this.$store.state.store.storClick);
    },

    async readClickID(i) {
      //點擊店家後儲存ID
      let docRefStoreID = await firebase.firestore().collection("test");
      let docStoreID = await docRefStoreID.get();
      this.storeData.storeID = docStoreID.docs; //取所有店家ID
      this.$store.state.clickID = await this.storeData.storeID[i].id;
      console.log(this.$store.state.clickID); //點擊到的店家ID
      this.$router.push("/menu");
    }
  }
};
</script>

<style scoped>
.outline {
  outline: solid red 2px;
}
.card_style {
  background: #fff;
  width: 24%;
  height: 20%;
  padding: 3%;
 box-shadow: 0.1px 0.1px 7px 0.5px #eeeeee;
  margin-bottom: 2%;
  margin-left:1%;
}
img {
  width: 100%;
}
.storeName {
  margin:0px;
  margin-top: 10px;
  text-align: center;
  font-size: 2vw;
  font-weight:400; 
}
.info {
  margin-top: 15px;
}

.info_time_p {
  margin-top: -1.5vw;
  padding-left: 1%;
  font-size: 1.5vw;
  font-weight: 400;
}
.info_span {
  margin-left: 10%;
  margin-top:-1.8vw;
}
.submit {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.submit_btn {
  cursor: pointer;
  text-align: center;
  color: #fff;
  background-color: #ff794a;
  height: 3vw;
  width: 8vw;
  border-radius: 100px;
  line-height: 3vw;
  font-size: 1.25vw;
  font-weight: 300;
}
.submit_btn:active {
  background-color: #c95932;
}
@media screen and (max-width: 768px) {
  .card_style {
    width: 30%;
    height: 20%;
     margin-left:3%;
  }
  .submit_btn {
    height: 40px;
    width: 110px;
    line-height: 40px;
  }
}

@media screen and (max-width: 480px) {
  .card_style {
    width: 45%;
    height: 20%;
  }
  .submit_btn {
    height: 8vw;
    width: 20vw;
    line-height: 8vw;
  }
}
</style>
