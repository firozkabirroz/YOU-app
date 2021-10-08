import { createApp } from 'vue'
//import Vue from "vue";
import App from './App.vue'
//import store from "./store";
import router from './router';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
//import './theme/core.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDxNW_yBYDj7z1XXRlluFIyT_g3NJ48g4",
  authDomain: "youapp-3eea3.firebaseapp.com",
  projectId: "youapp-3eea3",
  storageBucket: "youapp-3eea3.appspot.com",
  messagingSenderId: "509769499027",
  appId: "1:509769499027:web:b7816a154cbd7a4bc02866"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Vue.config.productionTip = false;

// new Vue({
//   store,
//   render: h => h(App)
// }).$mount("#app");

export const auth = firebase.auth();
export const db = firebase.firestore();

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});