"use client";

import React from "react";
import Avatar from "@/app/ui/Avatar";
import Logo from "@/app/ui/Logo";
import ThemeToggle from "@/app/ui/ThemeToggle";

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
