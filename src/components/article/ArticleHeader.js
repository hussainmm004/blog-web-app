import React from "react";
import Link from "../navigation/Link";

export default function ArticleHeader({ title, author, category,date }) {
  return (
    <div className="heading">
      <h1 id="article-title">{title}</h1>
      <div className="flex gap">
        <h6 id="author">{author}</h6>
        <h6 id="date">{date}</h6>
        <h6 id="category">
          <Link href={`/${category ? category.toLowerCase():"/"}`} link={category} />
        </h6>
      </div>
    </div>
  );
}
