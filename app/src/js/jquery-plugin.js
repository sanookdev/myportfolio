import $ from "jquery";

const jQueryPlugin = {
  install: function (app) {
    // Add $ to the Vue prototype
    app.config.globalProperties.$ = $;
  },
};

export default jQueryPlugin;
