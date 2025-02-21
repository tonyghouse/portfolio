'use client'

import Link from "next/link";

export default function Footer() {
    return (
      <div className={"flex items-center justify-center"}>
        <span className={"slate p-8 font-monospace text-xs lg:text-sm text-center"}>
        Built by{" "} 
          <Link
            className={"hover-accent"}
            href={"https://github.com/tonyghouse"}
            target={"_blank"}
            rel="noreferrer"
          >
          Tony Ghouse
          </Link>
        </span>
      </div>
    );
  }