// components/StickyCTA.tsx
"use client";
import { useState, useEffect } from 'react';

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button after scrolling down 400px (past the hero)
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className={`fixed bottom-6 left-0 right-0 z-50 px-6 transition-all duration-500 md:hidden ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
            <a
                href="#contact"
                className="block w-full bg-blue-600 text-white text-center py-4 rounded-xl font-bold shadow-2xl active:scale-95 transition-transform border border-blue-400/20"
            >
                Book My Coaching Session
            </a>
        </div>
    );
}