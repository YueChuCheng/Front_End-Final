<template>
  <div class="row main">
    <div class="col logo">
         <img src="../assets/logo.png" alt>
    </div>
    <div class="col d-flex nav_btn  justify-content-end align-items-center">
      <div class="nav_btn_style">賣家登入</div>
      <div class="nav_btn_style">賣家註冊</div>
    </div>
  </div>
</template>


<style >
/* 不用scoped因為Home的nav顏色要調整 */
.outline{
    outline: red solid 2px;
}
.main {
position: fixed;
  padding: 25px;
  margin: 0;
  background-color: #232323;
  height: 120px;
  width: 100vw;
  z-index: 1000;
}
.logo img{
    height:100px;
}
.nav_btn{
    height: 80px;
}
.nav_btn_style{
    color: #fff;
    font-size:1.2vw;
    font-weight: 300;
    border: #fff 1px solid;
    border-radius: 30px;
    padding:8px 20px;
    margin-right:3%;
}
.nav_btn_style:hover {
    cursor: pointer;
    background-color: #fff;
    color:  #262626;
}
</style>
<script>
export default {
  name: "Nav"
};
</script>


