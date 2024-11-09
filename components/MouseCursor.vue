<template>
    <div
      v-if="isVisible"
      class="mouse-cursor"
      :style="cursorStyle"
    ></div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const isVisible = ref(true);
  const cursorStyle = ref({});
  
  const updateCursorPosition = (event) => {
    const x = event.clientX;
    const y = event.clientY;
  
    // Taille du halo
    const maxSize = Math.min(window.innerWidth * 2, window.innerHeight * 2); // Prend jusqu'à 90% de la taille de la fenêtre
  
    cursorStyle.value = {
      top: `${y}px`,
      left: `${x}px`,
      width: `${maxSize}px`,
      height: `${maxSize}px`,
    };
  };
  
  onMounted(() => {
    window.addEventListener('mousemove', updateCursorPosition);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', updateCursorPosition);
  });
  </script>
  
  <style scoped>
  .mouse-cursor {
    position: fixed;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0) 20%);
    pointer-events: none; /* Ignore les événements de souris */
    transform: translate(-50%, -50%); /* Centre le curseur */
    transition: background 0.1s ease-in-out, width 0.1s ease-in-out, height 0.1s ease-in-out;
    z-index: 9999; /* Assure que le curseur est au-dessus des autres éléments */
  }
  </style>
  