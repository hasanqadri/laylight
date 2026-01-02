// components/ScrollButton.tsx
import { ChevronDown } from "lucide-react"; // Optional: install lucide-react or use your SVG

interface ScrollButtonProps {
    targetId: string;
    variant?: "light" | "dark";
}

export default function ScrollButton({ targetId, variant = "light" }: ScrollButtonProps) {
    const colorClass = variant === "light" ? "text-white/50 hover:text-white" : "text-slate-900/50 hover:text-slate-900";

    return (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
            <a
                href={`#${targetId}`}
                className={`flex flex-col items-center gap-2 transition-all duration-300 ${colorClass} group`}
                aria-label="Scroll to next section"
            >
                <span className="text-xs uppercase tracking-[0.2em] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Discover More
                </span>
                <div className="p-2 rounded-full border border-current animate-bounce">
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </a>
        </div>
    );
}