"use client";
import { useEffect, useState } from "react";

export default function AIFoodRecipe() {
  const [aiRecipe, setAiRecipe] = useState(null);
  const [aiError, setAiError] = useState(null);
  const [aiRaw, setAiRaw] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipe() {
      setLoading(true);
      setAiError(null);
      setAiRecipe(null);
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: "یک دستور غذای ایرانی بده" }),
        });
        if (res.ok) {
          const data = await res.json();
          setAiRaw(data);
          let recipe = null;
          // Try OpenAI-style structure first
          if (data.response?.choices?.[0]?.message?.content) {
            recipe = JSON.parse(data.response.choices[0].message.content);
          }
          // Fallback: plain stringified JSON in response
          else if (
            typeof data.response === "string" &&
            data.response.trim().startsWith("{")
          ) {
            try {
              recipe = JSON.parse(data.response);
            } catch (e) {
              recipe = null;
            }
          }
          setAiRecipe(recipe);
        } else {
          setAiError(`API error: ${res.status}`);
        }
      } catch (e) {
        setAiError(e?.message || "Unknown error");
      }
      setLoading(false);
    }
    fetchRecipe();
  }, []);

  return (
    <section className="mx-5 my-7 border-t pt-6">
      <h2 className="text-[22px] font-bold mb-2">دستور پیشنهادی هوش مصنوعی</h2>
      {loading && (
        <div className="text-gray-500 mb-2">
          در حال دریافت پاسخ از هوش مصنوعی...
        </div>
      )}
      {aiError && (
        <div className="text-red-600 mb-2">
          خطا در دریافت پاسخ از هوش مصنوعی: {aiError}
        </div>
      )}
      {!aiRecipe && !aiError && !loading && (
        <div className="text-gray-500 mb-2">
          هیچ پاسخی از هوش مصنوعی دریافت نشد.
        </div>
      )}
      {aiRecipe && (
        <>
          <p className="text-lg font-semibold mb-1">{aiRecipe.title}</p>
          <p className="mb-2">{aiRecipe.shortDescription}</p>
          <p className="mb-2">{aiRecipe.longDescription}</p>
          <h3 className="font-bold mt-3 mb-1">مواد لازم:</h3>
          <ul className="list-disc ml-6 mb-2">
            {aiRecipe.ingredients?.map((ing, idx) => (
              <li key={idx}>
                {ing.item} - {ing.quantity}
              </li>
            ))}
          </ul>
          <h3 className="font-bold mt-3 mb-1">طرز تهیه:</h3>
          <ol className="list-decimal ml-6 mb-2">
            {aiRecipe.instructions?.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
          <p className="mt-3">{aiRecipe.enjoyMessage}</p>
        </>
      )}
      {aiRaw && (
        <details className="mt-4 text-xs text-gray-400">
          <summary>AI Raw Response (debug)</summary>
          <pre>{JSON.stringify(aiRaw, null, 2)}</pre>
        </details>
      )}
    </section>
  );
}
