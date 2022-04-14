import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDwNmRMEVf3AO1rQMIpPEMBIYfCx8uvDUU",
  authDomain: "webflix-7936c.firebaseapp.com",
  projectId: "webflix-7936c",
  storageBucket: "webflix-7936c.appspot.com",
  messagingSenderId: "646925728645",
  appId: "1:646925728645:web:b56ee8c23a0b4645c662ec",
  measurementId: "G-SLG7LLMVE5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);