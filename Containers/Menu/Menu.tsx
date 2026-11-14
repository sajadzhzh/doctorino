"use client";

import Button from "@/Components/Button/Button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import "./menu.css";
import HeaderItems from "../Header/Items";

export default function Menu() {
  const Ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (Ref.current && !Ref.current.contains(event.target as Node)) {
        setOpen(false);
      }

      if (Ref.current?.contains(event.target as Node)) {
        setTimeout(() => {
          setOpen(false);
        }, 250);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  return (
    <>
      <Button
        theme="glass"
        className="lg:hidden h-max my-auto"
        onClick={() => setOpen(true)}
      >
        <IoMenu size={24} />
      </Button>

      <div
        className={
          open
            ? "absolute show right-0 top-0 w-full h-svh bg-gray-600/50 z-999"
            : "absolute right-0 top-0 w-full h-svh bg-gray-600/50 z-999 hidden hide"
        }
      >
        <div
          className={`menu ${open ? "translate-x-0 slideLeft" : "translate-x-full slideRight"}`}
          ref={Ref}
        >
          <div className="flex flex-col gap-5 h-full">
            <Link href={"/"} className="w-full border-b border-(--border) py-4">
              <h1 className="text-[20px] font-bold text-center">دکترینو</h1>
            </Link>

            <HeaderItems />

            <Button theme="primary" className="mt-auto mb-5 h-max">
              ورود / ثبت‌نام
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
