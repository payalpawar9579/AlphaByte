// src/firebase/auth.ts

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyDE5BYJiwzI8_K0QL0k91rITVRApFI2BPQ',
  authDomain: "hiring-management-ccda4.firebaseapp.com",
  projectId: "hiring-management-ccda4",
  storageBucket: "hiring-management-ccda4.appspot.com",
  messagingSenderId: "697464781124",
  appId: "1:697464781124:web:eaca45e8e5eed54f79ff11",
  measurementId: "G-ZWXHBBZKSC"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export const signIn = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const register = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const resetPassword = async (email: string) => {
  await sendPasswordResetEmail(auth, email);
};