
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBC1-SbSUH04WW57Fd2YDwHHtQUYFKcGws",
  authDomain: "tarefasplus-f06c2.firebaseapp.com",
  projectId: "tarefasplus-f06c2",
  storageBucket: "tarefasplus-f06c2.appspot.com",
  messagingSenderId: "647897272049",
  appId: "1:647897272049:web:4929a47004c1318c496350"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };