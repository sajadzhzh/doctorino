import Link from "next/link"

export default function HeaderItems(){
    return(
        <div className="w-max flex items-center gap-10">
            <Link href={""} className="h-full flex flex-col justify-center group">
                <div className="my-auto">صفحه اصلی</div>
                <div className="opacity-0 w-0 group-hover:opacity-100 group-hover:w-full border border-(--primary) mx-auto"></div>
            </Link>
            <Link href={""} className="h-full flex flex-col justify-center group">
                <div className="my-auto">پزشکان</div>
                <div className="opacity-0 w-0 group-hover:opacity-100 group-hover:w-full border border-(--primary) mx-auto"></div>
            </Link>
            <Link href={""} className="h-full flex flex-col justify-center group">
                <div className="my-auto">خدمات</div>
                <div className="opacity-0 w-0 group-hover:opacity-100 group-hover:w-full border border-(--primary) mx-auto"></div>
            </Link>
            <Link href={""} className="h-full flex flex-col justify-center group">
                <div className="my-auto">درباره ما</div>
                <div className="opacity-0 w-0 group-hover:opacity-100 group-hover:w-full border border-(--primary) mx-auto"></div>
            </Link>
            <Link href={""} className="h-full flex flex-col justify-center group">
                <div className="my-auto">تماس با ما</div>
                <div className="opacity-0 w-0 group-hover:opacity-100 group-hover:w-full border border-(--primary) mx-auto"></div>
            </Link>
        </div>
    )
}