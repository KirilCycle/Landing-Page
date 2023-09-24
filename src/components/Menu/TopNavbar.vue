<template>
  <div class="navbar-wrap">
    <div class="navbar">
      <div class="logo-container">
        <h3 class="logo-header">LOGO</h3>
      </div>
      <div class="content">
       <links-list></links-list>
        <div class="download-btn-wrap">
          <main-button class="download-btn">
            <p class="btn-text">Download</p>
          </main-button>

          <div class="download-list-wrap">
            <small-hover-list :items="downloadList"></small-hover-list>
          </div>
        </div>
        <div class="language-settings">
          <div class="language-settings-info">
            <p class="selected-lang">{{ this.selectedLeng }}</p>
            <div class="svg-arrow-wrap">
              <arrow-svg :h="24" :w="24" class="svg-arrow"></arrow-svg>
            </div>
          </div>
          <div class="language-list-wrap">
            <small-hover-list :items="languageList"></small-hover-list>
          </div>
        </div>
      </div>
      <button @click="handleMenu" class="menu-btn">
        <span></span>
        <span></span>
      </button>
      <Teleport to="body">
          <mobile-menu :active="menuActive" @hide="handleMenu" ></mobile-menu>
      </Teleport>
    </div>
  </div>
</template>

<script>
import ArrowSvg from "../../svg/ArrowSvg.vue";
import SmallHoverList from "../Lists/SmallHoverList.vue";
import MobileMenu from "./MobileMenu.vue";
import LinksList from "./LinksList.vue";
export default {
  components: { SmallHoverList, ArrowSvg, MobileMenu,LinksList},
  name: "top-navbar",
  data() {
    return {
      pageslinklist: [
        {
          path: "/",
          title: "Home",
        },
        {
          path: "/about",
          title: "About",
        },
        {
          path: "/pricing",
          title: "Pricing",
        },
        {
          path: "/facts",
          title: "Facts",
        },
        {
          path: "/blog",
          title: "Blog",
        },
        {
          path: "/support",
          title: "Support",
        },
      ],
      downloadList: [
        {
          text: "App Store",
          handleClick: () => {
            alert("good");
          },
        },
        {
          text: "Google Play",
        },
      ],
      languageList: [
        {
          text: "Sverige",
          ico: "sweden.png",
          handleClick: () => {
            this.selectedLeng = "Svr";
          },
        },
        {
          text: "English",
          ico: "UK2.png",
          handleClick: () => {
            this.selectedLeng = "Eng";
          },
        },
      ],
      downoadListShow: false,
      selectedLeng: "Eng",
      menuActive: false
    };
  },
  methods: {
    showDownloadList() {
      this.downoadListShow = true; // Correct the variable name
    },
    handleMenu() {
      this.menuActive = !this.menuActive;
      console.log(this.menuActive, 'AAAAA')
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables.scss";



.navbar-wrap {
  width: 100%;
  height: 100px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  position: fixed;
  top: 0px;
  z-index: 100;
  background-color: #fff;
}

.navbar {
  max-width: 1240px;
  margin: 0% auto;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding-right: 20px;

  .download-btn-wrap {
    position: relative;
    margin-left: 9px;
    width: auto;
  }

  .download-list-wrap {
    visibility: hidden;
    width: 174px;
  }
  .download-btn-wrap:hover {
    .download-list-wrap {
      visibility: visible;
    }
  }
  .download-btn {
    padding: 12px 40px 12px 40px;
  }

  .btn-text {
    color: white;
    font-size: $font-sz-sm;
    font-weight: 500;
    line-height: 20px;
  }
}

.logo-container {
  .logo-header {
    font-family: "Montserrat", sans-serif;
    color: $purple1;
    font-weight: 700;
    font-size: $fz-3;
    line-height: $line-height-l;
  }
}

.link-list {
  flex-direction: row;
  display: flex;
}

.menu-text {
  font-family: "Montserrat", sans-serif;
  color: $dark-text;
  font-size: $font-sz-sm;
  font-weight: 400;
  margin-right: $spacing3;
  cursor: pointer;
}

.svg-arrow-wrap {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.svg-arrow {
  transition: transform 0.2s ease;
  transform: rotate(-90deg);
  cursor: pointer;
}

.language-settings:hover {
  .language-list-wrap {
    visibility: visible;
  }
  .svg-arrow {
    transform: rotate(0deg);
  }
}
.language-settings {
  position: relative;
  height: inherit;
  width: 50px;
  margin-left: 38px;

  .language-settings-info {
    height: 39.5px;
    display: flex;
    align-items: center;
  }

  .language-list-wrap {
    display: block;
    width: 145px;
    position: absolute;
    visibility: hidden;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1549px) {
    .language-list-wrap {
      position: absolute;
      right: 0%;
      left: none;
    }
  }

  .selected-lang {
    margin-right: 0px;
    display: block;
    @extend .menu-text;
  }
}

.menu-btn {
  display: none;
  cursor: pointer;
  width: 46px;
  height: 46px;
  border-radius: 5px;
  justify-content: center;
  flex-direction: column;
  align-items: center;


  span {
    width: 36px;
    height: 4px;
    background-color: $purple1;
    border-radius: 2px;
  }

  span +  span {
    margin-top: 8px;
  }
}


@media (max-width: 1000px) {
  .language-settings {
    margin-left: 30px;
  }
}

@media (max-width: 920px) {

  .navbar-wrap {
    height: 60px;
  }
  .content {
    display: none;
  }
  .menu-btn {
    display: flex;
  }

  .logo-container {
    .logo-header {
      font-size: 32px;
    }
  }
}
</style>
