<template>
  <div class="footer">
    <div class="footer-wrap">
      <div class="footer-content">
        <h3 class="footer-header">LOGO</h3>

        <ul class="links-list-footer">
          <router-link
            class="item"
            :to="link.path"
            v-for="link in links"
            :key="link.path"
          >
            {{ link.text }}
          </router-link>
        </ul>

        <ul class="social-media-list">
          <li>
            <face-book-logo-svg></face-book-logo-svg>
          </li>
          <li>
            <insta-gram-svg></insta-gram-svg>
          </li>
          <li>
            <you-tube-svg></you-tube-svg>
          </li>
          <li>
            <pinterest-svg></pinterest-svg>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import FaceBookLogoSvg from "@/svg/FaceBookLogoSvg.vue";
import InstaGramSvg from "@/svg/InstaGramSvg.vue";
import YouTubeSvg from "@/svg/YouTubeSvg.vue";
import PinterestSvg from "@/svg/PinterestSvg.vue";
export default {
  components: { FaceBookLogoSvg, InstaGramSvg, PinterestSvg, YouTubeSvg },
  data() {
    return {
      links: [
        { text: "About Us", path: "/about" },
        { text: "Blog", path: "/blog" },
        { text: "Support", path: "/support" },
        { text: "Terms & Conditions", path: "/termsconditions" },
        { text: "Privacy Policy", path: "/privacy" },
        { text: "Cookies", path: "/cookies" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables";
$col-gap: 36px;
$col-w: 286px;

.footer {
  height: 302px;
  max-width: 100%;
  overflow: hidden;
  width: 100%;
  background: rgba(66, 60, 78, 1);
  box-sizing: border-box;

  .footer-wrap {
    max-width: 1242px;
    box-sizing: border-box;
    padding: 2px;
    height: 100%;
    margin: 0% auto;

    .footer-content {
      display: flex;
      flex-direction: row;
      margin-top: 80px;
    }
  }
}
.footer-header {
  font-size: 40px;
  font-weight: 700;
  line-height: 49px;
  letter-spacing: 0em;
  color: white;
  text-align: left;
}
.links-list-footer {
  margin-left: 92px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  flex-direction: column;
  font-size: $spacing3;
  height: 150px;
  column-gap: $col-gap;
  width: $col-gap + $col-w * 2;
  column-count: 2;
  .item {
    width: $col-w;
    background-color: rgba(0, 128, 0, 0);
    line-height: 50px;
    position: relative;
    flex-wrap: nowrap;
    color: white;
    font-weight: 400;
  }
}
.social-media-list {
  width: max-content;
  position: relative;
  height: 33px;
  display: flex;
  align-items: center;
  margin-left: 36px;
  justify-content: space;
  flex-direction: row;

  li {
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  li + li {
    margin-left: 16px;
  }
}

@media (max-width: 1260px) {
  .footer {
    padding-left: 20px;
    padding-right: 20px;

    .footer-wrap {
      .footer-content {
        justify-content: space-between;
        margin-top: 40px;
        .links-list {
          margin-left: 90px;
        }
      }
    }
  }
}
@media (max-width: 1000px) {
  .links-list-footer {
    margin-left: 40px;
    max-width: 400px;
    column-gap: 10px;
    .item {
      width: max-content;
    }
  }
}
@media (max-width: 890px) {
  .links-list-footer {
    max-width: 350px;
    height: 200px;
    .item {
      font-size: 20px;
    }
  }
}
@media (max-width: 742px) {
  .footer {
    padding-left: 15px;
    padding-right: 15px;
  }
  .footer-header {
    display: none;
  }
  .links-list-footer {
    margin-left: 0px;
    width: 100%;
    max-width: 100%;
    height: 180px;
  }
  .social-media-list {
    margin-left: 0px;
  }
}
@media (max-width: 590px) {
  .footer {
    .footer-wrap {
      .footer-content {
        flex-direction: column;
      }
    }
  }
}
@media (max-width: 360px) {
  .links-list-footer {
    max-width: 300px;
    height: 200px;
    .item {
      font-size: 16px;
      height: 30px;
    }
  }
}
</style>
