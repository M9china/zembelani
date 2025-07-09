import { About, Hero, OurProjects} from "@/components";

export default function Home() {
  return (
    <div className="h-sreen">
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <OurProjects />
      </section>
    </div>
  );
}
