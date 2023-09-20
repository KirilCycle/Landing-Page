<template>
  <div :class="this.switch ? 'section-switched' : 'section-def'">
    <div class="text-section-container">
      <div class="top-text-block">
        <text-section :title="title">
          {{ text }}
        </text-section>
        <div v-if="additionalData" class="top-text-block-trimsters-info">
          <h4>{{ additionalData.header }}</h4>
          <p>
            {{ additionalData.text }}
          </p>
        </div>
      </div>
    </div>
    <div class="card-section-container">
      <div class="card-section-svg-wrap">
        <slot name="svgBackground"></slot>
      </div>
      <slot name="midImg"> </slot>
    </div>
  </div>
</template>

<script>
import TextSection from "@/pages/Home/components/BeforeAndDuringPregnancy/TextSection";
export default {
  props: ["switch", "text", "title", "additionalData"],
  components: { TextSection },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables";
.section-def {
  max-width: 100%;
  height: max-content;
  background-color: rgba(255, 0, 0, 0.215);
  display: flex;
  flex-direction: row;


  .text-section-container {
    max-width: 604px;
    flex-shrink: 2;
    margin-top: 135px;
   

    .top-text-block {
      max-width: 554px;
      box-sizing: border-box;
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
}
.section-switched {
  @extend .section-def;
  flex-direction: row-reverse;
  justify-content: start;

  .text-section-container {
    margin-left: 90px;
    display: flex;
    align-items: center;

    .top-text-block {
      max-width: 498px;
    }
  }

  .card-section-container {
    margin-right: 0px;
    margin-left: 0px;
  }

}
.card-section-container {
  height: 100%;
  display: flex;
  flex-shrink: 0;
  align-items: end;
  justify-content: center;
  position: relative;
  width: 546px;
  margin-left: auto ;

  .card-section-svg-wrap {
    width: 546px;
    height: 546px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    display: flex;
  }
}
</style>
