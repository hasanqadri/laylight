// app/page.tsx

import GlowBackground from "@/components/ui/glow-background";
import Hero from "@/components/layout/hero";
import Services from "@/components/layout/services";
import Testimonials from "@/components/layout/testimonials";
import Contact from "@/components/layout/contact-form";
import Footer from "@/components/layout/footer";
import StickyCTA from "@/components/layout/sticky-cta";

export default function LandingPage() {
    return (
        <main className="relative bg-slate-900 min-h-screen selection:bg-blue-500/30">
            {/* The brand-specific light effect */}
            <GlowBackground />

            {/* Content sections remain relative and z-10 to stay above the glow */}
            <div className="relative z-10">
                <Hero />
                <Services />
                <Testimonials />
                <Contact />
            </div>

            <StickyCTA />
            <Footer></Footer>
        </main>
    );
}