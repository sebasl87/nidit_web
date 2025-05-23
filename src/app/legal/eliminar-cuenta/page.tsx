const EliminarCuenta = () => {
    return (
        <main className="max-w-2xl mx-auto px-6 py-20 text-gray-800 leading-7">
            <h1 className="text-3xl font-bold text-[#6c5ce7] mb-6">Eliminar tu cuenta de Nidit</h1>

            <p className="mb-4">
                Si querés eliminar tu cuenta de <strong>Nidit</strong> y todos los datos asociados,
                escribinos a <a href="mailto:developer.loguzzo@gmail.com" className="underline text-blue-600">developer.loguzzo@gmail.com</a>{' '}
                desde el mismo email con el que te registraste.
            </p>

            <p className="mb-4">Se eliminarán los siguientes datos:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Tu ID de usuario</li>
                <li>Tu correo electrónico</li>
                <li>Tu lista de deseos</li>
            </ul>

            <p>
                Los datos serán eliminados en un plazo máximo de <strong>10 días hábiles</strong>.
            </p>
        </main>
    );
};

export default EliminarCuenta;
