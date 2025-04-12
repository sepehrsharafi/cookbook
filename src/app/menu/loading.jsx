import Link from "next/link"; // Keep Link if the button skeleton should still link somewhere, or remove if not needed

export default function Loading() {
  return (
    // Mimic the main structure of the page, skipping Header for simplicity
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

      {/* Optional: Add a separator and another skeleton suggestion if needed */}
      {/* <hr className="bg-gray-300 h-[2px] mx-8 rounded-full" /> */}
      {/* Add another skeleton <article> here if the page usually shows more than one */}
    </main>
  );
}
