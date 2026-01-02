// tailwind.config.js
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/features/**/*.{js,ts,jsx,tsx}",
    ],

    // ...
    theme: {
        extend: {
            keyframes: {
                scroll: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" }, // because you duplicated the list
                },
            },
            animation: {
                scroll: "scroll 20s linear infinite",
            },
        },
    },
};
