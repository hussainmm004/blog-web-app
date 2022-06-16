import React from "react";
import { signOut } from "firebase/auth";

import { auth } from "../../firebase-config";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Link from "./Link";

export default function displayLink(user) {
  const signOutUser = (e) => {
    e.preventDefault();
    // firebase method that sign user out
    signOut(auth);
  };

  if (user) {
    return (
      <a
        onClick={signOutUser}
        href="/signin"
        className="flex align-items-center justify-space-between"
      >
        <PersonOutlineIcon /> <span>SIGN OUT</span>
      </a>
    );
  }

  if (user == null) {
    return (
      <Link
        href="/signin"
        className="flex align-items-center justify-space-between"
      >
        <PersonOutlineIcon /> <span>SIGN IN</span>
      </Link>
    );
  }
}
