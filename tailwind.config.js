/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* darker-blue-gray */
        input: "var(--color-input)", /* darker-blue-gray */
        ring: "var(--color-ring)", /* deep-pink */
        background: "var(--color-background)", /* rich-black */
        foreground: "var(--color-foreground)", /* off-white */
        primary: {
          DEFAULT: "var(--color-primary)", /* deep-pink */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* deep-sky-blue */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* coral-red */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* dark-blue-gray */
          foreground: "var(--color-muted-foreground)", /* light-gray */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* gold */
          foreground: "var(--color-accent-foreground)", /* rich-black */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* dark-blue-gray */
          foreground: "var(--color-popover-foreground)", /* off-white */
        },
        card: {
          DEFAULT: "var(--color-card)", /* dark-blue-gray */
          foreground: "var(--color-card-foreground)", /* off-white */
        },
        success: {
          DEFAULT: "var(--color-success)", /* spring-green */
          foreground: "var(--color-success-foreground)", /* rich-black */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* orange */
          foreground: "var(--color-warning-foreground)", /* rich-black */
        },
        error: {
          DEFAULT: "var(--color-error)", /* coral-red */
          foreground: "var(--color-error-foreground)", /* white */
        },
        cta: {
          DEFAULT: "var(--color-cta)", /* vibrant-orange */
          foreground: "var(--color-cta-foreground)", /* white */
        },
        trust: {
          DEFAULT: "var(--color-trust)", /* professional-blue */
          foreground: "var(--color-trust-foreground)", /* white */
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        firacode: ['Fira Code', 'monospace'],
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
      },
      boxShadow: {
        'neon-primary': '0 0 20px rgba(255, 20, 147, 0.3)',
        'neon-secondary': '0 0 20px rgba(0, 191, 255, 0.3)',
        'neon-accent': '0 0 20px rgba(255, 215, 0, 0.3)',
        'neon-cta': '0 0 20px rgba(255, 107, 53, 0.3)',
        'subtle': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.02)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      transitionTimingFunction: {
        'bounce-playful': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}