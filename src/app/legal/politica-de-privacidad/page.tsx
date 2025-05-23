const PoliticaPrivacidad = () => {
    return (
        <main className="max-w-3xl mx-auto px-6 py-20 text-sm leading-6 text-gray-800">
            <h1 className="text-2xl font-bold mb-6 text-dark">Política de Privacidad</h1>

            <p className="mb-4">
                En Nidit, nos tomamos tu privacidad muy en serio. Esta política explica qué datos recopilamos y cómo los
                usamos.
            </p>

            <h2 className="text-lg font-semibold mt-6 mb-2">1. Información que recopilamos</h2>
            <p className="mb-4">
                Solo almacenamos la información mínima necesaria para que puedas usar la app: tu correo electrónico y tu
                lista de deseos.
            </p>

            <h2 className="text-lg font-semibold mt-6 mb-2">2. Cómo usamos tu información</h2>
            <p className="mb-4">
                Utilizamos tu información exclusivamente para mejorar tu experiencia dentro de la app. No compartimos
                datos con terceros.
            </p>

            <h2 className="text-lg font-semibold mt-6 mb-2">3. Tus derechos</h2>
            <p className="mb-4">
                Podés solicitarnos que eliminemos tus datos en cualquier momento escribiendo a <a
                href="mailto:hola@nidit.net" className="underline">hola@nidit.net</a>.
            </p>

            <h2 className="text-lg font-semibold mt-6 mb-2">4. Cambios a esta política</h2>
            <p className="mb-4">
                Esta política puede actualizarse en el futuro. Te avisaremos si hacemos cambios importantes.
            </p>

            <p className="mt-8">Última actualización: {new Date().toLocaleDateString('es-AR')}</p>
        </main>
    );
};

export default PoliticaPrivacidad;
