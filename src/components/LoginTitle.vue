<template>
 <div class="card_deco ">
      <h5 class="font_bg ">{{this.titleName}}</h5>
      <h5>{{this.titleName}}</h5>
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
/* h5 { */
  writing-mode:vertical-lr;
  /* color: #262626; */
  border:1px solid #000000;
  /* font-size: 4vw; */
  /* font-weight: 300; */
  /* line-height: 4.25vw; */
  /* position: absolute; */
  /* width: 3vw; */
/* } */
/* .font_bg { */
  /* width: 3vw; */
  /* border-radius: 50px; */
  /* background-color: #219e91; */
  /* margin-top: 2%; */
  /* margin-left: 1.25%; */
  /* color: rgba(0, 0, 0, 0); */
/* } */
 /* h5 { */
    /* width: 20vw; */
  /* } */
 /* .font_bg { */
   /*  */
    /* width: 9vw; */
    /* height: 3vw; */
    /* margin-top: 2.4%; */
    /* margin-left: 7%; */
  /* } */
 /* .card_deco{ */
  /*  */
  /* margin-left:40%; */
 /* } */
/* /* .title { */
  /* text-align: center;
  color: #262626;
  font-weight: 300;
  font-size: 50px;
}
.title_style {
  text-align: center;
  
  position: relative;
 
  margin-left: 47vw;
  margin-top: -35px;
 
  
} */ 


</style>
