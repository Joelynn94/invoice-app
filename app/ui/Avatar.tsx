"use client";

import React from "react";
import Image from "next/image";

type Props = {};

export default function Avatar(props: Props) {
  return (
    <div className="flex self-center p-5">
      <Image
        className="h-10 w-10 self-end rounded-full overflow-hidden object-cover"
        src="/assets/image-avatar.jpg"
        alt="user avatar"
        width={60}
        height={60}
      />
    </div>
  );
}
