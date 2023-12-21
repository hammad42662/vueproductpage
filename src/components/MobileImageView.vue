<!-- <script setup>
const lens = document.getElementById('lens')
const image = document.getElementById('image')
const preview = document.getElementById('preview')

image.addEventListener('mousemove', function (e) {
  const x = e.clientX - e.target.offsetLeft
  const y = e.clientY - e.target.offsetTop
  lens.style.display = 'block'
  lens.value.style.left = x - 230 + 'px'
  lens.value.style.top = y - 120 + 'px'
  preview.style.backgroundPosition =
    (x - 500 / 2 / 6) * -6 + 'px' + (y - 500 / 2 / 6) + 250 * -6 + 'px'
})
img.addEventListener('mouseout', function () {
  lens.style.display = 'none'
})
</script>
<template>
  <div
    class="flex flex-col justify-center items-center md:w-64 xs:w-full h-full lg:-mt-2 xs:mt-10 xs:ml-0 sm:ml-0 md:mt-0 md:ml-1 lg:ml-28"
  >
    <span>
      <img
        id="image"
        :src="props.currentItem.src"
        :alt="currentItem.alt"
        @click="props.toggleModal"
        class="h-full object-contain w-full md:w-10/12 lg:w-full xs:w-9/12 md:ml-6 cursor-pointer"
      />
      <span id="lens"></span>
    </span>
    <div id="preview"></div>
  </div>
</template>
<style>
.imageContainer {
  width: 500;
  height: 500px;
  border: 1px solid black;
  overflow: hidden;
}
.img :hover + .preview {
  display: block;
}
.preview {
  position: absolute;
  background-size: 600%, 600%;
  top: 50%;
  left: 53%;
  transform: translateY(50%);
  display: none;
}
.lens {
  width: 150px;
  height: 150px;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  border: 3px solid black;
  transform: translate(-50%, -50%);
  pointer-events: none;
  display: none;
}
</style> -->
