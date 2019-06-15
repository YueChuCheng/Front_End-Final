<template>
  <div class="main_section">
    <LogoTag/>
     <div class="card_deco">
      <h5 class="font_bg">註冊</h5>
      <h5>註冊</h5>
    </div>
    <div class="row mt-5 or_style d-flex justify-content-center align-items-center mt-4">
      <div class="col-2 line"></div>
      <div class="col-2 text">輸入店家基本資料</div>
      <div class="col-2 line"></div>
    </div>
    <div class="input d-flex justify-content-center mt-4">
      <div class="input_style">
        <div class="mt-3 input_w">
          店名
          <input name="name" type="text " class="input" placeholder="填寫餐廳名稱">
        </div>
        <div class="mt-3 input_w">
          地址
          <input name="address" type="text " class="input" placeholder="填寫餐廳地址">
        </div>
        <div class="mt-3 input_w">
          TEL
          <input name="tel" type="text " class="input" placeholder="填寫餐廳電話">
        </div>
        <div class="mt-3 input_w">
          外送時間
          <input name="time" type="text " class="input" placeholder="填寫外送時間">
        </div>
        <div class="mt-3 input_w pic">
          選擇照片
          <button class="btn_img">上傳照片</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div @click="set" class="submit">成為賣家吧!</div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img src="../assets/picture (2).png" alt class="deco_img">
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../css/base.css";
* {
  font-family: "Noto Sans TC", sans-serif;
}
.outline {
  outline: solid 2px red;
}
.main_section {
  padding-top: 6%;
  min-height: 80vh;
}
.or_style {
  font-size: 21px;
}
.line {
  border: #262626 solid 0.5px;
  height: 0;
}
.input {
  margin: 0 auto;
  position: relative;

  margin-left: 20px;
  border-radius: 0.5vw;
}

.text {
  text-align: center;
}
.input_style {
  text-align: right;
  padding-right: 4vw;
}
.input_w {
  font-size: 25px;
}
.submit {
  cursor: pointer;
  color: #fff;
  height: 3.5vw;
  width: 10.5vw;
  text-align: center;
  background: #ff794a;
  border-radius: 40px;
  font-size: 150%;
  line-height: 3.5vw;
  margin-left: 46%;
  margin-top: 2%;
}

.input::-webkit-input-placeholder {
  font-size: 20px;
  padding: 15px;
}
.btn_img {
  height: 40px;
  width: 100px;
  background-color: #fff;
  border-radius: 1vw;
  border: #262626 solid 1px;
  margin-left: 20px;
  font-size: 20px;
}
.pic {
  float: left;
}
.deco_img {
  text-align: center;
  width: 15vw;
  margin-left: 65%;
  margin-top: 2%;
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
h5 {
  width: 20vw;
}
.font_bg {
  width: 3vw;
  border-radius: 50px;
  background-color: #219e91;
  margin-top: 2%;
  margin-left: 1.25%;
  color: rgba(0, 0, 0, 0);
}
.font_bg {
  width: 9vw;
  height: 3vw;
  margin-top: 2.4%;
  margin-left: 7%;
}
@media screen and (max-width: 480px) {
  h5 {
    /* writing-mode:vertical-lr; */
    color: #262626;
    /* border:1px solid #000000; */
    font-size: 5.9vw;
    font-weight: 300;
    line-height: 4.25vw;
    position: absolute;
    width: 3vw;
  }
  .font_bg {
    width: 14vw;
     height: 4.2vw;
    border-radius: 50px;
    background-color: #219e91;
    margin-top: 2%;
    margin-left: 6%;
    color: rgba(0, 0, 0, 0);
  }
  }
</style>

<script>
import LogoTag from "@/components/LogoTag.vue";
import logintitle from "@/components/LoginTitle.vue";
import "../firebase"
import $ from "jquery"
export default {
  name: "register",
  components: {
    LogoTag,
    logintitle
  },
  methods: {
    set() {
      var user = firebase.auth().currentUser.uid;
      firebase
        .firestore()
        .collection("test")
        .doc(user)
        .set({
          Name: $("input[name='name']").val(),
          Address: $("input[name='address']").val(),
          TEL: $("input[name='tel']").val(),
          OpenTime: $("input[name='time']").val(),
          TotalOrderCount: 0,
          OrderCount: 0,
          OrderNumber: [],
          RegisterBool: "true"
        });
    }
  }
};
</script>




