import { ArrowRight } from "lucide-react";

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
            <a href="#request-access" className="text-[11px] uppercase tracking-[0.15em] border border-black px-5 py-2 hover:bg-black hover:text-white transition-all">Request Access</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Editorial */}
      <section className="pt-32 pb-0 border-b border-black">
        <div className="max-w-5xl mx-auto text-center px-8 pb-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.05] mb-10" >
            Stop size guessing.<br />Make fit authoritative.
          </h1>
          <p className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto mb-6 leading-relaxed font-light">
            MIRROR gives fashion brands deterministic, geometry-based size decisions - using a single camera and real body measurements, in real time.
          </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#request-access" className="bg-black text-white px-10 py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-black/80 transition-colors">
              Request Early Access
            </a>
            <a href="#how-it-works" className="flex items-center gap-3 text-black text-[11px] uppercase tracking-[0.2em] hover:opacity-50 transition-opacity group">
              How it works <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        {/* HERO VIDEO PLACEHOLDER - Before/After */}
        <div className="w-full bg-neutral-100 border-t border-black">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-[16/7] bg-neutral-200 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-2">
                {/* BEFORE - Plain silhouette */}
                <div className="bg-neutral-300/50 flex items-center justify-center border-r border-black/10 relative">
                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-black/40">Before</div>
                  <div className="text-center p-4">
                    <svg className="w-64 h-96 mx-auto" viewBox="0 0 90 120" fill="none">
                      {/* Head */}
                      <ellipse cx="45" cy="10" rx="6" ry="7" stroke="#ccc" strokeWidth="0.5" fill="none" />
                      {/* Neck */}
                      <path d="M42 17 Q45 19 48 17 L47 22 L43 22 Z" stroke="#ccc" strokeWidth="0.5" fill="none" />
                      {/* Shoulders */}
                      <path d="M28 24 Q34 21 45 21 Q56 21 62 24 Q64 25 64 27 L62 30 Q54 28 45 28 Q36 28 28 30 L26 27 Q26 25 28 24" stroke="#ccc" strokeWidth="0.5" fill="none" />
                      {/* Chest */}
                      <path d="M28 30 Q36 28 45 28 Q54 28 62 30 L60 42 Q52 40 45 40 Q38 40 30 42 Z" stroke="#ccc" strokeWidth="0.5" fill="none" />
                      {/* Waist */}
                      <path d="M30 42 Q38 40 45 40 Q52 40 60 42 L58 54 Q52 52 45 52 Q38 52 32 54 Z" stroke="#ccc" strokeWidth="0.5" fill="none" />
                      {/* Hips */}
                      <path d="M32 54 Q38 52 45 52 Q52 52 58 54 Q60 58 60 62 L56 64 Q50 62 45 62 Q40 62 34 64 L30 62 Q30 58 32 54" stroke="#ccc" strokeWidth="0.5" fill="none" />
                      {/* Legs */}
                      <path d="M34 64 Q32 80 32 100 Q32 108 33 115" stroke="#ccc" strokeWidth="0.5" fill="none" />
                      <path d="M40 64 Q38 80 38 100 Q38 108 38 115" stroke="#ccc" strokeWidth="0.5" fill="none" />
                      <path d="M50 64 Q52 80 52 100 Q52 108 52 115" stroke="#ccc" strokeWidth="0.5" fill="none" />
                      <path d="M56 64 Q58 80 58 100 Q58 108 57 115" stroke="#ccc" strokeWidth="0.5" fill="none" />
                      {/* Arms */}
                      <path d="M28 24 Q24 28 22 38 Q21 46 23 54" stroke="#ccc" strokeWidth="0.5" fill="none" />
                      <path d="M62 24 Q66 28 68 38 Q69 46 67 54" stroke="#ccc" strokeWidth="0.5" fill="none" />
                      {/* Question mark for unknown sizing */}
                      <text x="45" y="45" fontSize="10" fill="#aaa" textAnchor="middle">?</text>
                    </svg>
                  </div>
                </div>
                {/* AFTER - Full analysis with heatmap and measurements */}
                <div className="bg-neutral-200/50 flex items-center justify-center relative">
                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-black/40">After</div>
                  <div className="text-center p-4">
                    <svg className="w-80 h-[28rem] mx-auto" viewBox="-12 0 110 120" fill="none">
                      {/* Head */}
                      <ellipse cx="45" cy="10" rx="6" ry="7" stroke="#555" strokeWidth="0.75" fill="#f5f5f5" />
                      {/* Neck */}
                      <path d="M42 17 Q45 19 48 17 L47 22 L43 22 Z" stroke="#555" strokeWidth="0.5" fill="#f5f5f5" />
                      {/* Shoulders - amber (tight) */}
                      <path d="M28 24 Q34 21 45 21 Q56 21 62 24 Q64 25 64 27 L62 30 Q54 28 45 28 Q36 28 28 30 L26 27 Q26 25 28 24" fill="#fde68a" stroke="#f59e0b" strokeWidth="0.5" />
                      {/* Chest - green (good) */}
                      <path d="M28 30 Q36 28 45 28 Q54 28 62 30 L60 42 Q52 40 45 40 Q38 40 30 42 Z" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.5" />
                      {/* Waist - blue (loose) */}
                      <path d="M30 42 Q38 40 45 40 Q52 40 60 42 L58 54 Q52 52 45 52 Q38 52 32 54 Z" fill="#bae6fd" stroke="#0ea5e9" strokeWidth="0.5" />
                      {/* Hips - green (good) */}
                      <path d="M32 54 Q38 52 45 52 Q52 52 58 54 Q60 58 60 62 L56 64 Q50 62 45 62 Q40 62 34 64 L30 62 Q30 58 32 54" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.5" />
                      {/* Legs */}
                      <path d="M34 64 Q32 80 32 100 Q32 108 33 115" stroke="#555" strokeWidth="0.5" fill="none" />
                      <path d="M40 64 Q38 80 38 100 Q38 108 38 115" stroke="#555" strokeWidth="0.5" fill="none" />
                      <path d="M50 64 Q52 80 52 100 Q52 108 52 115" stroke="#555" strokeWidth="0.5" fill="none" />
                      <path d="M56 64 Q58 80 58 100 Q58 108 57 115" stroke="#555" strokeWidth="0.5" fill="none" />
                      {/* Arms */}
                      <path d="M28 24 Q24 28 22 38 Q21 46 23 54" stroke="#555" strokeWidth="0.5" fill="none" />
                      <path d="M62 24 Q66 28 68 38 Q69 46 67 54" stroke="#555" strokeWidth="0.5" fill="none" />
                      {/* MEASUREMENT LINES */}
                      {/* Shoulder width */}
                      <line x1="26" y1="26" x2="14" y2="26" stroke="#666" strokeWidth="0.4" />
                      <line x1="64" y1="26" x2="76" y2="26" stroke="#666" strokeWidth="0.4" />
                      <line x1="14" y1="24" x2="14" y2="28" stroke="#666" strokeWidth="0.4" />
                      <line x1="76" y1="24" x2="76" y2="28" stroke="#666" strokeWidth="0.4" />
                      <text x="10" y="22" fontSize="4" fill="#666">42cm</text>
                      {/* Chest */}
                      <line x1="28" y1="36" x2="14" y2="36" stroke="#666" strokeWidth="0.4" />
                      <line x1="14" y1="34" x2="14" y2="38" stroke="#666" strokeWidth="0.4" />
                      <text x="0" y="37" fontSize="4" fill="#666">96cm</text>
                      {/* Waist */}
                      <line x1="30" y1="48" x2="14" y2="48" stroke="#666" strokeWidth="0.4" />
                      <line x1="14" y1="46" x2="14" y2="50" stroke="#666" strokeWidth="0.4" />
                      <text x="0" y="49" fontSize="4" fill="#666">78cm</text>
                      {/* Inseam - moved farther right */}
                      <line x1="45" y1="64" x2="45" y2="115" stroke="#666" strokeWidth="0.3" strokeDasharray="2" />
                      <line x1="43" y1="115" x2="47" y2="115" stroke="#666" strokeWidth="0.4" />
                      <text x="78" y="90" fontSize="4" fill="#666">81cm</text>
                      <line x1="47" y1="90" x2="76" y2="90" stroke="#666" strokeWidth="0.3" />
                                          </svg>
                  </div>
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
                Returns aren&apos;t a logistics problem.<br />
                <span className="italic">They&apos;re a fit authority problem.</span>
              </h2>
              <p className="text-base text-black/70 leading-relaxed mb-10">
                Over 70% of returns are driven by sizing - because customers are forced to guess.
              </p>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-black mb-6">Brands absorb the cost</p>
                <ul className="space-y-4 text-base text-black/80">
                  <li className="flex items-center gap-4 pb-4 border-b border-black/10">Margin erosion</li>
                  <li className="flex items-center gap-4 pb-4 border-b border-black/10">Inventory distortion</li>
                  <li className="flex items-center gap-4 pb-4 border-b border-black/10">Customer trust loss</li>
                  <li className="flex items-center gap-4">Operational overhead</li>
                </ul>
              </div>
            </div>
            {/* EDITORIAL STILL PLACEHOLDER */}
            <div className="bg-neutral-200 aspect-[4/5] flex items-center justify-center relative">
              <div className="text-center p-8">
                {/* Scattered clothing outlines - 2x bigger */}
                <svg className="w-96 h-72 mx-auto" viewBox="0 0 160 100" fill="none">
                  {/* T-shirt - scattered top left */}
                  <g transform="translate(10, 5) rotate(-15)">
                    <path d="M0 8 L8 4 L12 8 L12 4 L18 4 L18 8 L22 4 L30 8 L26 14 L26 32 L4 32 L4 14 Z" stroke="#666" strokeWidth="0.75" fill="none" />
                  </g>
                  {/* Dress - center */}
                  <g transform="translate(55, 15) rotate(8)">
                    <path d="M12 0 L18 0 L20 4 L24 4 L24 8 L22 10 L26 40 L4 40 L8 10 L6 8 L6 4 L10 4 Z" stroke="#666" strokeWidth="0.75" fill="none" />
                  </g>
                  {/* Pants - right side */}
                  <g transform="translate(100, 20) rotate(12)">
                    <path d="M0 0 L24 0 L24 6 L22 6 L20 38 L14 38 L12 10 L10 38 L4 38 L2 6 L0 6 Z" stroke="#666" strokeWidth="0.75" fill="none" />
                  </g>
                  {/* Sweater - bottom left */}
                  <g transform="translate(5, 55) rotate(-8)">
                    <path d="M4 10 L0 10 L0 20 L4 20 L4 35 L32 35 L32 20 L36 20 L36 10 L32 10 L32 6 L26 0 L10 0 L4 6 Z" stroke="#666" strokeWidth="0.75" fill="none" />
                    <path d="M14 0 Q18 4 22 0" stroke="#666" strokeWidth="0.5" fill="none" />
                  </g>
                  {/* Blouse - bottom center */}
                  <g transform="translate(70, 60) rotate(-5)">
                    <path d="M0 6 L6 2 L10 6 L10 2 L20 2 L20 6 L24 2 L30 6 L28 10 L28 35 L2 35 L2 10 Z" stroke="#666" strokeWidth="0.75" fill="none" />
                    <circle cx="15" cy="12" r="1" stroke="#666" strokeWidth="0.5" fill="none" />
                    <circle cx="15" cy="18" r="1" stroke="#666" strokeWidth="0.5" fill="none" />
                    <circle cx="15" cy="24" r="1" stroke="#666" strokeWidth="0.5" fill="none" />
                  </g>
                  {/* Skirt - bottom right */}
                  <g transform="translate(115, 55) rotate(10)">
                    <path d="M4 0 L28 0 L28 4 L32 36 L0 36 L4 4 Z" stroke="#666" strokeWidth="0.75" fill="none" />
                  </g>
                  {/* Size tags scattered */}
                  <rect x="45" y="8" width="8" height="10" rx="1" stroke="#999" strokeWidth="0.5" fill="#fff" />
                  <text x="49" y="15" fontSize="5" fill="#999" textAnchor="middle">M</text>
                  <rect x="130" y="12" width="8" height="10" rx="1" stroke="#999" strokeWidth="0.5" fill="#fff" />
                  <text x="134" y="19" fontSize="5" fill="#999" textAnchor="middle">L</text>
                  <rect x="90" y="48" width="8" height="10" rx="1" stroke="#999" strokeWidth="0.5" fill="#fff" />
                  <text x="94" y="55" fontSize="5" fill="#999" textAnchor="middle">S</text>
                </svg>
              </div>
                          </div>
          </div>
        </div>
      </section>

      {/* Section 2 - What MIRROR Does */}
      <section id="product" className="py-28 px-8 bg-neutral-50 border-b border-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-8">The Solution</p>
              <h2 className="text-4xl md:text-5xl font-normal leading-[1.1] mb-8" >
                MIRROR replaces guesswork with geometry.
              </h2>
              <p className="text-base text-black/70 leading-relaxed">
                One camera. Real body data. Your garments fitted to actual shape.
              </p>
              {/* TECH EXPLAINER DIAGRAM PLACEHOLDER */}
              <div className="mt-12 bg-white border border-black p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-center flex-1">
                    <div className="w-10 h-10 border border-black/30 mx-auto mb-2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-black/20 rounded-full"></div>
                    </div>
                    <p className="text-[9px] uppercase tracking-widest text-black/50">Camera</p>
                  </div>
                  <div className="text-black/30">→</div>
                  <div className="text-center flex-1">
                    <div className="w-10 h-10 border border-black/30 mx-auto mb-2 flex items-center justify-center">
                      <div className="w-5 h-6 border border-black/30"></div>
                    </div>
                    <p className="text-[9px] uppercase tracking-widest text-black/50">Body Geometry</p>
                  </div>
                  <div className="text-black/30">→</div>
                  <div className="text-center flex-1">
                    <div className="w-10 h-10 border border-black/30 mx-auto mb-2 flex items-center justify-center">
                      <div className="w-4 h-5 bg-black/10 border border-black/20"></div>
                    </div>
                    <p className="text-[9px] uppercase tracking-widest text-black/50">Fit Engine</p>
                  </div>
                  <div className="text-black/30">→</div>
                  <div className="text-center flex-1">
                    <div className="w-10 h-10 border border-black/30 mx-auto mb-2 flex items-center justify-center">
                      <span className="text-xs font-medium">M</span>
                    </div>
                    <p className="text-[9px] uppercase tracking-widest text-black/50">Size Decision</p>
                  </div>
                </div>
                              </div>
            </div>
            <div className="border-l border-black pl-10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-black mb-8">The Result</p>
              <ul className="space-y-6 text-base text-black/80">
                <li className="pb-6 border-b border-black/10">Customers understand how a garment will fit them</li>
                <li className="pb-6 border-b border-black/10">MIRROR determines the correct size with confidence</li>
                <li>Brands regain control over fit outcomes</li>
              </ul>
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
          {/* STEP-BY-STEP STRIP */}
          <div className="grid grid-cols-5 gap-0 border border-black mb-16">
            {/* Frame 01 - Camera view */}
            <div className="aspect-[3/4] bg-neutral-100 flex items-center justify-center relative border-r border-black">
              <div className="text-center p-4">
                <svg className="w-8 h-20 mx-auto mb-3" viewBox="0 0 30 70" fill="none">
                  <ellipse cx="15" cy="6" rx="4" ry="5" stroke="#888" strokeWidth="0.75" />
                  <path d="M12 11 Q15 12 18 11 L17 14 L13 14 Z" stroke="#888" strokeWidth="0.5" fill="none" />
                  <path d="M6 17 Q10 15 15 15 Q20 15 24 17 Q26 19 26 22 L25 38 Q23 42 20 45 Q17 47 15 47 Q13 47 10 45 Q7 42 5 38 L4 22 Q4 19 6 17" stroke="#888" strokeWidth="0.75" fill="none" />
                  <path d="M6 17 Q3 20 2 28 Q1 34 3 40" stroke="#888" strokeWidth="0.5" fill="none" />
                  <path d="M24 17 Q27 20 28 28 Q29 34 27 40" stroke="#888" strokeWidth="0.5" fill="none" />
                  <path d="M10 45 Q9 48 10 52 L12 52 Q13 49 15 47 Q17 49 18 52 L20 52 Q21 48 20 45" stroke="#888" strokeWidth="0.5" fill="none" />
                  <path d="M12 52 Q11 60 12 68" stroke="#888" strokeWidth="0.5" fill="none" />
                  <path d="M18 52 Q19 60 18 68" stroke="#888" strokeWidth="0.5" fill="none" />
                </svg>
                <p className="text-[7px] uppercase tracking-widest text-black/40">Camera</p>
              </div>
              <div className="absolute top-2 left-2 text-[10px] text-black/30">01</div>
            </div>
            {/* Frame 02 - Wireframe overlay */}
            <div className="aspect-[3/4] bg-neutral-100 flex items-center justify-center relative border-r border-black">
              <div className="text-center p-4">
                <svg className="w-8 h-20 mx-auto mb-3" viewBox="0 0 30 70" fill="none">
                  <ellipse cx="15" cy="6" rx="4" ry="5" stroke="#666" strokeWidth="0.75" strokeDasharray="2" />
                  <path d="M6 17 Q10 15 15 15 Q20 15 24 17 Q26 19 26 22 L25 38 Q23 42 20 45 Q17 47 15 47 Q13 47 10 45 Q7 42 5 38 L4 22 Q4 19 6 17" stroke="#666" strokeWidth="0.75" strokeDasharray="2" fill="none" />
                  <path d="M12 52 Q11 60 12 68" stroke="#666" strokeWidth="0.5" strokeDasharray="2" fill="none" />
                  <path d="M18 52 Q19 60 18 68" stroke="#666" strokeWidth="0.5" strokeDasharray="2" fill="none" />
                  <line x1="15" y1="15" x2="15" y2="47" stroke="#999" strokeWidth="0.3" strokeDasharray="1" />
                  <line x1="4" y1="30" x2="26" y2="30" stroke="#999" strokeWidth="0.3" strokeDasharray="1" />
                  <line x1="4" y1="38" x2="26" y2="38" stroke="#999" strokeWidth="0.3" strokeDasharray="1" />
                </svg>
                <p className="text-[7px] uppercase tracking-widest text-black/40">Geometry</p>
              </div>
              <div className="absolute top-2 left-2 text-[10px] text-black/30">02</div>
            </div>
            {/* Frame 03 - Garment appears */}
            <div className="aspect-[3/4] bg-neutral-100 flex items-center justify-center relative border-r border-black">
              <div className="text-center p-4">
                <svg className="w-8 h-20 mx-auto mb-3" viewBox="0 0 30 70" fill="none">
                  <ellipse cx="15" cy="6" rx="4" ry="5" stroke="#888" strokeWidth="0.75" />
                  <path d="M12 11 Q15 12 18 11" stroke="#888" strokeWidth="0.5" fill="none" />
                  <path d="M4 16 Q9 13 15 13 Q21 13 26 16 L28 18 L26 42 Q22 46 15 48 Q8 46 4 42 L2 18 Z" fill="#e8e8e8" stroke="#555" strokeWidth="0.75" />
                  <path d="M10 16 Q15 20 20 16" stroke="#999" strokeWidth="0.4" fill="none" />
                  <path d="M12 52 Q11 60 12 68" stroke="#888" strokeWidth="0.5" fill="none" />
                  <path d="M18 52 Q19 60 18 68" stroke="#888" strokeWidth="0.5" fill="none" />
                </svg>
                <p className="text-[7px] uppercase tracking-widest text-black/40">Fit</p>
              </div>
              <div className="absolute top-2 left-2 text-[10px] text-black/30">03</div>
            </div>
            {/* Frame 04 - Size recommendation */}
            <div className="aspect-[3/4] bg-neutral-100 flex items-center justify-center relative border-r border-black">
              <div className="text-center p-4">
                <svg className="w-8 h-20 mx-auto mb-2" viewBox="0 0 30 70" fill="none">
                  <ellipse cx="15" cy="6" rx="4" ry="5" stroke="#888" strokeWidth="0.75" />
                  <path d="M4 16 Q9 13 15 13 Q21 13 26 16 L28 18 L26 42 Q22 46 15 48 Q8 46 4 42 L2 18 Z" fill="#ddd" stroke="#444" strokeWidth="0.75" />
                  <path d="M12 52 Q11 60 12 68" stroke="#888" strokeWidth="0.5" fill="none" />
                  <path d="M18 52 Q19 60 18 68" stroke="#888" strokeWidth="0.5" fill="none" />
                </svg>
                <div className="bg-black text-white text-[9px] font-medium px-2 py-0.5">M</div>
                <p className="text-[7px] uppercase tracking-widest text-black/40 mt-1">Size M</p>
              </div>
              <div className="absolute top-2 left-2 text-[10px] text-black/30">04</div>
            </div>
            {/* Frame 05 - Add to cart */}
            <div className="aspect-[3/4] bg-neutral-100 flex items-center justify-center relative">
              <div className="text-center p-4">
                <svg className="w-8 h-20 mx-auto mb-3" viewBox="0 0 30 70" fill="none">
                  <rect x="5" y="18" width="20" height="24" rx="1.5" stroke="#444" strokeWidth="0.75" fill="#f5f5f5" />
                  <path d="M10 18 L10 13 Q10 8 15 8 Q20 8 20 13 L20 18" stroke="#444" strokeWidth="0.75" fill="none" />
                  <path d="M10 30 L13 33 L20 25" stroke="#22c55e" strokeWidth="1.5" fill="none" />
                </svg>
                <p className="text-[7px] uppercase tracking-widest text-black/40">Purchase</p>
              </div>
              <div className="absolute top-2 left-2 text-[10px] text-black/30">05</div>
            </div>
          </div>
          <div className="grid md:grid-cols-5 gap-0 border-t border-black">
            {[
              { step: "01", title: "Capture", desc: "Customer opens camera from product page." },
              { step: "02", title: "Understand", desc: "Body shape estimated in real time." },
              { step: "03", title: "Fit", desc: "Garment fit evaluated against their body geometry." },
              { step: "04", title: "Decide", desc: "Best size determined automatically." },
              { step: "05", title: "Purchase", desc: "Correct size added to cart." },
            ].map((item, index) => (
              <div key={item.step} className={`pt-8 ${index < 4 ? 'border-r border-black/10 pr-6' : ''} ${index > 0 ? 'pl-6' : ''}`}>
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
            One fit system. One size decision.<br />Before checkout.
          </h2>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="pr-16 border-r border-white/20">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-8">Before</p>
              <ul className="space-y-5 text-base text-white/40">
                <li className="pb-5 border-b border-white/10">Size charts</li>
                <li className="pb-5 border-b border-white/10">Fit quizzes</li>
                <li className="pb-5 border-b border-white/10">Guessing</li>
                <li>Post-purchase correction</li>
              </ul>
            </div>
            <div className="pl-16">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white mb-8">After</p>
              <ul className="space-y-5 text-xl text-white">
                <li className="pb-5 border-b border-white/20">One integration</li>
                <li className="pb-5 border-b border-white/20">One fit engine</li>
                <li>One decision</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Fit You Can Stand Behind */}
      <section className="py-28 px-8 bg-neutral-50 border-b border-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-black/50 mb-8">Authoritative Fit Decisions</p>
              <h2 className="text-4xl md:text-5xl font-normal leading-[1.1] mb-8" >
                Size recommendations you can defend.
              </h2>
              <p className="text-base text-black/70 leading-relaxed mb-8">
                No quizzes. No heuristics. Fit is evaluated directly against the customer&apos;s body geometry.
              </p>
              {/* FIT ANALYSIS VISUAL PLACEHOLDER */}
              <div className="bg-white border border-black p-6">
                <div className="aspect-[4/5] bg-neutral-100 relative mb-4 flex items-center justify-center">
                  {/* Modern elegant silhouette with heatmap zones */}
                  <svg className="w-40 h-72" viewBox="0 0 60 120" fill="none">
                    {/* Head - elegant oval */}
                    <ellipse cx="30" cy="8" rx="5" ry="6" stroke="#555" strokeWidth="0.75" fill="#f5f5f5" />
                    {/* Neck - slim curved */}
                    <path d="M27 14 Q30 15 33 14 L32 18 L28 18 Z" stroke="#555" strokeWidth="0.5" fill="#f5f5f5" />
                    {/* Shoulders - TIGHT zone (amber) - curved */}
                    <path d="M12 22 Q18 19 30 19 Q42 19 48 22 Q50 23 50 25 L48 28 Q40 26 30 26 Q20 26 12 28 L10 25 Q10 23 12 22" fill="#fde68a" stroke="#f59e0b" strokeWidth="0.75" />
                    {/* Upper chest - GOOD zone (green) */}
                    <path d="M12 28 Q20 26 30 26 Q40 26 48 28 L46 40 Q38 38 30 38 Q22 38 14 40 Z" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.75" />
                    {/* Lower chest/ribcage - GOOD zone (green) */}
                    <path d="M14 40 Q22 38 30 38 Q38 38 46 40 L44 52 Q38 50 30 50 Q22 50 16 52 Z" fill="#bbf7d0" stroke="#22c55e" strokeWidth="0.75" />
                    {/* Waist - LOOSE zone (blue) - curved inward */}
                    <path d="M16 52 Q22 50 30 50 Q38 50 44 52 L42 62 Q36 60 30 60 Q24 60 18 62 Z" fill="#bae6fd" stroke="#0ea5e9" strokeWidth="0.75" />
                    {/* Hips - curved outward */}
                    <path d="M18 62 Q24 60 30 60 Q36 60 42 62 Q44 66 44 70 L40 72 Q35 70 30 70 Q25 70 20 72 L16 70 Q16 66 18 62" stroke="#555" strokeWidth="0.5" fill="#f5f5f5" />
                    {/* Left leg - slim curved */}
                    <path d="M20 72 Q18 85 18 100 Q18 108 19 115" stroke="#555" strokeWidth="0.5" fill="none" />
                    <path d="M26 72 Q24 85 24 100 Q24 108 24 115" stroke="#555" strokeWidth="0.5" fill="none" />
                    {/* Right leg - slim curved */}
                    <path d="M34 72 Q36 85 36 100 Q36 108 36 115" stroke="#555" strokeWidth="0.5" fill="none" />
                    <path d="M40 72 Q42 85 42 100 Q42 108 41 115" stroke="#555" strokeWidth="0.5" fill="none" />
                    {/* Left arm - graceful curve */}
                    <path d="M12 22 Q8 26 6 35 Q5 44 6 52" stroke="#555" strokeWidth="0.5" fill="none" />
                    <path d="M10 25 Q7 28 5 36 Q4 44 5 50" stroke="#555" strokeWidth="0.5" fill="none" />
                    {/* Right arm - graceful curve */}
                    <path d="M48 22 Q52 26 54 35 Q55 44 54 52" stroke="#555" strokeWidth="0.5" fill="none" />
                    <path d="M50 25 Q53 28 55 36 Q56 44 55 50" stroke="#555" strokeWidth="0.5" fill="none" />
                    {/* Measurement indicator lines */}
                    <line x1="8" y1="24" x2="2" y2="24" stroke="#999" strokeWidth="0.4" strokeDasharray="1.5" />
                    <line x1="52" y1="24" x2="58" y2="24" stroke="#999" strokeWidth="0.4" strokeDasharray="1.5" />
                    <line x1="14" y1="56" x2="8" y2="56" stroke="#999" strokeWidth="0.4" strokeDasharray="1.5" />
                    <line x1="46" y1="56" x2="52" y2="56" stroke="#999" strokeWidth="0.4" strokeDasharray="1.5" />
                  </svg>
                  {/* Labels */}
                  <div className="absolute top-4 right-4 text-right space-y-2">
                    <div className="flex items-center gap-2 justify-end">
                      <span className="text-[8px] uppercase tracking-widest text-black/50">Tight</span>
                      <div className="w-3 h-3 bg-amber-200 border border-amber-400"></div>
                    </div>
                    <div className="flex items-center gap-2 justify-end">
                      <span className="text-[8px] uppercase tracking-widest text-black/50">Good</span>
                      <div className="w-3 h-3 bg-emerald-200 border border-emerald-400"></div>
                    </div>
                    <div className="flex items-center gap-2 justify-end">
                      <span className="text-[8px] uppercase tracking-widest text-black/50">Loose</span>
                      <div className="w-3 h-3 bg-sky-200 border border-sky-400"></div>
                    </div>
                  </div>
                  {/* Size labels */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <div className="bg-black text-white px-3 py-1 text-[9px] uppercase tracking-widest">Best fit: Size M</div>
                    <div className="bg-white/80 text-black/60 px-3 py-1 text-[8px]">Size S: restricted at shoulders</div>
                    <div className="bg-white/80 text-black/60 px-3 py-1 text-[8px]">Size L: excess at waist</div>
                  </div>
                </div>
                              </div>
            </div>
            <div className="border-l border-black pl-10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-black mb-8">Evaluation Criteria</p>
              <ul className="space-y-4 text-base text-black/80">
                <li className="pb-4 border-b border-black/10">Body geometry per SKU size</li>
                <li className="pb-4 border-b border-black/10">Fabric stretch, weight & structural behavior</li>
                <li className="pb-4 border-b border-black/10">Brand grading rules</li>
                <li>Tension at critical fit points</li>
              </ul>
              <div className="mt-10 pt-8 border-t border-black">
                <p className="text-[11px] uppercase tracking-[0.2em] text-black mb-3">Outcome</p>
                <p className="text-lg" >Customers stop guessing. Brands stop absorbing the cost.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Control */}
      <section id="for-brands" className="py-28 px-8 bg-black text-white border-b border-white/20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-8">Control</p>
              <h2 className="text-4xl md:text-5xl font-normal leading-[1.1] mb-6">
                You define fit.<br />MIRROR enforces it.
              </h2>
              <p className="text-lg text-white/50">Your grading rules. Your size standards. Enforced consistently at checkout.</p>
            </div>
            {/* Size comparison visual */}
            <div className="flex justify-center gap-6">
              {['S', 'M', 'L'].map((size, i) => (
                <div key={size} className={`text-center ${size === 'M' ? 'scale-110' : 'opacity-50'}`}>
                  <div className={`w-20 h-28 border ${size === 'M' ? 'border-white bg-white/10' : 'border-white/30'} flex items-center justify-center mb-3`}>
                    <svg className="w-10 h-16" viewBox="0 0 30 50" fill="none">
                      <ellipse cx="15" cy="5" rx="4" ry="4" stroke={size === 'M' ? '#fff' : '#666'} strokeWidth="0.75" />
                      <path d="M6 12 Q10 10 15 10 Q20 10 24 12 L25 14 L24 35 Q20 38 15 38 Q10 38 6 35 L5 14 Z" 
                        stroke={size === 'M' ? '#fff' : '#666'} 
                        strokeWidth="0.75" 
                        fill={size === 'M' ? 'rgba(255,255,255,0.1)' : 'none'} />
                      <path d="M10 38 Q9 42 10 48" stroke={size === 'M' ? '#fff' : '#666'} strokeWidth="0.5" />
                      <path d="M20 38 Q21 42 20 48" stroke={size === 'M' ? '#fff' : '#666'} strokeWidth="0.5" />
                    </svg>
                  </div>
                  <p className={`text-sm ${size === 'M' ? 'text-white' : 'text-white/40'}`}>{size}</p>
                  {size === 'M' && <p className="text-[9px] uppercase tracking-widest text-white/60 mt-1">Best fit</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Request Access */}
      <section id="request-access" className="py-28 px-8 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* CONFIDENCE IMAGE PLACEHOLDER */}
            <div className="bg-white/5 aspect-[4/5] flex items-center justify-center relative border border-white/10">
              <div className="text-center p-4">
                {/* Garment on hanger with phone nearby - 2x bigger */}
                <svg className="w-64 h-80 mx-auto" viewBox="0 0 80 110" fill="none">
                  {/* Hanger */}
                  <path d="M30 8 L40 2 L50 8" stroke="#666" strokeWidth="1.5" fill="none" />
                  <circle cx="40" cy="2" r="2" fill="#666" />
                  {/* Shirt on hanger */}
                  <path d="M22 10 L28 8 L36 8 L40 6 L44 8 L52 8 L58 10 L58 55 L48 58 L32 58 L22 55 Z" fill="#404040" stroke="#555" strokeWidth="1" />
                  {/* Collar */}
                  <path d="M36 8 L40 14 L44 8" stroke="#555" strokeWidth="0.5" fill="none" />
                  {/* Sleeve lines */}
                  <line x1="22" y1="10" x2="18" y2="30" stroke="#555" strokeWidth="1" />
                  <line x1="58" y1="10" x2="62" y2="30" stroke="#555" strokeWidth="1" />
                  {/* Phone device */}
                  <rect x="55" y="70" width="18" height="32" rx="2" fill="#333" stroke="#555" strokeWidth="1" />
                  <rect x="57" y="74" width="14" height="24" rx="1" fill="#222" />
                  {/* Phone screen glow */}
                  <rect x="59" y="76" width="10" height="20" fill="#444" />
                  {/* Small human icon on phone */}
                  <circle cx="64" cy="82" r="2" stroke="#888" strokeWidth="0.5" fill="none" />
                  <line x1="64" y1="84" x2="64" y2="90" stroke="#888" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-8">Access</p>
              <h2 className="text-4xl md:text-5xl font-normal leading-[1.1] mb-6" >
                Pilot MIRROR for your brand.
              </h2>
              <p className="text-base text-white/50 mb-12">
                We&apos;re onboarding a limited number of brands for pilot integrations.
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
              <label htmlFor="volume" className="block text-[11px] uppercase tracking-[0.2em] text-white/50 mb-3">Monthly order volume</label>
              <select
                id="volume"
                name="volume"
                className="w-full bg-transparent border-b border-white/30 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors"
              >
                <option value="" className="bg-black">Select range</option>
                <option value="0-500" className="bg-black">0 - 500</option>
                <option value="500-2000" className="bg-black">500 - 2,000</option>
                <option value="2000-10000" className="bg-black">2,000 - 10,000</option>
                <option value="10000+" className="bg-black">10,000+</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full border border-white text-white text-[11px] uppercase tracking-[0.2em] py-5 hover:bg-white hover:text-black transition-all mt-8"
            >
              Request Access
            </button>
              </form>
              <p className="text-sm text-white/40 mt-8">
                Pilot partners receive hands-on onboarding, fit calibration, and size confidence benchmarking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 bg-white border-t border-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="text-2xl font-medium"><MirrorLogo /></div>
            <div className="flex items-center gap-10 text-[11px] uppercase tracking-[0.15em] text-black">
              <a href="#product" className="hover:opacity-50 transition-opacity">Product</a>
              <a href="#how-it-works" className="hover:opacity-50 transition-opacity">How It Works</a>
              <a href="#for-brands" className="hover:opacity-50 transition-opacity">For Brands</a>
              <a href="#request-access" className="hover:opacity-50 transition-opacity">Contact</a>
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
