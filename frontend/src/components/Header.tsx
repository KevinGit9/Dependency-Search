import React, { useEffect, useState } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollingUp = prevScrollPos > currentScrollPos;

      setIsHeaderVisible(scrollingUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const currentPath = window.location.pathname;

  return (
    <header className={`header ${isHeaderVisible ? "" : "header-hidden"}`}>
      <img src={"schubergphilis.jpg"} alt="Example" onClick={() => window.location.href = "/"}/>
      <div className="navigationButtons">
        <a href="/" className={currentPath === "/" ? "active" : ""}> Home </a>
        <a href="/search" className={currentPath === "/search" ? "active" : ""}> Search </a>
      </div>
    </header>
  );
};

export default Header;