<template>
  <div class="send-data-banner-wrap">
    <button-banner
      @click="navigateToAnotherPage"
      :header="'Send your Data'"
      :btnText="'Go to form'"
    ></button-banner>
  </div>
</template>

<script>
import ButtonBanner from "@/components/Banners/ButtonBanner.vue";
export default {
  components: { ButtonBanner },
  methods: {
    navigateToAnotherPage() {
      this.$router.push('/form');
    }
  }
};
</script>

<style lang="scss" scoped>

.send-data-banner-wrap {
  width: 100vw;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  background-color: red;
  height: max-content;
}

@media (max-width: 1260px) {
  .send-data-banner-wrap {
    padding-left: 10px;
    padding-right: 10px;
  }
}



</style>
