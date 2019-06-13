<template>
  <div class="home">
    <Nav/>
    <div class="row position-absolute">
      <div class="col mainImg_title d-flex justify-content-center align-items-center flex-column">
        <span>巷口麵店</span>
        <span class="subtitle">找到家鄉的滋味</span>
      </div>
    </div>
    <div class="row subtitle2">
      <div class="col">
        <span class>找吃的</span>
      </div>
    </div>
    <!-- 圖片輪播 -->
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
    <!-- 圖片輪播結束 -->
    <div class="container main_section">
      <div class="row">
        <div class="col title_section">選擇店家</div>
      </div>
      <div class="row">
        <div class="col subtitle_section d-flex flex-column align-items-center">
          <div>CHOOSE RESTAURANT</div>
          <div class="line"></div>
        </div>
      </div>
      <LoginTitle :titleName="'早午餐'" class="logintitle"/>
    </div>
    <div class="container card_section">
      <div class="row d-flex justify-content-around">
        <!-- 印出所有店家的資訊 -->
        <StoreCard
         
          v-for="(ele, id) in store"
          :storename="ele.Name"
          :storeAddress="ele.Adress"
          :storeTime="ele.OpenTime"
          :key="id"
          :id="id"
        />
      </div>
    </div>

    <Footer/>
  </div>
</template>

<style scoped>
.home {
  z-index: -1000;
  background-color: #f8f8f8;
}
/* 更改輪播形狀 */
.carousel {
}
.carousel-indicators {
  position: absolute;
  top: -10%;
  left: 83%;
}
.carousel-indicators li {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.main {
  /* background-color: unset; */
}

.mainImg_title {
  z-index: 1000;
  color: #fff;
  font-size: 9vw;
  height: 80vh;
  left: 30vw;
}
.carousel-item img {
  z-index: 1000;
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
  z-index: 1;
}
.subtitle2 {
  z-index: 1000;
  position: absolute;
  font-size: 2.2vw;
  top: 70vh;
  left: 45vw;
  color: #fff;
}
.main_section {
  z-index: 1000;
  text-align: center;
  min-height: 25vh;
  margin-top: 50px;
}
.title_section {
  font-size: 300%;
}
.subtitle_section {
  font-size: 200%;
}
.line {
  margin-top: 15px;
  border: solid #000 1.5px;
  height: 0px;
  width: 400px;
}
.logintitle {
  margin-top: 40px;
}
.card_section {
  margin-top: 60px;
  width: 80vw;
}
</style>
<script>
// @ is an alias to /src

import "../../node_modules/bootstrap";
import Nav from "@/components/Nav.vue";
import LoginTitle from "@/components/LoginTitle.vue";
import StoreCard from "@/components/StoreCard.vue";
import Footer from "@/components/Footer.vue";
import $ from "jquery";
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "home",
  data() {
    return {
      store: [{ Name: "", Adress: "", OpenTime: "", TEL: "" }]
    };
  },
  components: {
    Nav,
    LoginTitle,
    StoreCard,
    Footer
  },
  methods: {
    ...mapState(["storeData"]),
    ...mapActions(["doStoreDataRead"]),
  
  },
  async created() {
    this.store = await this.doStoreDataRead();
    this.store.forEach((ele, id) => {
      console.log(id);
    });
  }
};
</script>

