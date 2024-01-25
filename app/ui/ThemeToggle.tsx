"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";

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
    <div className="flex-[2] flex justify-end border-r-1 border-r border-solid border-[var(--divider)] pr-4 xl:flex-col xl:justify-end xl:border-b-1 xl:border-r-0 xl:border-b xl:border-solid; xl:w-full xl:pr-0 xl:pb-3 ">
      <button className="self-center justify-center p-4" onClick={toggleTheme}>
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
