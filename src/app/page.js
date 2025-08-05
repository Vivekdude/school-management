export default function Home() {
  return (
    <>
      <section className="py-24 text-center">
        <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
          Experience the Joy of Dance
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Kalangan Dance Institute offers comprehensive training in classical
          and contemporary dance forms.
        </p>
        <a
          href="#classes"
          className="inline-block rounded-md bg-foreground px-8 py-3 font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Explore Classes
        </a>
      </section>

      <section id="classes" className="py-16">
        <h3 className="mb-8 text-center text-2xl font-semibold">Our Classes</h3>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border p-6 shadow-sm">
            <h4 className="mb-2 text-xl font-medium">Ballet</h4>
            <p>Master the techniques of ballet from beginner to advanced levels.</p>
          </div>
          <div className="rounded-lg border p-6 shadow-sm">
            <h4 className="mb-2 text-xl font-medium">Contemporary</h4>
            <p>Explore modern movement and creative choreography.</p>
          </div>
          <div className="rounded-lg border p-6 shadow-sm">
            <h4 className="mb-2 text-xl font-medium">Hip-Hop</h4>
            <p>Learn the latest styles and grooves in our energetic hip-hop classes.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <h3 className="mb-4 text-center text-2xl font-semibold">Get in Touch</h3>
        <p className="text-center">
          Email us at{" "}
          <a href="mailto:info@kalangan.com" className="underline">
            info@kalangan.com
          </a>
        </p>
      </section>
    </>
  );
}

