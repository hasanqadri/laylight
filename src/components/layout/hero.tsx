import ScrollButton from "@/components/ui/scroll-button";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center overflow-hidden bg-slate-900 text-white">
            {/* 1. Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
                    alt="Syed Career Consulting"
                    className="h-full w-full object-cover object-center md:object-right"
                />

                {/* 2. Intelligent Overlay Layer */}
                {/* Mobile: A dark tint over the whole image for readability */}
                {/* Desktop: A gradient that fades from dark (left) to clear (right) */}
                <div className="absolute inset-0 md:bg-gradient-to-r md:from-slate-900 md:via-slate-900/20 md:to-transparent" />
            </div>

            {/* 3. Content Layer */}
            <div className="container mx-auto px-6 relative z-10">
                {/* text-center on mobile, text-left on desktop */}
                <div className="max-w-4xl text-center md:text-left">
                    <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 tracking-tight leading-tight">
                        Hi, I’m Syed. I help people navigate their next big move. Your path to the top, <span className="text-yellow-400 text-shadow-lg font-extrabold">illuminated.</span>
                    </h1>

                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <a
                            href="#contact"
                            className="group relative inline-flex items-center justify-center bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] active:scale-95"
                        >
                            <span>Get a Free Consultation</span>
                            <svg
                                className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <ScrollButton targetId="services" variant="light" />
        </section>
    );
}