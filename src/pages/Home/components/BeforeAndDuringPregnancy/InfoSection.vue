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
  min-width: 100%;
  height: max-content;
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
    margin-top: 35px;

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
  margin-left: auto;

  .card-section-svg-wrap {
    width: 546px;
    height: 546px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    display: flex;
  }
}

@media (max-width: 1261px) {
  .section-def {
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;

    .text-section-container {
      padding-right: 20px;
    }
  }
}

@media (max-width: 1050px) {
  .card-section-container {
    width: 450px;
    .card-section-svg-wrap {
      width: 450px;
      height: 450px;
    }
  }

  .section-def {
    .text-section-container {
      margin-top: 100px;

      .top-text-block {
        .top-text-block-trimsters-info {
          h4 {
            font-size: $font-sz-l4 -10;
            line-height: 37.01px;
            margin: 10px 0px 0px 0px;
          }
          p {
            font-size: $font-sz-sm -2;
            line-height: $line-height-5 -5;
          }
        }
      }
    }
  }
  .section-switched {
    .text-section-container {
      margin-left: 20px;
    }
  }
}

@media (max-width: 900px) {
  .card-section-container {
    width: 390px;
    .card-section-svg-wrap {
      width: 390px;
      height: 390px;
    }
  }
}

@media (max-width: 779px) {
  .section-def {
    flex-direction: column;
    padding-left: 15px;
    padding-right: 15px;
    .card-section-container {
      margin-left: 0px;
      margin-top: 30px;
      width: 480px;

      .card-section-svg-wrap {
        width: 480px;
        height: 480px;
      }
    }
  }
  .section-switched {
    flex-direction: column;

    .text-section-container {
      margin-left: 0px;
    }
    .card-section-container {
      margin-right: 0px;
    }
  }
}

@media (max-width: 634px) {
  .section-def {
    align-items: center;
  }

  .section-switched {
    .text-section-container {
      margin-left: 0px;
    }
  }
}

@media (max-width: 534px) {
  .section-def {
    .card-section-container {
      margin-left: 0px;
      margin-top: 30px;
      width: 380px;

      .card-section-svg-wrap {
        width: 380px;
        height: 380px;
      }
    }
  }
}

@media (max-width: 424px) {
  .section-def {
    .card-section-container {
      width: 322px;

      .card-section-svg-wrap {
        width: 322px;
        height: 322px;
      }
    }
  }
}

@media (max-width: 394px) {
  .section-def {
    padding-left: 10px;
    padding-right: 10px;
    .card-section-container {
      width: 282px;

      .card-section-svg-wrap {
        width: 282px;
        height: 282px;
      }
    }
  }
}
</style>
