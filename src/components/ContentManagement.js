import React, { useRef, useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";

export default function ContentManagement() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [articleDate, setArticleDate] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [content, setContent] = useState("");

  const formRef = useRef();

  const postsCollectionRef = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      category,
      articleDate,
      imageURL,
      content,
      author: { name, id: auth.currentUser.uid },
    });
  };

  useEffect(() => {
    const onClickListener = (event) => {
      const clearFields = formRef.current.children[0].children[0].children[6];

      if (clearFields.contains(event.target)) {
        event.preventDefault();
        setTitle("");
        setName("");
        setCategory("");
        setArticleDate("");
        setImageURL("");

        return;
      }
    };
    document.addEventListener("click", onClickListener);

    return () => {
      document.removeEventListener("click", onClickListener);
    };
  }, []);

  return (
    <div className="content-management-section" ref={formRef}>
      <div className="container">
        <form>
          <input
            type="text"
            id="blog-heading"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            id="blog-author"
            placeholder="Author"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            id="blog-category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="date"
            name="date"
            id="date"
            value={articleDate}
            onChange={(e) => setArticleDate(e.target.value)}
          />
          <input
            type="text"
            name="image-url"
            id="image-url"
            placeholder="Image URL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
          <textarea
            className="cms-text-area"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <button id="clear-fields" className="button">
            Clear Fields
          </button>
          <button
            id="post-button"
            className="button"
            onClick={(e) => {
              e.preventDefault();
              createPost()
                .then(() => {
                  window.history.pushState({}, "", "/");
                  const nav = new PopStateEvent("popstate");
                  window.dispatchEvent(nav);
                })
                .catch((err) => console.log(err));
            }}
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}
