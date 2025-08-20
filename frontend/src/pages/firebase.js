import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getStorage } from "firebase/storage";
import 'firebase/storage'; 

const firebaseConfig = {
  apiKey: "AIzaSyCHLDowW3NU-wKaAN4oYDs9Rw-cRN6I4kE",
  authDomain: "stellar-ledger-e357e.firebaseapp.com",
  projectId: "stellar-ledger-e357e",
  storageBucket: "stellar-ledger-e357e.firebasestorage.app",
  messagingSenderId: "566171288591",
  appId: "1:566171288591:web:df526e8937367ecb444f7a",
  measurementId: "G-0KGDEYD2GV"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider= new GoogleAuthProvider()
export const storage = getStorage(app);

export default app;