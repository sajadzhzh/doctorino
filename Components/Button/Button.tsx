import { MouseEventHandler, ReactNode } from "react";

type Colors = "primary" | "glass";
const Themes = {
  primary: {
    bg: "bg-(--primary)",
    hover: "hover:bg-(--primary-hover)",
    font: "text-(--primary-light)",
  },
  glass: {
    bg: "bg-(--surface)",
    hover: "hover:bg-(--surface-hover)",
    font: "text-(--foreground)",
  },
};

export default function Button({
  children,
  className,
  type = "button",
  theme,
  onClick,
}: {
  children: ReactNode;
  className: string;
  type?: "submit" | "reset" | "button";
  theme: Colors;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  const selectedColor = Themes[theme];
  return (
    <button
      className={`cursor-pointer py-2 px-4 rounded-3xl ${selectedColor.font} ${selectedColor.bg} ${selectedColor.hover} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
