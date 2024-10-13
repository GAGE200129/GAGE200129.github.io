// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getDatabase, ref, set, onValue, child, get } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBq_tIoCNmnuD7JXp5Wv44LrWtMYFrdw_w",
    authDomain: "hcmute-iot.firebaseapp.com",
    databaseURL: "https://hcmute-iot-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hcmute-iot",
    storageBucket: "hcmute-iot.appspot.com",
    messagingSenderId: "242437644099",
    appId: "1:242437644099:web:4f5e80b531443e4e6b99f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const db = ref(database);




