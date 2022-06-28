import React, { useState } from "react";

export default function EditableParagraph() {
  const [content, setContent] = useState("");

  return (
    <p
      onChange={(e) => setContent(e.target.value)}
      value={content}
      id="editable-paragraph"
      contentEditable={true}
    ></p>
  );
}
