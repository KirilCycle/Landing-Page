<template>
  <div class="blog-posts-wrap">
    <h2 class="blog-posts-header">Our blog posts</h2>
    <div class="decorative-line"></div>
    <div class="blogs-container">
      <div class="large-blog">
        <blog-item
          :selectedBlog="'blog-large'"
          :author="{
            name: 'BY TILDA LOFTIN',
          }"
          :date="'JUNE 25, 2021'"
          :src="'ReturnToRunning.jpg'"
          :title="'Return to running after pregnancy – Is your body strong enough for running?'"
        >
          <img class="blog-author-img" src="@/assets/Tilda.jpg" />
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
        <!-- <div class="blog-wrap"></div>
        <div class="blog-wrap"></div>
        <div class="blog-wrap"></div>
        <div class="blog-wrap"></div> -->
      </div>
    </div>
    <div class="view-more-wrap">
      <custom-router-link :to="'/Blogs'"
        >Like what you see? View more</custom-router-link
      >
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
  max-width: 604px;
  max-height: 604px;
  width: 50%;
  height: 100%;
  margin-right: 16px;
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

.blog-posts-wrap {
  max-width: 1239px;
  width: 100%;
  height: max-content;
  margin-top: 160px;
  box-sizing: border-box;
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
  height: max-content;
  display: flex;
  flex-direction: row;

  .blog-author-img {
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 15px;
    flex-shrink: 0;
    margin-right: 9px;
  }

  .group-blogs {
    width: 51%;
    align-items: center;
    max-width: 604px;
    margin-left: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 32px;
    column-gap: 32px;
    box-sizing: border-box;

    .blog-wrap {
      overflow: hidden;
      flex-shrink: 1;
      max-width: 286px;
      flex: 0 0 calc(50%);
      box-sizing: border-box;
    }
  }
}

@media (max-width: 1261px) {
  .blog-posts-wrap {
    padding-left: 10px;
    padding: 10px;
  }

  .blogs-container {
    .group-blogs {
      .blog-wrap {
        width: calc(47%);
        flex: none;
      }
    }
  }
}

@media (max-width: 1130px) {
  .blogs-container {
    .group-blogs {
      row-gap: 15px;
      column-gap: 15px;

      .blog-wrap {
        width: calc(48%);
        flex: none;
      }
    }
  }
}
@media (max-width: 970px) {
  .blogs-container {
    .group-blogs {
      margin-left: 5px;
      row-gap: 9px;
      column-gap: 9px;
    }
    .large-blog {
      margin-right: 5px;
    }
    


  }
}

@media (max-width: 770px) {
  .large-blog {
    max-width: 100%;
    width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0px;
  }
  .blogs-container {
    flex-direction: column;
    align-items: center;

    .group-blogs {
      margin-left: 0px;
      max-width: 100%;
      width: 100%;
      margin-top: 25px;

      .blog-wrap {
        width: 48%;
        max-width: 50%;
      }

    }
  }
}

@media (max-width: 600px) {
  .blog-posts-header {
    font-size: 45px;
  }
  .blogs-container {
    margin-top: 30px;
  }
}

@media (max-width: 400px) {
  .blog-posts-header {
    font-size: 35px;
  }
  .blogs-container {
    .group-blogs {
      column-gap: 8px;
      row-gap: 8px;
      .blog-wrap {
        width: 48%;
        flex: none;
      }
    }
  }
}

@media (max-width: 374px) {
  .blogs-container {
    flex-direction: column;
    justify-content: center;
    .group-blogs {
      column-gap: 8px;
      margin-top: 8px;
      display: flex;
      justify-content: center;
      .blog-wrap {
        width: 100%;
        max-width: 100%;
        max-height: 100%;
        flex: none;
      }
    }
  }
}
</style>
