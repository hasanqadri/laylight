import type { NextConfig } from "next";

const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/landing',
            },
        ]
    },
}

export default nextConfig;
