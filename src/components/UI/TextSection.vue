<template>
  <div class="section">
    <h2>{{ header }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    headerSettings: {
      type: Object,
      required: true,
    },
    textSettings: {
      type: Object,
      required: true,
    }
  },
};
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
}
</style>
