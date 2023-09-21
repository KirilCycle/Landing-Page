<template>
  <div :class="selectedBlog">
    <shadow-image :settings="{ src: src }">
      <template v-slot:text-info>
        <div class="blog-text-wrap">
          <h5 class="blog-h5">{{ title }}</h5>
          <div class="blog-info-container">
            <div class="author-info" v-if="author">
              <slot> </slot>
              <p class="blog-text">
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
  props: ["src", "title", "date", "author", "selectedBlog"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

%blog-pattern {
  cursor: pointer;
}

.blog-large {
  max-width: 604px;
  max-height: 604px;

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

  .blog-text-wrap {
    padding: 32px;

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
  max-width: 286px;
  max-height: 286px;

  .blog-h5 {
    font-size: $font-sx-m;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    color: white;
    text-align: left;
    margin-bottom: 5px;
  }
  .blog-text-wrap {
    padding: 16px;

    .blog-info-container {
      .blog-text {
        font-weight: 400;
        line-height: 28px;
        color: rgba(255, 255, 255, 1);
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }
}

@media (max-width: 1040px) and (min-width: 970px) {
  .blog-medium {
    .blog-h5 {
      font-size: $font-sx-m - 5;
      line-height: 25px;
    }
  }
}



@media (max-width: 770px) {
  .blog-medium {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }
  .blog-large {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 620px) {
  .blog-medium {
    .blog-text-wrap {
      padding: 10px;
    }
    .blog-h5 {
      font-size: $font-sx-m - 3;
      line-height: 27px;
    }
  }
  .blog-large {
    .blog-text-wrap {
      padding: 16px;
    }
  }
}

@media (max-width: 450px) {
  .blog-medium {
    .blog-text-wrap {
      padding: 10px;
    }
    .blog-h5 {
      font-size: $font-sx-m - 7;
      line-height: 22px;
    }
  }
  .blog-large {
    .blog-h5 {
      font-size: $font-sx-m;
      line-height: 33px;
    }
  }
}

@media (max-width: 374px) {
  .blog-medium {
    max-width: 100%;
    max-height: 100%;

    .blog-h5 {
      font-size: $font-sx-m;
      line-height: $line-height-5;
    }

    .blog-text-wrap {
      padding: 20px;
    }
  }
  .blog-large {
    .blog-text-wrap {
      padding: 12px;

      .blog-info-container {
        .blog-text {
          font-size: 14px;
        }
      }
    }
    .blog-h5 {
      font-size: $font-sx-m;
      line-height: $line-height-5;
    }
  }
}
</style>
