"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Logo(props: Props) {
  return (
    <div className="min-h-18 min-w-18 bg-[var(--primary)] rounded-tr-lg rounded-br-lg flex justify-center xl:w-full p-4">
      <Link href="/" className="flex items-center justify-center">
        <Image
          className="self-center justify-center w-10 h-10"
          src="/assets/logo.svg"
          alt="logo"
          width={30}
          height={30}
        />
      </Link>
    </div>
  );
}
