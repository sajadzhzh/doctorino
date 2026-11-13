import { Dispatch, SetStateAction } from "react";
import "./menu.css";
import Button from "@/Components/Button/Button";
import { IoClose } from "react-icons/io5";

export default function Menu({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <menu className={isOpen ? "menu-container" : "hidden"}>
      <section className="menu">
        <div className="py-2 w-full flex justify-between items-center border-b border-(--border)">
          <h2 className="text-xl font-bold">دکترینو</h2>
          <Button theme="glass" onClick={() => setOpen(false)}>
            <IoClose size={20} />
          </Button>
        </div>
      </section>
    </menu>
  );
}
