<template>
    <nav>
      <ContentNavigation v-slot="{ navigation }">
        <ul class="flex space-x-6">
          <!-- Lien vers Accueil -->
          <li>
            <NuxtLink 
              to="/" 
              class="text-white hover:text-[#A5837C] transition-colors duration-300"
            >
              Accueil
            </NuxtLink>
          </li>
  
          <!-- Liens dynamiques du contenu -->
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink 
              :to="link._path" 
              class="text-white hover:text-[#A5837C] transition-colors duration-300"
            >
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </nav>
  </template>
  