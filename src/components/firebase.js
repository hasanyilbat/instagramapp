import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "./utils";

const firebaseConfig = {
  apiKey: "AIzaSyCbujFbPHR67-pTcC7Y_jmb2OqcW4oTmuQ",
  authDomain: "instagramclone-59004.firebaseapp.com",
  projectId: "instagramclone-59004",
  storageBucket: "instagramclone-59004.appspot.com",
  messagingSenderId: "376932000176",
  appId: "1:376932000176:web:6dafe873a4f638bddbf675",
  measurementId: "G-LVQSVKW773",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  userHandle(user || false);
});

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response.user);
  } catch (err) {
    toast.error(err.code);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    toast.error(error.code);
  }
};
