import CosmicAvatar from "./hero/CosmicAvatar";
import HeroCopy from "./hero/HeroCopy";

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-screen w-full items-center overflow-hidden px-6 py-12 md:px-12 lg:px-16"
    >
      {/* Faint star grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 lg:flex-row lg:gap-8">
        {/* LEFT — Text content (40% on desktop) */}
        <div className="order-2 w-full lg:order-1 lg:w-2/5">
          <HeroCopy />
        </div>

        {/* RIGHT — Avatar scene (60% on desktop) — face points LEFT toward text */}
        <div className="order-1 flex w-full items-center justify-center lg:order-2 lg:w-3/5">
          <CosmicAvatar />
        </div>
      </div>
    </section>
  );
}
