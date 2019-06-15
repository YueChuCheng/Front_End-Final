<template>
  <div class="footer">
    <div>&#9400 2019 呷蝦咪 版權所有</div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  background-color: #232323;
  height: 70px;
  width: 100%;
  color: #fff;
  font-weight: 200;
}

@media screen and (max-width: 768px) {
  .footer {
    height: 50px;
    font-size: 1.5vw
  }
}
@media screen and (max-width: 480px) {
  .footer {
    height: 50px;
    font-size: 2.5vw
  }
}
</style>
