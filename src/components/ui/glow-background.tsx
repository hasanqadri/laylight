// components/GlowBackground.tsx
"use client";
import { useEffect, useState } from "react";

export default function GlowBackground() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            {/* Dynamic light that follows the mouse */}
            <div
                className="absolute transition-transform duration-300 ease-out bg-blue-500/10 rounded-full blur-[120px]"
                style={{
                    width: '600px',
                    height: '600px',
                    left: mousePos.x - 300,
                    top: mousePos.y - 300,
                }}
            />

            {/* Static ambient glows for sections */}
            <div className="absolute top-[20%] -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-[10%] -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
        </div>
    );
}