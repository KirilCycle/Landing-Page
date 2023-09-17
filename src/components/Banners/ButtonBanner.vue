<template>
  <div class="banner-wrap">
    <div class="card">
      <banner-wavy-wide-card-svg></banner-wavy-wide-card-svg>
    </div>
    <div class="banner-content">
      <h2 class="header">{{header}}</h2>
      <main-button @click="onClick" class="btn">{{btnText}}</main-button>
    </div>
  </div>
</template>

<script>
import BannerWavyWideCardSvg from "@/svg/BannerWavyWideCardSvg.vue";
import MainButton from "../UI/MainButton.vue";
export default {
  components: { BannerWavyWideCardSvg, MainButton },
  props: ['header','btnText','onClick'],

};
</script>

<style lang="scss" scoped>
.banner-wrap {
  max-width: 1240px;
  width: 100%;
  max-height: 262px;
  position: relative;
  background-color: rgba(202, 191, 232, 1);
  border-radius: 14px;

  .banner-content {
    width: 100%;
    padding-left: 105px;
    padding-right: 105px;
    box-sizing: border-box;
    height: 262px;
    top: 0;
    bottom: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 3;

    .header {
      color: white;
    }

    .btn {
      width: 392px;
      padding: 0px;
      height: 58px;
    }
  }
}

.card {
  position: relative;
  width: 100%;
}
</style>
