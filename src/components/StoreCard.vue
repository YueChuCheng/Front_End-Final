<template>
  <div class="card_style">
    <img src="../assets/restaurant/restaurant (1).png" alt>
    <h5 class="storeName">太和豆漿</h5>
    <div class="info">
      <p class=" info_time">營業時間:</p>
      <p class=" info_time_p">平日 6:00~15:00</p>
      <p class=" info_time_p">假日 8:00~15:00</p>
    </div>
    <div class="submit ">
      <div class="submit_btn">吃這間吧</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreCard"
};
</script>

<style scoped>
.outline {
  outline: solid red 2px;
}
.card_style {
  background: #fff;
  width: 360px;
  height: 600px;
  padding: 30px;
  box-shadow:4px 4px 12px -2px rgba(20%,20%,40%,0.5);
}
img {
  width: 100%;
}
.storeName {
  margin-top: 10px;
  text-align: center;
  font-size: 30px;
}
.info {
  margin-top: 15px;
}
.info_time {
    margin: 3px;
  font-size: 20px;
  font-weight: 500;
}
.info_time_p {
     margin: 3px;
  padding-left: 30px;
  font-size: 18px;
}
.submit {
  display:flex;
  justify-content: center;
  margin-top:20px; 
}
.submit_btn {
  cursor: pointer;
  text-align: center;
  color: #fff;
  background-color: #ff794a;
  height: 50px;
  width: 150px;
  border-radius: 100px;
  line-height: 50px;
}
</style>
