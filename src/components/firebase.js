import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "./utils";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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
const db = getFirestore(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    userHandle(user);
  } else {
    userHandle(false);
  }
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

export const register = async ({ email, password, full_name, username }) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (response.user) {
      await setDoc(
        (doc(db, "usernames", username),
        {
          user_id: response.user.uid,
        })
      );
      await setDoc(doc(db, "users", response.user.uid), {
        full_name: full_name,
        username: username,
        followers: [],
        following: [],
        notifications: [],
      });

      await updateProfile(auth.currentUser, {
        displayName: full_name,
      });
      return response.user;
    }
  } catch (err) {
    toast.error(err.code);
  }
};
