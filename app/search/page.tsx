"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import { CROCS_ITEMS } from "../../data/crocs_data";
import { BIRKEN_ITEMS } from "../../data/birkenstock_data";
import { ProductItem } from "../../data/crocs_data";

function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q")?.toLowerCase() || "";

    // Combine all items
    const allItems: ProductItem[] = [...CROCS_ITEMS, ...BIRKEN_ITEMS];

    // Filter items
    const results = allItems.filter((item) => {
        return (
            item.name.toLowerCase().includes(query) ||
            item.color.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
    });

    return (
        <div className="min-h-screen">
            <Navbar />

            <main className="mx-auto max-w-6xl px-4 py-20">
                <div className="mb-10 text-center">
                    <h1 className="text-2xl md:text-3xl font-light uppercase tracking-[0.25em] text-[#0f0f0f]">
                        Search Results
                    </h1>
                    <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#6a6a6a]">
                        {results.length} results for "{query}"
                    </p>
                </div>

                {results.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {results.map((item, idx) => (
                            <article
                                key={idx}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-[#e5e5e0] bg-white transition hover:-translate-y-1 hover:border-[#0f0f0f]"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                                    <div className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#0f0f0f] border border-[#e5e5e0]">
                                        {item.condition}
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col gap-2 px-4 py-4">
                                    <div className="flex justify-between items-start">
                                        <div className="text-[11px] uppercase tracking-[0.25em] text-[#4a4a4a]">
                                            {item.color}
                                        </div>
                                        <div className="font-medium text-[#0f0f0f]">
                                            ${item.price.toFixed(2)}
                                        </div>
                                    </div>

                                    <h3 className="text-base font-light md:text-lg text-[#0f0f0f]">
                                        {item.name}
                                    </h3>

                                    <p className="mt-1 text-[12px] leading-relaxed text-[#4a4a4a]">
                                        {item.description}
                                    </p>

                                    <div className="mt-3 flex gap-2">
                                        <span className="inline-block w-fit rounded-full border border-[#e5e5e0] bg-[#fafaf8] px-2 py-1 text-[11px] uppercase tracking-[0.18em] text-[#0f0f0f]">
                                            {item.category}
                                        </span>
                                    </div>


                                    <p className="mt-auto pt-4 text-[11px] text-[#6a6a6a]">
                                        View in {item.fit ? "Birkenstock" : "Crocs"} section to reserve.
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="mt-20 text-center text-sm text-[#6a6a6a]">
                        No items found. Try a different search term.
                    </div>
                )}
            </main>
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div>Loading search...</div>}>
            <SearchContent />
        </Suspense>
    );
}
