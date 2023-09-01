import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import { getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDkU_CddfzZ_w3ENTvEMuqdZZUjnNLJDTw",
    authDomain: "bikerentals-63c96.firebaseapp.com",
    projectId: "bikerentals-63c96",
    storageBucket: "bikerentals-63c96.appspot.com",
    messagingSenderId: "379336914617",
    appId: "1:379336914617:web:349c8d48c1eca58f9b0d68",
    measurementId: "G-5J0VZG57NH"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage(app);
  export { db,auth, storage };
