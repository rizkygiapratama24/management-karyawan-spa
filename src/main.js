import { createApp } from 'vue'
import App from './App.vue'

// import router
import router from './router';

// create App vue
const app = createApp(App);

// gunakan "router" di vue dengan plugin "use"
app.use(router);

app.mount('#app');