<template>
  <div class="home">
    <Nav/>
    <div class="row position-absolute">
      <div class="col mainImg_title d-flex justify-content-center align-items-center flex-column">
        <span>巷口麵店</span>
        <span class="subtitle">找到家鄉的滋味</span>
      </div>
    </div>
    <div class="row   subtitle2">
      <div class="col">
        <span class>找吃的</span>
      </div>
    </div>
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
      data-interval="2000"
    >
      <ol class="carousel-indicators d-flex flex-column align-items-end">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/picture (1).png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/main_pic1.jpeg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/main_pic2.jpeg" class="d-block w-100" alt="...">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 更改輪播形狀 */
.carousel-indicators {
  position: absolute;
  top: -10%;
  left: 80%;
}
.carousel-indicators li {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.main {
  background-color: unset;
}

.mainImg_title {
  z-index: 100;
  color: #fff;
  font-size: 9vw;
  height: 80vh;
  width: 100vw;
}
.carousel-item img {
  width: 100vw;
  height: 90vh;
  object-fit: cover;
}
span {
  font-family: "Noto Serif TC", serif;
  letter-spacing: 0.8vw;
}
.subtitle {
  font-size: 2.2vw;
  font-weight: 100;
}
.carousel {
  z-index: -1;
}
.subtitle2 {
  position: absolute;
  font-size: 2.2vw;
  top:70vh;
  left:45vw;
  color: #fff;
 
 
}
</style>
<script>
// @ is an alias to /src

import "../../node_modules/bootstrap";
import Nav from "@/components/Nav.vue";
import $ from "jquery";

export default {
  name: "home",
  components: {
    Nav
  }
};
</script>

