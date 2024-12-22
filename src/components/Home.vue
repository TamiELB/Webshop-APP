<template>
  <div class="relative w-full h-screen">

    <!-- Video Background -->
    <video class="absolute top-0 left-0 w-full h-full object-cover" autoplay loop muted>
      <source src="../assets/Files/LakeBgVid.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Navigation Bar -->
    <nav class="relative z-20 flex justify-between items-center p-4 bg-black bg-opacity-50">
      <h2 class="text-white text-xl font-bold">My Website</h2>
      <ul class="flex space-x-4">
        <li><a href="#" class="text-white hover:text-gray-300">Home</a></li>
        <li><a href="#" class="text-white hover:text-gray-300">About</a></li>
        <li><a href="#" class="text-white hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>

    <!-- Main Content -->
    <div class="relative z-10 flex flex-col lg:flex-row justify-center items-center w-full h-full bg-black bg-opacity-50 p-8 gap-6">
      <!-- Text Section -->
      <div class="flex-1 flex justify-center items-center text-center text-white">
        <div>
          <h1 class="text-4xl font-bold mb-4">Welcome to My Website</h1>
          <p class="text-lg">Discover amazing products and content. We're here to make your experience unforgettable. Explore now!</p>
        </div>
      </div>

      <!-- Product Card -->
      <div class="flex-1 flex justify-center items-center">
        <div class="max-w-sm bg-white rounded-lg shadow-lg p-6">
          <img src="" alt="Product" class="w-full h-48 object-cover rounded-md mb-4">
          <h2 class="text-xl font-bold mb-2">Amazing Product</h2>
          <p class="text-gray-600 mb-4">This product will revolutionize your experience. Get it now while stocks last!</p>
          <button class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
