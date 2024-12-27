<template>

  <div class="flex-1 flex justify-center items-center">
    <div class="max-w-sm rounded-lg shadow-lg p-6 backdrop-blur-sm border border-gray-300">
      <img :src="product.thumbnail" alt="Product"
        class="w-full h-48 object-cover rounded-md mb-4">
      <h2 class="text-white text-xl font-bold mb-2">{{ product.name }}</h2>
      <p class="text-gray-300 mb-4">{{ product.description }}</p>
      <button class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Buy Now</button>
    </div>
  </div>

</template>

<script setup>
  import { defineProps } from 'vue';

  defineProps({
    product: {
      name: String,
      description: String,
      thumbnail: String,
    },
  });
</script>