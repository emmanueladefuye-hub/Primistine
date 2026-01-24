import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA00JTJ733VGW69zZVMp4zyxylNEG2-wJQ",
    authDomain: "primistine-electric-crm.firebaseapp.com",
    projectId: "primistine-electric-crm",
    storageBucket: "primistine-electric-crm.firebasestorage.app",
    messagingSenderId: "312402796800",
    appId: "1:312402796800:web:ed8c51ec8ebb9dec2c93e5",
    measurementId: "G-26R1SLVG8W"
};

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
    ignoreUndefinedProperties: true,
});

export { db };
