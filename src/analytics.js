"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-X8JNZVX2PS", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
