<script setup>
import { ref } from 'vue'
const props = defineProps({
  modalVisible: Boolean,
  changeTab: Function,
  activeTab: String,
  toggleModal: Function,
  currentIndex: Number,
  currentItem: Object,
  images: Object,
  isMobile: Boolean,
  goToItem: Function,
  startTouch: Function,
  endTouch: Function,
  moveTouch: Function,
  content: Boolean
})
const magnifyingArea = ref(null)
const magnifyingImg = ref(null)
const handleClick = (event) => {
  const clientX = event.clientX - magnifyingArea.value.offsetLeft
  const clientY = event.clientY - magnifyingArea.value.offsetTop
  const mWidth = magnifyingArea.value.offsetWidth
  const mHeight = magnifyingArea.value.offsetHeight

  const transformedX = (clientX / mWidth) * 100
  const transformedY = (clientY / mHeight) * 100

  magnifyingImg.value.style.transform = `translate(-${transformedX}%, -${transformedY}%) scale(2)`

  // Add the mousemove event listener after the click
  window.addEventListener('mousemove', handleMouseMove)

  // Add the mouseleave event listener to reset the transformation when leaving the area
  magnifyingArea.value.addEventListener('mouseleave', handleMouseLeave, { once: true })
}

const handleMouseMove = (event) => {
  const clientX = event.clientX - magnifyingArea.value.offsetLeft
  const clientY = event.clientY - magnifyingArea.value.offsetTop
  const mWidth = magnifyingArea.value.offsetWidth
  const mHeight = magnifyingArea.value.offsetHeight

  const transformedX = (clientX / mWidth) * 100
  const transformedY = (clientY / mHeight) * 100

  magnifyingImg.value.style.transform = `translate(-${transformedX}%, -${transformedY}%) scale(2)`
}

const handleMouseLeave = () => {
  magnifyingImg.value.style.transform = 'translate(-50%, -50%) scale(1)'
  window.removeEventListener('mousemove', handleMouseMove)
}
</script>
<template>
  <!-- Mobile Modal -->
  <div
    v-if="props.isMobile && props.modalVisible"
    class="fixed inset-0 overflow-hidden w-screen h-full z-50"
  >
    <div
      class="w-screen h-full bg-white border overflow-y-auto z-50 rounded-lg flex flex-col gap-36 justify-center items-center"
    >
      <button
        @click="props.toggleModal"
        class="absolute top-4 left-6 text-md font-poppins font-semibold rounded-md text-xs border shadow-sm py-2 px-3 text-gray-700"
      >
        Back
      </button>
      <div
        v-if="props.activeTab === 'images'"
        class="flex justify-center items-center w-4/5 h-screen relative overflow-y-scroll select-none"
        ref="props.content"
      >
        <img
          v-if="props.currentIndex !== undefined"
          :src="props.images[props.currentIndex].src"
          :alt="props.images[props.currentIndex].alt"
          class="w-48 h-64 mt-36 snap-x"
          @touchstart="props.startTouch"
          @touchmove="props.moveTouch"
          @touchend="props.endTouch"
        />
      </div>
      <div class="flex justify-center gap-8 content-center">
        <img
          v-for="(item, index) in props.images"
          :key="index"
          @click="props.goToItem(index)"
          :src="item.src"
          class="w-12 h-12 bg-contain bg-no-repeat bg-center mt-18 border"
          :class="{ 'border-2 border-blue-500': index === props.currentIndex }"
        />
      </div>
    </div>
  </div>
  <!-- Desktop Modal -->
  <div
    v-else-if="props.modalVisible"
    class="modal bg-white border fixed inset-3 left-10 overflow-hidden z-50 rounded-lg"
  >
    <div class="flex gap-4 pt-8 pl-16 space relative">
      <div class="flex gap-6 pb-3">
        <button
          @click="props.changeTab('videos')"
          :class="{ underline: props.activeTab === 'videos' }"
          class="decoration-orange-400 underline-offset-14 font-poppins font-normal"
        >
          VIDEOS
        </button>
        <button
          @click="props.changeTab('images')"
          :class="{ underline: props.activeTab === 'images' }"
          class="decoration-orange-400 underline-offset-14 font-poppins font-normal"
        >
          IMAGES
        </button>
      </div>
      <button
        @click="props.toggleModal"
        class="absolute bottom-30 left-85 text-md font-bold text-gray-900 hover:text-gray-600"
      >
        &#x2715;
      </button>
    </div>
    <hr class="-mt-1 border w-11/12 ml-10 mb-2" />
    <!-- Video Content -->
    <div class="flex flex-row" v-if="props.activeTab === 'videos'">
      <div class="flex flex-col overflow-y-scroll w-9/12 items-center mt-4 ml-3">
        <video class="w-62 h-full" controls>
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
    <!-- Images Content -->
    <div class="flex flex-row">
      <div class="w-4/5 h-auto flex justify-center items-center">
        <div
          v-if="props.activeTab === 'images'"
          class="items-center w-full h-full overflow-hidden"
          ref="magnifyingArea"
          @click="handleClick"
        >
          <img
            v-if="props.currentIndex"
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
            v-for="(item, index) in props.images"
            :key="index"
            @click="props.goToItem(index)"
            class="w-12 h-12 bg-contain bg-no-repeat bg-center mt-28 border border-gray-400"
            :class="{ 'border-2 border-orange-400': index === props.currentIndex }"
            :style="{ backgroundImage: `url(${item.src})` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.modal {
  width: 95%;
  height: 80%;
  margin: 0 auto;
}
</style>
