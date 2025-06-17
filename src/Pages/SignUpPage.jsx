import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import InputBox from "../components/UIComponents/InputBox";
import Button from "../components/UIComponents/Button";
import DummyHero from "../components/HeroComponent/Hero.jsx";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth.currentUser.email);

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <DummyHero statement="Join us today and be part of the SamskritaBharati family!" />
      <div className=" mt-25 flex flex-wrap items-center justify-center p-5">
        <div className="flex flex-col items-center justify-center w-96 p-6 border border-[#F1F7ED] shadow-md bg-[#F1F7ED] rounded-4xl">
          <h3 className="font-serif italic tracking-[.13em] font-black text-[12px] text-[#262322] mb-4 text-center">
            Enter your Email
            <br />
            <span className="mt-2 block">Password to Sign Up</span>
          </h3>

          <InputBox
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            width="w-56"
            height="h-9"
            type="email"
            name="email"
          />

          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            width="w-56"
            height="h-9"
            type="password"
            name="password"
          />

          <Button
            onClick={signIn}
            label="Sign Up"
            width="w-32"
            height="h-10"
            background="bg-stone-600"
            border="border-1"
            margin="m-10
          "
          />
          <Button
            onClick={signInWithGoogle}
            label="Google"
            width="w-32"
            height="h-10"
            background="bg-stone-600"
            border="border-1"
            margin="mt-1"
          />
          <Button
            onClick={logOut}
            label="logout"
            width="w-32"
            height="h-10"
            background="bg-stone-600"
            border="border-1"
            margin="mt-1"
          />
        </div>
      </div>
    </>
  );
};

export default Auth;
