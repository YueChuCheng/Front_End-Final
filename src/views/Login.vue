<template>
  <!-- <div class="main_section">
    <LogoTag/>

    <div class="card_deco">
      <h5 class="font_bg">登入</h5>
      <h5>登入</h5>
    </div>

    <div class="row subtitle_row">
      <div class="col subtitle mt-4">以社群媒體登入</div>
    </div>
    <div class="d-flex justify-content-center login_btn mt-4">
      <div
        @click="doLogin"
        class="col googleLogin d-flex align-items-center justify-content-center"
      >
        <img src="../assets/icon/google_icon.png" alt class="icon">
      </div>
      <div class="col fbLogin d-flex align-items-center justify-content-center">
        <img src="../assets/icon/icon_fb.png" alt class="icon">
      </div>
    </div>
    <div class="row or_style d-flex justify-content-center align-items-center mt-4">
      <div class="col-3 Login_line"></div>
      <div class="col-1 text">或</div>
      <div class="col-3 Login_line"></div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <input type="text " class="input input1" placeholder="信箱">
       
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <input type="text " class="input input2" placeholder="密碼">
      
      </div>
    </div>
    <div class="row mt-5 d-flex align-items-center justify-content-around submit_row">
      <div class="col d-flex justify-content-end">
        <div class="submit">登入</div>
      </div>
      <div class="forget_style col d-flex align-items-center">
        <a href class="forget_style">忘記密碼?</a>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img src="../assets/picture (2).png" alt class="deco_img">
      </div>
    </div>
  </div>-->
  <div class="login">
    <LogoTag/>

    <div class="login_main">
      <div class="login_title">
        <div class="title">登入</div>
        <div class="title_style"></div>
      </div>
      <div class="login_subtitle">以社群媒體登入</div>
      <div class="login_btn">
        <div class="google_btn" @click="doLogin">
          <img src="../assets/icon/google_icon.png" class="icon">
        </div>
        <div class="fb_btn">
          <img src="../assets/icon/icon_fb.png" class="icon">
        </div>
      </div>
      <div class="login_or">
        <div class="l">
          <hr>
        </div>
        <div class="or">或</div>
        <div class="l">
          <hr>
        </div>
      </div>
      <input type="text " class="login_input1" placeholder="信箱">
      <input type="text " class="login_input2" placeholder="密碼">
      <div class="login_submitbtn">
        <button class="submit_btn">登入</button>
        <div class="forget_btn">忘記密碼</div>
      </div>
    </div>
    <img src="../assets/picture (2).png" alt class="deco_img">
  </div>
</template>


<style scoped>
@import "../css/base.css";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Noto Sans TC", sans-serif;
}
/* .icon {
  height: 70%;
}
h5 {
  
  color: #262626;
 
  font-size: 3vw;
  font-weight: 300;
  line-height: 4.25vw;
  position: absolute;
  width: 20vw;
}
.font_bg {
  width: 8vw;
  height: 2.5vw;
  margin-top: 2.4%;
  margin-left: 8%;
  border-radius: 50px;
  background-color: #219e91;

  color: rgba(0, 0, 0, 0);
}

.card_deco {
  margin-top: 70px;
  margin-left: 39.5%;
}
.outline {
  outline: solid 2px red;
}
.main_section {
  padding-top: 40px;
  min-height: 80vh;
  overflow: hidden;
  background-color: #f8f8f8;
  height: 100vh;
}
.subtitle_row {
  margin-top: 110px;
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
  text-align: left;
  padding-left: 40px;
  border: #7c7c7c 0.5px solid;
}
.submit {
  cursor: pointer;
  color: #fff;
  background-color: #ff794a;
  height: 40px;
  width: 100px;
  font-size: 18px;
  border-radius: 20px;
  line-height: 38px;
  font-weight: 200;
}
a {
  color: #ff794a !important;
}
.deco_img {
  text-align: center;
  width: 17vw;
  margin-left: 74vw;
  margin-top: -100px;
}
.submit_row {
  margin-left: 20px;
}
.icon_placeh {
  position: absolute;
  height: 60%;
  margin-left: -28%;
  top: 14%;
}
.input1 {
  background-image: url(../assets/icon/icon_letter.png);
  background-repeat: no-repeat;
  background-size: auto 60%;
  background-position: 5% 55%;
}
.input2 {
  background-image: url(../assets/icon/icon_locked.png);
  background-repeat: no-repeat;
  background-size: auto 60%;
  background-position: 5% 50%;
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
  .icon {
    height: 70%;
  }
  .card_deco {
    margin-top: 90px;
  }
  h5 {
    font-size: 28px;
  }
}

@media screen and (max-width: 480px) {
  h5 {
    
    color: #262626;
    
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
  .forget_style {
    margin-left: 5px;
  }
  .icon {
    height: 60%;
  }
  .deco_img {
    display: none;
  }
  .card_deco {
    margin-top: 130px;
  }
  h5 {
    font-size: 30px;
  }
  .subtitle_row {
    margin-top: 150px;
  }
} */
.outline {
  outline: red solid 3px;
}

.login {
  background-color: #f8f8f8;
  height: 100vh;
  padding-top: 35px;
  display: grid;
  justify-content: center;
}
.login_main {
  margin-top: 10vw;
  display: grid;
  grid-template-rows: 40px 40px 40px 40px 40px 55px 70px;
  justify-items: center;
  grid-gap: 5px;
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
.login_subtitle {
  align-self: center;
  margin-top: 5px;
}
.login_btn {
  display: grid;
  width: 430px;
  grid-template-rows: 100%;
  grid-template-columns: 200px 200px;
  justify-content: space-between;
}
.google_btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: solid #262626 1px;
  border-radius: 8px;
}

.fb_btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3b5998;
  border: solid #262626 1px;
  border-radius: 8px;
}
.google_btn img {
  height: 70%;
}
.fb_btn img {
  height: 70%;
}
.login_or {
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 280px 20px 280px;
  align-items: center;
}
.l {
  background-color: #262626;
  height: 1px;
  width: 100%;
}

.login_input1 {
  height: 100%;
  width: 250px;
  border-radius: 10px;
  text-align: left;
  padding-left: 40px;
  border: #7c7c7c 0.5px solid;
  background-image: url(../assets/icon/icon_letter.png);
  background-repeat: no-repeat;
  background-size: auto 60%;
  background-position: 5% 55%;
}

.login_input2 {
  height: 40px;
  width: 250px;
  border-radius: 10px;
  text-align: left;
  padding-left: 40px;
  border: #7c7c7c 0.5px solid;
  background-image: url(../assets/icon/icon_locked.png);
  background-repeat: no-repeat;
  background-size: auto 60%;
  background-position: 5% 55%;
  align-self: end;
}
.login_submitbtn {
  align-self: end;
  display: grid;
  width: 260px;
  grid-template-rows: 100%;
  grid-template-columns: 120px 120px;
  justify-content: space-between;
}
.submit_btn {
  background-color: #ff794a;
  border: none;
  border-radius: 50vw;
  color: #fff;
  height: 40px;
}

.forget_btn {
  text-align: center;
  line-height: 40px;
  color: #ff794a;
}
.deco_img {
  text-align: center;
  width: 17vw;
  margin-left: 74vw;
  margin-top: -100px;
}
@media screen and (max-width: 768px) {
  .login_main {
    margin-top: 15vw;
  }
  .login_or {
    grid-template-columns: 38vw 2vw 38vw;
  }
  .login_btn {
    width: 348px;
    grid-template-columns: repeat(2, 160px);
  }
   .deco_img {
    margin-left: 70%;
  }
}
@media screen and (max-width: 480px) {
  .login_main {
    margin-top: 25vw;
  }
  .login_btn {
    display: grid;
    width: 280px;
    grid-template-rows: 100%;
    grid-template-columns: 120px 120px;
    justify-content: space-between;
  }
  .deco_img {
    display: none;
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
      else if (status === "register") {
        alert("需註冊才能使用店家功能!");
        this.$router.push({ path: "/register2" });
      } //if not register ever change to register page
    }
  }
};
</script>






