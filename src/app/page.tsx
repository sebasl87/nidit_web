import Hero from "@/components/Hero";
import Container from "@/components/Container";

import DownloadSection from "@/components/DownloadSection";
import OnboardingSteps from "@/components/OnboardingSteps";


const HomePage: React.FC = () => {
    return (
        <>
            <div className="relative z-0 pb-20">
                <div className="absolute inset-0 -z-10 bg-[url('/bg.webp')] bg-cover bg-no-repeat bg-top"/>
                <Hero/>
                <Container>
                    <DownloadSection/>
                    <OnboardingSteps/>
                </Container>
            </div>
        </>
    );
};

export default HomePage;
