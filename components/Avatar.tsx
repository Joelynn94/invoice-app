"use client";

import React from "react";
import Image from "next/image";

import "./Avatar.css";

type Props = {};

export default function Avatar(props: Props) {
  return (
    <div className="avatar">
      <Image
        className="avatar__img"
        src="/assets/image-avatar.jpg"
        alt="user avatar"
        width={60}
        height={60}
      />
    </div>
  );
}
