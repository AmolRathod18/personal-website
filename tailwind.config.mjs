/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Grey palette
        grey: {
          50: 'var(--grey-50)',
          100: 'var(--grey-100)',
          200: 'var(--grey-200)',
          300: 'var(--grey-300)',
          400: 'var(--grey-400)',
          500: 'var(--grey-500)',
          600: 'var(--grey-600)',
          700: 'var(--grey-700)',
          800: 'var(--grey-800)',
          900: 'var(--grey-900)',
        },
        // Brand colors
        brand: {
          'dark-green': 'var(--dark-green)',
          'light-green': 'var(--light-green)',
          'dark-blue': 'var(--dark-blue)',
          'light-blue': 'var(--light-blue)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        intertight: ['var(--font-intertight)'],
        literata: ['var(--font-literata)'],
        firacode: ['var(--font-firacode)'],
        ibmplexmono: ['var(--font-ibmplexmono)'],
        fraunces: ['var(--font-fraunces)'],
        poppins: ['var(--font-poppins)'],
      },
      fontSize: {
        xxs: 'var(--font-size-xxs)',
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        base: 'var(--font-size-base)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
      },
      fontWeight: {
        thin: 'var(--font-weight-thin)',
        lighter: 'var(--font-weight-lighter)',
        light: 'var(--font-weight-light)',
        regular: 'var(--font-weight-regular)',
        normal: 'var(--font-weight-normal)',
        semibold: 'var(--font-weight-semi-bold)',
        bold: 'var(--font-weight-bold)',
        bolder: 'var(--font-weight-bolder)',
        black: 'var(--font-weight-black)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        base: 'var(--shadow-base)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
      },
    },
  },
  plugins: [],
};
