<template>
  <div class="navbar-wrap">
    <div class="navbar">
      <div class="logo-container">
        <h3 class="logo-header">LOGO</h3>
      </div>
      <div class="content">
        <ul class="link-list">
          <router-link
            v-for="link in this.pageslinklist"
            :key="link.path"
            :to="link.path"
            class="menu-text"
          >
            {{ link.title }}
          </router-link>
        </ul>
        <div class="download-btn-wrap">
          <main-button class="download-btn">
            <p class="btn-text">Download</p>
          </main-button>

          <div class="sus">
            <small-hover-list :items="downloadList"></small-hover-list>
          </div>
        </div>
        <div class="language-settings">
          <div class="language-settings-info">
            <p class="selected-lang">{{this.selectedLeng}}</p>
            <div class="svg-arrow-wrap">
              <arrow-svg :h="24" :w="24" class="svg-arrow"></arrow-svg>
            </div>
          </div>
          <div class="language-list-wrap">
            <small-hover-list :items="languageList"></small-hover-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowSvg from "../../svg/ArrowSvg.vue";
import SmallHoverList from "../Lists/SmallHoverList.vue";
export default {
  components: { SmallHoverList, ArrowSvg },
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
          handleClick: () => { this.selectedLeng = 'Svr'}
        },
        {
          text: "English",
          ico: "UK2.png",
          handleClick: () => { this.selectedLeng = 'Eng'}
        },
      ],
      downoadListShow: false,
      selectedLeng: 'Eng',
    };
  },
  methods: {
    showDownloadList() {
    this.downoadListShow = true; // Correct the variable name
  }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables.scss";

.sus {
  visibility:hidden;
}
.sus:hover {
  visibility: visible;
}

.navbar-wrap {
  width: 100%;
  height: 100px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
}

.navbar {
  max-width:$max-content-wrap-width ;
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

  .download-btn-wrap {
    position: relative;
    width: auto;
  }

  .download-btn-wrap:hover {
    .sus {
      visibility: visible ;
    }
  }

  .download-btn-list {
    width: 100%;
  }

 

  .download-btn {
    padding: 12px 39.5px 12px 39.5px;
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
    font-size: $font-sz-l2;
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
  margin-left: $spacing3;

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

@media (max-width: 1100px) {
  .navbar-wrap {
    display: none;
  }
}

</style>
