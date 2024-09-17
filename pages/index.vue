<template>
  <div class="relative overflow-hidden h-screen">
    <div class="parallax-background-1 fixed top-0 left-0 w-full h-full bg-cover bg-center z-[-1]" ref="background_1"></div>
    <div class="parallax-background-2 fixed bottom-0 left-0 w-full h-full bg-no-repeat bg-bottom bg-contain z-[-1]" ref="background_2"></div>

    <div class="relative z-10 mx-auto px-4 h-screen flex flex-col justify-center items-center">
      <h1 class="text-5xl font-bold text-white animate-fadeInUp">TARIK TALHAOUI</h1>
      <small class="text-lg text-gray-300 block mt-2">Développeur Front</small>
    </div>

    <!-- separator -->
    
    
  </div>
  <Infobox />
</template>


<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const background_1 = ref<HTMLDivElement | null>(null);
    const background_2 = ref<HTMLDivElement | null>(null);

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const screenHeight = window.innerHeight;
  const maxScale = 2; // Maximum scale of the image
  const scale_1 = 1 + scrollPosition * 0.001; // Adjust the scroll factor for zoom effect
  const scale_2 = 1 + scrollPosition * 0.002; // Adjust the scroll factor for zoom effect

  // Calculate opacity: fully visible at top, invisible at 2x screen height
  const opacity = Math.max(0, 1 - scrollPosition / (1 * screenHeight));

  if (background_1.value) {
    background_1.value.style.transform = `scale(${Math.min(scale_1, maxScale)})`;
    background_1.value.style.opacity = opacity.toString(); // Set opacity
  }

  if (background_2.value) {
    background_2.value.style.transform = `scale(${Math.min(scale_2, maxScale)})`;
    background_2.value.style.opacity = opacity.toString(); // Set opacity
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>





<style>
.parallax-container {
  position: relative;
  overflow: hidden;
}

.parallax-background-1  {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('~/assets/bg.png');
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.parallax-background-2  {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('~/assets/fg.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  z-index: -1;
}

.content {
  position: relative;
  z-index: 1;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px); /* Image appears to move up */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.image-hidden {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.image-visible {
  animation: fadeInUp 0.8s ease-out forwards;
}

</style>