<template>
  <div class="relative w-full h-screen">

    <!-- Video Background -->
    <video class="absolute top-0 left-0 w-full h-full object-cover" autoplay loop muted>
      <source src="../assets/Files/LakeBgVid.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Navigation Bar -->
    <Navbar />

    <!-- Main Content -->
    <div class="relative z-10 flex flex-col lg:flex-row justify-betweem items-center w-full h-full bg-black bg-opacity-50 p-8 gap-6">
      
      <!-- Text Section -->
      <div class="w-full flex justify-center items-center text-center text-white">
        <div>
          <h1 class="text-4xl font-bold mb-4">Welcome to My Website</h1>
          <p class="text-lg">Discover amazing products and content. We're here to make your experience unforgettable. Explore now!</p>
        </div>
      </div>

      <!-- Products -->
      <div class="w-full text-white flex flex-col">
      <div class="flex flex-col gap-1 overflow-hidden">
        <ProductCard :product="products[currentIndex]" />
      </div>
      
      <!-- Current Item -->
      <div class="flex justify-center gap-2">
        <div v-on:click="changeIndex(index)" v-for="product, index in products" :key="product.name" :class="{ 'text-blue-500': index === currentIndex }"><i class="cursor-pointer text-xs size-4 pi pi-circle-fill"></i></div>
      </div>
      </div>


    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import Navbar from '../components/Navbar.vue';
  import ProductCard from '../components/ProductCard.vue';

  const products = [
    {
      name: 'Auto',
      description: 'Gaat 240 Km/h',
      thumbnail: 'https://cdn.pixabay.com/photo/2015/10/01/19/05/car-967470_640.png',
    },
    {
      name: 'Hond',
      description: 'Guus zoekt een baas.',
      thumbnail: 'https://cdn.pixabay.com/photo/2017/08/27/20/10/png-2687339_640.png',
    },
    {
      name: 'Boom',
      description: 'Hout',
      thumbnail: 'https://cdn.pixabay.com/photo/2017/08/18/00/28/png-2653383_640.png',
    },
  ]

  let interval = null;
  
  const currentIndex = ref(0);

  const cycleProducts = () => {
    currentIndex.value = (currentIndex.value + 1) % products.length;
  };

  function changeIndex(index) {
    currentIndex.value = index;
    clearInterval(interval);
    interval = setInterval(cycleProducts, 3000);
  }



  onMounted(() => {
    interval = setInterval(cycleProducts, 3000);
  });

  // Clear the interval when the component is unmounted
  onUnmounted(() => {
    clearInterval(interval);
  });

</script>

<style scoped>

</style>

