import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';

const Footer = () => {
    return (
        <footer className="bg-celeste text-dark py-12">
            <Container className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

                {/* Logo + Marca */}
                <div className="flex flex-col items-center md:items-start">
                    <Image
                        src="/niditApp-logo-transp.webp"
                        alt="Nidit logo"
                        width={100}
                        height={100}
                    />
                    <p className="text-sm max-w-xs mt-2">
                        Nidit es tu lugar mágico para guardar deseos y recibir regalos que te encanten.
                    </p>
                </div>

                {/* Contacto + Acciones */}
                <div className="flex flex-col items-center md:items-end">
                    <h4 className="text-lg font-semibold mb-2">Contacto</h4>
                    <p className="text-sm">
                        <a href="mailto:hola@nidit.net" className="hover:underline">
                            hola@nidit.net
                        </a>
                    </p>

                    {/* Botón Cafecito */}
                    <div className="mt-4">
                        <a
                            href="https://buymeacoffee.com/nidit"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                                alt="Buy Me a Coffee"
                                width={180}
                                height={50}
                                className="mx-auto"
                            />
                        </a>
                    </div>

                    {/* Enlaces legales */}
                    <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-end">
                        <Link href="/legal/politica-de-privacidad" className="text-sm underline hover:text-dark">
                            Política de Privacidad
                        </Link>
                        <Link href="/legal/terminos-y-condiciones" className="text-sm underline hover:text-dark">
                            Términos y Condiciones
                        </Link>
                    </div>
                </div>
            </Container>

            {/* Copyright */}
            <div className="mt-10 text-center text-xs text-foreground-accent">
                © {new Date().getFullYear()} Nidit. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
