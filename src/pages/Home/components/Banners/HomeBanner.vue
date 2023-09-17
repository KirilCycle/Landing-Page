<template>
  <div class="banner-wrap">
    <div class="banner">
      <banner-svg class="banner-svg-card" />

      <div class="content">
        <div class="banner-content">
          <div class="text-section">
            <h1 class="text-section-banner-header">
              Strong for life with us
             <decorative-line :bottom="'-21px'"/>
            </h1>
            <p class="text-section-banner-text">
              The best Pre/postnatal fitness app! 100 exercises divided in
              before, during and after pregnancy. Stay strong and healthy
              through all stages of pregnancy.
            </p>
            <div class="mobile-store-badge-wrap">
              <app-store-badge-svg />
              <google-play-badge-svg />
            </div>
          </div>

          <div class="banner-perfomance-section">
            <div class="main-image-wrap">
              <img src="@/assets/iPhone12Pro.png" />

              <div class="second-content">
                <shadow-image
                  :settings="{
                    src: 'yoga.png',
                  }"
                >
                  <template v-slot:right-top>
                    <heart-svg class="heart-svg" />
                  </template>
                  <template v-slot:text-info>
                    <div class="second-content-description">
                      <h3>Pregnancy tutorial.</h3>
                      <p>1st trimester week 1-12</p>
                    </div>
                  </template>
                </shadow-image>

                <shadow-image
                  :settings="{
                    src: 'fitness.png',
                  }"
                >
                  <template v-slot:right-top>
                    <heart-svg class="heart-svg" />
                  </template>
                  <template v-slot:text-info>
                    <div class="second-content-description">
                      <h3>
                        STRONG.<br />
                        Inside and out.
                      </h3>
                      <p>1st trimester week 1-12</p>
                    </div>
                  </template>
                </shadow-image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerSvg from "@/svg/BannerSvg.vue";
import GooglePlayBadgeSvg from "../../../../svg/GooglePlayBadgeSvg.vue";
import AppStoreBadgeSvg from "../../../../svg/AppStoreBadgeSvg.vue";
import ShadowImage from "../../../../components/UI/ShadowImage.vue";
import HeartSvg from "@/svg/HeartSvg.vue";
export default {
  components: {
    BannerSvg,
    GooglePlayBadgeSvg,
    AppStoreBadgeSvg,
    ShadowImage,
    HeartSvg,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.content {
  position: absolute;
  z-index: 0;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
}

.banner-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.banner {
  max-width: 1237px;
  width: inherit;
  margin-top: 60px;
  position: relative;
  height: 817px;

  .banner-content {
    padding: 102px 106px 102px 106px;
    position: relative;
    display: flex;
    flex-direction: row;
  }

  .banner-svg-card {
    width: 100%;
    position: relative;
    z-index: -1;
  }

  .text-section {
    max-width: 501px;
    height: 339.95px;

    .text-section-banner-header {
      color: $dark-text;
      line-height: $line-height;
      position: relative;


    }



    .text-section-banner-text {
      font-size: $font-sx-m;
      line-height: $line-height-2;
      color: $light-text;
      margin-top: 61px;
    }

    .mobile-store-badge-wrap {
      cursor: pointer;
      margin-top: $spacing2;
      width: min-content;
      display: flex;
      flex-direction: row;
      height: min-content;

      svg {
        margin-right: 40px;
      }
    }
  }

  .banner-perfomance-section {
    max-width: 537.64px;
    position: relative;
    height: 713.01px;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    img {
      filter: drop-shadow(0px 8px 34px  rgba(0, 0, 0, 0.433));
    }

    .second-content {
      display: flex;
      overflow: hidden;
      flex-direction: row;
      justify-content: space-between;
      position: absolute;
      top: 75%;
      left: 60%;
      transform: translate(-50%, -50%);
      height: 159.42px;
      width: max-content;
      background-color: rgb(255, 255, 255);
      border-radius: $radius3;

      .second-content-description {
        padding-left: 13.5px;
        padding-bottom: 9.22px;
        box-sizing: border-box;

        h3 {
          font-size: 13.51px;
          color: white;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          line-height: $line-height-6;
          margin-bottom: 5.2px;
        }

        p {
          font-size: $font-sz-sm4;
          color: #ffffff;
          line-height: $line-height-7;
        }
      }

      .heart-svg {
        padding: 10px;
      }
    }
  }
}
</style>
