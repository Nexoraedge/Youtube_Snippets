// components/StatsStrip.tsx

const stats = [
  { label: "YouTube Subs", value: "2k+" },
  { label: "Views", value: "910k+" },
  { label: "Open Source Repos", value: "10+" },
  { label: "Comment replied", value: "100%" },
];

const StatsStrip = () => {
  return (
    <section className="w-full pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-[#050505]/80 backdrop-blur-xl px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex flex-col sm:flex-row items-stretch justify-between">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex-1 flex flex-col items-center justify-center py-2"
              >
                <p className="text-base sm:text-lg font-semibold text-slate-50">
                  {stat.value}
                </p>
                <p className="text-[11px] sm:text-xs text-slate-400">
                  {stat.label}
                </p>

                {/* Divider for desktop, except last */}
                {index < stats.length - 1 && (
                  <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
