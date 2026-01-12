const Assets_img_0 = { src: "/birkenstock_batch_1/size-kids.jpg" };
const Assets_img_1 = { src: "/birkenstock_batch_3/size-adult.jpg" };
export default function SizePage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* HEADER */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#6a6a6a]">
              Size Guide
            </div>
            <h1 className="mt-3 text-3xl md:text-5xl font-light tracking-[0.06em] text-[#0f0f0f]">
              Size Reference
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-[#4a4a4a]">
              Use the charts below to find the correct fit for kids and adults.
              Measurements may vary slightly by model.
            </p>
          </div>

          {/* BACK HOME */}
          <a
            href="/"
            className="inline-block text-xs uppercase tracking-[0.25em] text-[#4a4a4a] hover:text-[#0f0f0f]"
          >
            ← Back Home
          </a>
        </div>

        {/* SIZE IMAGES */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* KIDS */}
          <div className="rounded-2xl overflow-hidden border border-[#e5e5e0] bg-white">
            <div className="border-b border-[#e5e5e0] p-4">
              <h2 className="text-lg font-light tracking-[0.2em] uppercase text-[#0f0f0f]">
                Kids Sizes
              </h2>
            </div>
            <div className="bg-[#f3f3f0]">
              <img
                src={Assets_img_0.src}
                alt="Kids size guide"
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* ADULT */}
          <div className="rounded-2xl overflow-hidden border border-[#e5e5e0] bg-white">
            <div className="border-b border-[#e5e5e0] p-4">
              <h2 className="text-lg font-light tracking-[0.2em] uppercase text-[#0f0f0f]">
                Adult Sizes
              </h2>
            </div>
            <div className="bg-[#f3f3f0]">
              <img
                src={Assets_img_1.src}
                alt="Adult size guide"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* FOOTNOTE */}
        <div className="mt-10 border-t border-[#e5e5e0] pt-6 text-xs text-[#6a6a6a]">
          If you’re between sizes, we recommend sizing up for comfort.
        </div>
      </div>
    </div>
  );
}
