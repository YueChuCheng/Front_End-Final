<template>
  <div class="row">
    <div class="col">
      <div class="logo_style d-flex align-items-center justify-content-center">
        <img src="../assets/logo.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"LogoTag",
};
</script>

<style scoped>
@import "../../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../css/base.css";
* {
  font-family: "Noto Sans TC", sans-serif;
}
.logo_style {
  position: absolute;
  background-color: #232323;
  height: 5vw;
  width: 17vw;
  margin-left: -6%;
  margin-top: -4%;
  border-radius: 10vw;
}
img {
  position: absolute;
  top: 18%;
  left: 40%;
  height: 90%;
}
</style>
