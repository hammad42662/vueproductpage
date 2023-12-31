<script setup>
import { useImageZoom } from './useImageZoom'
const props = defineProps({
  currentItem: Object,
  toggleModal: Function,
  prevItem: Function,
  nextItem: Function,
  images: Object,
  goToItem: Function,
  specialIndex: Number,
  thumbnailImg: Object,
  isDesktop: Boolean,
  currentIndex: Number
})

const { image, lens, preview, handleMouseMove, handleMouseOut } = useImageZoom()
</script>
<template>
  <section
    class="w-2/4 md:w-2/4 xs:w-full md:h-full xs:h-full flex flex-col items-center justify-start relative"
  >
    <div class="bg-white relative md:w-3/5 md:h-105 xs:w-full xs:h-full md:mr-30 xs:mr-0">
      <div class="w-full h-full flex justify-center items-center flex-col gap-19 overflow-hidden">
        <img
          ref="image"
          :src="props.currentItem.src"
          :alt="currentItem.alt"
          @click="props.toggleModal"
          @mousemove="handleMouseMove"
          @mouseout="handleMouseOut"
          class="md:w-2/5 xs:w-6/12 block mx-auto"
        />
        <span v-if="props.isDesktop" class="lens" ref="lens"></span>
        <div class="absolute inset-y-2/4 left-0 flex gap-x-4 items-center">
          <div @click="props.prevItem" class="arrow left-arrow text-blue-900">&lt;</div>
        </div>
        <div class="absolute inset-y-2/4 right-0 flex gap-x-4 items-center">
          <div @click="props.nextItem" class="arrow right-arrow text-blue-900">&gt;</div>
        </div>
      </div>
      <!-- Zoom preview -->
      <div class="w-full h-full md:block xs:hidden sm:hidden">
        <div
          :style="{ backgroundImage: `url('${props.currentItem.src}')` }"
          :alt="props.currentItem.alt"
          class="preview"
          ref="preview"
        ></div>
      </div>
    </div>
    <!-- Thumbnails -->
    <div
      class="flex relative justify-center gap-4 content-center xs:hidden md:flex w-3/5 bg-white cursor-pointer"
    >
      <img
        v-for="(item, index) in props.thumbnailImg"
        :key="index"
        @click="props.goToItem(index)"
        :src="item.src"
        class="w-1/12 block mt-6 hover:border-blue-800"
        :class="{ 'border-2 border-orange-400': index === props.currentIndex }"
      />
    </div>
    <!-- Dots -->
    <div class="dot-container relative flex justify-center mt-9">
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
  </section>
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
  width: 50rem;
  height: 50rem;
  border: 1px solid black;
  position: absolute;
  background-size: 800%, 800%;
  top: -15%;
  left: 130%;
  display: none;
  background-repeat: no-repeat;
  background-size: cover;
}
.lens {
  width: 150px;
  height: 150px;
  background: rgba(37, 166, 226, 0.4);
  position: absolute;
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
