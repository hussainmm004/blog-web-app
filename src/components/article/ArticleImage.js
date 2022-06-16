import React from "react";

export default function ArticleImage({ src, alt }) {
  return <img src={src ? src : null} alt={alt ? alt : null} />;
}
