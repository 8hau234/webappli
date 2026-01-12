"use client";

const hero1 = { src: "/birkenstock_batch_1/hero1.jpg" };
const hero2 = { src: "/birkenstock_batch_2/hero2.jpg" };
const hero3 = { src: "/birkenstock_batch_3/hero3.jpg" };
const birken1 = { src: "/birkenstock_batch_1/birken1.jpg" };

const Assets_img_0 = hero1;
const Assets_img_1 = hero2;
const Assets_img_2 = hero3;
const Assets_img_3 = birken1;
import React from "react";
import Navbar from "./components/Navbar";
import { CheckCircle, Truck, Banknote, ArrowRight } from "lucide-react";

// simple data for each full-screen section
const SLIDES = [
  {
    label: "STORE OVERSIZED",
    title: "Authentic Comfort. Delivered.",
    subtitle: "Official Crocs & Birkenstocks in Nepal. 100% Original. Cash on Delivery Available.",
    img: Assets_img_0.src,
  },
  {
    label: "CROCS SELECTION",
    title: "Classic & Mega Crush",
    subtitle: "From clean white classics to chunky platforms.",
    img: Assets_img_1.src,
  },
  {
    label: "BIRKENSTOCK LINEUP",
    title: "Arizona & Boston Essentials",
    subtitle: "Neutral suede, soft footbeds, everyday comfort.",
    img: Assets_img_2.src,
  },
  {
    label: "LAST PAIRS",
    title: "Final Sizes. Don’t Sleep.",
    subtitle: "End-of-run sizes and pre-loved steals, updated weekly.",
    img: Assets_img_3.src,
  },
];



export default function Home() {

  return (
    <div className="min-h-screen">
      {/* NAVBAR (light) */}
      <Navbar />

      {/* FULLSCREEN SECTIONS */}
      <main>
        {SLIDES.map((slide, i) => (
          <section
            key={i}
            className="relative flex min-h-screen w-full items-end overflow-hidden"
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 md:hover:scale-105"
            />

            {/* DARK OVERLAY for Readability */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Additional gradients for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* content */}
            <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-20 pt-24 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/80 justify-center md:justify-start">
                <span>{slide.label}</span>
                <span className="hidden md:block h-px w-10 bg-white/70" />
                <span>
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(SLIDES.length).padStart(2, "0")}
                </span>
              </div>

              <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-sm max-w-4xl mx-auto md:mx-0">
                {slide.title}
              </h1>

              <p className="mt-4 max-w-xl text-base md:text-lg text-white/95 font-medium mx-auto md:mx-0">
                {slide.subtitle}
              </p>

              {/* CTA buttons only on first slide */}
              {i === 0 && (
                <div className="mt-8 flex flex-col items-center md:items-start animate-fadeIn">
                  <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                    <a
                      href="/crocs"
                      className="group flex items-center justify-center gap-2 bg-white px-8 py-3 text-sm font-bold uppercase tracking-widest text-[#0f0f0f] shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#f0f0f0] active:scale-95 w-full md:w-auto"
                    >
                      Shop Online
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>

                    <button
                      className="group flex items-center justify-center gap-2 border border-white/80 px-8 py-3 text-sm font-medium uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white w-full md:w-auto"
                    >
                      📍 Visit Store
                    </button>
                  </div>

                  {/* TRUST BADGES / TRUST BAR */}
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 justify-center md:justify-start border-t border-white/20 pt-6">
                    <div className="flex items-center gap-2 text-white/95 opacity-90">
                      <CheckCircle className="h-5 w-5 md:h-4 md:w-4" />
                      <span className="text-xs font-semibold uppercase tracking-wider">100% Authentic</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/95 opacity-90">
                      <Truck className="h-5 w-5 md:h-4 md:w-4" />
                      <span className="text-xs font-semibold uppercase tracking-wider">24h Delivery (KTM)</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/95 opacity-90">
                      <Banknote className="h-5 w-5 md:h-4 md:w-4" />
                      <span className="text-xs font-semibold uppercase tracking-wider">Cash on Delivery</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}


        {/* FLOATING WHATSAPP BUTTON */}
        <a
          href="https://wa.me/9779742360102"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 group pointer-events-auto"
        >
          <div className="relative flex items-center justify-center h-14 w-14 bg-[#25D366] rounded-full shadow-2xl text-white transition-transform duration-300 hover:scale-110 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
            </svg>

            {/* Tooltip */}
            <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#0F0F0F] text-white text-xs font-bold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Chat with us
            </span>
          </div>
        </a>

        {/* FOOTER (light) */}
        <footer className="border-t border-[#e5e5e0] bg-[#fafaf8] py-16">
          <div className="mx-auto flex max-w-6xl flex-col md:flex-row gap-10 px-4 justify-between">
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold uppercase tracking-widest text-[#0f0f0f]">Store Oversized</h4>
              <p className="text-sm text-[#4a4a4a] leading-relaxed max-w-xs">
                Authentic footwear for the modern lifestyle. Visit our showroom to experience the comfort significantly.
              </p>
              <div className="text-xs text-[#6a6a6a] mt-4">
                © {new Date().getFullYear()} STORE OVERSIZED
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h5 className="text-sm font-bold uppercase tracking-widest text-[#0f0f0f]">Contact Us</h5>
              <div className="flex flex-col gap-2 text-sm text-[#4a4a4a]">
                <p className="flex items-center gap-2">
                  <span>📍</span> Showroom: Lazimpat, Kathmandu
                </p>
                <p className="flex items-center gap-2">
                  <span>📞</span> Support: +977 974-2360102
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
