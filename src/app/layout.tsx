import type {Metadata} from "next";
import {Manrope} from "next/font/google";
import {ReactQueryProvider} from '@/components/ReactQueryProvider';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";
import {QueryClientProvider} from "@tanstack/react-query";

const manrope = Manrope({subsets: ['latin']});

export const metadata: Metadata = {
    title: "Nidit - Tu lista de deseos mágica",
    description: "Compartí tu lista de deseos con quien quieras y recibí lo que te encanta.",
    openGraph: {
        title: "Nidit - Tu lista de deseos mágica",
        description: "La mejor forma de recibir regalos que realmente querés.",
        url: "https://nidit.net", // <-- dominio real
        images: [
            {
                url: "/niditApp-logo-transp.webp",
                width: 1200,
                height: 630,
                alt: "Nidit logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Nidit - Tu lista de deseos mágica",
        description: "Compartí tu lista de deseos con quien quieras y recibí lo que te encanta.",
        images: ["/niditApp-logo-transp.webp"],
    },
};


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
        <body className={`${manrope.className} antialiased`}>
        <ReactQueryProvider>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </ReactQueryProvider>
        </body>
        </html>
    );
}
