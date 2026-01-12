"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-[#e5e5e0] bg-[#fafaf8]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          {/* LOGO */}
          <div className="text-2xl md:text-3xl tracking-[0.25em] font-light text-[#0f0f0f]">
            STORE OVERSIZED
          </div>

          {/* NAVIGATION */}
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
              className="uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]"
            >
              Authenticity
            </a>

            <a
              href="/contact"
              className="uppercase tracking-[0.18em] text-[#0f0f0f] font-medium"
            >
              Contact
            </a>
          </nav>

          {/* CART */}
          <button className="text-xs uppercase tracking-[0.18em] text-[#4a4a4a] hover:text-[#0f0f0f]">
            Cart (0)
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-5xl space-y-14 px-4 py-16">
        {/* HERO */}
        <section className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#6a6a6a]">
            Contact • Support
          </p>

          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-[#0f0f0f]">
            Talk to Store Oversized.
          </h1>

          <p className="max-w-xl text-sm md:text-base text-[#4a4a4a]">
            Questions about authenticity, sizing, deliveries or drops? Reach out
            anytime — we are active daily.
          </p>
        </section>

        {/* CONTACT CARDS */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* WhatsApp & Calls */}
          <div className="rounded-2xl border border-[#e5e5e0] bg-white p-6 space-y-3">
            <h2 className="text-lg font-light text-[#0f0f0f]">
              WhatsApp & Calls
            </h2>

            <p className="text-sm text-[#4a4a4a]">
              Fast replies for orders, authenticity checks and sizing help.
            </p>

            <div className="space-y-1 text-sm text-[#4a4a4a]">
              <p>
                <span className="font-medium text-[#0f0f0f]">WhatsApp:</span>{" "}
                +977 974-2360102
              </p>

              <p>
                <span className="font-medium text-[#0f0f0f]">Call:</span> +977
                974-2360102
              </p>
            </div>

            <a
              href="https://wa.me/9779742360102"
              className="inline-flex mt-3 bg-[#0f0f0f] px-6 py-2 text-xs uppercase tracking-[0.18em] text-[#fafaf8] hover:bg-black transition"
            >
              Open WhatsApp
            </a>
          </div>

          {/* Email & Instagram */}
          <div className="rounded-2xl border border-[#e5e5e0] bg-white p-6 space-y-3">
            <h2 className="text-lg font-light text-[#0f0f0f]">
              Email & Instagram
            </h2>

            <p className="text-sm text-[#4a4a4a]">
              For order issues, collabs, bulk pairs or anything formal.
            </p>

            <div className="space-y-1 text-sm text-[#4a4a4a]">
              <p>
                <span className="font-medium text-[#0f0f0f]">Email:</span>{" "}
                support@storeoversized.com
              </p>

              <p>
                <span className="font-medium text-[#0f0f0f]">Instagram:</span>{" "}
                @storeoversized
              </p>
            </div>

            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href="mailto:support@storeoversized.com"
                className="inline-flex border border-[#0f0f0f] px-6 py-2 text-xs uppercase tracking-[0.18em] text-[#0f0f0f] hover:bg-[#0f0f0f]/5 transition"
              >
                Email Us
              </a>

              <a
                href="https://instagram.com/storeoversized"
                className="inline-flex border border-[#e5e5e0] px-6 py-2 text-xs uppercase tracking-[0.18em] text-[#4a4a4a] hover:bg-[#0f0f0f]/5 transition"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>

        {/* VISIT SHOWROOM */}
        <section className="rounded-2xl border border-[#e5e5e0] bg-white p-6 space-y-3">
          <h2 className="text-lg font-light text-[#0f0f0f]">
            Visit Our Showroom
          </h2>

          <p className="text-sm text-[#4a4a4a]">
            Experience our collection in person. Try on your favorite pairs.
          </p>

          <div className="space-y-1 text-sm text-[#4a4a4a]">
            <p>
              <span className="font-medium text-[#0f0f0f]">Address:</span>{" "}
              Lazimpat, Kathmandu
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/Store+Oversized+Lazimpat+Kathmandu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-3 border border-[#0f0f0f] px-6 py-2 text-xs uppercase tracking-[0.18em] text-[#0f0f0f] hover:bg-[#0f0f0f]/5 transition"
          >
            Available on Google Maps
          </a>
        </section>

        {/* SMALL NOTE */}
        <section>
          <p className="text-xs text-[#6a6a6a]">
            Typical response time: 15–60 minutes on WhatsApp / Instagram. For
            email, we reply within 12–24 hours.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#e5e5e0] bg-[#fafaf8] py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-lg tracking-[0.25em] font-light text-[#0f0f0f]">
            STORE OVERSIZED
          </div>

          <p className="mt-3 max-w-xs text-sm text-[#4a4a4a]">
            Premium Crocs & Birkenstock resale. Oversized-friendly sizes, 100%
            legit pairs.
          </p>
        </div>
      </footer>
    </div>
  );
}
