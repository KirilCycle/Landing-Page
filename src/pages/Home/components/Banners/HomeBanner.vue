<template>
  <div class="banner-wrap">
    <div class="banner">
      <banner-svg class="banner-svg-card" />
      <div class="content">
        <div class="banner-content">
          <div class="text-section">
            <h1 class="text-section-banner-header">
              Strong for life with us
              <decorative-line class="deco-line" />
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

          <div class="banner-iphone-section">
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
            <div class="mobile-store-badge-wrap-mobile">
              <app-store-badge-svg />
              <google-play-badge-svg />
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
.deco-line {
  bottom: -23px;
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
    max-height: 500px;

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
      width: max-content;
      justify-content: space-between;
      display: flex;
      flex-direction: row;
      height: min-content;

      svg + svg {
        margin-left: 40px;
      }

      svg {
        max-width: 170px;
      }
    }
  }
  .banner-iphone-section {
    max-width: 537.64px;
    position: relative;
    height: 713.01px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    .mobile-store-badge-wrap-mobile {
      display: none;
    }

    img {
      filter: drop-shadow(0px 8px 34px rgba(0, 0, 0, 0.433));
    }
    .mobile-store-badge-wrap {
      display: none;
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

@media (max-width: 1250px) {
  .banner-wrap {
    margin-top: 30px;
  }
  .banner {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (max-width: 1150px) {
  .banner-wrap {
    max-height: 650px;
  }
  .banner {
    .banner-content {
      padding: 140px 90px 140px 90px;
      max-height: 550px;
    }

    .text-section {
      .text-section-banner-text {
        font-size: $font-sx-m - 2;
        padding-right: 20px;
        box-sizing: border-box;
        line-height: $line-height-2 - 2;
      }
      .text-section-banner-header {
        line-height: $line-height -2;
        font-size: $fz-1 - 3;
      }
    }
    .banner-iphone-section {
      img {
        width: 315px;
      }
      .second-content {
        max-width: 400px;
        right: 0%;
        top: 67%;
      }
    }
  }
}

@media (max-width: 950px) {
  .banner-wrap {
    max-height: 600px;
  }
  .banner {
    .banner-content {
      padding: 175px 65px 175px 65px;

      .mobile-store-badge-wrap {
        margin-top: $spacing2 - 25;
        width: 320px;
      }
    }
    .banner-iphone-section {
      img {
        width: 280px;
      }
      .second-content {
        display: none;
      }
    }

    .text-section {
      .text-section-banner-text {
        font-size: $font-sx-m - 5;
        margin-top: 24px;
        line-height: $line-height-2 - 5;
      }
      .text-section-banner-header {
        line-height: $line-height -5;
        font-size: $fz-1 - 6;
        padding-right: 10px;
      }
    }
  }
}

@media (max-width: 920px) {
  .banner-wrap {
    max-height: 500px;
    margin-top: 0px;
  }
}

@media (max-width: 820px) {
  .banner {
    .banner-content {
      padding: 195px 50px 195px 50px;
    }
    .banner-iphone-section {
      img {
        width: 250px;
      }
    }

    .text-section {
      .text-section-banner-header {
        line-height: $line-height -9;
        font-size: $fz-1 - 8;
      }
      .text-section-banner-text {
        font-size: $font-sx-m - 5;
        margin-top: 24px;
        line-height: $line-height-2 - 8;
      }
    }
  }
}

@media (max-width: 730px) {
  .banner-wrap {
    max-height: 430px;
  }
  .banner {
    .banner-content {
      padding: 220px 40px 0px 40px;
    }
    .banner-iphone-section {
      img {
        width: 230px;
      }
    }

    .text-section {
      .text-section-banner-header {
        line-height: 50px;
        font-size: $fz-1 - 12;
      }
      .text-section-banner-text {
        font-size: $font-sx-m - 6;
        margin-top: 22px;
      }
    }
  }
}

@media (max-width: 675px) {
  .banner-wrap {
    display: flex;
    align-items: start;
  }
  .banner-svg-card {
    margin-top: -220px;
  }

  .banner {
    .banner-content {
      padding: 20px 35px 0px 35px;
      .mobile-store-badge-wrap {
        width: 280px;
        svg + svg {
          margin-left: 10px;
        }
      }
    }
    .banner-iphone-section {
      max-width: 100%;
      img {
        width: 190px;
      }
    }

    .text-section {
      .text-section-banner-header {
        line-height: 45px;
        font-size: $fz-1 - 14;
      }
      .text-section-banner-text {
        font-size: $font-sx-m - 7;
        line-height: 23px;
        margin-top: 22px;
      }
    }
  }
}

@media (max-width: 600px) {
 
  .banner-wrap {
    min-height: 800px;
    overflow: hidden;
    .banner-svg-card {
      display: none;
    }

    .banner {
      .banner-content {
        padding: 0px 10px 0px 10px;
        flex-direction: column;
        width: 100%;
        box-sizing: border-box;
        .mobile-store-badge-wrap {
          width: 0px;
          height: 0px;
          visibility: hidden;
        }
        svg {
          width: 85%;
        }
        svg + svg {
          margin-top: 20px;
          margin-left: 0px;
        }
      }
      .banner-iphone-section {
        margin-top: 25px;
        width: 100%;
        display: flex;
        justify-content: start;
        position: relative;
        max-height: max-content;
        flex-direction: row;
  

        .mobile-store-badge-wrap-mobile {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          position: relative;
          width: inherit;
          flex-shrink: 1;
          
        }

        .main-image-wrap {
          position: relative;
          height: max-content;
          width:max-content;
       
        }

        img {
          width: 210px;
          filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.544));
          position: relative;
        }
      }

      .text-section {
        position: relative;

        .text-section-banner-header {
          line-height: 55px;
          font-size: $fz-1 - 5;
          padding: 0px;
        }
        .text-section-banner-text {
          padding: 0px;
          font-size: 24px;
          line-height: 32px;
          margin-top: 30px;
          margin-top: 30px;
        }
      }
    }
  }
}

@media (max-width: 456px) {
  .banner-wrap {
    .banner {
      .banner-iphone-section {
        img {
          width: 170px;
        }
      }
      .text-section {
        .text-section-banner-header {
          line-height: 45px;
          font-size: $fz-1 - 10;
        }
        .text-section-banner-text {
          font-size: 18px;
          line-height: 22px;
        }
        .mobile-store-badge-wrap {
          right: 10px;
        }

      }
    }
  }
}

@media (max-width: 356px) {
  .banner-wrap {
    max-height: 700px;
    min-height: 700px;
    height: 700px;
    .banner {
      .banner-iphone-section {
        img {
          width: 150px;
        }
      }
      .text-section {
        .mobile-store-badge-wrap {
          right: 5px;
        }

        .text-section-banner-header {
          line-height: 38px;
          font-size: 40px;
        }
        .text-section-banner-text {
          font-size: 18px;
          line-height: 22px;
        }
      }
    }
  }
}
@media (max-width: 332px) {
  .banner-wrap {
    .banner {
      .banner-iphone-section {
        img {
          width: 150px;
        }
      }
      .text-section {
        .mobile-store-badge-wrap {
          right: 5px;
        }
       
      }
    }
  }
}
</style>
