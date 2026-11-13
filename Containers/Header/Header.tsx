"use client"

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import "./header.css";
import HeaderItems from "./Items";
import Button from "@/Components/Button/Button";
import Menu from "../Menu/Menu";

export default function Header() {
  return (
    <header>
      <Link href={"/"}>
        <Image src={logo} width={500} height={500} alt="Doctorino" />
      </Link>
      
      <div className="hidden w-max lg:flex items-center gap-10">
        <HeaderItems />
      </div>

      <Button theme="primary" className="hidden lg:block h-max my-auto">
        ورود / ثبت‌نام
      </Button>

      <Menu />
    </header>
  );
}
