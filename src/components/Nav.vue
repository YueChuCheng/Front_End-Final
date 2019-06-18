<template>
  <div class="row main d-flex">
    <div class="col logo" @click="toHome">
     <img src="../assets/logo.png" alt>
    </div>
    <!-- 未登入前的nav -->
    <div v-if="!registerBool" class="col d-flex nav_btn justify-content-end align-items-center">
      <router-link to="/login" class="nav_btn_style">賣家登入</router-link>
      <router-link to="/register1" class="nav_btn_style">賣家註冊</router-link>
    </div>
    <!-- 登入後的nav -->
    <div v-if="registerBool" class="col d-flex nav_btn justify-content-end align-items-center">
      <p class="nav_name">您好，{{this.user.username}}！</p>
      
      <router-link to="/menumanager" class="nav_btn_style">菜單管理</router-link>
      <router-link to="/ordermanager" class="nav_btn_style">訂單管理</router-link>
      <button @click="signout" class="nav_btn_style">登出</button>
    </div>
    <div class="humberger d-flex flex-column justify-content-around">
      <div class="line line1"></div>
      <div class="line line2"></div>
      <div class="line line3"></div>
    </div>
    <div class="sm_btn">
      <div
        v-if="!registerBool"
        class="col d-flex flex-column justify-content-center align-items-center"
      >
        <router-link to="/" class="sm_btn_text">
          <div class="border_bt1">首頁</div>
        </router-link>
        <router-link to="/login" class="sm_btn_text">
          <div class="border_bt2">賣家登入</div>
        </router-link>
        <router-link to="/register1" class="sm_btn_text">
          <div class="border_bt3">賣家註冊</div>
        </router-link>
      </div>
      <!-- 登入後的nav -->
      <div v-if="registerBool" class="col d-flex flex-column justify-content-end">
        <router-link to="/" class="sm_btn_text">首頁</router-link>
        <router-link to="/menumanager" class="sm_btn_text">菜單管理</router-link>
        <router-link to="/ordermanager" class="sm_btn_text">訂單管理</router-link>
      </div>
    </div>
  </div>
</template>


<style>
/* 不用scoped因為Home的nav顏色要調整 */
.outline {
  outline: red solid 2px;
}
.main {
  position: fixed;
  padding: 16px 10px;
  margin: 0;
  background-color: unset;
  height: 70px;
  width: 100vw;
  z-index: 10000;
  transition: all 0.5s;
}
.bgc-black {
  background-color: #262626;
}
.logo img {
  height: 58px;
}
.logo img:hover {
  cursor: pointer;
}
.nav_btn {
  height: 50px;
  color: #fff;
}
.nav_btn_style {
  background-color:rgba(0,0,0,0);
  color: #fff;
  font-size: 15px;
  font-weight: 300;
  border: #fff 1px solid;
  border-radius: 30px;
  padding: 5px 15px;
  margin-right: 3%;
  margin-top: -15px;
}
.nav_btn_style:hover {
  cursor: pointer;
  background-color: #fff;
  color: #262626;
}
.nav_btn_style:active {
  text-decoration: none;
}
.humberger {
  display: none;
  position: relative;
  top: -5px;
  z-index: 1000;
  height: 0px;
  width: 0px;
  margin-right: 20px;
}
.line {
  display: none;
  border-top: 2px solid #fff;
  border-radius: 50px;
  transition: all 0.5s;
  transform-origin: 4px 1px;
}
.nav_name {
  position: relative;
  margin-top: 0px;
  margin-right: 15px;
  font-size: 20px;
  font-weight: 200;
}
.sm_btn {
  position: absolute;
  display: none;
  top: 60px;
  width: 100vw;
  height: 10px;
  font-size: 4vw;
  text-align: center;
  border-top: #fff 1px solid;
  left: 0px;
}
.sm_btn_text {
  color: #fff;
}
a :active {
  color: #fff;
}
@media screen and (max-width: 2000px) {
  .humberger {
    display: none;
    margin-right: 0px;
  }
  .sm_btn {
    display: none;
    opacity: 0;
  }
}
@media screen and (max-width: 768px) {
  .humberger {
    display: none;
    margin-right: 0px;
  }
  .sm_btn {
    display: none;
    opacity: 0;
  }
  .nav_btn_style {
    /* font-size: 16px; */
    font-size: 2vw;
    font-weight: 300;
    border: #fff 0.5px solid;
    border-radius: 30px;
    padding: 3px 13px;
    margin-left: 2px;
    margin-top: 0px;
  }
  .nav_name {
    font-size: 2.5vw;
    margin-top: 15px;
  }
  .logo img {
    height: 50px;
  }
  .main {
    height: 60px;
  }
  .nav_btn {
    top: -10px;
    right: -2.5vw;
  }
}

@media screen and (max-width: 480px) {
  .nav_name {
    position: absolute;
    left: -20%;
    margin-top: 3px;
    font-size: 20px;
  }
  .nav_btn_style {
    display: none;
  }
  .main {
    background-color: #232323;
    height: 60px;
    padding: 14px 10px;
  }
  .logo img {
    position: relative;
    left: -2vw;
    height: 50px;
  }
  .humberger {
    cursor: pointer;
    display: block;
    height: 30px;
    width: 28px;
    transition: all 0.5s;
    margin-right: 10px;
    margin-top: 8px;
  }
  .line {
    display: block;
  }
  .sm_btn_text {
    font-weight: 200;
    margin-top: 15px;
  }
  .border_bt1 {
    font-size: 15px;
    width: 40px;
  }

  .border_bt2 {
    font-size: 15px;
    width: 60px;
  }
  .border_bt3 {
    font-size: 15px;
    width: 60px;
  }
}
</style>
<script>
import $ from "jquery";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
  name: "Nav",
  computed: { ...mapGetters(["registerBool"]), ...mapState(["user"]) },
  watch: {
    //監聽是否在登入狀態
    registerBool: function(newValue, oldValue) {
      console.log(newValue, oldValue);
    }
  },
  methods:{
    ...mapActions(["signout"]),
    toHome(){
      this.$router.push("/");
    }
  
  },
  mounted() {
    var clickCount = 0;
    $(".humberger").click(function(e) {
      clickCount++;
      if (clickCount % 2 === 1) {
        $(".line1").css("transform", "rotate(45deg)");
        $(".line2").css("opacity", "0");
        $(".line3").css("transform", "rotate(-45deg)");
        $(".humberger").css("height", "20px");
        $(".humberger").css("margin-top", "12px");
        $(".sm_btn").css("display", "block");
        $(".sm_btn").css("opacity", "1");
        $(".main ").css("height", "190px");
      } else {
        $(".line1").css("transform", "rotate(0deg)");
        $(".line2").css("opacity", "1");
        $(".line3").css("transform", "rotate(0deg)");
        $(".humberger").css("margin-top", "8px");
        $(".humberger").css("height", "30px");
        $(".sm_btn").css("display", "none");
        $(".main ").css("height", "60px");
      }
    });
    //$('.logo').click(function () {
    //
    //       window.location.assign("/"); //按圖片跳轉頁面
    //     });
  }
};
</script>


