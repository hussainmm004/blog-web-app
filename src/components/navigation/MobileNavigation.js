import React, { useEffect, useRef } from "react";

import Link from "./Link";

export default function MobileNavigation({ setIsOpen, isOpen, link }) {
  const mobileNavRef = useRef();

  useEffect(() => {
    const onMobileLinkClick = (e) => {
      if (mobileNavRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", onMobileLinkClick);

    return () => document.removeEventListener("click", onMobileLinkClick);
  }, [mobileNavRef, setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      mobileNavRef.current.style.transform = "translateX(0)";
      return;
    }

    if (!isOpen) {
      mobileNavRef.current.style.transform = "translateX(-1000rem)";
      return;
    }
  }, [isOpen, mobileNavRef]);

  return (
    <>
      <div ref={mobileNavRef} className="mobile-navigation">
        <ul className="flex-column align-items-center">
          <li className="margin-block-1">
            <Link href="/" link="Home" />
          </li>

          <li className="margin-block-1">
            <Link href="/write" link="Write" />
          </li>
          <li className="margin-block-1">
            <Link href="/html" link="HTML" />
          </li>
          <li className="margin-block-1">
            <Link href="/css" link="CSS" />
          </li>
          <li className="margin-block-1">
            <Link href="/javascript" link="JS" />
          </li>
          <div className="button">{link}</div>
        </ul>
      </div>
    </>
  );
}
