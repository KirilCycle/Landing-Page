<template>
    <div class="image-wrap">
        <div class="bloor"></div>
        <img class="image" :src="require(`@/assets/${settings?.src }`)">
        <div class="right-top-slot-wrap">
            <slot name="right-top"></slot>
        </div>
        <div class="info-block">
            <slot name="text-info">

            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "shadow-image",
        props:['settings']
    }
</script>

<style lang="scss" scoped>
@import   '@/assets/variables';
.image {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.image-wrap {
    height: 100%;
    overflow: hidden;
    border-radius: $radius3;
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
}

.image-wrap + .image-wrap {
    margin-left: 10px;
}

.right-top-slot-wrap {
    position: absolute;
    right: 0px;
    top: 0px;
}
.info-block {
    position: absolute;
    left: 0px;
    bottom: 0px;
    height: max-content;
    width: 100%;
}


.bloor {
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 98.77%);
}



</style>