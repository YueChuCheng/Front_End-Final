<template>
  <div class="main_section">
    <LogoTag/>

    <div class="card_deco">
      <h5 class="font_bg">登入</h5>
      <h5>登入</h5>
    </div>

    <div class="row subtitle_row">
      <div class="col subtitle mt-4">以社群媒體登入</div>
    </div>
    <div class="d-flex justify-content-center login_btn mt-4">
      <div @click="doLogin" class="col googleLogin"></div>
      <div class="col fbLogin"></div>
    </div>
    <div class="row or_style d-flex justify-content-center align-items-center mt-4 ">
      <div class="col-3 Login_line"></div>
      <div class="col-1 text">或</div>
      <div class="col-3 Login_line"></div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <input type="text " class="input">
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <input type="text " class="input">
      </div>
    </div>
    <div class=" row mt-5 d-flex align-items-center justify-content-around  submit_row">
      <div class="col  d-flex  justify-content-end">
        <div class="submit">登入</div>
      </div>
      <div class="forget_style  col d-flex align-items-center">
        <a href class="forget_style">忘記密碼?</a>
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
  text-align: center;
  font-family: "Noto Sans TC", sans-serif;
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
.font_bg {
  width: 3vw;
  border-radius: 50px;
  background-color: #219e91;
  margin-top: 2%;
  margin-left: 1.25%;
  color: rgba(0, 0, 0, 0);
}
h5 {
  width: 20vw;
}
.font_bg {
  width: 9vw;
  height: 3vw;
  margin-top: 2.4%;
  margin-left: 7%;
}
.card_deco {
  margin-top: 5%;
  margin-left: 39.5%;
}
.outline {
  outline: solid 2px red;
}
.main_section {
  padding-top: 7%;
  min-height: 80vh;
  overflow-x: hidden;
  background-color: #f8f8f8;
}
.subtitle_row {
  margin-top: 9.5%;
}
.subtitle {
  font-size: 100%;
}
.login_btn {
  position: relative;
  width: 390px;
  margin: 0 auto;
}
.googleLogin {
  cursor: pointer;
  background: #fff;
  height: 40px;
  border-radius: 0.8vw;
  border: #7c7c7c solid 1px;
  margin-right: 20px;
  margin-top: -3%;
}
.fbLogin {
  cursor: pointer;
  background: #3b5998;
  height: 40px;
  border-radius: 0.8vw;
  margin-left: 20px;
  margin-top: -3%;
}

.or_style {
 
  font-size: 21px;
  
}
.Login_line {
  margin-top: -5px;
  border: #262626 solid 0.5px;
  height: 0;
}
.text {
  margin-top: -5px;
  font-size: 80%;
  width: 0px;
}
.input {
  margin-top: -5px;
  height: 40px;
  width: 250px;
  border-radius: 10px;
}
.submit {
  cursor: pointer;
  color: #fff;
  background-color: #ff794a;
  height: 40px;
  width: 100px;
  font-size: 21px;
  border-radius: 10px;
  line-height: 38px;
  font-weight: 200;
}
a {
  color: #ff794a !important;
}
.deco_img {
  text-align: center;
  width: 20vw;
  margin-left: 65%;
  margin-top: -4%;
}
.submit_row{
  margin-left:20px;
}
@media screen and (max-width: 768px) {
  .login_btn {
    width: 360px;
  }
  .Login_line {
    margin-top: -10px;
  }
  .text {
    margin-top: -10px;
  }
  .input {
    margin-top: 0px;
    height: 40px;
    width: 250px;
    border-radius: 10px;
  }
  .deco_img {
    margin-left: 70%;
  }
 
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
  h5 {
   
    width: 20vw;
  }
  .login_btn {
  width: 270px;
  
}
 .login_btn div {
  border-radius: 10px;
  
}
.submit {
  
  cursor: pointer;
  color: #fff;
  background-color: #ff794a;
  height: 40px;
  width: 120px;
  font-size: 18px;
  border-radius: 20px;
  line-height: 38px;
 
}
.forget_style{
  margin-left: 5px;
}

}
</style>





<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import "../firebase";
import LogoTag from "@/components/LogoTag.vue";
export default {
  name: "login",
  components: {
    LogoTag
  },
  computed: {
    ...mapState(["login"])
  },
  methods: {
    ...mapActions(["loginWithGoogle"]),
    ...mapActions(["readUser"]),
    async doLogin() {
      let status = await this.loginWithGoogle();
      console.log(status);
      this.readUser();
      if (status === "login") this.$router.push({ path: "/" });
      //if not register ever change to register page
      else if (status === "register") this.$router.push({ path: "/register" }); //if not register ever change to register page
    }
  }
};
</script>






