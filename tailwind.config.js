/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    './nuxt.config.{js,ts}',
    './content/**/*.{md}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleur personnalisée pour les liens, titres, etc.
        primary: '#A5837C',  // Utilisé pour mettre en valeur certains éléments
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.300'),  // Couleur globale du texte
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.rose.300'),  // Couleur de survol des liens
              },
            },
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.primary'),
            },
            h3: {
              color: theme('colors.white'),
            },
            p: {
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.4'),
              color: theme('colors.gray.300'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
