import Image from 'next/image';

export default function LogoCarousel() {
    // Add your filenames here
    const logos = [
        "aps.png",
        "gp.png",
        "gt.png",
        "hd.svg",
        "ma.png",
        "tsmc.svg",
        "nap.png"
    ];

    // Triple the array to ensure a seamless infinite loop
    const duplicatedLogos = [...logos, ...logos, ...logos];

    return (
        <section className="py-16 bg-slate-900 border-y border-slate-800 overflow-hidden">
            <div className="container mx-auto px-6 mb-10 text-center">
                <p className="text-slate-500 text-sm uppercase tracking-[0.3em] font-bold">
                    Clients now working at
                </p>
            </div>

            <div className="relative flex overflow-hidden">
                {/* The Scrolling Track */}
                <div className="flex items-center gap-16 md:gap-32 animate-scroll">
                    {duplicatedLogos.map((logo, index) => (
                        <div key={index} className="flex-shrink-0">
                            <img
                                src={`/logos/${logo}`}
                                alt="Company Logo"
                                // h-8 to h-12 standardizes the height
                                // grayscale and opacity make it look high-end
                                // hover:grayscale-0 allows them to "pop" on hover
                                className="h-12 md:h-20 w-auto object-contain opacity-50 brightness-200 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* Left & Right Fades */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10" />
            </div>
        </section>
    );
}