<template>
  <div class="main_section">
    <LogoTag/>
    <logintitle :titleName="'註冊'"/>
    <div class="row mt-5 or_style d-flex justify-content-center align-items-center mt-4">
      <div class="col-2 line"></div>
      <div class="col-2 text">輸入店家基本資料</div>
      <div class="col-2 line"></div>
    </div>
    <div class="input d-flex justify-content-center mt-4">
      <div class="input_style">
        <div class="mt-3 input_w">
          店名
          <input type="text " class="input" placeholder="填寫餐廳名稱">
        </div>
        <div class="mt-3 input_w">
          地址
          <input type="text " class="input" placeholder="填寫餐廳地址">
        </div>
        <div class="mt-3 input_w">
          TEL
          <input type="text " class="input" placeholder="填寫餐廳電話">
        </div>
        <div class="mt-3 input_w">
          外送時間
          <input type="text " class="input " placeholder="填寫外送時間">
        </div>
        <div class="mt-3 input_w pic">
          選擇照片
          <button class="btn_img">上傳照片</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="submit">成為賣家吧!</div>
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
  height: 3.3vw;
  width: 8vw;
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
</style>

<script>
import LogoTag from "@/components/LogoTag.vue";
import logintitle from "@/components/LoginTitle.vue";
export default {
  name: "register",
  components: {
    LogoTag,
    logintitle
  }
};
</script>




