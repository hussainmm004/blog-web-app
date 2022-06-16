import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import Article from "./Article";

export default function HTML() {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    const postsCollectionRef = collection(db, "posts");

    getDocs(postsCollectionRef)
      .then((data) =>
        setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      )
      .catch((err) => console.log(err));
  }, []);

  const htmlList = postsList.filter(
    (post) => post.category.toLowerCase() === "html"
  );
  return (
    <div className="html-section">
      <div className="container">
        <Article postsList={htmlList} />
      </div>
    </div>
  );
}
