<template>
  <div class="row main">
    <div class="col logo">
      <img src="../assets/logo.png" alt>
    </div>
  <!-- 未登入前的nav -->
    <div  v-if="!registerBool" class="col d-flex nav_btn justify-content-end align-items-center">
      <router-link to="/login" class="nav_btn_style">賣家登入</router-link>
      <router-link to="/register" class="nav_btn_style">賣家註冊</router-link>
    </div>
    <!-- 登入後的nav -->
    <div  v-if="registerBool" class="col d-flex nav_btn justify-content-end align-items-center">
      <router-link to="/*" class="nav_btn_style">菜單編輯</router-link>
      <router-link to="/*" class="nav_btn_style">訂單編輯</router-link>
    </div>
    <div class="humberger d-flex flex-column justify-content-around">
      <div class="line line1"></div>
      <div class="line line2"></div>
      <div class="line line3"></div>
    </div>
  </div>
</template>


<style >
/* 不用scoped因為Home的nav顏色要調整 */
.outline {
  outline: red solid 2px;
}
.main {
  position: fixed;
  padding: 15px 10px;
  margin: 0;
  background-color: unset;
  height: 80px;
  width: 100vw;
  z-index: 1000;
}
.logo img {
  height: 80px;
}
.nav_btn {
  height: 50px;
}
.nav_btn_style {
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  border: #fff 1px solid;
  border-radius: 30px;
  padding: 8px 20px;
  margin-right: 3%;
}
.nav_btn_style:hover {
  cursor: pointer;
  background-color: #fff;
  color: #262626;
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
  border-top: 1.5px solid #fff;
  border-radius: 2px;
}
@media screen and (max-width: 480px) {
  .nav_btn_style {
    display: none;
  }
  .main {
    background-color: #232323;
    height: 60px;
    padding: 18px 10px;
  }
  .logo img {
    height: 48px;
  }
  .humberger {
    cursor: pointer;
    display: block;
    height: 40px;
    width: 45px;
    transition: all 0.5s;
  }
  .line {
    display: block;
  }
}
</style>
<script>
import $ from "jquery";
import {mapGetters} from 'vuex'
import {mapState} from 'vuex'
export default {
  name: "Nav",
  computed: { ...mapGetters(['registerBool']), ...mapState(["user"]) },
   watch: {
      
    //監聽是否在登入狀態
    registerBool: function(newValue, oldValue) {
      console.log(newValue, oldValue);
     
    }
  },
};

//$(".humberger").click(function(e) {
//  console.log("asdf");
//  $(".line1").css("transform", "45deg");
//  $(".line2").css("display", "none");
//  $(".line3").css("transform", "-45deg");
//});
</script>


