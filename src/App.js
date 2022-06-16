import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";

import Navbar from "./components/Navbar";
import Route from "./components/navigation/Route";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import HTML from "./components/HTML";
import CSS from "./components/CSS";
import Javascript from "./components/Javascript";
import ContentManagement from "./components/ContentManagement";
import displayLink from "./components/navigation/DisplayLink";
import "./css/styles.css";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //   onAuth listens for a user logging in/out
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        if (window.location.pathname === "/write") {
          return;
        }
        // Redirect
        window.history.pushState({}, "", "/");
        const nav = new PopStateEvent("popstate");
        window.dispatchEvent(nav);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <Navbar link={displayLink(user)} />

      <Route path="/">
        <Home />
      </Route>

      <Route path="/write">{user ? <ContentManagement /> : <SignIn />}</Route>

      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/html">
        <HTML />
      </Route>
      <Route path="/css">
        <CSS />
      </Route>
      <Route path="/javascript">
        <Javascript />
      </Route>
    </div>
  );
}
