'use client';

import Head from 'next/head';
import Image from 'next/image';
import {useState} from 'react';
import {usePublicWishes} from '@/hooks/usePublicWishes';

interface PageProps {
    params: {
        shareId: string;
    };
}

export default function PublicSharePage({params}: PageProps) {
    const shareId = params.shareId;
    const [showModal, setShowModal] = useState(false);

    const {data, isLoading} = usePublicWishes(shareId);
    const wishes = data?.wishes ?? [];
    const ownerName = data?.ownerName ?? 'Usuario';

    return (
        <main className="max-w-xl mx-auto p-6">
            <Head>
                <title>Wishlist de {ownerName} | Nidit</title>
                <meta name="description"
                      content={`Mirá lo que ${ownerName} desea en Nidit. Descargá la app para regalarle algo especial ✨`}/>
                <meta property="og:title" content={`Wishlist de ${ownerName} | Nidit`}/>
                <meta property="og:description"
                      content={`Entrá a ver la lista de deseos de ${ownerName} y sorprendelo con un regalo.`}/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={`https://nidit.net/share/${shareId}`}/>
                <meta property="og:image" content="https://nidit.net/og-banner.png"/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>

            <h1 className="text-2xl font-semibold mb-6">
                {ownerName} quiere esto:
            </h1>

            {isLoading && <p className="text-gray-500">Cargando deseos...</p>}
            {!isLoading && wishes.length === 0 && <p>No hay deseos todavía 😅</p>}

            <ul className="space-y-4">
                {wishes.map((wish: any) => (
                    <li
                        key={wish.id}
                        className={`p-4 rounded-xl shadow-sm border ${wish.reserved ? 'bg-gray-100' : 'bg-white'}`}
                    >
                        <p
                            className={`text-sm font-medium mb-2 break-words ${
                                wish.reserved ? 'line-through text-gray-400' : 'text-gray-900'
                            }`}
                        >
                            {wish.title}
                        </p>
                        {wish.description && (
                            <p className="text-xs text-gray-600 mb-2">{wish.description}</p>
                        )}
                        <button
                            disabled={wish.reserved}
                            onClick={() => setShowModal(true)}
                            className="bg-purple-200 hover:bg-purple-300 text-black text-sm px-4 py-1 rounded-full disabled:cursor-not-allowed"
                        >
                            {wish.reserved ? 'Reservado' : 'Reservar'}
                        </button>
                    </li>
                ))}
            </ul>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6 text-center animate-fade-in">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Reservar requiere la app</h2>
                        <p className="text-gray-600 text-sm mb-6">
                            Para reservar un deseo necesitás la app Nidit 🪄
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://apps.apple.com/app/id000000000"
                                aria-label="Descargar Nidit en App Store"
                            >
                                <Image
                                    src="/app-store-badge.svg"
                                    alt="App Store"
                                    width={160}
                                    height={45}
                                    style={{maxHeight: '45px'}}
                                    className="object-contain"
                                />
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.niditapp"
                                aria-label="Descargar Nidit en Google Play"
                            >
                                <Image
                                    src="/google-play-badge.png"
                                    alt="Google Play"
                                    width={160}
                                    height={50}
                                />
                            </a>
                        </div>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-5 text-sm text-gray-500 hover:text-gray-700"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}
