<template>
  <div class="home">
    <div class="wrap">
      <home-banner />
      <info-block />
      <before-and-during-pregnancy />
      <blog-posts />
      <send-your-data-banner />
    </div>
  </div>
</template>

<script>
import BeforeAndDuringPregnancy from "./components/BeforeAndDuringPregnancy/BeforeAndDuringPregnancy.vue";
import BlogPosts from "./components/BlogPosts/BlogPosts.vue";
import HomeBanner from "./components/Banners/HomeBanner/HomeBanner.vue";
import InfoBlock from "./components/InfoBlock/InfoBlock.vue";
import SendYourDataBanner from "./components/Banners/SendYourDataBanner/SendYourDataBanner.vue";
export default {
  components: {
    HomeBanner,
    InfoBlock,
    BeforeAndDuringPregnancy,
    BlogPosts,
    SendYourDataBanner,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  box-sizing: border-box;
  width: 100%;
}

.wrap {
  position: relative;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

@media (max-width: 920px) {
  .wrap {
    padding-top: 60px;
  }
}

</style>
