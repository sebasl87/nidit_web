import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                mint: '#B9FBC0',
                lilac: '#BDB2FF',
                orange: '#FFBC8B',
                celeste: '#A0E7E5',
                yellow: '#FEE440',
                dark: '#1A1A1A'
            }
        },
    },
    plugins: [],
}
export default config;
