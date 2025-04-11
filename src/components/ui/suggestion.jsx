import Image from "next/image";
import Link from "next/link";

export default function Suggestion({
  id,
  imgURL,
  title,
  duration,
  description,
}) {
  return (
    <article className="flex flex-col items-center gap-5">
      <Image
        src={imgURL}
        width={1000}
        height={1000}
        alt="image"
        className="h-64 w-full object-cover"
      />
      <section className="flex flex-col items-start gap-[10px] w-full px-5">
        <h1 className="text-[23px] font-medium">{title}</h1>
        <div className="flex flex-row-reverse gap-2 items-center">
          <span className="text-[17px] font-[450] h-[20px]">
            2 ساعت و 30 دقیقه
          </span>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0002 22.7501C17.7866 22.7501 21.6668 18.8699 21.6668 14.0834C21.6668 9.29695 17.7866 5.41675 13.0002 5.41675C8.21369 5.41675 4.3335 9.29695 4.3335 14.0834C4.3335 18.8699 8.21369 22.7501 13.0002 22.7501Z"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 9.75V14.0833L15.1667 16.25"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.4165 3.25L2.1665 6.5"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.8335 6.5L20.5835 3.25"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.50016 20.5833L4.3335 22.7499"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.5 20.5833L21.6667 22.7499"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-[18px] font-normal line-clamp-5">
          قورمه سبزی یکی از غذاهای سنتی و محبوب در فرهنگ غذایی ایران است. این
          غذا با ترکیبی از سبزیجات تازه و معمولاً گوشت قرمز، یا گوشت مرغ تهیه
          می‌شود. سبزیجات معمولاً شامل تره، جعفری، گشنیز، شنبلیله و نعناع است که
          به صورت خرد
        </p>
      </section>
      <div className="w-full px-5">
        <Link href={`menu/food`}>
          <button className="bg-slate-900 active:bg-slate-700 text-primary-foreground shadow-xs hover:bg-sky-700 text-lg xl:text-2xl 2xl:text-2xl h-[56px] w-full rounded-[10px] font-[450]">
            کمکم کن بپزمش
          </button>
        </Link>
      </div>
    </article>
  );
}
