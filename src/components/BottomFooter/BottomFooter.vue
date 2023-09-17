<template>
  <div class="footer">
    <div class="footer-wrap">
      <div class="footer-content">
        <h3 class="footer-header">LOGO</h3>

        <ul class="links-list">
          <router-link class="item" :to="link.path" v-for="link in links" :key="link.path">
            {{ link.text }}
          </router-link>
        </ul>

        <ul class="social-media-list">
          <li><face-book-logo-svg></face-book-logo-svg></li>
          <li><insta-gram-svg></insta-gram-svg></li>
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
import InstaGramSvg from '@/svg/InstaGramSvg.vue';
import YouTubeSvg from '@/svg/YouTubeSvg.vue';
import PinterestSvg from '@/svg/PinterestSvg.vue';
export default {
  components: {FaceBookLogoSvg,InstaGramSvg, PinterestSvg,YouTubeSvg},
  data() {
     return {
      links: [
        {text: "About Us", path: '/about'},
        {text: 'Blog', path:'/blog'},
        {text: 'Support', path:'/support'},
        {text: 'Terms & Conditions', path: '/termsconditions'},
        {text: 'Privacy Policy', path: '/privacy'},
        {text: 'Cookies', path:'/cookies'}
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.footer {
  height: 302px;
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
      .footer-header {
        font-size: 40px;
        font-weight: 700;
        line-height: 49px;
        letter-spacing: 0em;
        color: white;
        text-align: left;
      }

      $col-gap: 36px;
      $col-w: 286px;

      .links-list {
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
          color: white;
          font-weight: 400;
        }
      }
      .social-media-list {
        width: 200px;
        position: relative;
        height: 32px;
        margin-left: 36px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        gap: 16px;

        li {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
}
</style>
