<script setup>
import { ref } from 'vue'
const props = defineProps({
  currentItem: Object,
  toggleModal: Function,
  prevItem: Function,
  nextItem: Function,
  images: Object,
  goToItem: Function,
  specialIndex: Number,
  thumbnailImg: Object,
  currentIndex: Number
})
const image = ref(null)
const lens = ref(null)
const preview = ref(null)
const handleMouseMove = (e) => {
  const x = e.clientX - image.value.offsetLeft
  const y = e.clientY - image.value.offsetTop

  const scale = 2.2 // Adjust the zoom scale as needed

  const offsetX = (x - 1000 / 2 / 6) * -scale + 500
  const offsetY = (y - 500 / 2 / 6) * -scale + 500

  lens.value.style.display = 'block'
  lens.value.style.left = x - 230 + 'px'
  lens.value.style.top = y - 120 + 'px'
  preview.value.style.display = 'block'
  preview.value.style.backgroundPosition = `${offsetX}px ${offsetY}px`
}

const handleMouseOut = () => {
  lens.value.style.display = 'none'
  preview.value.style.display = 'none'
}
</script>
<template>
  <div class="md:w-1/3 xs:w-screen bg-white md:ml-40 md:mt-9 xs:mt-6 relative h-[500px]">
    <div
      class="relative flex flex-col justify-center items-center md:w-64 xs:w-full h-full lg:-mt-2 xs:mt-10 xs:ml-0 sm:ml-0 md:mt-0 md:ml-1 lg:ml-28"
      @mousemove="handleMouseMove"
      @mouseout="handleMouseOut"
    >
      <span class="imageContainer">
        <img
          ref="image"
          :src="props.currentItem.src"
          :alt="currentItem.alt"
          @click="props.toggleModal"
          class="image h-full object-contain w-full md:w-10/12 lg:w-full xs:w-9/12 md:ml-6 cursor-pointer"
        />
        <span class="lens" ref="lens"></span>
      </span>
      <div class="w-full h-full relative top-22 left-52">
        <div
          :style="{ backgroundImage: `url('${props.currentItem.src}')` }"
          :alt="currentItem.alt"
          class="preview"
          ref="preview"
        ></div>
      </div>
    </div>
    <div class="absolute inset-y-2/4 left-0 flex gap-x-4 items-center">
      <div @click="props.prevItem" class="arrow left-arrow text-blue-900">&lt;</div>
    </div>
    <div class="absolute inset-y-2/4 right-0 flex gap-x-4 items-center">
      <div @click="props.nextItem" class="arrow right-arrow text-blue-900">&gt;</div>
    </div>
    <!-- Thumbnails -->
    <div class="flex justify-center gap-4 content-center -mt-16 xs:hidden md:flex">
      <img
        v-for="(item, index) in props.thumbnailImg"
        :key="index"
        @click="props.goToItem(index)"
        :src="item.src"
        class="w-12 h-12 bg-contain bg-no-repeat bg-center mt-6 border-2 border-gray-400 hover:border-blue-800"
        :class="{ 'border-2 border-orange-400': index === props.currentIndex }"
      />
    </div>
    <!-- Dots -->
    <div class="dot-container flex justify-center mt-9">
      <div
        v-for="(item, index) in props.images"
        :key="index"
        @click="props.goToItem(index)"
        :class="{
          dot: true,
          'bg-orange-500': index === props.currentIndex,
          triangle: index === props.specialIndex
        }"
      ></div>
    </div>
  </div>
</template>
<style>
.imageContainer {
  position: absolute;
  width: 500;
  height: 500px;
  overflow: hidden;
}

.preview {
  background-color: white;
  width: 40rem;
  height: 500px;
  border: 1px solid black;
  position: absolute;
  background-size: 100%, 100%;
  top: 2%;
  left: 80%;
  display: none;
  background-repeat: no-repeat;
  background-size: cover;
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
.arrow {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  color: #333;
}
.left-arrow {
  left: 0;
}

.right-arrow {
  right: 0;
}

.dot {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  border: 1px solid rgb(0, 0, 0);
  background-color: orangred;
  cursor: pointer;
}
.triangle {
  width: 0px;
  height: 0px;
  margin: 0 5px;
  border-style: solid;
  border-width: 7px 0 7px 10px;
  border-color: transparent transparent transparent #727272;
  transform: rotate(0deg);
}
</style>
