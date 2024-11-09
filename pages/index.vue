<template>
  <div class="relative overflow-hidden p-5 ">
    <!-- Titre au centre de la première section -->
    <div class="flex items-center justify-center min-h-96 relative z-10">
      <HeadingTitle>Tarik Talhaoui</HeadingTitle>
    </div>
  </div>

    <!-- Section avec une carte affichée dans la première section -->
    <div class="grid grid-cols-2 gap-6 md:w-3/5 md:mx-auto p-5">
      <!-- Première carte avec largeur dynamique -->
      <div class="col-span-2">
        <HeadingCard :showAvatar="true">
          <template #title>Hey!</template>
          <template #content>
            <p>
              I'm a <a target="_blank" href="https://www.linkedin.com/in/tarik-talhaoui-832769110/">Front End Developer</a> specialized in <strong>VueJS</strong> and <strong>NuxtJS</strong> for building scalable web applications.
            </p>
            <p>
              I have worked on a variety of projects, including custom web applications, dashboards, and internal tools. Proficient in agile methodologies, I focus on <strong>code quality</strong>, <strong>task management</strong>, and delivering <strong>maintainable solutions</strong>.
            </p>
          </template>
        </HeadingCard>
      </div>


        <div class="col-span-2 md:col-span-1">
          <HeadingCard >
            <template #title>Techs</template>
            <template #content>
              <ul class="flex space-x-4 mb-6 not-prose">
                <li>
                  <img src="assets/logos/html.png" alt="HTML Logo" class="max-h-10">
                </li>
                <li>
                  <img src="assets/logos/css.png" alt="CSS Logo" class="max-h-10">
                </li>
                <li>
                  <img src="assets/logos/js.png" alt="JavaScript Logo" class="max-h-10">
                </li>
                <li>
                  <img src="assets/logos/vue.png" alt="Vue Logo" class="max-h-10">
                </li>
                <li>
                  <img src="assets/logos/nuxt.png" alt="Nuxt Logo" class="max-h-10">
                </li>
              </ul>
              <p>
                <nuxt-link to="/frontend">Know more...</nuxt-link>
              </p>
            </template>
          </HeadingCard>
        </div>  
        <div class="col-span-2 md:col-span-1">
          <HeadingCard >
            <template #title>Tools</template>
            <template #content>
              <ul class="flex space-x-4 mb-6 not-prose">
                <li>
                  <img src="assets/logos/git.png" alt="Git Logo" class="max-h-10">
                </li>
                <li>
                  <img src="assets/logos/gcp.png" alt="GCP Logo" class="max-h-10">
                </li>
                <li>
                  <img src="assets/logos/firebase.png" alt="Firebase Logo" class="max-h-10">
                </li>
                <li>
                  <img src="assets/logos/notion.png" alt="Notion Logo" class="max-h-10">
                </li>
              </ul>
              <p>
                <nuxt-link to="/tools">Know more...</nuxt-link>
              </p>
            </template>
          </HeadingCard>
        </div>
        <div class="col-span-2 md:col-span-1">
          <HeadingCard >
            <template #title>Design</template>
            <template #content>
              <ul class="flex space-x-4 mb-6 not-prose">
                <li>
                  <img src="assets/logos/sass.png" alt="Sass Logo" class="max-h-10">
                </li>
                <li class="bg-zinc-700 rounded-full border border-zinc-700">
                  <img src="assets/logos/atomic.png" alt="Atomic Design Logo" class="max-h-10">
                </li>
                <li>
                  <img src="assets/logos/material.png" alt="Material Design Logo" class="max-h-10">
                </li>
                <li>
                  <img src="assets/logos/primevue.png" alt="Primevue Logo" class="max-h-10">
                </li>
              </ul>
              <p>
                <nuxt-link to="/design">Know more...</nuxt-link>
              </p>
            </template>
          </HeadingCard>
        </div>
        <div class="col-span-2 md:col-span-1">
          <HeadingCard >
            <template #title>School</template>
            <template #content>
              <ul class="flex space-x-4 mb-6 not-prose">
                <li>
                  <img src="assets/logos/openclassrooms.png" alt="Openclassrooms Logo" class="max-h-10">
                </li>
              </ul>
              <p>
                <a target="_blank" href="/cv-tarik-2024.pdf">View resume (fr)</a>
              </p>
            </template>
          </HeadingCard>
        </div>
    </div>

    <div class="flex items-center justify-center min-h-screen relative z-10">
      <a href="mailto:tariktalhaoui84@gmail.com" class="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-zinc-700 font-medium text-neutral-200 transition-all duration-300 hover:w-52">
        <div class="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">Let's work together?</div>
        <div class="absolute right-3.5">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
          </svg>
        </div>
      </a>
    </div>
</template>

<script setup>
// Aucun code JavaScript supplémentaire n'est nécessaire ici, puisque le fond d'écran est maintenant géré dans le layout global.
</script>
