import React from "react";
import { bebasNeue } from "../utils/fonts";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full py-2 h-fit bg-black flex items-center justify-center">
      <Link href="/">
        <h1 className={`text-frustration-yellow text-7xl uppercase ${bebasNeue.className}`}>Frustration Dashboard</h1>
      </Link>
    </header>
  );
};
