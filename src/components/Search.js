import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

export default function Search({ className, icon }) {
  const [term, setTerm] = useState("");

  const onSearchSubmit = (event) => {
    event.preventDefault();
    console.log(term);
  };

  return (
    <form className={className} onSubmit={(e) => onSearchSubmit(e)}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {icon}
    </form>
  );
}
