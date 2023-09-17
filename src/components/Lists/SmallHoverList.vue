<template>
  <div class="btn-list-wrap">
    <ul @mouseleave="() => this.$emit('close')" class="btn-list">
      <li @click="item?.handleClick" v-for="item in items" :key="item">
        <img class="ico" v-if="item.ico" :src="require(`@/assets/${item.ico}`)">
        <p>{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    items: Array
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables.scss";
.btn-list-wrap {
  width: 100%;
  box-sizing: border-box;
  height: auto;
  position: absolute;
  padding-top: 10px;
}
.btn-list {
  padding-left: 10px;
  position: absolute;
  z-index: 3;
  box-sizing: border-box;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
  font-size: $font-sz-sm2;
  border-radius: 4px;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;

  li {
    cursor: pointer;
    line-height: $line-height-5;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;

    img {
      flex-shrink: 0;
      margin-right: 7px;
      width: 22px;
    }

  }
}
</style>
