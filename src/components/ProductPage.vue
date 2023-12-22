<script setup>
import ProductModal from './ProductModal.vue'
import ProductDescription from './ProductDescription.vue'
import ProductImage from './ProductImage.vue'

import { ref, computed, onMounted, onUnmounted } from 'vue'
const images = [
  { type: 'image', src: '/media/assets/front.jpg', alt: 'Image 1' },
  { type: 'image', src: '/media/assets/dimension.jpg', alt: 'Image 2' },
  { type: 'image', src: '/media/assets/poster.jpg', alt: 'Image 3' },
  { type: 'video', src: '/media/assets/video-thumbnail.png', alt: 'video' }
]
const thumbnailImg = [
  { type: 'image', src: '/media/assets/thumbnails/product-image-thumbnail.jpeg', alt: 'Image 1' },
  {
    type: 'image',
    src: '/media/assets/thumbnails/product-image-front-thumbnail.jpeg',
    alt: 'Image 1'
  },
  {
    type: 'image',
    src: '/media/assets/thumbnails/product-image-back-thumbnail.jpeg',
    alt: 'Image 1'
  },
  { type: 'video', src: '/media/assets/video-thumbnail.png', alt: 'video' }
]
let currentIndex = ref(0)
const activeTab = ref('videos')
const specialIndex = ref(3)
const modalVisible = ref(false)
const isMobile = ref(window.innerWidth / window.devicePixelRatio <= 768)
const isDesktop = ref(window.innerWidth / window.devicePixelRatio >= 768)
const currentItem = computed(() => images[currentIndex.value])

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
onMounted(() => {
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 768
  })
})
onMounted(() => {
  window.addEventListener('resize', () => {
    isDesktop.value = window.innerWidth >= 768
  })
})
// --------Touch Event----------
const content = ref(null)
let initialX = ref(null)
let endX = ref(null)
let initialStart = ref(0)
let initialEnd = ref(0)
// Measure translate pixels
let current = ref(0)

// Store slide number
let slide = ref(0)

const appHeight = () => {
  document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
  current.value = -slide.value * window.innerHeight
}

const startTouch = (evt) => {
  initialStart.value = Date.now()
  initialX.value = evt.touches[0].clientX
}

const endTouch = (evt) => {
  initialEnd.value = Date.now()
  endX.value = evt.changedTouches[0].clientX
  if (initialEnd.value - initialStart.value < 800) {
    swipe()
  }
}

const swipe = () => {
  const deltaX = endX.value - initialX.value
  const threshold = 100

  if (deltaX > threshold && currentIndex.value > 0) {
    // Swipe right
    current.value -= window.innerWidth
    currentIndex.value -= 1
    console.log('Swiped right. New slide:', currentIndex.value)
  } else if (deltaX < -threshold && currentIndex.value < images.length - 1) {
    // Swipe left
    current.value += window.innerWidth
    currentIndex.value += 1
    console.log('Swiped left. New slide:', currentIndex.value)
  }
}
const moveTouch = (e) => {
  e.preventDefault()
}
onMounted(() => {
  content.value = document.querySelector('.content')
  window.addEventListener('resize', appHeight)
  appHeight()
})

onUnmounted(() => {
  window.removeEventListener('resize', appHeight)
})
</script>
<template>
  <main class="w-full">
    <div
      class="flex flex-row justify-start h-full w-full xl:flex-row lg:flex-row md:flex-row xs:flex-col gap-0 overflow-hidden"
    >
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
        :thumbnailImg="thumbnailImg"
        :isDesktop="isDesktop"
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
      :isMobile="isMobile"
      :startTouch="startTouch"
      :endTouch="endTouch"
      :moveTouch="moveTouch"
      :content="content"
      :thumbnailImg="thumbnailImg"
    />
  </main>
</template>

<style scoped>
/* Add your custom styles here */
</style>
