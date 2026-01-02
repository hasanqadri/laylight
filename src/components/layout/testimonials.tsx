// components/Testimonials.tsx
import ScrollButton from "@/components/ui/scroll-button";

const testimonials = [
    {
        quote: "Laylight completely transformed my LinkedIn. I went from zero recruiters in my inbox to three interviews in one week.",
        author: "Sarah Jenkins",
        role: "Product Manager @ TechFlow",
        result: "30% Salary Increase"
    },
    {
        quote: "The interview prep was a game-changer. I felt confident, prepared, and handled the negotiation phase exactly as we practiced.",
        author: "Marcus Chen",
        role: "Senior Developer @ CloudScale",
        result: "Landed Dream Role"
    },
    {
        quote: "I was struggling with my resume for months. After one session with Laylight, I had a version that actually got me past the ATS.",
        author: "Elena Rodriguez",
        role: "Marketing Director",
        result: "10+ Interview Invites"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Success Stories</h2>
                    <p className="mt-2 text-4xl font-bold text-slate-900 tracking-tight">
                        Real results for real careers.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex text-yellow-400 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-slate-700 italic mb-6">"{t.quote}"</p>
                            </div>

                            <div className="border-t pt-6">
                                <p className="font-bold text-slate-900">{t.author}</p>
                                <p className="text-sm text-slate-500 mb-2">{t.role}</p>
                                <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded">
                  {t.result}
                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* The Final Push CTA */}
                <div className="mt-16 text-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center text-slate-900 font-semibold hover:text-blue-600 transition-colors"
                    >
                        Join other successful professionals
                        <span className="ml-2">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}