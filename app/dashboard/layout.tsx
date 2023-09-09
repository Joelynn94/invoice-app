import Link from "next/link";

import { AppContextProvider } from "../../context/app-context";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppContextProvider>
      <Sidebar />
      <main>{children}</main>
    </AppContextProvider>
  );
}
