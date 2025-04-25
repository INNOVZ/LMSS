"use client";

import { getPageData } from "@/lib/pageContent";
import { useEffect, useState } from "react";

type FooterData = {
  copyright: string;
};

export default function Footer() {
  const [footer, setFooter] = useState<FooterData | null>(null);

  useEffect(() => {
    getPageData("home").then((data) => setFooter(data?.footer));
  }, []);

  if (!footer) return null;

  return (
    <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600">
      {footer?.copyright}
    </footer>
  );
}
