<template>
  <div class="btn-banner-wrap">
    <div class="card">
      <banner-wavy-wide-card-svg></banner-wavy-wide-card-svg>
    </div>
    <!-- <div class="banner-content">
      <h2 class="header">{{ header }}</h2>
      <main-button @click="onClick" class="btn">{{ btnText }}</main-button>
    </div> -->
  </div>
</template>

<script>
import BannerWavyWideCardSvg from "@/svg/BannerWavyWideCardSvg.vue";
export default {
  components: { BannerWavyWideCardSvg },
  props: ["header", "btnText", "onClick"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables";
.btn-banner-wrap{
  max-width: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  height: max-content;
  border-radius: 14px;

  .banner-content {
    width: calc(100% - 20px);
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
    border-radius: 14px;

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
  width: 1240px;
  height: 260px;
}

/*
@media (max-width: 1100px) {
  .banner-wrap {
    .header {
      font-size: $font-sz-l3;
    }
    .banner-content {
      box-sizing: border-box;
      padding-left: 4%;
      padding-right: 4%;
      .btn {
        width: 320px;
        padding: 0px;
        height: 55px;
      }
    }
  }
}
@media (max-width: 900px) {
  .card {
    min-width: 100%;
    height: 300px;
    transform: scale(1, 3);
  }

  .banner-wrap {
    overflow: hidden;
  }
}
@media (max-width: 845px) {
  .banner-wrap {
    .header {
      font-size: $font-sz-l3 - 8;
    }
    .banner-content {
      box-sizing: border-box;
      .btn {
        width: 250px;
        padding: 0px;
        height: 45px;
      }
    }
  }
}
@media (max-width: 695px) {
  .banner-wrap {
    max-height: 800px;
  }
  .card {
    min-width: 100%;
    height: 500px;
    transform: scale(2, 5);
  }

  .banner-wrap {
    .banner-content {
      justify-content: center;
      flex-direction: column;

      .header {
        font-size: $font-sz-l3;
        margin-bottom: 15px;
      }

      .btn {
        margin-top: 15px;
        margin: 10px;
      }
    }
  }
}
@media (max-width: 500px) {
  .banner-wrap {
    max-height: 380px;
    background-color: rebeccapurple;
  }

  .banner-wrap {
    .banner-content {
      .header {
        font-size: $font-sz-l3 - 5;
        margin-bottom: 15px;
      }
      .btn {
        width: 280px;
        padding: 0px;
        height: 50px;
      }
    }
  }
  .card {
    height: 300px;
    transform: scale(1, 4);
  }
}
*/
</style>
