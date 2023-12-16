<template>
  <main class="w-full">
    <div class="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-32">
      <div class="w-27 bg-white ml-72 mt-9 relative h-[500px] overflow-hidden">
        <img
          :src="currentItem.src"
          :alt="currentItem.alt"
          class="w-1/2 h-full object-contain ml-24"
        />
        <div class="absolute inset-y-2/4 left-0 flex gap-x-4 items-center">
          <div @click="prevItem" class="arrow left-arrow text-blue-900">&lt;</div>
        </div>
        <div class="absolute inset-y-2/4 right-0 flex gap-x-4 items-center">
          <div @click="nextItem" class="arrow right-arrow text-blue-900">&gt;</div>
        </div>
        <!-- Thumbnails -->
        <div class="thumbnail-container flex justify-center gap-8 content-center -mt-16">
          <div
            v-for="(item, index) in items"
            :key="index"
            @click="goToItem(index)"
            class="thumbnail"
            :class="{ 'border-2 border-blue-500': index === currentIndex }"
            :style="{ backgroundImage: `url(${item.src})` }"
          ></div>
        </div>
        <!-- Dots -->
        <div class="dot-container flex justify-center">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="dot"
            :class="{ 'bg-orange-500': index === currentIndex }"
          ></div>
        </div>
      </div>
      <div class="mt-10">
        <div class="flex gap-80 mb-2">
          <p class="text-gray-400 font-medium font-poppins">SAMSUNG</p>
          <p class="text-green-700 font-medium font-poppins">Hurry Limited Stock</p>
        </div>
        <div class="flex flex-col gap-2 mb-4">
          <h1 class="text-2xl font-medium font-poppins">Samsung Galaxy S23 Plus 5G</h1>
          <p class="text-xl font-medium font-poppins">£880.00</p>
        </div>
        <hr class="border-2 border-gray-300 my-2" />
        <div class="flex flex-col gap-4">
          <p class="font-light font-poppins">
            <span class="font-medium font-poppins">Sim:</span> DUAL SIM
          </p>
          <p class="font-light font-poppins">
            <span class="font-medium font-poppins">Condition:</span> LIKE NEW
          </p>
          <p class="font-light font-poppins">
            <span class="font-medium font-poppins">Colour:</span> LAVENDAR
          </p>
          <p class="font-light font-poppins">
            <span class="font-medium font-poppins">Network:</span> UNLOCKED
          </p>
          <p class="font-light font-poppins">
            <span class="font-medium font-poppins">Storage:</span> 512GB
          </p>
        </div>
        <hr class="border-1 border-gray-300 my-2" />
        <div class="flex flex-row items-center gap-1 mt-5 mb-5">
          <button class="bg-transparent text-5xl text-gray-500">-</button>
          <span class="bg-gray-200 px-7 py-2 text-blue-500 font-medium font-poppins">1</span>
          <button class="bg-transparent text-4xl text-gray-500">+</button>
        </div>
        <button class="bg-yellow-400 px-52 py-2 text-lg font-medium font-poppins rounded-sm">
          Add To Basket
        </button>
      </div>
      <!-- <- Modal-->
      <div class="hidden w-full h-3/5 absolute bg-slate-300">qwq</div>
    </div>
  </main>
</template>
<script setup>
import { ref, computed } from 'vue'

const items = [
  { type: 'image', src: '/media/assets/front.jpg', alt: 'Image 1' },
  { type: 'image', src: '/media/assets/dimension.jpg', alt: 'Image 2' },
  { type: 'image', src: '/media/assets/poster.jpg', alt: 'Image 3' },
  { type: 'video', src: '/media/assets/videoimage.png', alt: 'Video' }
]

let currentIndex = ref(0)

const currentItem = computed(() => items[currentIndex.value])

const nextItem = () => {
  currentIndex.value = (currentIndex.value + 1) % items.length
}

const prevItem = () => {
  currentIndex.value = (currentIndex.value - 1 + items.length) % items.length
}

const goToItem = (index) => {
  currentIndex.value = index
}
</script>

<style scoped>
/* Add your custom styles here */
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

.thumbnail {
  width: 50px;
  height: 80px;
  cursor: pointer;
  background-size: cover; /* Adjust as needed */
  background-position: center;
}

.dot {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
}
</style>
