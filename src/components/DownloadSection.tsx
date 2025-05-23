import Image from 'next/image';

const DownloadSection = () => {
    return (
        <section id="download" className="mt-10 my-20">

            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div
                        className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">Hacelo
                            fácil. Regalá mejor.</h2>

                        <p className="mx-auto max-w-xl md:px-5">Con Nidit podés compartir tu lista de deseos y
                            asegurarte de recibir lo que realmente querés.
                            ¡Evitate los regalos incómodos!</p>

                        <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4">
                            <Image
                                src="/app-store-badge.svg"
                                alt="App Store"
                                width={160}
                                height={50}
                            />
                            <Image
                                src="/google-play-badge.png"
                                alt="Google Play"
                                width={160}
                                height={50}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadSection;
