<template>
  <div class="home">
    <Nav/>
    <div class="row subtitle2">
      <div class="col d-flex flex-column justify-content-center align-items-center">
        
        <span>找吃的</span>
        <img src="../assets/icon/icon (2).png" alt="" class="find_arrow">
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
          <img src="../assets/main_pic0.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/main_pic2.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/main_pic3.png" class="d-block w-100" alt="...">
        </div>
      </div>
    </div>
    <!-- 圖片輪播結束 -->
    <!-- <div class="container main_section" id="main">
      <div class="row">
        <div class="col title_section">選擇店家</div>
      </div>
      <div class="row">
        <div class="subtitle_section ouline">CHOOSE RESTAURANT</div>
      </div>
    </div>-->

    <div class="menuheader_container">
      <h4>選擇店家</h4>
      <h4>CHOOSE RESTAURANT</h4>
      <hr>
    </div>
    <div class="card_deco ">
      <h5 class="font_bg ">早午餐</h5>
      <h5>早午餐</h5>
    </div>
    <div class=" select_section d-flex justify-content-around align-content-center flex-wrap">
      <select class="select select_area">
        <option>台北市大安區</option>
        <option>台北市信義區</option>
        <option>台北市新店區</option>
        <option>新北市淡水區</option>
      </select>
      <select class="select select_food">
        <option>早午餐</option>
        <option>早餐</option>
        <option>晚餐</option>
        <option>午餐</option>
      </select>
      <select class="select select_rester">
        <option>餐廳搜尋</option>
        <option>好食</option>
        <option>新川屋</option>
        <option>豚太郎</option>
      </select>
    </div>
    <div class="  card_section  d-flex flex-wrap">
      <!-- 印出所有店家的資訊 -->
      <StoreCard
        v-for="(ele, id) in store"
        :storename="ele.Name"
        :storeAddress="ele.Address"
        :storeTime="ele.OpenTime"
        :key="id"
        :id="id"
      />
    </div>

    <Footer/>
  </div>
</template>

<style scoped>
.card_deco {
  position: relative;
  top: 10.5vw;
  left: 8vw;
}
h5 {
  /* writing-mode:vertical-lr; */
  color: #262626;
  /* border:1px solid #000000; */
  font-size: 4vw;
  font-weight: 300;
  line-height: 4.25vw;
  position: absolute;
  width: 3vw;
}
.font_bg {
  width: 3vw;
  border-radius: 50px;
  background-color: #219e91;
  margin-top: 2%;
  margin-left: 1.25%;
  color: rgba(0, 0, 0, 0);
}
h4 {
  font-size: 3vw;
  font-weight: 400;
}
h4:nth-child(2) {
  font-size: 2vw;
  font-weight: 400;
  text-align: center;
  margin-top: 4px;
}
.menuheader_container {
  margin-top: 5vw;
  display: grid;
  justify-content: center;
  justify-items: center;
}
hr {
  border: none;
  border-top: 0.15vw solid #262626;
  width: 25vw;
  margin-top: 0.5vw;
}
.home {
  z-index: -1000;
  background-color: #f8f8f8;
  overflow-x: hidden;
}
/* 更改輪播形狀 */
.carousel {
}
.carousel-indicators {
  position: absolute;
  top: 2%;
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
  height: 45vw;
  left: 30vw;
}
.carousel-item img {
  z-index: 1000;
  width: 100vw;
  height: 50vw;
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
  top: 40vw;
  left: 45vw;
  color: #fff;
}
.main_section {
  z-index: 1000;
  text-align: center;

  margin-top: 40px;
}
.title_section {
  font-size: 300%;
}

.subtitle_section {
  margin: 0 auto;
  width: 35vw;
  font-size: 3vw;
  padding-bottom: 1%;
  border-bottom: 2px solid #000;
}

.logintitle {
  margin-top: 40px;
}
.card_section {
  margin: 0 auto;
  margin-top: 2%;
  margin-left: 14vw;
  width: 80vw;
}
.title {
  z-index: 1000;
  position: absolute;
  width: 30px;
  margin-top: 10%;
  font-size: 60px;
}
.title_look {
  z-index: 100;
  position: absolute;
  background-color: #219e91;
  height: 200px;
  width: 70px;
  margin-top: 15%;
  margin-left: 1%;
  border-radius: 50px;
}
.select_section {
  margin: 20px auto;
  width: 80vw;
  height: 60px;
  padding-left: 3.5vw;
}
.select {
  border-radius: 10px;
  height: 40px;
}
.select_area {
  width: 18%;
}
.select_food {
  width: 18%;
  margin-left: 30px
}
.select_rester {
  width: 47%;
  margin-left: 30px
}
.find_arrow{
  width: 50%;
  margin-top:15%;

}
@media screen and (max-width: 768px) {
  .subtitle_section {
    width: 33vw;
    font-size: 2.8vw;
  }
  .title_section {
    font-size: 230%;
  }
  .select_section {
    width: 50vw;
    margin-top: 2%;
    padding-left: 0px;
  }
  .select_area {
    width: 45%;
  }
  .select_food {
    width: 45%;
    margin-left: 0px
  }
  .select_rester {
    margin-top: 10px;
    width: 98%;
    margin-left: 0px
  }
  .card_section {
    margin-top: 15vw;
    margin-left: auto;
  }
  .carousel-indicators li {
    margin-top: -6px;
  }
  h5 {
    width: 20vw;
  }
  .card_deco {
    top: 100px;
    left: 43vw;
  }
  .font_bg {
    width: 15vw;
    height: 3.5vw;
    margin-top: 3%;
    margin-left: 1.25%;
  }
}
@media screen and (max-width: 480px) {
  .subtitle_section {
    width: 200px;
    font-size: 18px;
  }
  .title_section {
    font-size: 200%;
  }
  .select_section {
    width: 65vw;
    margin-top: 40px;
  }
  .card_section {
    margin-top: 20%;
    width: 83vw;
  }
  .carousel-indicators li {
    margin-top: -10px;
    height: 7px;
    width: 7px;
  }
  .select_area {
    width: 55%;
  }
  .select_food {
    margin-top: 7px;
    width: 55%;
  }
  .select_rester {
    margin-top: 7px;
    width: 98%;
  }
   .card_deco {
    top: 145px;
    left: 43vw;
  }
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
import ScrollMagic from "scrollmagic";
export default {
  name: "home",
  data() {
    return {
      store: [{ Name: "", Address: "", OpenTime: "", TEL: "" }]
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
    ...mapActions(["doStoreDataRead"])
  },
  async created() {
    this.store = await this.doStoreDataRead();
    this.store.forEach((ele, id) => {
      //console.log(id);
      console.log("id= " + this.$store.state.user.userid);
    });
  },
  mounted() {
    let controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: ".menuheader_container"
    })
      .setClassToggle(".main", "bgc-black")
      .addTo(controller);
  }
};
</script>

