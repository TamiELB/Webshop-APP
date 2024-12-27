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
    <div class="relative z-10 flex flex-col lg:flex-row justify-center items-center w-full h-full bg-black bg-opacity-50 p-8 gap-6">
      <!-- Text Section -->
      <div class="flex-1 flex justify-center items-center text-center text-white">
        <div>
          <h1 class="text-4xl font-bold mb-4">Welcome to My Website</h1>
          <p class="text-lg">Discover amazing products and content. We're here to make your experience unforgettable. Explore now!</p>
        </div>
      </div>

      <!-- Products -->
      <div class="flex flex-col gap-1 overflow-hidden">
        <ProductCard :product="products[currentIndex]" />
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
      name: 'Product 1',
      description: 'This is the first product.',
      thumbnail: 'https://cdn.pixabay.com/photo/2015/10/01/19/05/car-967470_640.png',
    },
    {
      name: 'Product 2',
      description: 'This is the second product.',
      thumbnail: 'https://cdn.pixabay.com/photo/2017/08/27/20/10/png-2687339_640.png',
    },
    {
      name: 'Product 3',
      description: 'This is the third product.',
      thumbnail: 'https://cdn.pixabay.com/photo/2017/08/18/00/28/png-2653383_640.png',
    },
  ]

  // Track the current index
const currentIndex = ref(0);

// Function to cycle through products
const cycleProducts = () => {
  currentIndex.value = (currentIndex.value + 1) % products.length;
};

// Set up an interval to cycle every 3 seconds
let interval = null;
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

