<template>
 
  <div class="tag">
    <img src="../assets/logo.png" alt>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "LogoTag",
  mounted() {
    $(".tag").click(function() {
      window.location.assign("/"); //按圖片跳轉頁面
    });
  }
};
</script>

<style scoped>
@import "../../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../css/base.css";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-align: center;
  font-family: "Noto Sans TC", sans-serif;
}


.tag {
  cursor: pointer;
  position: absolute;
  display: grid;
  background-color: #232323;
  height: 60px;
  width: 175px;
  border-radius: 0px 10vw 10vw 0px;
  
}
.tag img {
  height: 80%;
  align-self: center;
  margin-top: 15px;
  margin-left: 30px;
}
</style>
