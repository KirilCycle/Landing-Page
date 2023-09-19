<template>
  <div class="wrap">
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
          text: ` The pregnancy is divided into first trimester, second trimester
        part 1 and 2, and third trimester part 1 and 2 to provide
        exercises that are safe for each stage of the pregnancy. Each
        exercise comes with a video and a description so you can safely
        perform each exercise. Simple put in your due date and you will
        be taken to the proper stage.`,
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

      <info-section :title="`During pregnancy`" :text="'Working out during pregnancy has many benefits for both the mom and the baby. It can reduce back pain, help prevent gestational diabetes, promote good posture, strength and endurance, and also improve the ability to cope with labor.'" :switch="true">
        <template v-slot:svgBackground>
          <second-square-wavy-card-svg></second-square-wavy-card-svg>
        </template>
        <template v-slot:midImg>
          <img
            class="card-image"
            src="@/assets/iPhone12ProActivitiesRotated.png"
          />
        </template>
      </info-section>
      <!-- <info-section></info-section> -->
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
.wrap {
  margin-top: 160px;
  display: flex;
  max-width: 1243.5px;
  position: relative;
}

.background-text {
  position: absolute;
  width: 974px;
  height: 218px;
  right: 0px;
  top: 969.34px;
}
.intro-container {
  height: 226px;
  max-width: 1240px;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    line-height: 60.95px;
  }

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
  width: 100%;
  margin-top: 60px;

  .section {
    width: 100%;
    height: 683px;
    display: flex;
    flex-direction: row;
  }

  .section + .section {
    margin-top: 68px;
  }

  .text-section-container {
    max-width: 604px;
    height: 370px;
    margin-top: 198px;

    &.left-card {
      .top-text-block {
        max-width: 498px;
        margin-top: 80px;
        margin-left: 90px;
      }
    }

    .top-text-block {
      max-width: 554px;
      padding-right: 40px;

      .top-text-block-trimsters-info {
        h4 {
          font-weight: 400;
          color: $light-text;
          font-size: $font-sz-l4;
          line-height: 39.01px;
          margin: 16px 0px 0px 0px;
        }
        p {
          font-size: $font-sz-sm;
          font-weight: 400;
          line-height: $line-height-5;
          letter-spacing: 0em;
          color: rgba(68, 58, 90, 1);
        }
      }
    }
  }

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

.card-image {
  position: absolute;
}
</style>
