import React, { useState, useEffect } from "react";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hello, I'm Icaro Araujo, Full Stack Developer";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (typedText.length === fullText.length) {
        clearInterval(typingInterval);
        return;
      }
      setTypedText(prevText => prevText + fullText[prevText.length]);
    }, 50);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div className="home">
      <div className="header">
        <h3 className="name">Icaro's Portfolio</h3>
      </div>
      <div className="content">
        <h1 className="typed-text">{typedText}</h1>
      </div>
    </div>
  );
};

export default Home;
