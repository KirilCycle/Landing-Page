<template>
  <div class="banner-wrap">
    <div class="card">
      <banner-wavy-wide-card-svg></banner-wavy-wide-card-svg>
    </div>
    <div class="banner-content">
      <h2 class="header">{{ header }}</h2>
      <main-button @click="onClick" class="btn">{{ btnText }}</main-button>
    </div>
  </div>
</template>

<script>
import BannerWavyWideCardSvg from "@/svg/BannerWavyWideCardSvg.vue";
import MainButton from "../UI/MainButton.vue";
export default {
  components: { BannerWavyWideCardSvg, MainButton },
  props: ["header", "btnText", "onClick"],
};
</script>

<style lang="scss" scoped>
@import '@/assets/variables';
.banner-wrap {
  max-width: 1240px;
  width: 100%;
  max-height: 262px;
  position: relative;
  border-radius: 14px;
  overflow: hidden;

  .banner-content {
    width: 100%;
    padding-left: 105px;
    padding-right: 105px;
    box-sizing: border-box;
    height: 100%;
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

@media (max-width: 1100px) {
  .banner-wrap {

    .header {
      font-size: $font-sz-l3;
    }
    .banner-content {
      padding-left: 75px;
      padding-right: 75px;
      .btn {
        width: 320px;
        padding: 0px;
        height: 55px;
      }
    }
   
  }
}
@media (max-width: 970px) {
  .banner-wrap {
    width: 100%;
    height: 604px;
    overflow: hidden;
    margin: 0% auto;

    .header {
      font-size: $font-sz-l4;
    }
    .banner-content {
      padding-left: 50px;
      padding-right: 50px;
      .btn {
        width: 290px;
        padding: 0px;
        height: 45px;
      }
    }
   
  }
  .card {
    min-width: 1240px;
  }
}
</style>
