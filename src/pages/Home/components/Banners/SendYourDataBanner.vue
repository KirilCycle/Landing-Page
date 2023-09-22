<template>
  <div class="send-data-banner-wrap">
    <div class="space-1"></div>
    <button-banner
      @click="navigateToAnotherPage"
      :header="'Send your Data'"
      :btnText="'Go to form'"
    ></button-banner>
    <div class="space-2"></div>
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
  max-width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  height: min-content;
  flex-direction: column;
}

.space-1 {
  height: 81px;
}
.space-2 {
  height: 160px;
}

@media (max-width: 1260px) {
  .send-data-banner-wrap {
    padding-left: 10px;
    padding-right: 10px;
  }
}


</style>
