<template>
    <span :style="{bottom,left,right }"  :class="center?'line center' : 'line' ">
    </span>
</template>

<script>
    export default {
        name:'decorative-line',
        props: ['center','bottom','left','rigth']
    }
</script>

<style lang="scss" scoped>
.line {
    background-color:  rgba(255, 45, 85, 1);
    display: block; 
    width: 46px;
    height: 3px;
    position: absolute;
    bottom: -21px;

}

.center {
    left: 50%;
    transform: translateX(-50%);
}
</style>