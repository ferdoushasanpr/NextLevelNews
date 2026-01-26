import React from "react";
import Link from "next/link";
import { getAvailableNewsYears } from "@/lib/news";

export default function ArchivePage() {
  const availableYears = getAvailableNewsYears();
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {availableYears.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
