<template>
    <div  @click="() => {this.$emit('hide')}" :class="active? 'menu-wrap active': 'menu-wrap'">
        <div @click.stop :class="active? 'menu second-active' : 'menu'" >
        </div>
    </div>
</template>

<script>
    export default {
        props: ['active']
    }
</script>

<style lang="scss" scoped>
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
    width: 310px;
    height: 100%;
    position: absolute;
    transform: translateX(100%);
    right: 0px;
    background-color: white;
    transition: transform 1s ease;
}

.active {
    background-color: #000000a2;
    pointer-events: all;
}

.second-active {
    transform: translateX(0%);
}



</style>