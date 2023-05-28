import React, { useEffect, useState } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingUp = prevScrollPos > currentScrollPos;

      setIsHeaderVisible(scrollingUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header className={`header ${isHeaderVisible ? "" : "header-hidden"}`}>
      <img src={"schubergphilis.jpg"} alt="Example" onClick={() => window.location.href = "/"}/>
      <div className="navigationButtons">
        <a href="/"> Home </a>
        <a href="/search"> Search </a>
        <a href="/"> Upload </a>
      </div>
    </header>
  );
};

export default Header;