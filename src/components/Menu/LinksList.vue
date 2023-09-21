<template>
  <ul class="link-list">
    <router-link
      v-for="link in this.pageslinklist"
      :key="link.path"
      :to="link.path"
      @click="() => {this.$emit('close')}"
      class="menu-text"
    >
      {{ link.title }}
    </router-link>
  </ul>
</template>

<script>
export default {
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
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables";
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

@media (max-width: 920px) {
  .link-list {
    box-sizing: border-box;
    padding: 20px;
    flex-direction: column;
  }
  .menu-text {
    font-size: $font-sx-m;
    margin-right: 0px;
    margin-top: 20px;
  }
}
</style>
