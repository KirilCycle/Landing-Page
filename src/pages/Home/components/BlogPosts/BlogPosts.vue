
<template>
  <div class="blog-post-wrap">
    <h2 class="blog-posts-header">Our blog posts</h2>
    <div class="decorative-line"></div>
    <div class="blogs-container">
      <div class="large-blog">
        <blog-item
          :selectedBlog="'blog-large'"
          :author="{
            name:'BY TILDA LOFTIN',
          }"
          :date="'JUNE 25, 2021'"
          :src="'ReturnToRunning.jpg'"
          :title="'Return to running after pregnancy – Is your body strong enough for running?'"
        >
        <img class="blog-author-img" src="@/assets/Tilda.jpg">
      </blog-item>
      </div>
      <div class="group-blogs">
        <div class="blog-wrap" v-for="blog in blogs" :key="blog.title">
          <blog-item
            :selectedBlog="'blog-medium'"
            :date="blog.date"
            :src="blog.src"
            :title="blog.title"
          ></blog-item>
        </div>
      </div>
    </div>
    <div class="view-more-wrap">
      <custom-router-link :to="'/Blogs'">Like what you see? View more</custom-router-link>
    </div>
  </div>
</template>

<script>
// import ShadowImage from "../../../../components/UI/ShadowImage.vue";
import BlogItem from "./BlogItem.vue";
export default {
  components: { BlogItem },
  data() {
    return {
      blogs: [
        {
          src: "stollerWalks.jpg",
          date: "APRIL 21, 2021",
          title: "Stroller walks",
        },
        {
          src: "playgroundworkout.jpg",
          date: "MARCH 17, 2020",
          title: "Playground workout",
        },
        {
          src: "YourEssentialFitnessGearforEachTrimester.jpg",
          date: "FEBRUARY 21, 2021",
          title: "Your Essential Fitness Gear for Each Trimester",
        },
        {
          src: "WhatYOUcouldgainbyworkingwithaWomansHealthPhysicalTherapist.jpg",
          date: "JANUARY 23, 2020",
          title:
            "What YOU could gain by working with a Woman’s Health Physical Therapist",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables";
.large-blog {
  width: 604px;
  flex-shrink: 0;
  height: 604px;
}

.view-more-wrap {
  width: 100%;
  margin-top: 32px;
  display: flex;
  justify-content: center;
}

.decorative-line {
  width: 46px;
  height: 3px;
  background-color: $pink;
  margin: 0% auto;
}
.blog-posts-header {
  line-height: 60.95px;
  margin-bottom: 21px;
}

.blog-post-wrap {
  max-width: 1239px;
  width: 100%;
  height: 819px;
  margin-top: 160px;
}

h2 {
  font-size: 50px;
  font-weight: 700;
  line-height: 61px;
  letter-spacing: 0em;
  text-align: center;
  line-height: 61px;
  letter-spacing: 0em;
  text-align: center;
}

.blogs-container {
  margin-top: $spacing;
  width: 100%;
  height: 604px;
  display: flex;
  justify-content: center;
  flex-direction: row;

  .blog-author-img {
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 15px;
    margin-right: 9px;
  }

  .group-blogs {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap: 32px;

    .blog-wrap {
      width: 286px;
      height: 286px;
    }
  }
}
</style>
