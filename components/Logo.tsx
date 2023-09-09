import React from "react";
import Image from "next/image";
import Link from "next/link";

import "./Logo.css";

type Props = {};

export default function Logo(props: Props) {
  return (
    <div className="logo">
      <Link href="/dashboard" className="flex items-center justify-center">
        <Image
          className="logo__img"
          src="/assets/logo.svg"
          alt="logo"
          width={30}
          height={30}
        />
      </Link>
    </div>
  );
}
