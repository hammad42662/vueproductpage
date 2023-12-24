<script setup>
import ModalImageContent from './ModalImageContent.vue'
import ModalVideoContent from './ModalVideoContent.vue'

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
  thumbnailImg: Object,
  content: Boolean
})
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
        class="flex justify-center items-center w-4/5 h-screen relative overflow-y-scroll select-none"
        ref="props.content"
        @touchstart="props.startTouch"
        @touchmove="props.moveTouch"
        @touchend="props.endTouch"
      >
        <img
          v-if="props.currentIndex !== undefined"
          :src="props.images[props.currentIndex].src"
          :alt="props.images[props.currentIndex].alt"
          class="w-48 h-64 mt-36 snap-x"
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
  
    <ModalVideoContent :activeTab="props.activeTab" />
 
    <ModalImageContent
      :thumbnailImg="props.thumbnailImg"
      :goToItem="props.goToItem"
      :currentItem="props.currentItem"
      :activeTab="props.activeTab"
    />
  </div>
</template>
<style>
.modal {
  width: 95%;
  height: 80%;
  margin: 0 auto;
}
</style>
