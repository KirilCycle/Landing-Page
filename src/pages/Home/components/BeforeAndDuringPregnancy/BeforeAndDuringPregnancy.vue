<template>
  <div class="before-and-during-wrap">
    <div class="intro-container">
      <h2>Before, during and after pregnancy</h2>
      <p class="description">
        The app is divided into three different stages to help you choose
        appropriate exercises. Each exercise is carefully selected to ensure
        safe and appropriate adjustments to follow the pregnancy’s progress.
        <decorative-line :center="true" />
      </p>
    </div>
    <div class="main-content-section">
      <div class="background-text">
        <healthy-svg></healthy-svg>
      </div>
      <info-section
        :title="'Before pregnancy'"
        :text="`Start preparing for pregnancy with safe exercises that build up a strong body.`"
        :additionalData="{
          text: `The pregnancy is divided into first trimester, second trimester part 1 and 2, and third trimester part 1 and 2 to provide exercises that are safe for each stage of the pregnancy. Each exercise comes with a video and a description so you can safely perform each exercise. Simple put in your due date and you will be taken to the proper stage.`,
          header: 'Trimesters',
        }"
      >
        <template v-slot:svgBackground>
          <square-wavy-card></square-wavy-card>
        </template>
        <template v-slot:midImg>
          <img class="card-image" src="@/assets/iPhone12ProActivities.png" />
        </template>
      </info-section>
      <div class="section-spacing"></div>
      <info-section
        :title="`During pregnancy`"
        :text="'Working out during pregnancy has many benefits for both the mom and the baby. It can reduce back pain, help prevent gestational diabetes, promote good posture, strength and endurance, and also improve the ability to cope with labor.'"
        :switch="true"
      >
        <template v-slot:svgBackground>
          <second-square-wavy-card-svg></second-square-wavy-card-svg>
        </template>
        <template v-slot:midImg>
          <img
            class="card-image-sec"
            src="@/assets/iPhone12ProActivitiesRotated.png"
          />
        </template>
      </info-section>
    </div>
  </div>
</template>

<script>
import HealthySvg from "../../../../svg/HealthySvg.vue";
import SecondSquareWavyCardSvg from "../../../../svg/SecondSquareWavyCardSvg.vue";
import SquareWavyCard from "../../../../svg/SquareWavyCardSvg.vue";
import InfoSection from "./InfoSection.vue";
export default {
  components: {
    SquareWavyCard,
    SecondSquareWavyCardSvg,
    HealthySvg,
    InfoSection,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables";
.before-and-during-wrap {
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1243.5px;
  width: 100%;
  position: relative;
}
.section-spacing {
  height: 99px;
}
.background-text {
  position: absolute;
  width: 974px;
  height: 218px;
  right: 0px;
  top: 984px;
  z-index: -2;
}
.intro-container {
  max-width: 1240px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  .description {
    margin-top: 24px;
    font-size: $font-sz-l4;
    font-weight: 500;
    line-height: 39.01px;
    position: relative;
    text-align: center;
    color: $light-text;
  }
}
.main-content-section {
  min-width: 100%;
  margin-top: 163px;
  overflow: hidden;

  .card-section-container {
    height: 100%;
    display: flex;
    align-items: end;
    justify-content: center;
    position: relative;

    &.right-card {
      margin-left: auto;
    }

    .card-section-svg-wrap {
      width: 546px;
      height: 546px;
    }
  }
}
.card-image-sec {
  position: relative;
}
.card-image {
  position: relative;
}

@media (max-width: 1050px) {
  .card-image {
    width: 287px;
  }

  .background-text {
    width: 674px;
    height: 150px;
    top: 845px;
  }
  .card-image-sec {
    width: 287px;
  }

  .intro-container {
    padding-left: 10px;
    padding-right: 10px;
    h2 {
      line-height: 55.95px;
      font-size: 45px;
    }

    .description {
      margin-top: 22px;
      font-size: 25px;
      line-height: 33.01px;
    }
  }
}
@media (max-width: 900px) {
  .section-spacing {
    height: 75px;
  }
  .main-content-section {
    margin-top: 100px;
  }
  .card-image {
    width: 247px;
  }

  .background-text {
    width: 604px;
    height: 130px;
  }
  .card-image-sec {
    width: 247px;
  }
}
@media (max-width: 921px) {
  .intro-container {
    h2 {
      font-size: 45px;
    }
  }
}
@media (max-width: 779px) {
  .background-text {
    display: none;
  }
  .main-content-section {
    margin-top: 20px;
  }
  .section-spacing {
    height: 55px;
  }

  .intro-container {
    .description {
      margin-top: 22px;
      font-size: $font-sz-l4 - 10;
      line-height: 32.01px;
    }
  }
  .card-image-sec {
    width: 310px;
  }
  .card-image {
    width: 310px;
  }
}
@media (max-width: 534px) {
  .intro-container {
    h2 {
      font-size: 35px;
      line-height: 37px;
    }
    .description {
      font-size: 16px;
      line-height: 17px;
    }
  }
  .card-image-sec {
    width: 245px;
  }
  .card-image {
    width: 245px;
  }
}
@media (max-width: 424px) {
  .intro-container {
    h2 {
      font-size: 27px;
      line-height: 26px;
    }
  }
  .card-image-sec {
    width: 210px;
  }
  .card-image {
    width: 210px;
  }
}
@media (max-width: 394px) {
  .card-image-sec {
    width: 179px;
  }
  .card-image {
    width: 179px;
  }
}
</style>
