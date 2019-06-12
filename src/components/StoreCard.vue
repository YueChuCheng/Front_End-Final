<template>
  <div class="card_style">
    <img src="../assets/restaurant/restaurant (1).png" alt>
    <h5 class="storeName">{{hello.Name}}</h5>
    <div class="info">
      <p class="info_time_p">地址:</p>
      <p class="info_span">{{hello.Adress}}</p>
      <p class="info_time_p ">營業時間: </p>
      <p class="info_span">{{hello.OpenTime}}</p>
    </div>
    <div class="submit">
      <div class="submit_btn">吃這間吧</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "StoreCard",
  data() {
    return {
      hello: {
        Name: "",
        Adress: "",
        OpenTime: "",
        TEL: ""
      }
    };
  },
  methods: {
    ...mapActions(["doStoreDataRead"]),
    save(storeString) {
      //按下查看店家資訊案件 儲存店家ID
      this.$store.state.store.storClick = storeString;
      console.log(this.$store.state.store.storClick);
    }
  },
  async created() {
    this.hello = await this.doStoreDataRead();
  }
};
</script>

<style scoped>
.outline {
  outline: solid red 2px;
}
.card_style {
  background: #fff;
  width: 360px;
  height: 600px;
  padding: 30px;
  box-shadow: 4px 4px 12px -2px rgba(20%, 20%, 40%, 0.5);
}
img {
  width: 100%;
}
.storeName {
  margin-top: 10px;
  text-align: center;
  font-size: 30px;
}
.info {
  margin-top: 15px;
}

.info_time_p {
  margin: 3px;
  padding-left: 20px;
  font-size: 18px;
}
.info_span{
  margin-left:30px;
}
.submit {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.submit_btn {
  cursor: pointer;
  text-align: center;
  color: #fff;
  background-color: #ff794a;
  height: 50px;
  width: 150px;
  border-radius: 100px;
  line-height: 50px;
}
</style>
