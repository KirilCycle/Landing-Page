<template>
  <div>
    <top-navbar></top-navbar>
    <router-view></router-view>
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import TopNavbar from "../src/components/Menu/TopNavbar.vue";
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
  font-size: $fz-1;
  font-weight: 700;
  color: $dark-text;
}

h2 {
  margin: 0%;
  font-size: $fz-2;
  font-weight: 700;
  color: $dark-text;
}

h3 {
  margin: 0%;
  font-weight: 700;
  color: $dark-text;
  font-size: $fz-3;
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


input[type="text"] {
  box-shadow: rgba(0, 0, 0, 0);
  box-shadow: none;
  appearance: none;
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
