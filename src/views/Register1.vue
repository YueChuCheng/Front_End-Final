<template>
  
  <div class="login">
    <LogoTag/>

    <div class="login_main">
      <div class="login_title">
        <div class="title">註冊</div>
        <div class="title_style"></div>
      </div>
      <div class="login_subtitle">以社群軟體註冊</div>
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
  border: solid #262626 0.5px;
  border-radius: 8px;
}

.fb_btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3b5998;
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
      else if (status === "register") this.$router.push({ path: "/register2" }); //if not register ever change to register page
    }
  },
  mounted(){
    alert("目前僅開放使用google帳號註冊");
  }
};
</script>






