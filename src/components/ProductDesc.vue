<template>
  <main class="w-full">
    <div class="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-32">
      <div class="w-27 bg-white ml-72 mt-9 relative h-[500px] overflow-hidden">
        <img
          :src="currentItem.src"
          :alt="currentItem.alt"
          @click="openModal"
          class="w-1/2 h-full object-contain ml-24 cursor-pointer"
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
    </div>
    <div
      v-if="modalVisible"
      class="modal bg-white border-2 border-black fixed inset-20 left-12 overflow-y-auto z-50 rounded-lg"
    >
      <div class="flex gap-4 pt-8 pl-16 space relative">
        <div class="flex gap-6 pb-3">
          <button
            class="underline decoration-orange-400 underline-offset-14 font-poppins font-normal"
          >
            VIDEOS
          </button>
          <button
            class="underline decoration-orange-400 underline-offset-14 font-poppins font-normal"
          >
            IMAGES
          </button>
        </div>
        <button
          @click="closeModal"
          class="absolute bottom-30 left-85 text-md font-bold text-gray-900 hover:text-gray-600"
        >
          &#x2715;
        </button>
      </div>
      <hr class="-mt-1 border w-11/12 ml-10 mb-2" />
      <div class="flex flex-row">
        <div class="flex flex-col overflow-y-scroll w-9/12 items-center mt-4 ml-3">
          <video class="w-62 h-full" controls autoplay>
            <source src="/media/videos/productvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div class="w-70 h-12 bg-gray-100 flex flex-row justify-end">
            <button>
              <img
                src="/media/icons/share-icon.svg"
                alt="share icon"
                aria-label="Click to share video"
                class="w-5 mr-3 mt-2"
              />
            </button>
          </div>
          <div class="self-start ml-48">
            <h1 class="font-poopins font-regular text-lg mt-2 mb-2">Samsung Galaxy S23+</h1>
            <h2 class="text-xs">Samsung Mobile (UK) - MI</h2>
          </div>
        </div>
        <div class="w-2/6 flex flex-col">
          <p
            class="border-0 rounded bg-gray-100 text-xs font-poppins font-semibold px-4 py-2 ml-2 mt-4 mb-3 w-4/5"
          >
            Videos for this product
          </p>
          <div class="flex flex-row ml-6">
            <img
              src="/media/assets/video-thumbnail.png"
              alt="video thumbnail"
              class="w-32 border-2 rounded border-yellow-500"
            />
            <div class="ml-2">
              <p class="text-xs">Samsung Galaxy S23+</p>
              <p class="text-xs">Samsung Mobile(UK) - MI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref, computed } from 'vue'

const items = [
  { type: 'image', src: '/media/assets/front.jpg', alt: 'Image 1' },
  { type: 'image', src: '/media/assets/dimension.jpg', alt: 'Image 2' },
  { type: 'image', src: '/media/assets/poster.jpg', alt: 'Image 3' },
  { type: 'video', src: '/media/assets/videothumbnail.jpg', alt: 'Video' }
]

let currentIndex = ref(0)
const modalVisible = ref(false)

const currentItem = computed(() => items[currentIndex.value])
const activeTab = ref('images')

const changeTab = (tab) => {
  activeTab.value = tab
}
const nextItem = () => {
  currentIndex.value = (currentIndex.value + 1) % items.length
}

const prevItem = () => {
  currentIndex.value = (currentIndex.value - 1 + items.length) % items.length
}

const goToItem = (index) => {
  currentIndex.value = index
}

const openModal = () => {
  if (currentItem.value.type === 'video') {
    // Open modal only for video type
    modalVisible.value = true
  }
}

const closeModal = () => {
  modalVisible.value = false
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
  border: 2px solid black;
  background-color: #ccc;
  cursor: pointer;
}
.modal {
  width: 95%;
  height: 78.3%;
  margin: 0 auto;
}
</style>
