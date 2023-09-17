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
    height: 100vh;
    z-index: 300;
    top: 0px;
    left: 0px;
    position: fixed;
    z-index: -20;
    background-color: #00000000;
}
.menu {
    width: 500px;
    height: 100%;
    position: absolute;
    transform: translateX(100%);
    right: 0px;
    background-color: white;
}

.active {
    z-index: 300;
    background-color: #000000a2;
}

.second-active {
    transform: translateX(0%);
}



</style>