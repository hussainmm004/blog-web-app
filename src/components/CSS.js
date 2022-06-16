
import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import Article from "./Article";

export default function CSS() {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    const postsCollectionRef = collection(db, "posts");

    getDocs(postsCollectionRef)
      .then((data) =>
        setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      )
      .catch((err) => console.log(err));
  }, []);

  const cssList = postsList.filter(
    (post) => post.category.toLowerCase() === "css"
  );
  return (
    <div className="css-section">
      <div className="container">
        <Article postsList={cssList} />
      </div>
    </div>
  );
}
