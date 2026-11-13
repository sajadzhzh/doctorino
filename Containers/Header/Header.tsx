"use client"

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import "./header.css";
import { SlMenu } from "react-icons/sl";
import HeaderItems from "./Items";
import Button from "@/Components/Button/Button";
import Menu from "../Menu/Menu";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false)
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

      <Button theme="glass" className="block lg:hidden h-max my-auto" onClick={() => setOpen(true)}>
        <SlMenu />
      </Button>

      <Menu isOpen={open} setOpen={setOpen}/>
    </header>
  );
}
