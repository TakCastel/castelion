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
        primary: '#f5b98d',  // Utilisé pour mettre en valeur certains éléments
      },
      fontFamily: {
        'iceberg': ['Iceberg', 'sans-serif'], // Ajout de la police Iceberg
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
                color: theme('colors.orange.200'),  // Couleur de survol des liens
              },
            },
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.gray.300'),
            },
            h3: {
              color: theme('colors.white'),
            },
            p: {
              marginBottom: theme('spacing.4'),
              color: theme('colors.gray.300'),
            },
            strong: {
              color: theme('colors.zinc.200'),
            },
            img: {
              borderRadius: theme('spacing.2'),
              border: '2px solid',
              borderColor: theme('colors.zinc.700')
            }
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
