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
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const dbUser = await getDoc(doc(db, "users", user.uid));

    let data = {
      uid: user.uid,
      fullName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      ...dbUser.data(),
    };
    userHandle(data);
  } else {
    userHandle(false);
  }
});

export const login = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
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

export const getUserInfo = async (uname) => {
  const username = await getDoc(doc(db, "usernames", uname));
  if (username.exists()) {
    return (await getDoc(doc(db, "users", username.data().user_id))).data();
  } else {
    toast.error("Kullanıcı Bulunamadı");
    throw new Error("Kullanıcı Bulunamadı");
  }
};

export const register = async ({ email, full_name, password, username }) => {
  try {
    const user = await getDoc(doc(db, "usernames", username));
    if (user.exists()) {
      toast.error(`${username} this username already exist!`);
    } else {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (response.user) {
        await setDoc(doc(db, "usernames", username), {
          user_id: response.user.uid,
        });
        await setDoc(doc(db, "users", response.user.uid), {
          fullName: full_name,
          username: username,
          followers: [],
          following: [],
          notifications: [],
          website: "",
          bio: "",
          phoneNumber: "",
          gender: "",
          posts: 0,
        });

        await updateProfile(auth.currentUser, {
          displayName: full_name,
        });
        return response.user;
      }
    }
  } catch (err) {
    toast.error(err.code);
    console.log(err);
  }
};
