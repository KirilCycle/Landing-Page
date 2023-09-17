<template>
  <div :class="selectedBlog">
    <shadow-image :settings="{ src: src }">
      <template v-slot:text-info>
        <div class="blog-text-wrap">
          <h5 class="blog-h5">{{ title }}</h5>
          <div class="blog-info-container">
            <div class="author-info" v-if="author">
              <slot> </slot>
              <p :style="{ fontSize: fontSize }" class="blog-text">
                {{ author.name }}
              </p>
            </div>
            <p class="blog-text">{{ date }}</p>
          </div>
        </div>
      </template>
    </shadow-image>
  </div>
</template>

<script>
export default {
  props: ["src", "title", "date", "author", "fontSize", "selectedBlog"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.blog-large {
  width: 604px;
  height: 604px;

  .blog-text-wrap {
    padding: 32px;

    .blog-h5 {
      font-size: $font-sx-m;
      font-weight: 700;
      line-height: 39px;
      letter-spacing: 0em;
      color: white;
      text-align: left;
      margin-bottom: 16px;
      font-size: 32px;
    }

    .blog-info-container {
      display: flex;
      align-items: center;
      flex-direction: row;

      .blog-text {
        font-weight: 400;
        line-height: 28px;
        color: rgba(255, 255, 255, 1);
        letter-spacing: 0em;
        text-align: left;
      }

      .author-info {
        display: flex;
        align-items: center;
        margin-right: 16px;
      }
    }
  }
}

.blog-medium {
  width: 286px;
  height: 286px;
  .blog-text-wrap {
    padding: 16px;

    .blog-h5 {
      font-size: $font-sx-m;
      font-weight: 700;
      line-height: 29px;
      letter-spacing: 0em;
      color: white;
      text-align: left;
      margin-bottom: 5px;
    }

    .blog-info-container {
      .blog-text {
        font-weight: 400;
        line-height: 28px;
        color: rgba(255, 255, 255, 1);
        letter-spacing: 0em;
        text-align: left;
      }

      .author-info {
        background-color: green;
      }
    }
  }
}
</style>
