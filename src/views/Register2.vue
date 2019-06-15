<template>
  <div class="main_section">
    <LogoTag/>
    <div class="card_deco">
      <h5 class="font_bg">註冊</h5>
      <h5>註冊</h5>
    </div>
    <div class="rest_text or_style align-items-center d-flex justify-content-center">
      <div class="rest_line"></div>
      <div class="text">輸入店家基本資料</div>
      <div class="rest_line"></div>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <div class="input_style">
        <div class="input_w">
          <span>店名</span>
          <input name="name" type="text " class="input" placeholder="填寫餐廳名稱">
        </div>
        <div class="input_w">
          <span>地址</span>
          <input name="address" type="text " class="input" placeholder="填寫餐廳地址">
        </div>
        <div class="input_w">
          <span>TEL</span>
          <input name="tel" type="text " class="input" placeholder="填寫餐廳電話">
        </div>
        <div class="input_w">
          <span>外送時間</span>
          <input name="time" type="text " class="input" placeholder="填寫外送時間">
        </div>
        <div class="input_w pic">
          <span>選擇照片</span>
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
  background-color: #f8f8f8;
  height: 100vh;
}
.or_style {
  font-size: 21px;
}
.rest_line {
  border-bottom: #262626 solid 1px;
  height: 0;
  width: 50px;
}
.input {
  margin: 0 auto;
  position: relative;
  height: 35px;
  width: 250px;
  margin-left: 20px;
  border-radius: 10px;
}

.text {
  text-align: center;
  width: 500px;
  font-size: 15px;
}
.input_style {
  text-align: right;
  padding-right: 4vw;
  margin-top: -35px;
}
.input_w {
  font-size: 25px;
}
.input_w span {
  font-size: 20px;
  font-weight: 300;
}
.submit {
  cursor: pointer;
  color: #fff;
  height: 40px;
  width: 125px;
  text-align: center;
  background: #ff794a;
  border-radius: 40px;
  font-size: 15px;
  font-weight: 200;
  line-height: 40px;

  margin: 0 auto;
  margin-top: 40px;
}

.input::-webkit-input-placeholder {
  font-size: 15px;
  padding-left: 15px;
}
.btn_img {
  height: 30px;
  width: 100px;
  background-color: #fff;
  border-radius: 1vw;
  border: #262626 solid 1px;
  margin-left: 20px;
  font-size: 15px;
}
.pic {
  float: left;
}
.deco_img {
  text-align: center;
  width: 20vw;
  margin-left: 73vw;
  margin-top: -18px;
}
h5 {
  /* writing-mode:vertical-lr; */
  color: #262626;
  /* border:1px solid #000000; */
  font-size: 3vw;
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
  width: 7.5vw;
  height: 2.5vw;
  margin-top: 2.4%;
  margin-left: 1.4%;
}
.card_deco {
  margin-top: 80px;
  margin-left: 45%;
}
.rest_text {
  position: relative;
  top: 50px;
  width: 480px;
  margin: 100px auto;
}
.input_w {
  margin-top: 7px;
}
.rest_text {
  width: 100%;
}
.rest_line {
  width: 180px;
}
.text {
  width: 150px;
}
@media screen and (max-width: 768px) {
  .input_style {
    margin-top: -28px;
  }
  .rest_text {
    width: 100%;
  }
  .rest_line {
    width: 150px;
  }
  .text {
    width: 150px;
  }
  .submit {
    margin: 0 auto;
    height: 38px;
    width: 125px;
    font-size: 15px;
    line-height: 38px;
    margin-top: 2%;
  }
  .input_style {
    margin-top: -25px;
  }
  .input_w {
    margin-top: 5px;
  }
  .deco_img {
    width: 20vw;
    margin-left: 75vw;
    margin-top: 20px;
  }
  h5 {
    font-size: 30px;
  }
  .font_bg {
    width: 9.5vw;
    height: 2.5vw;
    margin-top: 2.4%;
    margin-left: 1.4%;
  }
  .rest_text {
    margin-top: 10px;
  }
  .submit {
    margin-top: 20px;
  }
}
@media screen and (max-width: 480px) {
  h5 {
    /* writing-mode:vertical-lr; */
    color: #262626;
    /* border:1px solid #000000; */
    font-size: 7vw;
    font-weight: 300;
    line-height: 4.25vw;
    position: absolute;
    width: 30vw;
  }
  .font_bg {
    width: 14vw;
    height: 4.2vw;
    border-radius: 50px;
    background-color: #219e91;
    margin-top: 2.5%;
    margin-left: 3%;
    color: rgba(0, 0, 0, 0);
  }
  .deco_img {
    display: none;
  }
  .rest_text {
    width: 100%;
    margin: 80px auto;
  }
  .rest_line {
    width: 100px;
  }
  .text {
    width: 150px;
  }
  .card_deco {
    margin-top: 110px;
    margin-left: 40%;
  }
  .input_style {
    margin-top: -5px;
  }
  .btn_img {
    border-radius: 10px;
  }
  .input_w span {
    font-size: 18px;
  }

  .input {
    width: 220px;
  }
}
</style>

<script>
import LogoTag from "@/components/LogoTag.vue";
import "../firebase";
import $ from "jquery";
export default {
  name: "register",
  components: {
    LogoTag
  },
  methods: {
    async set() {
      var user = firebase.auth().currentUser.uid;
      await firebase
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
      alert("註冊成功請再次登入");
      this.$router.push("/");
    }
  }
};
</script>




