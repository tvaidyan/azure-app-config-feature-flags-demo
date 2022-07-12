import { createApp } from 'vue'
import App from './App.vue'
import azureAppConfigPlugin from '../azureAppConfigPlugin';

const app = createApp(App)
app.use(azureAppConfigPlugin);
app.mount('#app');
