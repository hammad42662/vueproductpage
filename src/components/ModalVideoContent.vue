<script setup>
const props = defineProps({
  activeTab: String
})
</script>
<template>
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
</template>
