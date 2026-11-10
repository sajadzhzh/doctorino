import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import "./header.css";
import { SlMenu } from "react-icons/sl";
import HeaderItems from "./Items";

export default function Header() {
  return (
    <header>
      <Link href={"/"}>
        <Image src={logo} width={500} height={500} alt="Doctorino" />
      </Link>

      <HeaderItems />

      <button className="block lg:hidden">
        <SlMenu />
      </button>
    </header>
  );
}
