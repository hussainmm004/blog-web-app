import React from "react";
import ArticleHeader from "./article/ArticleHeader";
import ArticleImage from "./article/ArticleImage";
import ArticleParagraph from "./article/ArticleParagraph";

export default function Article({ postsList }) {
  const renderedPost = postsList.map((post, index) => {
    return (
      <div key={index} className="article">
        <ArticleHeader
          title={post.title.toUpperCase()}
          author={post.author.name.toUpperCase()}
          category={post.category.toUpperCase()}
          date={post.articleDate}
        />
        <ArticleImage src={post.imageURL} />
        <main>
          <ArticleParagraph>{post.content}</ArticleParagraph>
        </main>
      </div>
    );
  });
  return <>{renderedPost}</>;
}
