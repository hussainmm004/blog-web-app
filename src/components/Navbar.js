import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import MobileNavigation from "./navigation/MobileNavigation";
import DesktopNavigation from "./navigation/DesktopNavigation";
import Link from "./navigation/Link";
import Search from "./Search";


export default function Navbar({ link }) {
  const [isOpen, setIsOpen] = useState(false);


  

  return (
    <>
      <div className="navbar flex align-items-center justify-space-between padding-inline-1">
        <div onClick={() => setIsOpen(!isOpen)} className="hamburger">
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        <div className="logo">
          <Link href="/" link="MOHAMMAD HUSSAIN" />
        </div>
        {/* <Search
          className="searchbar flex align-items-center"
          icon={<SearchIcon />}
        /> */}
        <div className="button">{link}</div>
      </div>
      <DesktopNavigation />

      {/* Mobile nav */}
      <MobileNavigation
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        link={link}
      />
    </>
  );
}
