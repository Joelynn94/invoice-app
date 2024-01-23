import Link from "next/link";
import Image from "next/image";

export default function InvoiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <Link href="/" className="flex items-center gap-4 py-4 mt-10">
        <Image
          className="go-back__arrow"
          src="/assets/icon-arrow-left.svg"
          alt=""
          width={7}
          height={10}
          style={{ height: "auto", width: "auto" }}
        />
        Go back
      </Link>

      {children}
    </div>
  );
}
