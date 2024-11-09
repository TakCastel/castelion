<template>
  <div class="prose prose-primary simple-card p-6 w-full m-auto text-white relative h-full flex flex-col justify-between" :class="{ 'pt-10' : showAvatar }">
    <!-- Affichage de l'avatar si showAvatar est vrai -->
    <div v-if="showAvatar" class="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 z-10">
      <img 
        src="@/assets/avatar.png" 
        alt="Avatar" 
        class="not-prose w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
      />
    </div>

    <h2 class="text-lg font-semibold mb-4">
      <slot name="title">Titre de la carte</slot>
    </h2>
    <div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  showAvatar: {
    type: Boolean,
    default: false, // Avatar visible par défaut
  }
});
</script>

<style scoped>
/* La carte simple avec Tailwind */
.simple-card {
  background-color: rgba(0, 0, 0, 0.7); /* Fond sombre avec transparence */
  border-radius: 1rem; /* Bords arrondis */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Ombre sombre */
  transition: all 150ms ease-in-out;

  &:hover {
    transform: scale(1.05)
  }
}

h2 {
  font-size: 1.5rem; /* Taille de police du titre */
}

p {
  font-size: 1rem; /* Taille de police du contenu */
}

/* Pas de styles supplémentaires ici pour l'avatar grâce à Tailwind */
</style>
