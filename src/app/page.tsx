import { ArrowRight } from "lucide-react";
import Image from "next/image";

const EDITORIAL_IMAGE_CLASS = "grayscale contrast-110 brightness-95";

const MirrorLogo = ({ className = "" }: { className?: string }) => (
  <span className={className}>
    MI<span className="inline-block" style={{ transform: 'scaleX(-1)' }}>R</span>ROR
  </span>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar - Editorial Style */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
        <div className="max-w-7xl mx-auto px-8 h-14 flex items-center justify-between">
          <a href="#" className="text-2xl"><MirrorLogo /></a>
          <div className="hidden md:flex items-center gap-10">
            <a href="#product" className="text-[11px] uppercase tracking-[0.15em] text-black hover:opacity-50 transition-opacity">Product</a>
            <a href="#how-it-works" className="text-[11px] uppercase tracking-[0.15em] text-black hover:opacity-50 transition-opacity">How It Works</a>
            <a href="#for-brands" className="text-[11px] uppercase tracking-[0.15em] text-black hover:opacity-50 transition-opacity">For Brands</a>
            <a href="#request-access" className="text-[11px] uppercase tracking-[0.15em] border border-black px-5 py-2 hover:bg-black hover:text-white transition-all">Request a Sample</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Editorial */}
      <section className="pt-32 pb-0 border-b border-black">
        <div className="max-w-5xl mx-auto text-center px-8 pb-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.05] mb-10" >
            Stop guessing how garments fit.<br />Show it.
          </h1>
          <p className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto mb-6 leading-relaxed font-light">
            MIRROR creates realistic, on-body product visuals using AI-assisted fit mapping, no models, no studio, no shipping samples.
          </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#request-access" className="bg-black text-white px-10 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-black/80 transition-colors">
              Request a Visualization Sample
            </a>
            <a href="#vision" className="flex items-center gap-3 text-black text-[11px] uppercase tracking-[0.2em] hover:opacity-50 transition-opacity group">
              See what we&apos;re building <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        {/* HERO VISUAL - Before/AI/After */}
        <div className="w-full border-t border-black">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-[16/7] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-3">
                <div className="relative border-r border-black/10">
                  <Image
                    src="/images/top1.png"
                    alt="Before"
                    fill
                    className={`object-cover ${EDITORIAL_IMAGE_CLASS} scale-110 origin-center`}
                    priority
                  />
                </div>
                <div className="relative border-r border-black/10">
                  <Image
                    src="/images/top2.png"
                    alt="AI visual"
                    fill
                    className={`object-cover ${EDITORIAL_IMAGE_CLASS}`}
                    priority
                  />
                </div>
                <div className="relative">
                  <Image
                    src="/images/top3.png"
                    alt="After"
                    fill
                    className={`object-cover ${EDITORIAL_IMAGE_CLASS} scale-110 origin-center`}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - The Business Problem */}
      <section className="py-28 px-8 bg-white border-b border-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-8">The Problem</p>
              <h2 className="text-4xl md:text-5xl font-normal leading-[1.1] mb-8" >
                Returns start with poor fit representation.
              </h2>
              <p className="text-base text-black/70 leading-relaxed mb-10">
                Customers don&apos;t return products because of logistics. They return them because they never understood fit in the first place.
              </p>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-black mb-6">Current product imagery fails</p>
                <ul className="space-y-4 text-base text-black/80">
                  <li className="flex items-center gap-4 pb-4 border-b border-black/10">Flat lays hide drape and proportion</li>
                  <li className="flex items-center gap-4 pb-4 border-b border-black/10">Mannequins lack realism</li>
                  <li className="flex items-center gap-4 pb-4 border-b border-black/10">Photoshoots are expensive, brands compromise</li>
                  <li className="flex items-center gap-4">Customers guess, then return</li>
                </ul>
              </div>
            </div>
            {/* EDITORIAL STILL PLACEHOLDER */}
            <div className="bg-neutral-200 aspect-[4/5] flex items-center justify-center relative">
              <div className="absolute inset-0">
                <Image
                  src="/images/photoshoot.png"
                  alt="Traditional photoshoot overhead"
                  fill
                  className={`object-cover ${EDITORIAL_IMAGE_CLASS}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - What MIRROR Does */}
      <section id="product" className="py-28 px-8 bg-neutral-50 border-b border-black">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-8">The Solution</p>
          <h2 className="text-4xl md:text-5xl font-normal leading-[1.1] mb-6" >
            MIRROR, starting with visualization.
          </h2>
          <p className="text-base text-black/70 leading-relaxed mb-16 max-w-2xl">
            Visualization is the foundation for fit intelligence. We&apos;re building the future of fit, and shipping value today.
          </p>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* What MIRROR Does Today */}
            <div className="bg-white border border-black p-10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-black mb-6">What MIRROR Does Today</p>
              <ul className="space-y-5 text-base text-black/80">
                <li className="pb-5 border-b border-black/10 flex items-start gap-3">
                  <span className="text-black">•</span>
                  <span>Replaces traditional photoshoots</span>
                </li>
                <li className="pb-5 border-b border-black/10 flex items-start gap-3">
                  <span className="text-black">•</span>
                  <span>Produces accurate on-body product visuals</span>
                </li>
                <li className="pb-5 border-b border-black/10 flex items-start gap-3">
                  <span className="text-black">•</span>
                  <span>Shows fit, drape, and proportion clearly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black">•</span>
                  <span>Works without models or studios</span>
                </li>
              </ul>
              {/* Process visual */}
              <div className="mt-8 pt-8 border-t border-black/10">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-center flex-1">
                    <div className="w-10 h-10 border border-black/30 mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                        <rect x="2" y="4" width="16" height="12" rx="1" stroke="#666" strokeWidth="1" />
                        <path d="M6 16 L10 12 L14 16" stroke="#666" strokeWidth="0.75" />
                      </svg>
                    </div>
                    <p className="text-[8px] uppercase tracking-widest text-black/50">Garment</p>
                  </div>
                  <div className="text-black/30">→</div>
                  <div className="text-center flex-1">
                    <div className="w-10 h-10 border border-black/30 mx-auto mb-2 flex items-center justify-center">
                      <div className="w-5 h-6 border border-black/30"></div>
                    </div>
                    <p className="text-[8px] uppercase tracking-widest text-black/50">Body Geometry</p>
                  </div>
                  <div className="text-black/30">→</div>
                  <div className="text-center flex-1">
                    <div className="w-10 h-10 border border-black/30 mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                        <rect x="3" y="2" width="14" height="16" rx="1" stroke="#666" strokeWidth="1" />
                        <circle cx="10" cy="8" r="3" stroke="#666" strokeWidth="0.75" />
                        <path d="M6 14 Q10 11 14 14" stroke="#666" strokeWidth="0.75" />
                      </svg>
                    </div>
                    <p className="text-[8px] uppercase tracking-widest text-black/50">Final Visual</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* What MIRROR Is Building */}
            <div className="bg-black/5 border border-black/20 p-10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-6">What MIRROR Is Building</p>
              <ul className="space-y-5 text-base text-black/50">
                <li className="pb-5 border-b border-black/10 flex items-start gap-3">
                  <span className="text-black/40">○</span>
                  <span>Deterministic fit evaluation</span>
                </li>
                <li className="pb-5 border-b border-black/10 flex items-start gap-3">
                  <span className="text-black/40">○</span>
                  <span>Real-time body geometry capture</span>
                </li>
                <li className="pb-5 border-b border-black/10 flex items-start gap-3">
                  <span className="text-black/40">○</span>
                  <span>Authoritative size decisions at checkout</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black/40">○</span>
                  <span>Brand-controlled fit standards</span>
                </li>
              </ul>
              <p className="mt-8 pt-8 border-t border-black/10 text-sm text-black/40 italic">
                Coming soon. Visualization customers get early access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - How It Works */}
      <section id="how-it-works" className="py-28 px-8 bg-white border-b border-black">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-8 text-center">Process</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] mb-16 text-center">
            How MIRROR works
          </h2>
          {/* STEP-BY-STEP STRIP - 4 steps for visualization */}
          <div className="grid grid-cols-4 gap-0 border border-black mb-16">
            {/* Frame 01 - Input */}
            <div className="aspect-3/4 bg-neutral-100 flex items-center justify-center relative border-r border-black">
              <div className="text-center p-4">
                <svg className="w-12 h-16 mx-auto mb-3" viewBox="0 0 40 50" fill="none">
                  {/* Flat lay garment icon */}
                  <rect x="5" y="8" width="30" height="34" rx="2" stroke="#888" strokeWidth="1" fill="none" />
                  <path d="M12 8 L20 14 L28 8" stroke="#888" strokeWidth="0.75" fill="none" />
                  <path d="M5 18 L12 18" stroke="#aaa" strokeWidth="0.5" />
                  <path d="M28 18 L35 18" stroke="#aaa" strokeWidth="0.5" />
                </svg>
                <p className="text-[7px] uppercase tracking-widest text-black/40">Input</p>
              </div>
              <div className="absolute top-2 left-2 text-[10px] text-black/30">01</div>
            </div>
            {/* Frame 02 - Fit Mapping */}
            <div className="aspect-3/4 bg-neutral-100 flex items-center justify-center relative border-r border-black">
              <div className="text-center p-4">
                <svg className="w-12 h-16 mx-auto mb-3" viewBox="0 0 40 50" fill="none">
                  {/* Body outline with mapping lines */}
                  <ellipse cx="20" cy="8" rx="4" ry="5" stroke="#666" strokeWidth="0.75" strokeDasharray="2" />
                  <path d="M10 16 Q15 13 20 13 Q25 13 30 16 L32 18 L30 38 Q25 42 20 42 Q15 42 10 38 L8 18 Z" stroke="#666" strokeWidth="0.75" strokeDasharray="2" fill="none" />
                  <line x1="20" y1="13" x2="20" y2="42" stroke="#999" strokeWidth="0.3" strokeDasharray="1" />
                  <line x1="8" y1="26" x2="32" y2="26" stroke="#999" strokeWidth="0.3" strokeDasharray="1" />
                  <line x1="8" y1="34" x2="32" y2="34" stroke="#999" strokeWidth="0.3" strokeDasharray="1" />
                </svg>
                <p className="text-[7px] uppercase tracking-widest text-black/40">Fit Mapping</p>
              </div>
              <div className="absolute top-2 left-2 text-[10px] text-black/30">02</div>
            </div>
            {/* Frame 03 - Digital Photoshoot */}
            <div className="aspect-3/4 bg-neutral-100 flex items-center justify-center relative border-r border-black">
              <div className="text-center p-4">
                <svg className="w-12 h-16 mx-auto mb-3" viewBox="0 0 40 50" fill="none">
                  {/* Person with garment on body */}
                  <ellipse cx="20" cy="8" rx="4" ry="5" stroke="#555" strokeWidth="0.75" fill="#f5f5f5" />
                  <path d="M10 16 Q15 13 20 13 Q25 13 30 16 L32 18 L30 38 Q25 42 20 42 Q15 42 10 38 L8 18 Z" fill="#e8e8e8" stroke="#555" strokeWidth="0.75" />
                  <path d="M14 16 Q20 20 26 16" stroke="#888" strokeWidth="0.4" fill="none" />
                  {/* Drape lines */}
                  <path d="M12 26 Q20 28 28 26" stroke="#bbb" strokeWidth="0.3" fill="none" />
                  <path d="M11 34 Q20 36 29 34" stroke="#bbb" strokeWidth="0.3" fill="none" />
                </svg>
                <p className="text-[7px] uppercase tracking-widest text-black/40">Generation</p>
              </div>
              <div className="absolute top-2 left-2 text-[10px] text-black/30">03</div>
            </div>
            {/* Frame 04 - Deliverables */}
            <div className="aspect-3/4 bg-neutral-100 flex items-center justify-center relative">
              <div className="text-center p-4">
                <svg className="w-12 h-16 mx-auto mb-3" viewBox="0 0 40 50" fill="none">
                  {/* Multiple image frames */}
                  <rect x="4" y="6" width="18" height="24" rx="1" stroke="#444" strokeWidth="0.75" fill="#f5f5f5" />
                  <rect x="8" y="10" width="18" height="24" rx="1" stroke="#444" strokeWidth="0.75" fill="#fafafa" />
                  <rect x="12" y="14" width="18" height="24" rx="1" stroke="#444" strokeWidth="0.75" fill="#fff" />
                  {/* Checkmark */}
                  <path d="M18 28 L22 32 L30 22" stroke="#22c55e" strokeWidth="1.5" fill="none" />
                </svg>
                <p className="text-[7px] uppercase tracking-widest text-black/40">Deliverables</p>
              </div>
              <div className="absolute top-2 left-2 text-[10px] text-black/30">04</div>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-0 border-t border-black">
            {[
              { step: "01", title: "Input", desc: "Brand provides flat-lay garment images and references." },
              { step: "02", title: "Fit Mapping", desc: "MIRROR uses geometry-aware garment mapping to understand how the piece sits on a real body." },
              { step: "03", title: "Digital Photoshoot", desc: "AI-assisted model generation + manual curation ensures accurate drape, proportion, and realism." },
              { step: "04", title: "Deliverables", desc: "Brands receive PDP-ready on-body visuals, hero images, secondary angles, optional motion." },
            ].map((item, index) => (
              <div key={item.step} className={`pt-8 ${index < 3 ? 'border-r border-black/10 pr-6' : ''} ${index > 0 ? 'pl-6' : ''}`}>
                <div className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-4">{item.step}</div>
                <h3 className="text-lg font-normal mb-4">{item.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - What Changes */}
      <section className="py-28 px-8 bg-black text-white border-b border-white/20">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-8 text-center">What Changes</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] mb-16 text-center">
            Better product imagery.<br />Without the overhead.
          </h2>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="pr-16 border-r border-white/20">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-8">Traditional Photoshoots</p>
              <ul className="space-y-5 text-base text-white/40">
                <li className="pb-5 border-b border-white/10">Model casting & booking</li>
                <li className="pb-5 border-b border-white/10">Studio rental & setup</li>
                <li className="pb-5 border-b border-white/10">Sample shipping logistics</li>
                <li>Weeks of turnaround</li>
              </ul>
            </div>
            <div className="pl-16">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white mb-8">MIRROR</p>
              <ul className="space-y-5 text-xl text-white">
                <li className="pb-5 border-b border-white/20">No models needed</li>
                <li className="pb-5 border-b border-white/20">No studio required</li>
                <li className="pb-5 border-b border-white/20">No sample shipping</li>
                <li>7–10 day delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - What You Receive */}
      <section className="py-28 px-8 bg-neutral-50 border-b border-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-8">Deliverables</p>
              <h2 className="text-4xl md:text-5xl font-normal leading-[1.1] mb-8" >
                PDP-ready visuals, delivered.
              </h2>
              <p className="text-base text-black/70 leading-relaxed mb-8">
                Every MIRROR package includes curated, on-body product imagery ready for your product detail pages.
              </p>
              {/* DELIVERABLES VISUAL */}
              <div className="bg-white border border-black p-6">
                <div className="aspect-4/3 bg-neutral-100 relative mb-4 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-3 p-4 w-full">
                    <div className="aspect-3/4 bg-neutral-200 border border-black/10 relative overflow-hidden">
                      <Image src="/images/finalresult.png" alt="Front angle" fill className={`object-cover ${EDITORIAL_IMAGE_CLASS}`} />
                    </div>
                    <div className="aspect-3/4 bg-neutral-200 border border-black/10 relative overflow-hidden">
                      <Image src="/images/side.png" alt="Side angle" fill className={`object-cover ${EDITORIAL_IMAGE_CLASS}`} />
                    </div>
                    <div className="aspect-3/4 bg-neutral-200 border border-black/10 relative overflow-hidden">
                      <Image src="/images/backdetail.png" alt="Back angle" fill className={`object-cover ${EDITORIAL_IMAGE_CLASS}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-l border-black pl-10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-black mb-8">What You Receive</p>
              <ul className="space-y-4 text-base text-black/80">
                <li className="pb-4 border-b border-black/10">1 hero on-body image</li>
                <li className="pb-4 border-b border-black/10">2–4 secondary angles</li>
                <li className="pb-4 border-b border-black/10">Optional motion preview</li>
                <li>Delivered in 7–10 days</li>
              </ul>
              <div className="mt-10 pt-8 border-t border-black">
                <p className="text-[11px] uppercase tracking-[0.2em] text-black mb-3">Pricing</p>
                <p className="text-lg">Packages start at $1,000 per garment.</p>
                <p className="text-sm text-black/50 mt-2">Volume discounts available.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Vision / What's Next */}
      <section id="vision" className="py-28 px-8 bg-neutral-100 border-b border-black">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-8 text-center">The Roadmap</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] mb-6 text-center">
            Visualization is just the beginning.
          </h2>
          <p className="text-base text-black/60 leading-relaxed mb-16 max-w-2xl mx-auto text-center">
            We're building toward deterministic fit, authoritative size decisions at checkout. Visualization is the foundation that makes it possible.
          </p>
          
          {/* Timeline */}
          <div className="grid md:grid-cols-3 gap-0 border border-black">
            {/* Phase 1 - Now */}
            <div className="p-8 border-r border-black bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs font-medium">01</div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-black/50">Now</p>
                  <p className="text-sm font-medium">Visualization</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-black/70">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">●</span>
                  <span>On-body product imagery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">●</span>
                  <span>Geometry-aware garment mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">●</span>
                  <span>PDP-ready deliverables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">●</span>
                  <span>Manual curation & QA</span>
                </li>
              </ul>
            </div>
            
            {/* Phase 2 - Next */}
            <div className="p-8 border-r border-black bg-neutral-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-black/20 text-black/60 flex items-center justify-center text-xs font-medium">02</div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-black/40">Next</p>
                  <p className="text-sm font-medium text-black/60">Fit Analysis</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-black/50">
                <li className="flex items-start gap-2">
                  <span className="text-black/40 mt-0.5">○</span>
                  <span>Body geometry capture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black/40 mt-0.5">○</span>
                  <span>Garment-to-body fit scoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black/40 mt-0.5">○</span>
                  <span>Size recommendation engine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black/40 mt-0.5">○</span>
                  <span>Brand grading integration</span>
                </li>
              </ul>
            </div>
            
            {/* Phase 3 - Future */}
            <div className="p-8 bg-neutral-50/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-black/10 text-black/40 flex items-center justify-center text-xs font-medium">03</div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-black/30">Future</p>
                  <p className="text-sm font-medium text-black/40">Checkout Integration</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-black/40">
                <li className="flex items-start gap-2">
                  <span className="text-black/30 mt-0.5">○</span>
                  <span>Real-time size decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black/30 mt-0.5">○</span>
                  <span>Checkout plugin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black/30 mt-0.5">○</span>
                  <span>Return prediction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black/30 mt-0.5">○</span>
                  <span>Fit confidence scoring</span>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-center mt-10 text-sm text-black/50">
            Visualization customers get priority access to fit intelligence features as they ship.
          </p>
        </div>
      </section>

      {/* Section 6 - Who This Is For */}
      <section id="for-brands" className="py-28 px-8 bg-black text-white border-b border-white/20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-8">Who This Is For</p>
              <h2 className="text-4xl md:text-5xl font-normal leading-[1.1] mb-6">
                Fashion brands who want better PDP visuals.
              </h2>
              <p className="text-lg text-white/50 mb-8">Without the cost and complexity of traditional photoshoots.</p>
              <ul className="space-y-4 text-base text-white/70">
                <li className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  <span>DTC brands scaling product catalogs</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  <span>Emerging designers without studio budgets</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  <span>Brands testing new SKUs before full shoots</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  <span>Teams needing fast turnaround on visuals</span>
                </li>
              </ul>
            </div>
            {/* Visual - garment types */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="aspect-square border border-white/20 bg-white/5 relative overflow-hidden mb-3">
                  <Image src="/images/collarshirt.png" alt="Tops example" fill className={`object-cover ${EDITORIAL_IMAGE_CLASS}`} />
                </div>
                <p className="text-[9px] uppercase tracking-widest text-white/50">Tops</p>
              </div>
              <div className="text-center">
                <div className="aspect-square border border-white/20 bg-white/5 relative overflow-hidden mb-3">
                  <Image src="/images/dresshanging.png" alt="Dresses example" fill className={`object-cover ${EDITORIAL_IMAGE_CLASS}`} />
                </div>
                <p className="text-[9px] uppercase tracking-widest text-white/50">Dresses</p>
              </div>
              <div className="text-center">
                <div className="aspect-square border border-white/20 bg-white/5 relative overflow-hidden mb-3">
                  <Image src="/images/coat.png" alt="Outerwear example" fill className={`object-cover ${EDITORIAL_IMAGE_CLASS}`} />
                </div>
                <p className="text-[9px] uppercase tracking-widest text-white/50">Outerwear</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Request a Sample */}
      <section id="request-access" className="py-28 px-8 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Sample visualization preview */}
            <div className="bg-white/5 aspect-[4/5] flex items-center justify-center relative border border-white/10">
              <div className="w-full h-full p-6">
                <div className="relative w-full h-full bg-black/10 border border-white/10 overflow-hidden">
                  <Image src="/images/top3.png" alt="Visualization sample" fill className={`object-cover ${EDITORIAL_IMAGE_CLASS}`} />
                </div>
              </div>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-8">Get Started</p>
              <h2 className="text-4xl md:text-5xl font-normal leading-[1.1] mb-6" >
                Request a visualization sample.
              </h2>
              <p className="text-base text-white/50 mb-12">
                Send us one garment. We&apos;ll show you what MIRROR can do.
              </p>
              <form 
                action="https://formspree.io/f/xwpgyjqd" 
                method="POST"
                className="space-y-6"
              >
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-[11px] uppercase tracking-[0.2em] text-white/50 mb-3">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-transparent border-b border-white/30 px-0 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="brand" className="block text-[11px] uppercase tracking-[0.2em] text-white/50 mb-3">Brand</label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  className="w-full bg-transparent border-b border-white/30 px-0 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                  placeholder="Brand name"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="role" className="block text-[11px] uppercase tracking-[0.2em] text-white/50 mb-3">Role</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  className="w-full bg-transparent border-b border-white/30 px-0 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                  placeholder="Your role"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[11px] uppercase tracking-[0.2em] text-white/50 mb-3">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-transparent border-b border-white/30 px-0 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                  placeholder="you@brand.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="website" className="block text-[11px] uppercase tracking-[0.2em] text-white/50 mb-3">Website</label>
              <input
                type="url"
                id="website"
                name="website"
                className="w-full bg-transparent border-b border-white/30 px-0 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                placeholder="https://yourbrand.com"
              />
            </div>
            <div>
              <label htmlFor="garments" className="block text-[11px] uppercase tracking-[0.2em] text-white/50 mb-3">Number of garments</label>
              <select
                id="garments"
                name="garments"
                className="w-full bg-transparent border-b border-white/30 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors"
              >
                <option value="" className="bg-black">Select range</option>
                <option value="1-5" className="bg-black">1 - 5 garments</option>
                <option value="6-20" className="bg-black">6 - 20 garments</option>
                <option value="21-50" className="bg-black">21 - 50 garments</option>
                <option value="50+" className="bg-black">50+ garments</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full border border-white text-white text-[11px] uppercase tracking-[0.2em] py-5 hover:bg-white hover:text-black transition-all mt-8"
            >
              Request a Sample
            </button>
              </form>
              <p className="text-sm text-white/40 mt-8">
                Limited onboarding slots available. We&apos;ll respond within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 bg-white border-t border-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div>
              <div className="text-2xl font-medium mb-4"><MirrorLogo /></div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-black/40 max-w-xs">
                Authoritative fit visualization for fashion brands.
              </p>
            </div>
            <div className="flex gap-16">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-4">Product</p>
                <div className="space-y-2 text-[11px] uppercase tracking-[0.15em] text-black">
                  <a href="#product" className="block hover:opacity-50 transition-opacity">Visualization</a>
                  <a href="#vision" className="block hover:opacity-50 transition-opacity text-black/40">Fit Intelligence <span className="text-[8px] normal-case">(coming)</span></a>
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-4">Company</p>
                <div className="space-y-2 text-[11px] uppercase tracking-[0.15em] text-black">
                  <a href="#how-it-works" className="block hover:opacity-50 transition-opacity">How It Works</a>
                  <a href="#for-brands" className="block hover:opacity-50 transition-opacity">For Brands</a>
                  <a href="#request-access" className="block hover:opacity-50 transition-opacity">Contact</a>
                </div>
              </div>
            </div>
            <div className="text-[11px] uppercase tracking-[0.15em] text-black/50">
              © MIRROR, Inc.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
