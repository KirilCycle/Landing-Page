<template>
  <div class="wrap">
    <h2 class="header">How does it work ?</h2>
    <p class="short-description">
      Easy, fun & essential training for moms
      <decorative-line :center="true" />
    </p>
    <div class="list-wrap">
      <horizontal-list :items="listItems" />
    </div>
  </div>
</template>

<script>
import HorizontalList from "../../../../components/Lists/HorizontalList.vue";
export default {
  components: { HorizontalList },
  data() {
    return {
      listItems: [
        {
          title: "Browse exercises",
          description: `Browse over 100 exercises with a video or picture and a description.`,
          component: "mag-glass",
        },
        {
          title: "Create timeline",
          description:
            "Take pictures along the way during and after the pregnancy to see the transformation.",
          component: "time-line",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.wrap {
  margin-top: 160px;
  max-width: 1237px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.short-description {
  margin-top: $spacing3;
  font-size: $font-sz-l4;
  color: $light-text;
  position: relative;
  line-height: 39px;
}

.list-wrap {
  height: 95px;
  margin-top: 84px;
  width: 100%;
}
</style>
