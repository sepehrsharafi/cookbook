import React from "react";
export default function Table({ source }) {
  return (
    <>
      <section className="border-[1px] rounded-2xl p-4  mx-4 flex flex-col gap-4">
        {source.map((item, key) => (
          <React.Fragment key={`${item.item} - ${key}`}>
            <div className="flex flex-row">
              <div className="w-[42%] text-lg font-medium">{item.item}</div>
              <hr className="bg-[#E6CFCF] w-[1px] h-7 mx-2 rounded-full" />
              <div className=" text-lg font-normal">{item.quantity}</div>
            </div>
            {key < source.length - 1 && (
              <hr className="bg-[#E2E8F0] h-[1px] mx-8 rounded-full" />
            )}
          </React.Fragment>
        ))}
      </section>
    </>
  );
}
