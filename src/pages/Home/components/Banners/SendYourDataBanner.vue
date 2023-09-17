<template>
  <div class="banner-wrap">
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

.space1 {
    height: 80px;
}

.space2 {
    height: 160px;
}

</style>
