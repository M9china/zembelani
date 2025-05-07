import { About, Footer, Hero, NavBar } from "@/components";

export default function Home() {
  return (
    <div className="">
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
