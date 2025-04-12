// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "yourapp.firebaseapp.com",
  projectId: "yourapp-id",
  storageBucket: "yourapp.appspot.com",
  messagingSenderId: "xxxxxx",
  appId: "yourAppId",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
