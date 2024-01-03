import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBaX4G9K3NmOO6guBrn_VPJsGFrL-2H0ig",
  authDomain: "instal-clone-js.firebaseapp.com",
  projectId: "instal-clone-js",
  storageBucket: "instal-clone-js.appspot.com",
  messagingSenderId: "143227738666",
  appId: "1:143227738666:web:51e45a5d3d36c08516c153",
  measurementId: "G-0K44XGBRQ4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
