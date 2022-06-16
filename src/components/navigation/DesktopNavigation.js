import React from "react";
import Link from "./Link";

export default function DesktopNavigation() {
  return (
    <>
      <div className="sidebar">
        <ul className="flex-column align-items-center">
          <div className="main flex-column">
            <li className="margin-block-1">
              <Link href="/" link="Home" />
            </li>

            <li className="margin-block-1">
              <Link href="/write" link="Write" />
            </li>
          </div>
          <div className="categories flex-column align-items-center">
            <li className="margin-block-1">
              <Link href="/html" link="HTML" />
            </li>
            <li className="margin-block-1">
              <Link href="/css" link="CSS" />
            </li>
            <li className="margin-block-1">
              <Link href="/javascript" link="JS" />
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}
