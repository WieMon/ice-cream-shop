module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: 
          `@import "@/assets/styles/_global.scss";
          @import "@/assets/styles/_variables.scss";
          `
      }
    }
  }
};