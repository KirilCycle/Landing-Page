<template>
  <router-link class="cus-router-link" :to="to">
    <slot> </slot>
    <div class="arrow-button-svg-wrap">
      <arrow-button-svg></arrow-button-svg>
    </div>
  </router-link>
</template>

<script>
import ArrowButtonSvg from "@/svg/ArrowButtonSvg.vue";
export default {
  components: { ArrowButtonSvg },
  name: "custom-router-link",
  props: ["to"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables";
.cus-router-link {
  font-size: $font-sx-m;
  font-weight: 400;
  line-height: $line-height-2;
  letter-spacing: 0em;
  text-align: center;
  color: $dark-text;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.arrow-button-svg-wrap {
  width: 32px;
  height: 32px;
  margin-left: 9px;
}

@media (max-width: 700px) {
  .cus-router-link {
    font-size: $font-sx-m - 5;
  }
  .arrow-button-svg-wrap {
    width: 25px;
    height: 25px;
  }
}

@media (max-width: 400px) {
  .cus-router-link {
    font-size: $font-sx-m - 8;
  }

}
</style>
