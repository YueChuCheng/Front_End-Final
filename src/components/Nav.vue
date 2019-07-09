<template>
  
  <div class="nav_main">
    <div class="nav_logo" @click="toHome">
      <img src="../assets/logo.png" alt />
    </div>

    <div v-if="!registerBool" class="nav_btn">
      <router-link to="/login" class="btn btn1">賣家登入</router-link>
      <router-link to="/register1" class="btn btn2">賣家註冊</router-link>
    </div>

    <div v-if="registerBool" class="nav_btn_login">
      <div class="nav_name">您好，{{this.user.username}}</div>
      <router-link to="/menumanager" class="btn btn1">菜單管理</router-link>
      <router-link to="/ordermanager" class="btn btn2">訂單管理</router-link>
      <div @click="signout" class="btn">登出</div>
    </div>

    <div v-if="!registerBool" class="nav_btn_sm">
      <router-link to="/login" class="btn btn1">賣家登入</router-link>
      <router-link to="/register1" class="btn btn2">賣家註冊</router-link>
    </div>

    <div v-if="registerBool" class="nav_btn_login_sm ">
      <router-link to="/menumanager" class="btn btn1">菜單管理</router-link>
      <router-link to="/ordermanager" class="btn btn2">訂單管理</router-link>
      <button @click="signout" class="btn">登出</button>
    </div>
    <div  v-if="registerBool" class="nav_name_sm">您好，{{this.user.username}}</div>
    <div class="nav_humberger">
      <div class="line line1"></div>
      <div class="line line2"></div>
      <div class="line line3"></div>
    </div>
  </div>
</template>


<style>
/* 不用scoped因為Home的nav顏色要調整 */
.outline {
  outline: red solid 2px;
}


.nav_main {
  z-index: 10000;
  position: fixed;
  display: grid;
  align-items: center;
  background-color: #262626;
  width: 100vw;
  height: 60px;

  grid-template-columns: 1fr 3fr;
}
.bgc-black {
  background-color: #262626;
}
.nav_logo img {
  height: 50px;
  margin-top: 15px;
  margin-left: 40px;
}
.nav_btn {
  display: grid;
  grid-template-rows: 30px;
  grid-template-columns: repeat(2, 90px);
  justify-content: space-between;
  align-items: center;
  width: 200px;
  justify-self: end;
  margin-right: 35px;
  visibility: visible;
}
.nav_btn_login {
  display: grid;
  grid-template-columns: auto repeat(3, 90px);
  justify-content: space-between;
  align-items: center;
  width: auto;
  grid-column-gap: 10px;
  justify-self: end;
  margin-right: 15px;
}
.btn {
  display: grid;
  align-content: center;
  height: 90%;
  color: #fff;
  border-radius: 50vw;
  border: solid #fff 1px;
  font-size: 15px;
  font-weight: 300;
}
.btn:hover {
  background-color: #fff;
  color: #262626;
}

.line {
  position: relative;
  width: 30px;
  border: solid 1px #fff;
  border-radius: 2px;
  transform-origin: center;
  transition: all 0.5s;
}
.nav_humberger {
  display: grid;
  justify-self: end;
  align-content: space-between;
  margin-right: 12px;
  height: 20px;
  width: 30px;
  visibility: hidden;
}
.nav_name {
  color: #fff;
}

.nav_btn_style {
  background: #262626;
  border: 1px solid #fff;
  border-radius: 50vw;
  color: #fff;
  font-weight: 300;
}


.nav_btn_sm,
.nav_btn_login_sm {
  visibility: hidden;
  display: none;
}
.nav_name_sm{
  visibility: hidden;
}
@media screen and (max-width: 768px) {
  .nav_btn {
    margin-right: 20px;
    grid-template-columns: repeat(2, 88px);
    grid-template-rows: 30px;
    width: 190px;
    visibility: visible;
  }
  .nav_btn_sm {
    display: none;
  }
  .nav_main {
    height: 60px;
  }
}

@media screen and (max-width: 480px) {
  .nav_btn_sm,
  .nav_btn_login_sm {
    visibility: hidden;
    display: grid;
    width: 100%;
    grid-row: 2/3;
    grid-column: 1/ -1;
    grid-template-rows: 30px 30px;
    grid-template-columns: 90px;
    justify-content: center;
    margin-right: 0;
    transition: all 0.1s;
  }

  .nav_main {
    grid-template-columns: 1fr 4fr 1fr;
  }
  .nav_btn,
  .nav_btn_login {
    display: none;
   
  }
  .nav_main {
    z-index: 100000;
    transition: all 0.5s;
  }
  .nav_logo img {
    margin-left: 15px;
  }
  .nav_humberger {
    visibility: visible;
    grid-row: 1/2;
    grid-column: 3/ 4;
  }
  .btn {
    border: none;
  }
  .nav_name_sm {
   color:#fff;
    visibility: visible;
    grid-row: 1/2;
    grid-column: 2/3;
    justify-self: center;
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
  methods: {
    //...mapActions(["signout"]),
    toHome() {
      this.$router.push("/");
    },
    signout() {
      //登出函式
      console.log("signout");
      firebase
        .auth()
        .signOut()
        .then(
          function() {
            console.log("Signed Out");
          },
          function(error) {
            console.error("Sign Out Error", error);
          }
        );
      this.$router.push("/");
      location.reload();
      //location.assign('https://test-firestore-847fa.firebaseapp.com/');
      console.log("after=" + this.state.user.userid);
    }
  },
  mounted() {
    var clickCount = 0;
    $(document).ready(function() {
      $(window).resize(function() {
        var wdth = $(window).width();
        if (wdth > 480) {
          $(".nav_main ").css("height", "60px");
        }
        if (wdth <= 480 && clickCount % 2 === 1) {
          $(".nav_main ").css("height", "180px");
        }
      });
    });

    $(".nav_humberger").click(function(e) {
      clickCount++;
      if (clickCount % 2 === 1) {
        $(".line1").css("transform", "rotate(45deg)");
        $(".line1").css("top", "9px");
        $(".line2").css("opacity", "0");
        $(".line3").css("transform", "rotate(-45deg)");
        $(".line3").css("bottom", "9px");

        $(".humberger").css("height", "20px");
        $(".humberger").css("margin-top", "12px");
        $(".nav_btn_login_sm").css("visibility", "visible");
        $(".nav_btn_sm").css("visibility", "visible");
        $(".nav_main ").css("height", "180px");
      } else {
        $(".line1").css("transform", "rotate(0deg)");
        $(".line2").css("opacity", "1");
        $(".line3").css("transform", "rotate(0deg)");
        $(".line1").css("top", "0px");
        $(".line3").css("bottom", "0px");
        $(".nav_btn_sm").css("visibility", "hidden");
        $(".nav_btn_login_sm").css("visibility", "hidden");
        $(".humberger").css("height", "30px");
        $(".sm_btn").css("display", "none");
        $(".nav_main ").css("height", "60px");
      }
    });
   
  }
};
</script>


