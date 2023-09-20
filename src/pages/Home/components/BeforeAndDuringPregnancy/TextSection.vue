<template>
  <div class="text-section-wrap">
    <h3 class="header">
      {{ title }}
      <decorative-line :bottom="'-13px'"/>
    </h3>

    <p class="text">
      <slot> </slot>
    </p>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.text-section-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.header {
  line-height: $line-height-l;
  position: relative;
}

.text {
  margin-top: 40px;
  color: $light-text;
  font-weight: 400;
  font-size: $font-sz-sm;
  line-height: $line-height-5;
}

@media (max-width: 950px) {
  .header {
    font-size: 37px;
    line-height: 33px;
  }

  .text {
    margin-top: 33px;
  }
}
@media (max-width: 860px) {
  .text {
    margin-top: 24px;
  }
  .header {
    font-size: 32px;
    line-height: 33px;
  }
}
@media (max-width: 779px) {
  .header {
    font-size: 40px;
    line-height: 40px;
  }

  .text {
    margin-top: 35px;
  } 
}
@media (max-width: 534px) {
  .header {
    font-size: 35px;
    line-height: 35px;
  }
}
@media (max-width: 394px) {
  .header {
    font-size: 31px;
    line-height: 31px;
  }
}

</style>
