import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>Nidit - Tu lista de deseos mágica 🎁</title>
                <meta name="description" content="Nidit es la app donde guardás tus deseos y los compartís con quienes te quieren. Que te regalen lo que realmente querés." />
                <meta property="og:title" content="Nidit - Tu lista de deseos mágica" />
                <meta property="og:description" content="Creá tu Nidit, compartilo y recibí los regalos que más querés." />
                <meta property="og:image" content="/images/logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <main className={styles.main}>
                <section className={styles.section}>
                    <Image src="/images/onb3.png" alt="Bienvenida a Nidit" width={250} height={250} priority />
                </section>

                <section className={styles.section}>
                    <Image src="/images/onb1.png" alt="Agregá tus ideas" width={250} height={250} />
                </section>

                <section className={styles.section}>
                    <Image src="/images/onb2.png" alt="Compartí tu lista" width={250} height={250} />
                </section>

                <section className={styles.ctaSection}>
                    <a href="https://play.google.com/store/apps/details?id=com.niditApp" className={styles.cta}>
                        Descargar la app
                    </a>
                </section>

                <footer className={styles.footer}>
                    <p><a href="/terms">Términos y condiciones</a> · © {new Date().getFullYear()} Nidit</p>
                </footer>
            </main>
        </>
    );
}
