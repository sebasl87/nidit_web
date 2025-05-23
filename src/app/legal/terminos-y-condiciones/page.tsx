const TerminosCondiciones = () => {
    return (
        <main className="max-w-3xl mx-auto px-6 py-20 text-sm leading-6 text-gray-800">
            <h1 className="text-2xl font-bold mb-6 text-dark">Términos y Condiciones</h1>

            <p className="mb-4">
                Al utilizar Nidit, aceptás los siguientes términos y condiciones. Si no estás de acuerdo con alguno de ellos, no utilices nuestra aplicación.
            </p>

            <h2 className="text-lg font-semibold mt-6 mb-2">1. Uso de la app</h2>
            <p className="mb-4">
                Nidit es una plataforma para crear y compartir listas de deseos personales. El uso indebido de la app puede resultar en la suspensión de tu cuenta.
            </p>

            <h2 className="text-lg font-semibold mt-6 mb-2">2. Responsabilidad</h2>
            <p className="mb-4">
                No nos hacemos responsables por el uso que otras personas hagan de tu lista de deseos ni por la entrega de los regalos.
            </p>

            <h2 className="text-lg font-semibold mt-6 mb-2">3. Propiedad intelectual</h2>
            <p className="mb-4">
                Todos los contenidos de Nidit (diseño, marca, ilustraciones, etc.) son propiedad del equipo de Nidit y no pueden ser reutilizados sin permiso.
            </p>

            <h2 className="text-lg font-semibold mt-6 mb-2">4. Cambios en los términos</h2>
            <p className="mb-4">
                Estos términos pueden modificarse en cualquier momento. Se te notificará si realizamos cambios importantes.
            </p>

            <p className="mt-8">Última actualización: {new Date().toLocaleDateString('es-AR')}</p>
        </main>
    );
};

export default TerminosCondiciones;
