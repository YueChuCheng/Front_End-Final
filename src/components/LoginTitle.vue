<template>
  <div class="row">
    <div class="col title">
      {{titleName}}
      <div class="title_style"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "logintitle",
  props: ["titleName"]
};
</script>

<style>
@import "../../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../css/base.css";
* {
  font-family: "Noto Sans TC", sans-serif;
}

.title {
  text-align: center;
  color: #262626;
  font-weight: 300;
  font-size: 250%;
}
.title_style {
  text-align: center;
  z-index: -1;
  position: absolute;
  background: #219e91;
  margin-left: 47.5%;
  margin-top: -1.5%;
  height: 2vw;
  width: 6vw;
  border-radius: 50px;
}


</style>
