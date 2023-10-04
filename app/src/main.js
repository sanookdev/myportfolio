import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import AOS from "aos";
import "aos/dist/aos.css";
/* Import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* Import font awesome icon component */

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* Import specific icons */
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowUp);

AOS.init({
  duration: 1000, // Animation duration
  easing: "ease-in-out", // Easing type
  offset: 100, // Offset (in pixels) from the top of the viewport
});

const app = createApp(App);

// set jquery to global
import $ from "jquery";
window.$ = $;

app.component("font-awesome-icon", FontAwesomeIcon);
// Make jQuery available globally
// app.config.globalProperties.$ = $;
app.use(store);
app.use(router);
app.mount("#app");
