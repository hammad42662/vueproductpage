<script setup>
const props = defineProps({
  currentItem: Object,
  toggleModal: Function,
  prevItem: Function,
  nextItem: Function,
  images: Object,
  goToItem: Function,
  specialIndex: Number,
  currentIndex: Number
})
</script>
<template>
  <div class="md:w-1/3 xs:w-screen bg-white md:ml-40 md:mt-9 xs:mt-6 relative h-[500px]">
    <div
      class="flex flex-col justify-center items-center md:w-64 xs:w-full h-full lg:-mt-2 xs:mt-10 xs:ml-0 sm:ml-0 md:mt-0 md:ml-1 lg:ml-28"
    >
      <img
        :src="props.currentItem.src"
        :alt="currentItem.alt"
        @click="props.toggleModal"
        class="h-full object-contain w-full md:w-10/12 lg:w-full xs:w-9/12 md:ml-6 cursor-pointer"
      />
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
        v-for="(item, index) in props.images"
        :key="index"
        @click="props.goToItem(index)"
        :src="item.src"
        class="w-12 h-12 bg-contain bg-no-repeat bg-center mt-6 border border-gray-400"
        :class="{ 'border-2 border-blue-500': index === props.currentIndex }"
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
