"use client";

import AdminNavbar from "./AdminNavbar";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

export default function ClientNavbar() {
  const pathname = usePathname();

  return (
    <>
      {pathname.startsWith("/admin") ? <AdminNavbar /> : <Navbar />}
    </>
  );
}
