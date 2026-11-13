import Link from "next/link";

export default function HeaderItems() {
  return (
    <>
      <Link href={""} className="header-item">
        <div className="my-auto text-(--primary)">صفحه اصلی</div>
        <div className="w-full border border-(--primary) mx-auto"></div>
      </Link>
      <Link href={""} className="header-item group">
        <div className="my-auto">پزشکان</div>
        <div className="opacity-0 w-0 lg:group-hover:opacity-100 lg:group-hover:w-full border border-(--primary) mx-auto"></div>
      </Link>
      <Link href={""} className="header-item group">
        <div className="my-auto">خدمات</div>
        <div className="opacity-0 w-0 lg:group-hover:opacity-100 lg:group-hover:w-full border border-(--primary) mx-auto"></div>
      </Link>
      <Link href={""} className="header-item group">
        <div className="my-auto">درباره ما</div>
        <div className="opacity-0 w-0 lg:group-hover:opacity-100 lg:group-hover:w-full border border-(--primary) mx-auto"></div>
      </Link>
      <Link href={""} className="header-item group">
        <div className="my-auto">تماس با ما</div>
        <div className="opacity-0 w-0 lg:group-hover:opacity-100 lg:group-hover:w-full border border-(--primary) mx-auto"></div>
      </Link>
    </>
  );
}
