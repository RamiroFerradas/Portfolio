/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["var(--font-josefin_sans)"],
      },
      backgroundImage: {
        "custom-background": "linear-gradient(rgba(0, 0, 0, 0.6), #ff004f)",
      },
      keyframes: {
        runTitle: {
          "0%": {
            left: "-50vw",
          },
          "50%": {
            left: "-1vw",
          },
          "100%": {
            left: "0vw",
          },
        },
        run: {
          "0%": {
            right: "-50vw",
          },
          /* 80% {
          right: -8vw;
        }, */
          "50%": {
            /* right: -9vw; */
          },
          "100%": {
            right: "0vw",
          },
        },

        fadeInFromNone: {
          "0%": {
            display: "none",
            opacity: 0,
          },

          "5%": {
            display: "block",
            opacity: 0,
          },
          "80%": {
            display: "block",
            opacity: 1,
          },

          "100%": {
            display: "block",
            opacity: 1,
          },
        },

        runLeft: {
          "0%": {
            left: "-20%",
          },
          "50%": {
            left: "15%",
          },
        },

        fadeInFromNone2: {
          "0%": {
            display: "none",
            opacity: "0",
          },

          "1%": {
            display: "block",
            opacity: "0",
          },

          "100%": {
            display: "block",
            opacity: "1",
          },
        },
        moveUpDown: {
          "0%, 100%": {
            bottom: "0",
          },
          "50%": {
            bottom: "1vh",
          },
        },
      },
      animation: {
        runTitle: "run ease 3s",
        runSubtitle: "run normal 2s",
        runDescription: "run ease 3s",
        animationButton: "fadeInFromNone ease 3s",
        runHome: "runLeft ease 2s",
        animationServices: "fadeInFromNone2 ease-out 1.5s",
        animationWorksCard: "moveUpDown linear infinite 0.6s",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
