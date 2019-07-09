<template>
  <!-- <div class="main_section">
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
  </div>-->
  <div class="register2">
    <LogoTag />
    <div class="register2_main">
      <div class="login_title">
        <div class="title">註冊</div>
        <div class="title_style"></div>
      </div>
      <div class="register2_deco">
        <div class="l"></div>
        <div class="subtitle">輸入店家基本資訊</div>
        <div class="l"></div>
      </div>

      <div class="store_name">
        <div class="name">店名</div>
        <input name="name" type="text " class="input" placeholder="填寫餐廳名稱" />
      </div>
      <div class="store_name">
        <div class="name">地址</div>
        <input name="address" type="text " class="input" placeholder="填寫餐廳地址" />
      </div>
      <div class="store_name">
        <div class="name">TEL</div>
        <input name="tel" type="text " class="input" placeholder="填寫餐廳電話" />
      </div>
      <div class="store_name">
        <div class="name">外送時間</div>
        <input name="time" type="text " class="input" placeholder="填寫外送時間" />
      </div>
      <div class="choose_pic">選擇照片 <button>上傳照片</button></div>
      <div  @click="set" class="register2_submit ">成為賣家吧！</div>
    </div>
  </div>
</template>

<style scoped>
@import "../css/base.css";
* {
  font-family: "Noto Sans TC", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.outline {
  outline: solid 2px red;
}

.register2 {
  background-color: #f8f8f8;
  height: 100vh;
  padding-top: 25px;
  display: grid;
  justify-content: center;
}

.register2_main {
  margin-top: 80px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: repeat(8, 40px);
  grid-gap: 10px;
}
.login_title {
  display: grid;
  height: 50px;
  width: 100px;
}
.title {
  z-index: 10;
  font-size: 30px;
  font-weight: 300;
}
.title_style {
  position: relative;
  background-color: #219e91;
  height: 24px;
  width: 75px;
  border-radius: 50vw;
  top: -20px;
  left: 10px;
}
.subtitle {
  font-size: 16px;
  justify-self: center;
}
.register2_deco {
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 180px 150px 180px;
}
.l {
  border: solid 0.5px #000;
  width: 100%;
  height: 1px;
  align-self: center;
}
.store_name {
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 70px 220px;
  grid-column-gap: 10px;
}
.name {
  justify-self: end;
  align-self: center;
}
.input {
  border: #262626 1px solid;
  border-radius: 10px;
  height: 35px;
}

.input::-webkit-input-placeholder {
  font-size: 15px;
  padding-left: 15px;
}
.choose_pic{
  display: grid;
  width: 300px;
  grid-template-rows: 100%;
  grid-template-columns: 70px 80px;
  grid-column-gap: 10px;
}
.choose_pic button{
  background-color: #fff;
  border-radius: 10px;
  border:solid 1px #000;
  font-size: 13px;
}
.register2_submit{
  cursor: pointer;
  background-color: #ff794a;
  color:#fff;
  border-radius: 50vw;
  width: 120px;
  height: 40px;
  display: grid;
  justify-items: center;
  align-items: center;
  font-weight: 200;
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
          RegisterBool: "true",
          MenuTypeCount: "0"
        });
      alert("註冊成功請再次登入");
      this.$router.push("/");
    }
  }
};
</script>




