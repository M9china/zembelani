import { About, Hero} from "@/components";

export default function Home() {
  return (
    <div className="h-sreen">
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
    </div>
  );
}
