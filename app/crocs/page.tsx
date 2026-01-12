"use client";

const heroImg = { src: "/crocs_batch_1/1crocs.jpeg" };

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { CROCS_ITEMS } from "../../data/crocs_data";

type Category =
  | "Classic"
  | "Baya"
  | "CrocBand"
  | "Platform"
  | "Crush"
  | "Marbled";

const ClassicImg = { src: "/crocs_batch_1/Classic.jpeg" };
const CrushImg = { src: "/crocs_batch_1/crush_pink.png" };
const PlatformImg = { src: "/crocs_batch_2/5crocs.jpeg" };
const CrocBandImg = { src: "/crocs_batch_2/CrocBand.jpeg" };
const BayaImg = { src: "/crocs_batch_3/Baya.jpeg" };
const MarbledImg = { src: "/crocs_batch_2/marble_blue.png" };

const CATEGORIES: { id: Category; label: string; img: string }[] = [
  { id: "Classic", label: "Classic Clog", img: ClassicImg.src },
  { id: "Crush", label: "Crush Clog", img: CrushImg.src },
  { id: "Platform", label: "Platform Clog", img: PlatformImg.src },
  { id: "CrocBand", label: "Crocband", img: CrocBandImg.src },
  { id: "Baya", label: "Baya Clog", img: BayaImg.src },
  { id: "Marbled", label: "Marbled", img: MarbledImg.src },
];

export default function CrocsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const filteredItems = selectedCategory
    ? CROCS_ITEMS.filter((item) => item.category === selectedCategory)
    : [];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pb-16">
        {/* HERO */}
        <section className="relative flex min-h-[40vh] items-end overflow-hidden">
          <img
            src={heroImg.src}
            alt="Crocs lineup"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* light-friendly overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/10" />

          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-10 pt-24 text-center">
            <h1 className="text-4xl md:text-6xl font-light text-[#0f0f0f] tracking-tight">
              Crocs Collection
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-sm md:text-base text-[#4a4a4a]">
              Select a style below to view available colors.
            </p>
          </div>
        </section>

        {/* IMAGE CATEGORY SELECTOR */}
        <section className="relative z-20 mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`group flex flex-col items-center gap-3 transition-all duration-300
                    ${selectedCategory === cat.id ? "scale-110" : "hover:scale-105 opacity-90 hover:opacity-100"}
                  `}
              >
                <div className={`
                    relative h-24 w-24 md:h-32 md:w-32 overflow-hidden rounded-full border-2 shadow-lg transition-colors
                    ${selectedCategory === cat.id ? "border-[#0f0f0f] ring-2 ring-[#0f0f0f]/20" : "border-white group-hover:border-[#e5e5e0]"}
                  `}>
                  <img
                    src={cat.img}
                    alt={cat.label}
                    className="h-full w-full object-cover"
                  />
                  {selectedCategory === cat.id && (
                    <div className="absolute inset-0 bg-black/10" />
                  )}
                </div>
                <span className={`text-xs uppercase tracking-[0.2em] font-medium 
                    ${selectedCategory === cat.id ? "text-[#0f0f0f]" : "text-[#6a6a6a]"}
                  `}>
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* PRODUCT GRID */}
        {selectedCategory && (
          <section className="mx-auto mt-16 max-w-6xl px-4 animate-fadeIn">
            <div className="mb-6 flex items-baseline justify-between border-b border-[#e5e5e0] pb-4">
              <h2 className="text-xl md:text-2xl uppercase tracking-[0.25em] text-[#0f0f0f]">
                {selectedCategory} Collection
              </h2>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-xs uppercase tracking-[0.2em] text-[#6a6a6a] hover:text-[#0f0f0f]"
              >
                Clear Filter
              </button>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item, idx) => (
                <article
                  key={item.category + item.color + idx}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white transition hover:-translate-y-1 hover:shadow-xl shadow-sm border border-transparent hover:border-[#e5e5e0]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#fafaf8]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
                    <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#0f0f0f] shadow-sm backdrop-blur-sm">
                      {item.condition}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex justify-between items-start">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-[#6a6a6a]">
                        {item.color}
                      </div>
                      <div className="font-medium text-[#0f0f0f]">
                        ₹{item.price.toLocaleString()}
                      </div>
                    </div>

                    <h3 className="mt-2 text-lg font-normal text-[#0f0f0f]">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-[#6a6a6a]">
                      {item.description}
                    </p>

                    <div className="mt-auto pt-6">
                      <span className="inline-block w-full rounded-lg bg-[#fafaf8] py-2 text-center text-[10px] uppercase tracking-[0.2em] text-[#0f0f0f] group-hover:bg-[#0f0f0f] group-hover:text-white transition-colors">
                        View Details
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
