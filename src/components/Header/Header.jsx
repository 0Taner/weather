import "./Header.css";
import React, { useState, useEffect } from "react";

function Header({ searchText }) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      // searchText değiştiğinde displayText'i güncelle
      setDisplayText(searchText ? `- ${searchText}` : "Turkey");
    }, 700); 

    return () => clearTimeout(timer); // useEffect temizleme fonksiyonu
  }, [searchText]);

  return (
    <div className="header-container">
      <h1>Weather {displayText}</h1>
    </div>
  );
}

export default Header;
