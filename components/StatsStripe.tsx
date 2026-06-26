// components/StatsStrip.tsx

const stats = [
  { label: "YouTube Subs", value: "2.7k+" },
  { label: "Views", value: "1M+" },
  { label: "Open Source Repos", value: "10+" },
  { label: "Comment replied", value: "100%" },
];

const StatsStrip = () => {
  return (
    <section className="w-full py-24 sm:py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 md:gap-y-0 gap-x-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center relative group"
            >
              <div className="relative">
                <p className="text-5xl sm:text-6xl lg:text-7xl font-fraunces font-medium text-textPrimary mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-500 ease-out">
                  {stat.value}
                </p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-accentPrimary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-textMuted font-bold mt-4 text-center">
                {stat.label}
              </p>

              {/* Editorial Divider */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-borderSubtle to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
