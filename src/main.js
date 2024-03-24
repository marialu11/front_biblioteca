import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/router";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "vuetify/dist/vuetify.min.css";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import '@fortawesome/fontawesome-free/css/all.css';

library.add(faPhone);

const vuetify = createVuetify({
    components,
    directives,
})

library.add(fas) // Include needed solid icons
library.add(far)

createApp(App)

    .use(vuetify)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

