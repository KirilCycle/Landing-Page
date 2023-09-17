<template>
  <div class="home">
    <div class="wrap">
      <home-banner />
      <info-block />
      <before-and-during-pregnancy />
      <blog-posts />
      <send-your-data-banner/>
    </div>
  </div>
</template>

<script>
import BeforeAndDuringPregnancy from "./components/BeforeAndDuringPregnancy/BeforeAndDuringPregnancy.vue";
import BlogPosts from "./components/BlogPosts/BlogPosts.vue";
import HomeBanner from "./components/Banners/HomeBanner.vue";
import InfoBlock from "./components/InfoBlock/InfoBlock.vue";
import SendYourDataBanner from "./components/Banners/SendYourDataBanner.vue";
export default {
  components: { HomeBanner,SendYourDataBanner, InfoBlock, BeforeAndDuringPregnancy,BlogPosts },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1243.5px;
}
</style>
