module.exports = {
  content: ['../layout/*','../templates/*','../snippets/*','../components/*','../assets/*.liquid'],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
  },
  daisyui: {
    themes: ["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter","dim","nord","sunset"],
  },
};
