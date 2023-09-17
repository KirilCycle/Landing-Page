<template>
  <div>
    <top-navbar></top-navbar>
    <router-view></router-view>
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import TopNavbar from "../src/components/TopNavbar/TopNavbar.vue";
import BottomFooter from "./components/BottomFooter/BottomFooter.vue";
export default {
  components: { TopNavbar,BottomFooter },
  name: "App",
};
</script>

<style lang="scss">
@import "@/assets/variables";

#app {
  padding: 0px;
}

h1 {
  margin: 0%;
  font-size: $font-sz-l;
  font-weight: 700;
  color: $dark-text;
}

h2 {
  margin: 0%;
  font-size: $font-sz-l2;
  font-weight: 700;
  color: $dark-text;
}

h3 {
  margin: 0%;
  font-weight: 700;
  color: $dark-text;
  font-size: $font-sz-l3;
}

h4 {
  margin: 0%;
}

h5 {
  margin: 0%;
}

body {
  padding: 0%;
  margin: 0%;
  border: 0%;
  font-family: "Montserrat", sans-serif;
}

button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  line-height: normal;
  overflow: visible;
  cursor: pointer;
  text-align: left;
  text-decoration: none;
}
p {
  margin: 0%;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

li {
  text-decoration: none;
}
</style>
