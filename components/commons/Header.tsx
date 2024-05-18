"use client";
import React from "react";
import { ModeToggle } from "@/components/organisms/ModeToggle";
import Image from "next/image";
import Brands from "@/images/brands1.png";
import { Toast } from "../atoms/Toast";
import { useState } from "react";
const Header = () => {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="w-full fixed backdrop-blur border-b dark:border-b-[#121212]  border-b-gray-200 ">
      <div className="lg:max-w-6xl mx-auto flex justify-between items-center px-5 py-3 ">
        <div>
          <Image
            src={Brands}
            width={30}
            height={30}
            alt="brandsCode"
            className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
            onLoad={() => setLoading(false)}
          />
        </div>
        <div className="flex items-center gap-x-2">
          <Toast />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
