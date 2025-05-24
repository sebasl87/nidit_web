'use client';

import Head from 'next/head';
import { useState } from 'react';
import { usePublicWishes } from '@/hooks/usePublicWishes';

interface PageProps {
    params: {
        shareId: string;
    };
}

export default function PublicSharePage({ params }: PageProps) {
    const shareId = params.shareId;
    const [showModal, setShowModal] = useState(false);

    const { data, isLoading } = usePublicWishes(shareId);
    const wishes = data?.wishes ?? [];
    const ownerName = data?.ownerName ?? 'Usuario';

    return (
        <main className="max-w-xl mx-auto p-6">
            <Head>
                <title>Wishlist pública | Nidit</title>
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
                    <div className="bg-white p-6 rounded-lg text-center max-w-sm w-full">
                        <h2 className="text-lg font-bold mb-2">Reservar requiere la app</h2>
                        <p className="text-sm text-gray-700 mb-4">
                            Para reservar un deseo necesitás la app Nidit 💫
                        </p>
                        <div className="flex justify-center space-x-2">
                            <a
                                href="https://play.google.com/store/apps/details?id=com.niditapp"
                                className="bg-[#6c5ce7] text-white px-3 py-1 rounded"
                            >
                                Descargar Android
                            </a>
                            <a
                                href="https://apps.apple.com/app/id000000000"
                                className="bg-[#6c5ce7] text-white px-3 py-1 rounded"
                            >
                                Descargar iPhone
                            </a>
                        </div>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 text-sm text-gray-500 hover:underline"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}
