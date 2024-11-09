<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- Composant MouseCursor -->
    <MouseCursor />
    
    <!-- Image de fond avec un zoom progressif -->
    <div 
      class="fixed inset-0 bg-cover bg-center z-0"
      :style="imageStyle"
    ></div>

    <!-- Slot pour le contenu de la page -->
    <div class="relative z-10">
      <slot></slot>  <!-- Le contenu de index.vue sera injecté ici -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import backgroundImage from '@/assets/background.png'; // Image de fond
import MouseCursor from '@/components/MouseCursor.vue'; // Import du composant MouseCursor

const imageStyle = ref({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transform: 'scale(1)',
  opacity: 1,
});

// Fonction pour gérer le zoom au scroll
const updateZoom = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const totalHeight = document.documentElement.scrollHeight - windowHeight;

  // Calcul du progrès de défilement
  const scrollProgress = Math.min(scrollY / totalHeight, 1);

  // Mise à jour du style de l'image : zoom progressif et disparition
  imageStyle.value.transform = `scale(${1 + scrollProgress * 0.5})`; // Zoom de 1 à 1.5
  imageStyle.value.opacity = Math.max(1 - scrollProgress, 0); // Disparition progressive de l'image
};

// Mettre à jour l'effet de zoom au scroll
onMounted(() => {
  window.addEventListener('scroll', updateZoom);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateZoom);
});
</script>

<style scoped>
.fixed {
  position: fixed;
  width: 100%;
  height: 100%;
}

.relative {
  position: relative;
}

h-screen {
  height: 100vh;
}
</style>
