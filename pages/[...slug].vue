<template>
  <main class="prose prose-primary mx-auto py-10 mt-16">
    <!-- go back button -->
    <nuxt-link 
      to="/"
      class="not-prose cursor-pointer relative inline-block mb-10 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">
      Go back
    </nuxt-link>
    <ContentDoc />
  </main>
</template>
