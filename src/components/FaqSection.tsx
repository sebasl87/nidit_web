import Container from './Container';

const faqs = [
    {
        question: '¿Quién puede ver mi lista de deseos?',
        answer: 'Solo las personas con las que compartas tu enlace de Nidit. No es pública ni aparece en búsquedas.',
    },
    {
        question: '¿Necesito crear una cuenta?',
        answer: 'Sí, es necesario para guardar y editar tus deseos. Podés registrarte con email en segundos.',
    },
    {
        question: '¿Puedo marcar como reservado un regalo sin que se enteren?',
        answer: 'Sí. Podés reservar un deseo de forma anónima y el dueño no sabrá quién lo hizo.',
    },
    {
        question: '¿Qué tipo de regalos puedo agregar?',
        answer: 'Podés agregar cualquier idea: desde links de productos hasta deseos sin link. ¡Lo que quieras!',
    },
    {
        question: '¿Qué pasa si quiero eliminar mi cuenta?',
        answer: 'Escribinos a developer.loguzzo@gmail.com desde el correo registrado y eliminamos todo en 5 días hábiles.',
    },
    {
        question: '¿Cómo puedo colaborar con Nidit?',
        answer: 'Podés apoyarnos invitándonos un cafecito en https://buymeacoffee.com/nidit. ¡Gracias por bancarnos! 💜',
    },
];

const FaqSection = () => {
    return (
        <section className="bg-orange py-20 text-center rounded-3xl mb'20">
            <Container>
                <h2 className="text-3xl font-bold text-center mb-10">Preguntas Frecuentes</h2>
                <div className="space-y-8 max-w-3xl mx-auto">
                    {faqs.map(({ question, answer }, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-semibold mb-2">{question}</h3>
                            <p className="text-gray-700 leading-relaxed">{answer}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default FaqSection;
