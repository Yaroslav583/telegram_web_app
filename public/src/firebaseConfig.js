import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCi1LfvDQjULj9jHh1T52VsIgPPQ4C6b8Q",
    authDomain: "telegram-web-app-9e595.firebaseapp.com",
    projectId: "telegram-web-app-9e595",
    storageBucket: "telegram-web-app-9e595.appspot.com",
    messagingSenderId: "899676774643",
    appId: "1:899676774643:web:9c6fdbe046ff64d5a75786",
    measurementId: "G-45084GQF4D"
};

const app = initializeApp(firebaseConfig);

export default app;