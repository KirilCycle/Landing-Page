<template>
  <input class="input" :value="modelValue" @input="update" type="text" />
</template>

<script>
export default {
  name: "main-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    update(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  background-color: white;
  width: 392px;
  height: 58px;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  padding-left: 30px;
  box-sizing: border-box;
  text-align: left;

  border-radius: 38px;
  border: 1px solid #c8c2c6;
}

.input:focus {
  outline: none;
}
</style>
