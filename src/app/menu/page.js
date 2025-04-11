import Header from "@/components/ui/header";
import Suggestion from "@/components/ui/suggestion";

export default async function Page() {
  return (
    <>
      <Header placeholder="برگشت به صفحه اصلی" route={"menu"} />

      <main className="flex flex-col gap-6 mb-5">
        <Suggestion
          id={1}
          imgURL="/ghorme-sabzi.jpg"
          title="خورش قورمه سبزی"
          duration=" 2 ساعت و 30 دقیقه"
          description="          قورمه سبزی یکی از غذاهای سنتی و محبوب در فرهنگ غذایی ایران است. این
          غذا با ترکیبی از سبزیجات تازه و معمولاً گوشت قرمز، یا گوشت مرغ تهیه
          می‌شود. سبزیجات معمولاً شامل تره، جعفری، گشنیز، شنبلیله و نعناع است که
          به صورت خرد"
        />
        <hr className="bg-[#E2E8F0] h-[2px] mx-8 rounded-full" />
        <Suggestion
          id={2}
          imgURL={"/خورشت-قیمه.jpg"}
          title="خورش قیمه"
          duration="3 ساعت"
          description="خورش قیمه نیز مانند قورمه سبزی، زرشک پلو، فسنجون از غذای اصیل و قدیمی ما ایرانی ها می باشد که در بیشتر مراسم ها و مهمانی ها سرو می شود برای خوشمزه شدن و جا افتاده تر قیمه بهتر است به یک سری از نقاطی که در زیر به آن اشاره شده است دقت کنید ، اگر تمامی این نکات را در طرز تهیه خورش قیمه رعایت کنید می توانید بهترین طعم جا افتاده رو به خورشت قیمه خود بدهید که در این صورت می توانید"
        />
      </main>
    </>
  );
}
