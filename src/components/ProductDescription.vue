<script setup>
import DescButton from './DescButton.vue'
import ProductSpecs from './ProductSpecs.vue'
import QuantityBtns from './QuantityBtns.vue'
import DescHeader from './DescHeader.vue'
</script>
<template>
  <section class="flex flex-col md:w-2/4 xs:w-screen h-full md:mt-0 xs:mt-10 md:ml-0 xs:ml-2">
    <DescHeader />
    <hr class="border-2 border-gray-300 my-2 md:w-9/12 xs:w-full" />
    <ProductSpecs />
    <hr class="border-1 border-gray-300 my-1 md:w-9/12 xs:w-full" />
    <QuantityBtns />
    <DescButton />
  </section>
</template>
