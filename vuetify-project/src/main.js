import App from "./App.vue";
import { createApp } from "vue";
import { registerPlugins } from "@/plugins";
const app = createApp(App);
registerPlugins(app);

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});
app.use(vuetify).mount("#app");
