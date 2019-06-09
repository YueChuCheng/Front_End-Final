<template>
  <div class="container main">
    <div class="row">
      <div class="title_style"></div>
      <div class="col title">登入</div>
    </div>
    <div class="row">
      <div class="col subtitle mt-3">以社群媒體登入</div>
    </div>
    <div class="row d-flex justify-content-center login mt-3">
      <div class="col-3 googleLogin"></div>
      <div class="col-3 fbLogin"></div>
    </div>
    <div class="row or_style d-flex justify-content-center login align-items-center mt-3">
      <div class="col-3 line"></div>
      <div class="col-1 text">或</div>
      <div class="col-3 line"></div>
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
    <div class="row mt-5">
      <div class="col  d-flex align-items-center justify-content-end">
        <div class="submit">登入</div>
      </div>
      <div class=" forget_style col  d-flex align-items-center">
        <a href="" class="forget_style">忘記密碼?</a>
      </div>
    </div>
  </div>
</template>


<style scoped>
@import "../../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../css/base.css";
* {
  font-family: "Noto Sans TC", sans-serif;
}
.outline {
  outline: solid 2px red;
}
.main {
  min-height: 80vh;

}
.title {
  color: #262626;
  font-weight: 300;
  font-size: 50px;
}
.title_style {
  position: absolute;
  background: #219e91;
  left: 48.5%;
  top: 65px;
  height: 2rem;
  width: 6.5rem;
  border-radius: 50px;
}
.subtitle {
  font-size: 21px;
}

.googleLogin {
  cursor: pointer;
  background: #fff;
  height: 60px;
  border-radius: 0.8vw;
  border: #7c7c7c solid 0.5px;
  margin-right: 20px;
}
.fbLogin {
  cursor: pointer;
  background: #3b5998;
  height: 60px;
  border-radius: 0.8vw;
  margin-left: 20px;
}

.or_style {
  font-size: 21px;
}
.line {
  border: #262626 solid 0.2px;
  height: 0;
}
.text {
  width: 0px;
}
.input {
  height: 40px;
  width: 300px;
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
}
a{
    
    color:#ff794a !important;
}
</style>

<script>
import "bootstrap";
export default {};
</script>


