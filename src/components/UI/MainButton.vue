<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "main-button",
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables.scss";
.btn {
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  flex-shrink: 0;
  padding:10px 24px 10px 24px; 
  background-color: $purple1;
  box-sizing: border-box;
  border-radius: 100px;
  color: white;
  text-align: center;
  font-size: 18px;
}
</style>
