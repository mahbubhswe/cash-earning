import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAek468MmmhjUSAjp3vj3f_t1GMMevFdG4",
  authDomain: "cash-earnings-f41fc.firebaseapp.com",
  projectId: "cash-earnings-f41fc",
  storageBucket: "cash-earnings-f41fc.appspot.com",
  messagingSenderId: "968980424040",
  appId: "1:968980424040:web:06d43e683133af9ffb62dd",
  measurementId: "G-6MHEG4GNQ1"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);