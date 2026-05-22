import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { InscriptionForm } from "@/components/InscriptionForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <FAQ />
        <InscriptionForm />
      </main>
      <Footer />
    </>
  );
}
