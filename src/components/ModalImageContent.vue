<script setup>
import { useZoom } from './useZoom'
const props = defineProps({
  thumbnailImg: Object,
  goToItem: Function,
  currentItem: Object,
  activeTab: String
})
const { magnifyingArea, magnifyingImg, handleClick } = useZoom()
</script>
<template>
  <div class="flex flex-row">
    <div class="w-4/5 h-auto flex justify-center items-center">
      <div
        v-if="props.activeTab === 'images'"
        class="items-center w-full h-full overflow-hidden"
        ref="magnifyingArea"
        @click="handleClick"
      >
        <img
          :src="props.currentItem.src"
          :alt="props.currentItem.alt"
          class="w-2/4 h-4/5 object-contain absolute left-1/3 top-80 m-2 -translate-y-1/2 -translate-x-1/2"
          ref="magnifyingImg"
        />
      </div>
    </div>
    <div class="w-1/4 h-full">
      <div class="mt-5">
        <p
          class="text-md break-normal max-w-10 mr-20 font-poopins font-regular tracking-wide leading-tight"
        >
          Samsung Galaxy S23+ 5G Dual SIM Android Mobile Phone, 256GB, SIM Free Smartphone, Green,
          3Y Extended Manufacturer Warranty (UK Version)
        </p>
      </div>
      <div class="flex flex-col gap-3 mt-4">
        <p class="text-xs text-gray-400 font-poppins font-thin">Colour: Lavender</p>
        <p class="text-xs text-gray-400 font-poppins font-thin">Size Name: 512GB</p>
        <p class="text-xs text-gray-400 font-poppins font-thin">Style Name: S23 Ultra</p>
        <p class="text-xs text-gray-400 font-poppins font-thin">Pattern Name: Smartphone only</p>
      </div>
      <div class="flex gap-4 content-center -mt-16">
        <div
          v-for="(item, index) in props.thumbnailImg"
          :key="index"
          @click="props.goToItem(index)"
          class="w-12 h-12 bg-contain bg-no-repeat bg-center mt-28 border-2 border-gray-400 hover:border-blue-800"
          :class="{ 'border-2 border-orange-400': index === props.currentIndex }"
          :style="{ backgroundImage: `url(${item.src})` }"
        ></div>
      </div>
    </div>
  </div>
</template>
