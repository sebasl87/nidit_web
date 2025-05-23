import Image from 'next/image';
import Container from './Container';

const steps = [
    {
        img: '/onb1.png',
        alt: 'Bienvenido a Nidit',
    },
    {
        img: '/onb2.png',
        alt: 'Agregá tus ideas',
    },
    {
        img: '/onb3.png',
        alt: 'Compartí con tus seres queridos',
    },
];

const OnboardingSteps = () => {
    return (
        <section className="bg-lilac py-20 text-center rounded-3xl mb-20">
            <Container>
                <h2 className="text-3xl font-bold text-dark mb-12">Cómo funciona Nidit</h2>

                <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
                    {steps.map(({img, alt}, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-4 shadow-md flex flex-col items-center text-center"
                        >
                            <Image src={img} alt={alt} width={300} height={300} className="mb-4"/>

                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default OnboardingSteps;
