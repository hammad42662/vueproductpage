<script setup></script>
<template>
  <main class="w-full">
    <div class="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-32">
      <div class="w-27 bg-white ml-72 mt-9">
        <div class="mt-16 w-full">
          <img src="/media/assets/product-image.jpeg" class="lg:w-3/5 ml-20" />
          <div
            class="inline-block p-1 border-solid border-black border-0 border-t-0 border-l-0 border-r-2 border-b-2 transform -rotate-45 absolute left-2/4 bottom-2/4"
          ></div>
          <div
            class="inline-block p-1 border-solid border-black border-0 border-t-0 border-l-0 border-r-2 border-b-2 transform origin-center rotate-135 absolute bottom-2/4"
          ></div>
        </div>
      </div>
      <div class="mt-10">
        <div class="flex gap-80 mb-2">
          <p class="text-gray-400">SAMSUNG</p>
          <p class="text-green-700">Hurry Limited Stock</p>
        </div>
        <div class="flex flex-col gap-2 mb-4">
          <h1 class="text-2xl font-medium font-poppins">Samsung Galaxy S23 Plus 5G</h1>
          <p class="text-xl font-medium font-poppins">£880.00</p>
        </div>
        <hr class="border-2 border-gray-300 my-2" />
        <div class="flex flex-col gap-4">
          <p><span class="font-medium font-poppins">Sim:</span> DUAL SIM</p>
          <p><span class="font-medium font-roboto">Condition:</span> LIKE NEW</p>
          <p><span class="font-medium font-roboto">Colour:</span> LAVENDAR</p>
          <p><span class="font-medium font-roboto">Network:</span> UNLOCKED</p>
          <p><span class="font-medium font-roboto">Storage:</span> 512GB</p>
        </div>
        <hr class="border-1 border-gray-300 my-2" />
        <div class="flex flex-row items-center gap-1 mt-5 mb-5">
          <button class="bg-transparent text-5xl text-gray-500">-</button>
          <span class="bg-gray-200 px-7 py-2 text-blue-500">1</span>
          <button class="bg-transparent text-4xl text-gray-500">+</button>
        </div>
        <button class="bg-yellow-400 px-52 py-2 text-lg font-semibold rounded-sm">
          Add To Basket
        </button>
      </div>
    </div>
  </main>
</template>
