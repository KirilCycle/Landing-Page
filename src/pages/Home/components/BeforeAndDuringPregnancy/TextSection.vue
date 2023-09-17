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

</style>
