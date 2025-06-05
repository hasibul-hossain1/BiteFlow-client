import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAce0gLvcHPbc89B2_W-adOn1tUDV4oI34",
  authDomain: "flowbite-69b94.firebaseapp.com",
  projectId: "flowbite-69b94",
  storageBucket: "flowbite-69b94.firebasestorage.app",
  messagingSenderId: "63030005042",
  appId: "1:63030005042:web:0caf6a549d9faa4600db2b"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)