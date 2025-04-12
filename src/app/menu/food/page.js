import Table from "@/components/ui/data-table";
import Header from "@/components/ui/header";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";

export default function Page() {
  const foodData = [
    { item: "گوشت سردست", quantity: "نیم کیلو" },
    { item: "پیاز", quantity: "1 عدد بزرگ" },
    { item: "روغن", quantity: "250 گرم" },
    { item: "لوبیا قرمز", quantity: "نصفه پیمانه" },
    { item: "سبزی خورشت", quantity: "1 کیلوگرم" },
    { item: "زردچوبه", quantity: "به مقدار لازم" },
    { item: "نمک", quantity: "به مقدار لازم" },
    { item: "فلفل", quantity: "به مقدار لازم" },
  ];

  async function Content() {
    return (
      <>
        <Image
          className="w-full object-cover h-80"
          src="/ghorme-sabzi.jpg"
          width={1000}
          height={1000}
          alt="image"
        />
        <section className="mx-5 my-4 gap-3 flex flex-col items-start">
          <h1 className="text-[23px] font-medium h-[30px]">خورش قورمه سبزی</h1>
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
          <p className="text-[18px] font-normal">
            قورمه سبزی یکی از غذاهای سنتی و محبوب در فرهنگ غذایی ایران است. این
            غذا با ترکیبی از سبزیجات تازه و معمولاً گوشت قرمز، یا گوشت مرغ تهیه
            می‌شود. سبزیجات معمولاً شامل تره، جعفری، گشنیز، شنبلیله و نعناع است
            که به صورت خرد شده و همراه با گوشت و ادویه‌ها در قورمه سبزی استفاده
            می‌شوند.
          </p>
        </section>

        <hr className="bg-[#E2E8F0] h-[2px] my-4 mx-8 rounded-full" />

        <Table source={foodData} />

        <hr className="bg-[#E2E8F0] h-[2px] my-4 mx-8 rounded-full" />

        <section>
          <h1 className="text-[19px] font-medium mx-5 mb-2">طرز تهیه:</h1>
          <div className="mx-5">
            <ol
              style={{ listStyle: "arabic-indic", listStylePosition: "inside" }}
              className="text-lg font-normal list-decimal"
              lang="fa"
            >
              <li>نخودها را از شب قبل خیس کنید و بپزید تا نرم شوند.</li>
              <li>
                در قابلمه، پیاز را با روغن تفت دهید تا طلایی شود. سیر را اضافه و
                کمی تفت دهید.
              </li>
              <li>
                سبزی‌ها (جعفری، گشنیز، شوید) را اضافه و تفت دهید تا عطرشان بلند
                شود.
              </li>
              <li>
                نخود پخته، تخم گشنیز، پودر تخم گشنیز، پودر لیمو عمانی، نمک و
                فلفل را اضافه کنید.
              </li>
              <li>
                آب جوش به اندازه‌ای اضافه کنید که مواد را بپوشاند (حدود ۲-۳
                پیمانه).
              </li>
              <li>
                با حرارت ملایم بگذارید ۱-۱.۵ ساعت بپزد تا جا بیفتد. اگر آب کم
                بود، اضافه کنید.
              </li>
              <li>
                در آخر، برای غلظت می‌توانید کمی آرد نخودچی حل‌شده در آب سرد
                اضافه کنید.
              </li>
            </ol>
          </div>
        </section>

        <hr className="bg-[#E2E8F0] h-[2px] my-4 mx-8 rounded-full" />

        <section>
          <h1 className="text-[19px] font-medium mx-5 mb-2">طرز تهیه:</h1>
          <div className="mx-5">
            <ul
              style={{ listStylePosition: "inside" }}
              className="text-lg font-normal list-disc"
            >
              <li>با برنج سفید، ترشی و ماست سرو کنید.</li>
            </ul>
          </div>
        </section>

        <section className="mx-5 my-7">
          <p className="text-[22px] font-medium">نوش جان! 🌿</p>
        </section>
      </>
    );
  }

  return (
    <>
      <Header placeholder={"برگشت به منو"} route={"food"} />
      <Suspense fallback={<Loading />}>
        <Content />
      </Suspense>
    </>
  );
}
