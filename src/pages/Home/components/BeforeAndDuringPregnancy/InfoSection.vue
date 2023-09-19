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
  width: 100%;
  height: max-content;
  background-color: red;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  z-index: 2;

  .text-section-container {
    max-width: 604px;
    flex-shrink: 2;
    margin-top: 135px;
   

    .top-text-block {
      max-width: 554px;
      box-sizing: border-box;
      padding-right: 40px;
      flex-shrink: 0;


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

  .text-section-container {
    margin-left: 90px;
    display: flex;
    align-items: center;

    .top-text-block {
      max-width: 498px;
    }
  }
}
.card-section-container {
  height: 100%;
  display: flex;
  flex-shrink: 0;
  align-items: end;
  justify-content: center;
  position: relative;
  background-color: rebeccapurple;
  width: 546px;

  .card-section-svg-wrap {
    width: 546px;
    height: 546px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    background-color: green;
    display: flex;
  }
}
/*
@media (max-width: 1258px) {
  .text-section-container {
    box-sizing: border-box;
  }

  .section-def {
    height: 673px;
    padding-left: 20px;
    box-sizing: border-box;
    padding: 20px;
  }
  .card-section-container {
    .card-section-svg-wrap {
      width: 480px;
      height: max-content;
    }
  }
}

@media (max-width: 1050px) {
  .section-switched {
    .text-section-container {
      margin-left: 40px;
    }
  }

  .section-def {
    height: 523px;
    .text-section-container {
      margin-top: 120px;
      .top-text-block {
        .top-text-block-trimsters-info {
          h4 {
            font-size: $font-sz-l4 - 5;
            line-height: 37.01px;
            margin: 14px 0px 0px 0px;
          }
          p {
            line-height: 18px;
            font-size: 14px;
          }
        }
      }
    }
  }

  .card-section-container {
    .card-section-svg-wrap {
      width: 395px;
      height: 395px;
    }
  }
}

@media (max-width: 800px) {
  .section-def {
    flex-direction: column;
    height: max-content;

    .text-section-container {
      margin-top: 50px;
      margin-left: 0px;
      margin-right: 0px;
    }
  }

  .section-switched {
    flex-wrap: nowrap;

    .text-section-container {
        margin-left: 0px;
        margin-right: 0px;
    }

  }

  .card-section-container {
    max-width: 546px;
    max-height: 546px;
    margin-top: 20px;
  }
}
*/
</style>
