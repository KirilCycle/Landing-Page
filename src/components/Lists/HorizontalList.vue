<template>
  <ul class="list">
    <li class="item" v-for="item in items" :key="item.title">
      <div class="ico-wrap">
        <component :is="item.component" />
      </div>
      <div class="text-wrap">
        <p class="title">{{ item.title }}</p>
        <p class="description">{{ item?.description }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["items"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.list {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
}

.item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 596px;
  height: 100%;

  .ico-wrap {
    width: 56px;
    flex-shrink: 0;
    height: 56px;
    border-radius: 27px;
    background-color: #fff;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text-wrap {
    display: flex;
    flex-direction: column;
    margin-left: $spacing-1;

    .title {
      font-size: $font-sz-l4;
      font-weight: 500;
      line-height: 39px;
      letter-spacing: 0em;
    }

    .description {
      font-size: $font-sz-sm;
      color: #443a5a;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      margin-top: 5px;
    }
  }
}

@media (max-width: 1115px) {
  .item + .item {
    margin-left: 40px;
  }
}

@media (max-width: 921px) {

  .item {
    justify-content:start;
  } 
  .item + .item {
    margin-left: 0px;
    margin-top: 50px;
  }
  .list {
    flex-direction: column;

    .text-wrap {
      margin-left: 10px;
      .title {
        font-size: $font-sz-l4 - 5;
        font-weight: 500;
        line-height: 33px;
      }

      .description {
        font-size: 15px;
        line-height: 28px;
      }
    }
  }
}

@media (max-width: 556px) {
  .item {
    .text-wrap {
      .title {
        font-size: $font-sz-l4 - 7;
        line-height: 32px;
      }
  
      .description {
        font-size: $font-sz-sm;
        line-height: 28px;
        margin-top: 5px;
      }
    }
  }
}
@media (max-width: 456px) {
  .item {
    .text-wrap {
      .title {
        font-size: $font-sz-l4 - 10;
        line-height: 27px;
      }
  
      .description {
        font-size: $font-sz-sm - 3;
        line-height: 23px;
        margin-top: 5px;
      }
    }
  }
}


</style>
