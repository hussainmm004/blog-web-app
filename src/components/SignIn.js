import React, { useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

export default function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const signInUser = (email, password) => {
    //   Firebase method that listens for users logging in
    signInWithEmailAndPassword(auth, email, password);
  };

  const onSignIn = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email && password) {
      signInUser(email, password);
    }
  };

  return (
    <div className="sign-in">
      <div className="container flex-column gap align-items-center">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          ref={emailRef}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          ref={passwordRef}
        />

        <button className="button" onClick={onSignIn}>
          Sign In
        </button>
      </div>
    </div>
  );
}
