// components/Services.tsx
import ScrollButton from "@/components/ui/scroll-button";

const services = [
    {
        title: "Resume & Narrative Design",
        desc: "We don't just fix typos. We re-engineer your professional narrative to bypass ATS filters and command attention from executive recruiters.",
        icon: "📄"
    },
    {
        title: "Interview Performance",
        desc: "Master the psychology of the interview. From high-stakes behavioral questions to technical storytelling, we ensure you own the room.",
        icon: "🎤"
    },
    {
        title: "LinkedIn Intelligence",
        desc: "Transform your profile into a 24/7 lead magnet. We optimize your presence to ensure the right opportunities find you while you sleep.",
        icon: "✨"
    },
    {
        title: "Strategic Negotiation",
        desc: "Don't leave five or six figures on the table. We provide the scripts and the confidence to negotiate your total compensation package.",
        icon: "💰"
    }
];

// components/Services.tsx
export default function Services() {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">Expertise</h2>
                        <p className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Comprehensive career <br/>elevation.
                        </p>
                    </div>
                    <p className="text-slate-400 max-w-xs">
                        Tailored strategies for entry-to-senior level professionals ready for their next major move.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-px bg-slate-800/50 border border-slate-800 rounded-3xl overflow-hidden">
                    {services.map((s) => (
                        <div
                            key={s.title}
                            className="bg-slate-900/40 backdrop-blur-sm p-10 hover:bg-slate-800/40 transition-colors group"
                        >
                            <div className="text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 origin-left inline-block">
                                {s.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 italic tracking-tight">{s.title}</h3>
                            <p className="text-slate-400 leading-relaxed mb-8">
                                {s.desc}
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors"
                            >
                                Inquire about this service
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <ScrollButton targetId="testimonials" variant="light" />
        </section>
    );
}