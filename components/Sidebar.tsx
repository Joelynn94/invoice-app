import React from "react";
import Avatar from "./Avatar";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

import "./Sidebar.css";

type Props = {};

export default function Sidebar(props: Props) {
  return (
    <nav className="sidebar">
      <Logo />
      <ThemeToggle />
      <Avatar />
    </nav>
  );
}
