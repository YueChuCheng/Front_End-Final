<template>
  <div class="row">
    <div class="col">
      <div class="logo_style d-flex align-items-center justify-content-center">
        <img src="../assets/logo.png" alt id="tag_img">
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
    name:"LogoTag",
    mounted(){
      $('#tag_img').click(function () { 
       
        window.location.assign("/"); //按圖片跳轉頁面
      });
    }
};
</script>

<style scoped>
@import "../../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../css/base.css";
* {
  text-align: center;
  font-family: "Noto Sans TC", sans-serif;
}
.logo_style {
  position: absolute;
  background-color: #232323;
  height: 60px;
  width: 240px;
  margin-left: -6%;
  margin-top: -20px;
  border-radius: 10vw;
}
.logo_style :hover{
  cursor: pointer;
}
img {
  position: absolute;
  top: 13px;
  left: 90px;
  height: 80%;
}

@media screen and (max-width: 768px) {
  img {
  position: absolute;
  top: 13px;
  left: 80px;
  height: 80%;
}
}

@media screen and (max-width: 480px) {
 .logo_style {
  position: absolute;
  height: 60px;
  width: 210px;
  margin-left: -6%;
  margin-top: -0px;
  
}
 img {
  position: absolute;
  top: 13px;
  left: 60px;
  height: 80%;
}
}
</style>
