"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";

import "./ThemeToggle.css";

type Props = {};

export default function ThemeToggle(props: Props) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Access the document object here since it runs on the client side.
    const currentTheme = document.documentElement.getAttribute("data-mode");
    setTheme(currentTheme || "dark");
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-mode", "dark");
      setTheme("dark");
    } else {
      document.documentElement.setAttribute("data-mode", "light");
      setTheme("light");
    }
  };

  return (
    <div className="themeToggle">
      <button className="themeToggle__btn" onClick={toggleTheme}>
        {theme === "light" ? (
          <Image
            src="/assets/icon-moon.svg"
            alt="theme dark icon"
            height={20}
            width={20}
          />
        ) : (
          <Image
            src="/assets/icon-sun.svg"
            alt="theme light icon"
            height={20}
            width={20}
          />
        )}
      </button>
    </div>
  );
}
