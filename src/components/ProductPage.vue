<script setup>
import ProductModal from './ProductModal.vue'
import ProductDescription from './ProductDescription.vue'
import ProductImage from './ProductImage.vue'

import { ref, computed } from 'vue'
const images = [
  { type: 'image', src: '/media/assets/front.jpg', alt: 'Image 1' },
  { type: 'image', src: '/media/assets/dimension.jpg', alt: 'Image 2' },
  { type: 'image', src: '/media/assets/poster.jpg', alt: 'Image 3' },
  { type: 'video', src: '/media/assets/video-thumbnail.png', alt: 'video' }
]
let currentIndex = ref(0)
const currentItem = computed(() => images[currentIndex.value])
const activeTab = ref('videos')
const specialIndex = ref(3)
const modalVisible = ref(false)

const changeTab = (tab) => {
  activeTab.value = tab
}
const nextItem = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevItem = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

const goToItem = (index) => {
  currentIndex.value = index
}

const toggleModal = () => {
  modalVisible.value = !modalVisible.value

  // Set active tab based on the type of the current item
  if (currentItem.value.type === 'video') {
    activeTab.value = 'videos'
  } else {
    activeTab.value = 'images'
  }
}
</script>
<template>
  <main class="w-full">
    <div class="flex flex-row xl:flex-row lg:flex-row md:flex-row xs:flex-col gap-32">
      <!-- left side -->
      <ProductImage
        :currentIndex="currentIndex"
        :currentItem="currentItem"
        :images="images"
        :goToItem="goToItem"
        :specialIndex="specialIndex"
        :nextItem="nextItem"
        :prevItem="prevItem"
        :toggleModal="toggleModal"
      />
      <!-- Right Side` -->
      <ProductDescription />
    </div>
    <!-- Modal -->
    <ProductModal
      :modalVisible="modalVisible"
      :changeTab="changeTab"
      :activeTab="activeTab"
      :toggleModal="toggleModal"
      :currentIndex="currentIndex"
      :currentItem="currentItem"
      :images="images"
      :goToItem="goToItem"
    />
  </main>
</template>

<style scoped>
/* Add your custom styles here */
</style>
