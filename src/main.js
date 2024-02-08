// Vue Framework Import
import { createApp } from 'vue';

// Stil- und Framework-Importe
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Hauptkomponenten- und Router-Importe
import App from './App.vue';
import router from './router/router';

// Erstellen und Konfigurieren der Vue-Anwendung
const app = createApp(App);
app.use(router);
app.mount('#app'); 
