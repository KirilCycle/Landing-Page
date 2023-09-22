<template>
  <svg
    id="sw-js-blob-svg"
    viewBox="0 0 100 100"
    width="1000px"
    height="1000px"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    <defs>
      <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
        <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
        <stop
          id="stop2"
          stop-color="rgba(251, 168, 31, 1)"
          offset="100%"
        ></stop>
      </linearGradient>
    </defs>
    <path
      fill="url(#sw-gradient)"
      d="M18.5,-33.8C23.1,-29.3,25.5,-22.7,28.6,-16.7C31.7,-10.7,35.6,-5.4,37.2,0.9C38.8,7.2,38.1,14.4,35.2,20.8C32.4,27.3,27.3,32.9,21.1,35.4C14.8,37.8,7.4,37.1,1,35.4C-5.5,33.7,-10.9,31.1,-16.3,28.1C-21.6,25.1,-26.7,21.8,-29.7,17C-32.7,12.3,-33.5,6.1,-34.6,-0.6C-35.7,-7.4,-37.1,-14.8,-33.9,-19.2C-30.8,-23.6,-23,-25,-16.6,-28.5C-10.1,-32,-5.1,-37.6,0.9,-39.1C6.9,-40.7,13.8,-38.3,18.5,-33.8Z"
      width="100%"
      height="100%"
      transform="translate(50 50)"
      stroke-width="0"
      style="transition: all 0.3s ease 0s"
    ></path>
  </svg>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
