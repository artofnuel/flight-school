import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Hero />
      <Services />
    </main>
  );
}
