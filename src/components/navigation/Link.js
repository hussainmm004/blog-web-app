import React from "react";

export default function Link({ href, className, link, children }) {
  const changeURL = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);

    const nav = new PopStateEvent("popstate");

    window.dispatchEvent(nav);
  };
  return (
    <a onClick={changeURL} href={href} className={className}>
      {children ? children : link}
    </a>
  );
}
