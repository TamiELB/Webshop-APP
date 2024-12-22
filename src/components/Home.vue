<template>
    <div class="relative w-full h-screen">
      <!-- Video Background -->
      <video class="absolute top-0 left-0 w-full h-full object-cover" autoplay loop muted>
        <source src="../assets/Files/LakeBgVid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  
      <!-- Content over the video -->
      <div class="relative z-10 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
        <h1 class="text-white text-4xl font-bold">Welcome to My Website</h1>
      </div>
    </div>
  </template>
  
  <script setup>
  // You can add any required logic in here (if needed)
  </script>
  
  <style scoped>
  /* You can add additional custom styles if necessary */
  </style>
  