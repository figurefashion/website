"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MirrorLogo = ({ className = "" }: { className?: string }) => (
  <span className={className}>
    MI<span className="inline-block" style={{ transform: "scaleX(-1)" }}>R</span>ROR
  </span>
);

const EDITORIAL_IMAGE_CLASS = "grayscale contrast-110 brightness-95";

type Slide =
  | {
      id: number;
      type: "title";
      headline: string;
      subheadline: string;
      footer?: string;
    }
  | {
      id: number;
      type: "closing";
      headline: string;
      subheadline: string;
      footer?: string;
    }
  | {
      id: number;
      type: "bullets";
      label: string;
      headline: string;
      subheadline?: string;
      bullets: string[];
    }
  | {
      id: number;
      type: "pair";
      label: string;
      headline: string;
      left: { src: string; title: string };
      right: { src: string; title: string };
    }
  | {
      id: number;
      type: "triptych";
      label: string;
      headline: string;
      images: { src: string; title: string }[];
    }
  | {
      id: number;
      type: "deliverables";
      label: string;
      headline: string;
      subheadline: string;
      images: { src: string; title: string }[];
      bullets: string[];
    }
  | {
      id: number;
      type: "pricing";
      label: string;
      headline: string;
      priceRange: string;
      anchorLine: string;
      included: string[];
    };

const slides: Slide[] = [
  {
    id: 1,
    type: "title",
    headline: "Replace photoshoots with MIRROR",
    subheadline: "Realistic on-body product visuals without models, studios, or shipping samples.",
    footer: "Use ← → or Space to navigate",
  },
  {
    id: 2,
    type: "bullets",
    label: "Value",
    headline: "Replace photoshoots. Keep the quality.",
    subheadline: "PDP-ready visuals delivered in 7–10 days.",
    bullets: [
      "No models",
      "No studio",
      "No sample shipping",
      "Consistent product presentation",
    ],
  },
  {
    id: 3,
    type: "pair",
    label: "Before / After",
    headline: "Original product image → MIRROR output",
    left: { src: "/images/before.png", title: "Original product image" },
    right: { src: "/images/after.png", title: "MIRROR output" },
  },
  {
    id: 4,
    type: "triptych",
    label: "Examples",
    headline: "MIRROR outputs",
    images: [
      { src: "/images/top1.png", title: "MIRROR output" },
      { src: "/images/top2.png", title: "MIRROR output" },
      { src: "/images/top3.png", title: "MIRROR output" },
    ],
  },
  {
    id: 5,
    type: "deliverables",
    label: "Deliverables",
    headline: "PDP-ready visuals, delivered.",
    subheadline: "Every MIRROR package includes curated, on-body product imagery ready for your product detail pages.",
    images: [
      { src: "/images/finalresult.png", title: "Front" },
      { src: "/images/side.png", title: "Side" },
      { src: "/images/backdetail.png", title: "Back" },
    ],
    bullets: ["1 hero on-body image", "2–4 secondary angles", "Optional motion preview", "Delivered in 7–10 days"],
  },
  {
    id: 6,
    type: "pricing",
    label: "Pricing",
    headline: "Simple, per-garment pricing",
    priceRange: "$1,000 to $3,000 per garment",
    anchorLine: "Typically 60–80% cheaper than a traditional shoot, delivered in under 10 days.",
    included: ["Curated deliverables", "Quality control", "Fast turnaround", "Brand-safe process"],
  },
  {
    id: 7,
    type: "bullets",
    label: "Start",
    headline: "Start with one hero garment",
    bullets: [
      "Send one garment",
      "We deliver your sample visuals",
      "Then scale to more SKUs",
    ],
  },
  {
    id: 8,
    type: "closing",
    headline: "Next step",
    subheadline: "Want to try MIRROR with a single hero piece? We'll deliver PDP-ready visuals in 7–10 days.",
    footer: "Contact: hello@mirror.fit",
  },
];

export default function SalesDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setCurrentSlide((prev) => {
      if (slides.length === 0) return 0;
      return Math.min(Math.max(prev, 0), slides.length - 1);
    });
  }, [slides.length]);

  const slide = slides[currentSlide];

  const Header = ({ label }: { label: string }) => (
    <div className="mb-10">
      <p className="text-[11px] uppercase tracking-[0.2em] text-black/50">{label}</p>
      <div className="mt-4 h-px bg-black/10" />
    </div>
  );

  const renderSlide = () => {
    if (!slide) return null;
    switch (slide.type) {
      case "title":
        return (
          <div className="flex flex-col justify-center h-full">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-normal leading-[1.05]">
                <MirrorLogo />
              </h1>
              <p className="text-[11px] uppercase tracking-[0.2em] text-black/40 mt-4">{slide.headline}</p>
              <p className="text-base md:text-lg text-black/70 max-w-2xl mx-auto mt-6 leading-relaxed font-light">
                {slide.subheadline}
              </p>
            </div>

            <div className="border border-black overflow-hidden">
              <div className="grid grid-cols-3">
                <div className="relative aspect-4/5 border-r border-black">
                  <Image src="/images/top1.png" alt="MIRROR output" fill className={`object-cover ${EDITORIAL_IMAGE_CLASS}`} priority />
                </div>
                <div className="relative aspect-4/5 border-r border-black">
                  <Image src="/images/top2.png" alt="MIRROR output" fill className={`object-cover ${EDITORIAL_IMAGE_CLASS}`} priority />
                </div>
                <div className="relative aspect-4/5">
                  <Image src="/images/top3.png" alt="MIRROR output" fill className={`object-cover ${EDITORIAL_IMAGE_CLASS}`} priority />
                </div>
              </div>
            </div>

            {slide.footer ? (
              <div className="mt-6 text-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/30">{slide.footer}</p>
              </div>
            ) : null}
          </div>
        );

      case "closing":
        return (
          <div className="flex flex-col items-center justify-center h-full text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-normal leading-[1.05] mb-8">{slide.headline}</h2>
            <p className="text-base md:text-lg text-black/70 leading-relaxed font-light">{slide.subheadline}</p>
            {slide.footer ? (
              <p className="text-[11px] uppercase tracking-[0.2em] text-black/40 mt-10">{slide.footer}</p>
            ) : null}
          </div>
        );

      case "bullets":
        return (
          <div className="flex flex-col justify-center h-full max-w-4xl mx-auto">
            <Header label={slide.label} />
            <h2 className="text-4xl md:text-5xl font-normal leading-[1.1] mb-6">{slide.headline}</h2>
            {slide.subheadline ? (
              <p className="text-base text-black/60 leading-relaxed mb-8 max-w-2xl">{slide.subheadline}</p>
            ) : null}
            <div className="border border-black">
              {slide.bullets.map((b, i) => (
                <div key={b} className={`p-6 ${i < slide.bullets.length - 1 ? "border-b border-black/20" : ""}`}>
                  <p className="text-lg text-black/80">{b}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "pair":
        return (
          <div className="flex flex-col justify-center h-full max-w-6xl mx-auto">
            <Header label={slide.label} />
            <h2 className="text-4xl md:text-5xl font-normal leading-[1.1] mb-8">{slide.headline}</h2>
            <div className="grid grid-cols-2 gap-0 border border-black">
              <div className="relative aspect-4/5 border-r border-black">
                <Image src={slide.left.src} alt={slide.left.title} fill className={`object-cover ${EDITORIAL_IMAGE_CLASS}`} priority={currentSlide === 2} />
                <div className="absolute left-0 right-0 bottom-0 border-t border-black bg-white/90 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/60">{slide.left.title}</p>
                </div>
              </div>
              <div className="relative aspect-4/5">
                <Image src={slide.right.src} alt={slide.right.title} fill className={`object-cover ${EDITORIAL_IMAGE_CLASS}`} priority={currentSlide === 2} />
                <div className="absolute left-0 right-0 bottom-0 border-t border-black bg-white/90 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/60">{slide.right.title}</p>
                </div>
              </div>
            </div>
          </div>
        );

      case "triptych":
        return (
          <div className="flex flex-col justify-center h-full max-w-6xl mx-auto">
            <Header label={slide.label} />
            <h2 className="text-4xl md:text-5xl font-normal leading-[1.1] mb-8">{slide.headline}</h2>
            <div className="border border-black">
              <div className="grid grid-cols-3">
                {slide.images.map((img, i) => (
                  <div key={img.src} className={`relative aspect-4/5 ${i < 2 ? "border-r border-black" : ""}`}>
                    <Image src={img.src} alt={img.title} fill className={`object-cover ${EDITORIAL_IMAGE_CLASS}`} priority={currentSlide === 3} />
                    <div className="absolute left-0 right-0 bottom-0 border-t border-black bg-white/90 px-4 py-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-black/60">{img.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "deliverables":
        return (
          <div className="flex flex-col justify-center h-full max-w-6xl mx-auto">
            <Header label={slide.label} />
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-normal leading-[1.1] mb-6">{slide.headline}</h2>
                <p className="text-base text-black/70 leading-relaxed mb-6">{slide.subheadline}</p>
                <div className="bg-white border border-black p-5">
                  <div className="aspect-4/3 bg-neutral-100 relative flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-3 p-4 w-full">
                      {slide.images.map((img) => (
                        <div key={img.src} className="aspect-3/4 bg-neutral-200 border border-black/10 relative overflow-hidden">
                          <Image src={img.src} alt={img.title} fill className={`object-cover ${EDITORIAL_IMAGE_CLASS}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-l border-black pl-8">
                <p className="text-[11px] uppercase tracking-[0.2em] text-black mb-6">What You Receive</p>
                <ul className="space-y-4 text-base text-black/80">
                  {slide.bullets.map((b, i) => (
                    <li key={b} className={i < slide.bullets.length - 1 ? "pb-4 border-b border-black/10" : ""}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case "pricing":
        return (
          <div className="flex flex-col justify-center h-full max-w-4xl mx-auto">
            <Header label={slide.label} />
            <h2 className="text-4xl md:text-5xl font-normal leading-[1.1] mb-8">{slide.headline}</h2>
            <div className="border border-black p-10 mb-10">
              <p className="text-5xl md:text-6xl font-normal mb-5">{slide.priceRange}</p>
              <p className="text-base text-black/70 leading-relaxed">{slide.anchorLine}</p>
            </div>
            <div className="grid md:grid-cols-4 gap-0 border border-black">
              {slide.included.map((item, i) => (
                <div key={item} className={`p-6 ${i < slide.included.length - 1 ? "border-r border-black" : ""}`}>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-3">Included</p>
                  <p className="text-base text-black/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 flex items-center justify-center px-10 py-10">
        <div className="w-full max-w-6xl h-[72vh] overflow-hidden">{renderSlide()}</div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-black">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
              disabled={currentSlide === 0}
              className="p-2 border border-black disabled:opacity-20 disabled:cursor-not-allowed hover:bg-black hover:text-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))}
              disabled={currentSlide === slides.length - 1}
              className="p-2 border border-black disabled:opacity-20 disabled:cursor-not-allowed hover:bg-black hover:text-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === currentSlide ? "bg-black" : "bg-black/20 hover:bg-black/40"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="text-[11px] uppercase tracking-[0.2em] text-black/50">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </nav>

      <div className="fixed bottom-20 right-8 text-[10px] uppercase tracking-widest text-black/30">
        ← → to navigate
      </div>
    </div>
  );
}
