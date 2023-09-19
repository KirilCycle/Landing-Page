<template>
  <div class="info-block-wrap">
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

.info-block-wrap {
  margin-top: 160px;
  max-width: 1237px;
  height: min-content;
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
}

.header {
  text-align: center;
}

.short-description {
  margin-top: $spacing3;
  font-size: $font-sz-l4;
  text-align: center;
  color: $light-text;
  position: relative;
  line-height: 39px;
}

.list-wrap {
  min-height: 95px;
  margin-top: 84px;
  width: 100%;
}

@media (max-width: 1215px) {
  .info-block-wrap {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (max-width: 921px) {
  .header {
    font-size: 45px;
  }

  .list-wrap {
    margin-top: 60px;
  }

  .short-description {
    font-size: $font-sz-l4 - 5;
  }
}

@media (max-width: 556px) {
  .header {
    font-size: 35px;
  }

  .short-description {
    font-size: $font-sz-l4 - 10;
    line-height: 20px;
  }
}

@media (max-width: 456px) {
  .info-block-wrap {
    margin-top: 0px;
  }
  .header {
    font-size: 27px;
    line-height: 26px;
  }

  .short-description {
    line-height: 23px;
    margin-top: 7px;
    font-size: $font-sz-l4 - 11;
  }
}



</style>
