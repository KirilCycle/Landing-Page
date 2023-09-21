<template>
  <div class="send-data-banner-wrap">
    <div class="space1"></div>
    <button-banner
      @click="navigateToAnotherPage"
      :header="'Send your Data'"
      :btnText="'Go to form'"
    ></button-banner>
    <div class="space2"></div>
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
  position: relative;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
}

.space1 {
    height: 80px;
}

.space2 {
    height: 160px;
}

@media (max-width: 1260px) {
  .send-data-banner-wrap{
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    box-sizing: border-box;
  }
}

</style>
