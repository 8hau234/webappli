"use client";

// Image import
const compareImg = { src: "/crocs_batch_2/crocs-compare.jpg" };
const Assets_img_0 = compareImg;

export default function AuthenticityPage() {
  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-[#e5e5e0] bg-[#fafaf8]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="text-2xl md:text-3xl tracking-[0.25em] font-light text-[#0f0f0f]">
            STORE OVERSIZED
          </div>

          <nav className="hidden gap-6 text-xs md:flex">
            <a
              href="/"
              className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
            >
              Home
            </a>
            <a
              href="/crocs"
              className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
            >
              Crocs
            </a>
            <a
              href="/birkenstock"
              className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
            >
              Birkenstock
            </a>
            <a
              href="/size"
              className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
            >
              Size
            </a>
            <a
              href="/authenticity"
              className="uppercase tracking-[0.18em] text-[#0f0f0f] font-medium"
            >
              Authenticity
            </a>
            <a
              href="/contact"
              className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
            >
              Contact
            </a>
          </nav>

          <button className="text-xs uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]">
            Cart (0)
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-5xl space-y-16 px-4 py-16">
        {/* HERO */}
        <section className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#6a6a6a]">
            Authenticity Check
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-[#0f0f0f]">
            100% Legit. Zero First-Copy.
          </h1>
          <p className="max-w-xl text-sm md:text-base text-[#4a4a4a]">
            Every pair we sell—Crocs or Birkenstock—is checked and verified for
            authenticity. Below is a simple comparison to help you understand
            real vs fake Crocs.
          </p>
        </section>

        {/* SINGLE IMAGE — REAL VS FAKE CROCS */}
        <section className="rounded-2xl border border-[#e5e5e0] bg-white p-4">
          <h2 className="mb-4 text-lg md:text-xl font-light text-[#0f0f0f]">
            Real vs Fake Crocs (Image Comparison)
          </h2>

          <img
            src={Assets_img_0.src}
            alt="Real vs Fake Crocs Comparison"
            className="w-full rounded-xl object-cover"
          />

          <p className="mt-3 text-sm text-[#4a4a4a]">
            This image highlights differences in material, logo shape, hole
            alignment, outsole quality, and overall construction between real
            and fake Crocs.
          </p>
        </section>

        {/* OUR POLICY */}
        <section>
          <div className="rounded-2xl border border-[#e5e5e0] bg-white p-6 space-y-4">
            <h2 className="text-xl font-light text-[#0f0f0f]">
              Our Sourcing Policy
            </h2>
            <p className="text-sm text-[#4a4a4a] leading-relaxed">
              We only source from trusted retailers, verified importers, and
              official platforms. We never deal with fakes, replicas, or
              first-copy items.
            </p>
          </div>
        </section>

        {/* VERIFY ORDER */}
        <section>
          <div className="rounded-2xl border border-[#e5e5e0] bg-white p-6 space-y-5">
            <h2 className="text-xl font-light text-[#0f0f0f]">
              Verify Your Order
            </h2>
            <p className="text-sm text-[#4a4a4a]">
              Want to double-check your pair? Send us:
            </p>

            <ul className="list-disc pl-5 text-sm text-[#4a4a4a] space-y-1">
              <li>Order ID</li>
              <li>Name & Phone number</li>
              <li>Where you purchased</li>
              <li>Photos of logo, strap, sole, tags, box</li>
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://wa.me/9779800000000?text=I want to verify my Crocs order."
                className="bg-[#0f0f0f] px-6 py-2 text-[#fafaf8] text-xs uppercase tracking-[0.18em] hover:bg-black transition"
              >
                Verify via WhatsApp
              </a>
              <a
                href="mailto:support@storeoversized.com?subject=Order+Verification"
                className="border border-[#0f0f0f] px-6 py-2 text-[#0f0f0f] text-xs uppercase tracking-[0.18em] hover:bg-[#0f0f0f]/5 transition"
              >
                Verify via Email
              </a>
            </div>
          </div>
        </section>

        {/* CROCS DETAILS (TEXT VERSION) */}
        <section>
          <h2 className="mb-5 text-xl md:text-2xl font-light text-[#0f0f0f]">
            Crocs: Real vs Fake (Detailed Breakdown)
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* REAL */}
            <div className="rounded-2xl border border-[#e5e5e0] bg-white p-6 space-y-3">
              <h3 className="text-lg font-light text-[#0f0f0f]">Real Crocs</h3>
              <ul className="list-disc pl-5 text-sm text-[#4a4a4a] space-y-2">
                <li>Sharp & correct crocodile logo</li>
                <li>Premium Croslite comfort</li>
                <li>Perfectly aligned holes</li>
                <li>Crisp molded text, no spelling errors</li>
                <li>High-quality strap buttons</li>
              </ul>
            </div>

            {/* FAKE */}
            <div className="rounded-2xl border border-[#e5e5e0] bg-[#fff7f7] p-6 space-y-3">
              <h3 className="text-lg font-light text-[#0f0f0f]">
                Fake / First-Copy
              </h3>
              <ul className="list-disc pl-5 text-sm text-[#4a4a4a] space-y-2">
                <li>Wrong/blurred crocodile logo</li>
                <li>Hard plastic material</li>
                <li>Uneven hole alignment</li>
                <li>Spelling mistakes on sole</li>
                <li>Very strong chemical smell</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#e5e5e0] bg-[#fafaf8] py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-lg tracking-[0.25em] font-light text-[#0f0f0f]">
            STORE OVERSIZED
          </div>
          <p className="mt-3 max-w-xs text-sm text-[#4a4a4a]">
            Premium Crocs & Birkenstock resale. Oversized-friendly sizes, legit
            only.
          </p>
        </div>
      </footer>
    </div>
  );
}
