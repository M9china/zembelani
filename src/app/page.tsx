import { About, Footer, Hero, NavBar } from "@/components";

export default function Home() {
  return (
    <div className="h-sreen">
      <section>
        <NavBar />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
