<template>
    <div  @click="() => {this.$emit('hide')}" :class="active? 'menu-wrap active': 'menu-wrap'">
        <div @click.stop :class="active? 'menu second-active' : 'menu'" >
            <links-list @close="() => {this.$emit('hide')}"></links-list>
            <button class="download-btn">Download</button>
        </div>
    </div>
</template>

<script>
import LinksList from './LinksList.vue'
    export default {
  components: { LinksList },
        props: ['active']
    }
</script>

<style lang="scss" scoped>
@import "@/assets/variables";
.menu-wrap {
    width: 100vw;
    pointer-events: none;
    height: 100%;
    z-index: 300;
    top: 0px;
    left: 0px;
    position: fixed;
    background-color: #00000000;
    transition: background-color 1s ease;
}
.menu {
    width: 90%;
    max-width: 600px;
    height: 120%;
    position: absolute;
    transform: translateX(120%);
    right: -20%;
    background-color: white;
    transition: transform 1s ease;

    .download-btn {
        font-family: "Montserrat", sans-serif;
        color: $dark-text;
        font-size: 24px;
        font-weight: 400;
        margin-right: $spacing3;
        cursor: pointer;
        margin-left: 20px;
        margin-top: 20px;
    }

}

.active {
    background-color: #000000a2;
    pointer-events: all;
}

.second-active {
    transform: translateX(0%);
}



</style>