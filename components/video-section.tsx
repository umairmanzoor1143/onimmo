"use client";

export default function VideoSection() {
  return (
    <section className="relative -mt-[200px] diagonal-clip" data-bg="dark">
      {/* Video Content */}
      <div className="relative">
        {/* Video Container */}
        <div className="video-section-curve relative h-[100vh] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/city.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>
      </div>
    </section>
  );
}
