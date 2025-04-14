export default function Loading() {
  const goToThePreviousPage = () => {
    redirect("/");
  };

  return (
    <>
      <header className="z-50 fixed top-0 w-full bg-white backdrop-blur-[4px] flex flex-row items-center h-[70px] border-b-[1px] border-[#E2E8F0] px-5 gap-[10px]">
        <button className="p-2 bg-white/90 rounded-[6px] border-[2px] border-[#E2E8F0]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19"
              stroke="black"
              strokeWidth="2.35"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5L19 12L12 19"
              stroke="black"
              strokeWidth="2.35"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className="h-7 bg-gray-300 rounded w-40 animate-pulse"></span>
      </header>

      <main className="flex flex-col gap-6 mb-5 animate-pulse">
        {/* Skeleton for one Suggestion component */}
        <article className="flex flex-col items-center gap-5">
          {/* Image Placeholder */}
          <div className="bg-gray-300 h-64 w-full"></div>

          <section className="flex flex-col items-start gap-[10px] w-full px-5">
            {/* Title Placeholder */}
            <div className="h-6 w-3/4 bg-gray-300 rounded"></div>

            {/* Duration Placeholder */}
            <div className="flex flex-row-reverse gap-2 items-center w-1/2">
              <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
              {/* SVG can be kept or replaced with a placeholder box */}
              <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
            </div>

            {/* Description Placeholder */}
            <div className="space-y-2 w-full">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="h-4 bg-gray-300 rounded w-4/6"></div>
            </div>
          </section>

          {/* Button Placeholder */}
          <div className="w-full px-5">
            <div className="bg-gray-300 h-[56px] w-full rounded-[10px]"></div>
          </div>
        </article>
        <article className="flex flex-col items-center gap-5">
          {/* Image Placeholder */}
          <div className="bg-gray-300 h-64 w-full"></div>

          <section className="flex flex-col items-start gap-[10px] w-full px-5">
            {/* Title Placeholder */}
            <div className="h-6 w-3/4 bg-gray-300 rounded"></div>

            {/* Duration Placeholder */}
            <div className="flex flex-row-reverse gap-2 items-center w-1/2">
              <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
              {/* SVG can be kept or replaced with a placeholder box */}
              <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
            </div>

            {/* Description Placeholder */}
            <div className="space-y-2 w-full">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="h-4 bg-gray-300 rounded w-4/6"></div>
            </div>
          </section>

          {/* Button Placeholder */}
          <div className="w-full px-5">
            <div className="bg-gray-300 h-[56px] w-full rounded-[10px]"></div>
          </div>
        </article>
      </main>
    </>
  );
}
