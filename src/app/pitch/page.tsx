"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MirrorLogo = ({ className = "" }: { className?: string }) => (
  <span className={className}>
    MI<span className="inline-block" style={{ transform: 'scaleX(-1)' }}>R</span>ROR
  </span>
);

// Slide data based on the pitch deck plan
const slides = [
  {
    id: 1,
    type: "title",
    headline: "MIRROR",
    subheadline: "The sizing infrastructure layer for fashion commerce",
    footer: "Talia Kusmirek, Founder",
  },
  {
    id: 2,
    type: "problem",
    label: "The Problem",
    headline: "Fit is still a guess online",
    bullets: [
      "Size charts are static and brand-specific",
      "Customers order multiple sizes \"just to see\"",
      "Returns are treated as inevitable, but they're not",
    ],
    stat: "30-40% of fashion e-commerce returns are due to fit",
  },
  {
    id: 3,
    type: "insight",
    label: "The Insight",
    headline: "Fit isn't a rendering problem. It's a systems problem.",
    bullets: [
      "Virtual try-on focuses on appearance, not size authority",
      "Diffusion models are slow, non-deterministic, and brand-unsafe",
      "Fit requires understanding how garments are constructed, not just how they look",
    ],
    keyLine: "If size isn't authoritative, customers don't trust it.",
  },
  {
    id: 4,
    type: "solution",
    label: "The Solution",
    headline: "MIRROR converts fashion images into a deterministic sizing system",
    diagram: true,
    supporting: ["Real-time", "Brand-safe", "Explainable"],
  },
  {
    id: 5,
    type: "product",
    label: "The Product",
    headline: "As accurate as a tailor. Delivered instantly.",
    leftTitle: "User",
    leftBullets: [
      "Real-time body capture (no scans)",
      "Clear size recommendation",
      "Confidence tier (High / Recommended / Best Estimate)",
    ],
    rightTitle: "Brand",
    rightBullets: [
      "Size authority on PDP",
      "Fewer returns",
      "Fit analytics",
    ],
  },
  {
    id: 6,
    type: "moat",
    label: "Technical Moat",
    headline: "This is infrastructure, not a feature",
    blocks: [
      { title: "Garment Intelligence Graph", desc: "Structure, seams, materials, grading rules" },
      { title: "Physics-Aware Fit Engine", desc: "Deterministic, explainable, fast" },
      { title: "Learning Loop", desc: "Each brand improves the system" },
    ],
    keyLine: "MIRROR learns garments, not users.",
  },
  {
    id: 7,
    type: "comparison",
    label: "Why Others Fail",
    headline: "Why diffusion-based try-on fails commercially",
    table: [
      { approach: "Image try-on", failure: "Non-deterministic" },
      { approach: "Diffusion", failure: "Too slow for real-time" },
      { approach: "Templates", failure: "Break on real garments" },
      { approach: "Size charts", failure: "No personalization" },
    ],
    keyLine: "MIRROR is size-authoritative. Others are cosmetic.",
  },
  {
    id: 8,
    type: "data",
    label: "Data Moat",
    headline: "Each new brand strengthens MIRROR",
    bullets: [
      "1,000+ labeled garments",
      "Human-verified + synthetic augmentation",
      "Multi-head vision models",
      "Structured pattern representations",
    ],
    keyLine: "Data → Structure → Physics → Trust → Adoption",
  },
  {
    id: 9,
    type: "returns",
    label: "Business Impact",
    headline: "Returns go down structurally",
    bullets: [
      "Customers stop guessing",
      "Sizes are locked with confidence",
      "Brands transfer fit liability to MIRROR",
    ],
    example: "If MIRROR recommends size M with high confidence, that becomes the source of truth.",
  },
  {
    id: 10,
    type: "gtm",
    label: "Go-To-Market",
    headline: "Shopify-first, fit-sensitive brands",
    bullets: [
      "Mid-market & premium apparel",
      "Blazers, dresses, knits",
      "High return pain",
    ],
    pilot: ["3-5 brands", "PDP integration", "Measure return delta"],
  },
  {
    id: 11,
    type: "whynow",
    label: "Why Now",
    headline: "The conditions finally exist",
    bullets: [
      "WebGL + browser compute",
      "On-device vision",
      "Return pressure",
      "Brands demanding size authority",
    ],
    keyLine: "Fit is becoming infrastructure. Someone will own it.",
  },
  {
    id: 12,
    type: "preseed",
    label: "Pre-Seed",
    headline: "Building sizing infrastructure for fashion",
    raise: "$500K",
    useOfFunds: [
      { label: "Engineering", percent: "50%" },
      { label: "Pilot Programs", percent: "30%" },
      { label: "Data & Research", percent: "20%" },
    ],
    runway: "18 months",
    footer: "Seeking partners who understand deep systems",
  },
  {
    id: 13,
    type: "founder",
    label: "Founder",
    headline: "Founder",
    name: "Talia Kusmirek",
    credentials: [
      "AI For Good Scholar @ United Nations",
      "MIT Research Fellow",
      "Neo Scholar Finalist",
    ],
    statement: "Built MIRROR to solve fit. Because nothing else matters if it doesn't fit.",
  },
];

// Visual components
const FlywheelDiagram = () => (
  <svg className="w-64 h-64" viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="80" stroke="#333" strokeWidth="1" fill="none" strokeDasharray="4" />
    <circle cx="100" cy="100" r="50" stroke="#555" strokeWidth="1" fill="none" />
    {["Data", "Structure", "Physics", "Trust", "Adoption"].map((label, i) => {
      const angle = (i * 72 - 90) * (Math.PI / 180);
      const x = 100 + 65 * Math.cos(angle);
      const y = 100 + 65 * Math.sin(angle);
      return (
        <g key={label}>
          <circle cx={x} cy={y} r="20" fill="#f5f5f5" stroke="#333" strokeWidth="0.75" />
          <text x={x} y={y + 3} fontSize="8" fill="#333" textAnchor="middle">{label}</text>
        </g>
      );
    })}
    <path d="M120 80 L130 100 L120 120" stroke="#666" strokeWidth="1" fill="none" />
    <path d="M80 120 L70 100 L80 80" stroke="#666" strokeWidth="1" fill="none" />
  </svg>
);

export default function PitchDeck() {
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

  const slide = slides[currentSlide];

  const renderSlideContent = () => {
    switch (slide.type) {
      case "title":
        return (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.05] mb-10">
              <MirrorLogo />
            </h1>
            <p className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              {slide.subheadline}
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/40">{slide.footer}</p>
          </div>
        );

      case "problem":
        return (
          <div className="flex flex-col justify-center h-full max-w-4xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-8">{slide.label}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] mb-12">{slide.headline}</h2>
            <ul className="space-y-5 mb-12">
              {slide.bullets?.map((bullet, i) => (
                <li key={i} className="flex items-center gap-4 text-base text-black/80 pb-5 border-b border-black/10">
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="bg-black text-white px-8 py-5 inline-block">
              <p className="text-base font-medium">{slide.stat}</p>
            </div>
          </div>
        );

      case "insight":
        return (
          <div className="flex flex-col justify-center h-full max-w-4xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-6">{slide.label}</p>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-12">{slide.headline}</h2>
            <ul className="space-y-6 mb-12">
              {slide.bullets?.map((bullet, i) => (
                <li key={i} className="flex items-start gap-4 text-xl text-black/70">
                  <span className="text-black/30">—</span>
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="border-l-4 border-black pl-6">
              <p className="text-2xl font-medium">{slide.keyLine}</p>
            </div>
          </div>
        );

      case "solution":
        return (
          <div className="flex flex-col justify-center h-full max-w-5xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-8">{slide.label}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1] mb-16">{slide.headline}</h2>
            <div className="bg-white border border-black p-10 mb-10">
              <div className="flex items-center justify-between gap-4">
                <div className="text-center flex-1">
                  <div className="w-12 h-12 border border-black/30 mx-auto mb-3 flex items-center justify-center">
                    <div className="w-5 h-5 bg-black/20"></div>
                  </div>
                  <p className="text-[9px] uppercase tracking-widest text-black/50">2D Image</p>
                </div>
                <div className="text-black/30">→</div>
                <div className="text-center flex-1">
                  <div className="w-12 h-12 border border-black/30 mx-auto mb-3 flex items-center justify-center">
                    <div className="w-6 h-7 border border-black/30"></div>
                  </div>
                  <p className="text-[9px] uppercase tracking-widest text-black/50">Vision Model</p>
                </div>
                <div className="text-black/30">→</div>
                <div className="text-center flex-1">
                  <div className="w-12 h-12 border border-black/30 mx-auto mb-3 flex items-center justify-center">
                    <div className="w-5 h-6 bg-black/10 border border-black/20"></div>
                  </div>
                  <p className="text-[9px] uppercase tracking-widest text-black/50">Garment Graph</p>
                </div>
                <div className="text-black/30">→</div>
                <div className="text-center flex-1">
                  <div className="w-12 h-12 border border-black/30 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-sm font-medium">M</span>
                  </div>
                  <p className="text-[9px] uppercase tracking-widest text-black/50">Size Decision</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              {slide.supporting?.map((item, i) => (
                <span key={i} className="text-[11px] uppercase tracking-[0.15em] text-black/50 border border-black/20 px-5 py-2">{item}</span>
              ))}
            </div>
          </div>
        );

      case "product":
        return (
          <div className="flex flex-col justify-center h-full">
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-6 text-center">{slide.label}</p>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-16 text-center">{slide.headline}</h2>
            <div className="grid md:grid-cols-2 gap-0 border border-black">
              <div className="p-10 border-r border-black">
                <p className="text-[11px] uppercase tracking-[0.2em] text-black mb-6">{slide.leftTitle}</p>
                <ul className="space-y-4">
                  {slide.leftBullets?.map((bullet, i) => (
                    <li key={i} className="text-base text-black/70 pb-4 border-b border-black/10">{bullet}</li>
                  ))}
                </ul>
              </div>
              <div className="p-10">
                <p className="text-[11px] uppercase tracking-[0.2em] text-black mb-6">{slide.rightTitle}</p>
                <ul className="space-y-4">
                  {slide.rightBullets?.map((bullet, i) => (
                    <li key={i} className="text-base text-black/70 pb-4 border-b border-black/10">{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case "moat":
        return (
          <div className="flex flex-col justify-center h-full">
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-6 text-center">{slide.label}</p>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-16 text-center">{slide.headline}</h2>
            <div className="grid md:grid-cols-3 gap-0 border border-black mb-10">
              {slide.blocks?.map((block, i) => (
                <div key={i} className={`p-8 ${i < 2 ? 'border-r border-black' : ''}`}>
                  <h3 className="text-lg font-medium mb-3">{block.title}</h3>
                  <p className="text-sm text-black/60">{block.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-xl font-medium">{slide.keyLine}</p>
            </div>
          </div>
        );

      case "comparison":
        return (
          <div className="flex flex-col justify-center h-full max-w-3xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-6">{slide.label}</p>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-12">{slide.headline}</h2>
            <div className="border border-black mb-10">
              <div className="grid grid-cols-2 border-b border-black bg-neutral-100">
                <div className="p-4 text-[11px] uppercase tracking-[0.15em] font-medium">Approach</div>
                <div className="p-4 text-[11px] uppercase tracking-[0.15em] font-medium border-l border-black">Why It Fails</div>
              </div>
              {slide.table?.map((row, i) => (
                <div key={i} className={`grid grid-cols-2 ${i < (slide.table?.length || 0) - 1 ? 'border-b border-black/20' : ''}`}>
                  <div className="p-4 text-base">{row.approach}</div>
                  <div className="p-4 text-base text-black/60 border-l border-black/20">{row.failure}</div>
                </div>
              ))}
            </div>
            <div className="bg-black text-white px-6 py-4 text-center">
              <p className="text-lg font-medium">{slide.keyLine}</p>
            </div>
          </div>
        );

      case "data":
        return (
          <div className="grid md:grid-cols-2 gap-16 items-center h-full">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-6">{slide.label}</p>
              <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-10">{slide.headline}</h2>
              <ul className="space-y-4 mb-10">
                {slide.bullets?.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg text-black/70 pb-4 border-b border-black/10">
                    <span className="text-emerald-500">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="border-l-4 border-black pl-6">
                <p className="text-lg font-medium">{slide.keyLine}</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <FlywheelDiagram />
            </div>
          </div>
        );

      case "returns":
        return (
          <div className="flex flex-col justify-center h-full max-w-4xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-8">{slide.label}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] mb-12">{slide.headline}</h2>
            <ul className="space-y-5 mb-12">
              {slide.bullets?.map((bullet, i) => (
                <li key={i} className="flex items-center gap-4 text-base text-black/80 pb-5 border-b border-black/10">
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="bg-neutral-50 border border-black/20 p-6">
              <p className="text-base italic text-black/70">&ldquo;{slide.example}&rdquo;</p>
            </div>
          </div>
        );

      case "gtm":
        return (
          <div className="flex flex-col justify-center h-full max-w-4xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-8">{slide.label}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] mb-12">{slide.headline}</h2>
            <div className="grid md:grid-cols-2 gap-0 border border-black mb-10">
              <div className="p-8 border-r border-black">
                <p className="text-[11px] uppercase tracking-[0.2em] text-black mb-6">Target</p>
                <ul className="space-y-4">
                  {slide.bullets?.map((bullet, i) => (
                    <li key={i} className="text-base text-black/70 pb-4 border-b border-black/10">{bullet}</li>
                  ))}
                </ul>
              </div>
              <div className="p-8">
                <p className="text-[11px] uppercase tracking-[0.2em] text-black mb-6">Pilot Plan</p>
                <ul className="space-y-4">
                  {slide.pilot?.map((item, i) => (
                    <li key={i} className="text-base text-black/70 pb-4 border-b border-black/10">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case "whynow":
        return (
          <div className="flex flex-col justify-center h-full max-w-3xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-6">{slide.label}</p>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-12">{slide.headline}</h2>
            <div className="grid grid-cols-2 gap-6 mb-12">
              {slide.bullets?.map((bullet, i) => (
                <div key={i} className="border border-black/20 p-6">
                  <p className="text-base text-black/70">{bullet}</p>
                </div>
              ))}
            </div>
            <div className="bg-black text-white px-8 py-6 text-center">
              <p className="text-xl font-medium">{slide.keyLine}</p>
            </div>
          </div>
        );

      case "preseed":
        return (
          <div className="flex flex-col justify-center h-full max-w-4xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-8">{slide.label}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] mb-16">{slide.headline}</h2>
            
            <div className="grid md:grid-cols-2 gap-0 border border-black mb-10">
              <div className="p-10 border-r border-black flex flex-col justify-center">
                <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-4">Raising</p>
                <p className="text-5xl md:text-6xl font-normal">{slide.raise}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mt-4">{slide.runway} runway</p>
              </div>
              <div className="p-10">
                <p className="text-[11px] uppercase tracking-[0.2em] text-black mb-6">Use of Funds</p>
                <ul className="space-y-4">
                  {slide.useOfFunds?.map((item: { label: string; percent: string }, i: number) => (
                    <li key={i} className="flex items-center justify-between text-base text-black/70 pb-4 border-b border-black/10">
                      <span>{item.label}</span>
                      <span className="font-medium">{item.percent}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <p className="text-base text-black/50 text-center">{slide.footer}</p>
          </div>
        );

      case "founder":
        return (
          <div className="flex flex-col items-center justify-center h-full text-center relative">
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-12">{slide.label}</p>
            
            <div className="relative">
              {/* Scattered credentials */}
              <span className="absolute -top-8 -left-32 text-[10px] uppercase tracking-[0.15em] text-black/40 rotate-[-8deg]">
                AI For Good Scholar @ United Nations
              </span>
              <span className="absolute -top-4 -right-36 text-[10px] uppercase tracking-[0.15em] text-black/40 rotate-[5deg]">
                MIT Research Fellow
              </span>
              <span className="absolute -bottom-6 -right-24 text-[10px] uppercase tracking-[0.15em] text-black/40 rotate-[-3deg]">
                Neo Scholar Finalist
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal">{slide.name}</h2>
            </div>
            
            <p className="text-xl max-w-xl text-black/70 mt-16">&ldquo;{slide.statement}&rdquo;</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Slide Content */}
      <main className="flex-1 flex items-center justify-center px-12 py-16">
        <div className="w-full max-w-6xl h-full min-h-[70vh]">
          {renderSlideContent()}
        </div>
      </main>

      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-black">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
              disabled={currentSlide === 0}
              className="p-2 border border-black disabled:opacity-20 disabled:cursor-not-allowed hover:bg-black hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))}
              disabled={currentSlide === slides.length - 1}
              className="p-2 border border-black disabled:opacity-20 disabled:cursor-not-allowed hover:bg-black hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentSlide ? 'bg-black' : 'bg-black/20 hover:bg-black/40'
                }`}
              />
            ))}
          </div>

          <div className="text-[11px] uppercase tracking-[0.2em] text-black/50">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </nav>

      {/* Keyboard hint */}
      <div className="fixed bottom-20 right-8 text-[10px] uppercase tracking-widest text-black/30">
        ← → to navigate
      </div>
    </div>
  );
}
