import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from 'firebase/app';
import {firebaseConfig} from './config/firebase';

createApp(App).use(store).use(router).mount('#app')
firebase.initializeApp(firebaseConfig);