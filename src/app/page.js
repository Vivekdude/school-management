import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        className="relative flex h-[80vh] items-center justify-center bg-cover bg-center text-background"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1400&q=60)",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <h2 className="mb-4 text-5xl font-bold">Experience the Joy of Dance</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Kalangan Dance Institute offers comprehensive training in classical and contemporary dance forms.
          </p>
          <a
            href="#classes"
            className="inline-block rounded-md bg-foreground px-8 py-3 font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Explore Classes
          </a>
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2">
          <Image
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=60"
            width={800}
            height={600}
            alt="Dancers performing"
            className="rounded-lg shadow-md"
          />
          <div>
            <h3 className="mb-4 text-3xl font-semibold">About Us</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              At Kalangan, we nurture talent through disciplined training and vibrant performances. Our instructors bring years of
              experience in classical, folk and contemporary styles.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Join our community and embark on a journey of self-expression and cultural appreciation.
            </p>
          </div>
        </div>
      </section>

      <section id="classes" className="bg-background py-16">
        <h3 className="mb-8 text-center text-3xl font-semibold">Our Classes</h3>
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

      <section id="gallery" className="py-16">
        <h3 className="mb-8 text-center text-3xl font-semibold">Gallery</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <Image
            src="https://images.unsplash.com/photo-1514516345957-e0fa12afcb1d?auto=format&fit=crop&w=600&q=60"
            width={600}
            height={400}
            alt="Performance"
            className="h-48 w-full rounded object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1544148103-25d509e10931?auto=format&fit=crop&w=600&q=60"
            width={600}
            height={400}
            alt="Dance practice"
            className="h-48 w-full rounded object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=600&q=60"
            width={600}
            height={400}
            alt="Stage show"
            className="h-48 w-full rounded object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1509326063386-9229024a1e3a?auto=format&fit=crop&w=600&q=60"
            width={600}
            height={400}
            alt="Traditional dance"
            className="h-48 w-full rounded object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1553469459-ef98a8ab9c82?auto=format&fit=crop&w=600&q=60"
            width={600}
            height={400}
            alt="Class training"
            className="h-48 w-full rounded object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=60"
            width={600}
            height={400}
            alt="Group performance"
            className="h-48 w-full rounded object-cover"
          />
        </div>
      </section>

      <section id="contact" className="py-16 text-center">
        <h3 className="mb-4 text-3xl font-semibold">Get in Touch</h3>
        <p className="mb-2">
          Email us at{" "}
          <a href="mailto:info@kalangan.com" className="underline">
            info@kalangan.com
          </a>
        </p>
        <p>Call +1 (555) 123-4567</p>
      </section>
    </>
  );
}
