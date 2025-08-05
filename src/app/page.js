import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="relative flex h-[80vh] items-center justify-center bg-cover bg-center text-background"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1550345332-602ee76d1d88?auto=format&fit=crop&w=1400&q=60)",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <h2 className="mb-4 text-5xl font-bold">Learn Kathak Online</h2>
          <p className="mb-8 text-xl">
            Unlock grace of Kathak With Comfort at your Home
          </p>
          <a
            href="#courses"
            className="inline-block rounded-md bg-foreground px-8 py-3 font-medium text-background"
          >
            Click Here
          </a>
        </div>
      </section>

      <section id="about" className="py-16">
        <h3 className="mb-4 text-3xl font-semibold text-center">
          Give Your Child the Gift of Kathak - A Journey of Grace, Confidence &
          Joy
        </h3>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300">
          Courses for Children (Age 4-12)
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-600 dark:text-gray-300">
          Have you ever watched a Kathak dancer gracefully spin across the stage,
          weaving stories through movement, and felt inspired? Whether you are a
          parent seeking a meaningful activity for your child or someone who’s
          always dreamed of dancing but never had the chance, our online Kathak
          classes bring this classical art form to you — no matter where you are.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600 dark:text-gray-300">
          Kathak is not just about dance but about storytelling, rhythm,
          discipline, and personal growth. Our expert-guided courses offer a
          structured yet flexible way to master this timeless art, right from the
          comfort of your home. Our expert Kathak masters guide young dancers
          step by step, guaranteeing a joyful and enriching experience. Let your
          child take the first step into a world where tradition meets
          creativity.
        </p>
        <div className="mt-8 text-center">
          <a
            href="#courses"
            className="inline-block rounded-md bg-foreground px-8 py-3 font-medium text-background"
          >
            Take the First Step — Enroll Today
          </a>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2">
          <Image
            src="https://images.unsplash.com/photo-1601050690597-4f779cdd192d?auto=format&fit=crop&w=800&q=60"
            width={800}
            height={600}
            alt="Kathak beginner"
            className="rounded-lg shadow-md"
          />
          <div>
            <h4 className="mb-4 text-2xl font-semibold">
              Kathak Prarambhika — Beginner’s Course for Kids
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              This beginner’s course is perfect for young dancers taking their
              first steps into the world of Kathak. In the first year of the
              Diploma examination curriculum, children learn essential techniques
              like mudras, tatkaar, and more in our fun Kathak classes. With live
              online classes, personalized attention, and a supportive
              environment.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl items-center gap-8 md:grid-cols-2">
          <div>
            <h4 className="mb-4 text-2xl font-semibold">
              Kathak Madhyama and Expert — Advanced Learning for Kids
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              The Madhyama level (2 years) builds on fundamentals, introducing
              intricate footwork, expressions (abhinaya), and storytelling. The
              Expert level (3 years) focuses on complex compositions,
              improvisation, and stage presence. The Diploma level (7 years)
              offers a comprehensive journey through Kathak, culminating in a
              recognized diploma.
            </p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=800&q=60"
            width={800}
            height={600}
            alt="Advanced Kathak"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="py-16">
        <h3 className="mb-4 text-center text-3xl font-semibold">
          Rediscover Yourself through the Rhythm of Kathak — Anytime, Anywhere
        </h3>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300">
          Courses for Adults (Age 13 - 60)
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-600 dark:text-gray-300">
          Have you ever dreamed of taking Kathak dance classes but never had the
          chance? Whether you are a complete beginner or someone reconnecting
          with dance, our online Kathak dance classes make it possible — no
          matter where you are or what your schedule looks like.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600 dark:text-gray-300">
          With personalized guidance, live sessions, and a step-by-step approach,
          your Kathak journey starts here. No boundaries, no excuses — just you,
          the rhythm, and a world of possibilities.
        </p>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          <Image
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=60"
            width={400}
            height={300}
            alt="Kathak dance"
            className="h-48 w-full rounded object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1505740106531-4243f3831c64?auto=format&fit=crop&w=400&q=60"
            width={400}
            height={300}
            alt="Kathak pose"
            className="h-48 w-full rounded object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=60"
            width={400}
            height={300}
            alt="Dance practice"
            className="h-48 w-full rounded object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1553469459-ef98a8ab9c82?auto=format&fit=crop&w=400&q=60"
            width={400}
            height={300}
            alt="Kathak expression"
            className="h-48 w-full rounded object-cover"
          />
        </div>
      </section>

      <section id="classes-videos" className="bg-background py-16 text-center">
        <h3 className="mb-8 text-3xl font-semibold">Classes Video</h3>
        <div className="mx-auto aspect-video max-w-3xl">
          <iframe
            className="h-full w-full rounded"
            src="https://www.youtube.com/embed/7uHcYEiDTjg"
            title="Kathak class video"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section id="gallery" className="py-16">
        <h3 className="mb-4 text-center text-3xl font-semibold">Our Gallery</h3>
        <p className="mx-auto mb-8 max-w-3xl text-center text-gray-600 dark:text-gray-300">
          Explore our gallery to see the magic of Kathak Dance Classes in action
          and discover how this transformative art can change your life and
          perception of dance! When you will go through the pictures in the
          gallery, you will see that each image has a story to tell… a story of
          grace, rhythm and cultural richness. Peep into the gallery and witness
          the timeless elegance of Kathak dancing unfold before your eyes.
        </p>
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

      <section id="instructors" className="bg-background py-16">
        <h3 className="mb-8 text-center text-3xl font-semibold">Instructors</h3>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <Image
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60"
              width={200}
              height={200}
              alt="Instructor Asha"
              className="mx-auto h-40 w-40 rounded-full object-cover"
            />
            <h4 className="mt-4 text-xl font-medium">Guru Asha</h4>
            <p className="text-gray-600 dark:text-gray-300">
              20 years of Kathak teaching experience.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=60"
              width={200}
              height={200}
              alt="Instructor Rohan"
              className="mx-auto h-40 w-40 rounded-full object-cover"
            />
            <h4 className="mt-4 text-xl font-medium">Guru Rohan</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Performer and mentor with 15 years of experience.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=60"
              width={200}
              height={200}
              alt="Instructor Meera"
              className="mx-auto h-40 w-40 rounded-full object-cover"
            />
            <h4 className="mt-4 text-xl font-medium">Guru Meera</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Specialist in abhinaya with 18 years of teaching.
            </p>
          </div>
        </div>
      </section>

      <section id="courses" className="py-16">
        <h3 className="mb-8 text-center text-3xl font-semibold">
          Nrityashala Kathak Courses
        </h3>
        <p className="mx-auto mb-8 max-w-3xl text-center text-gray-600 dark:text-gray-300">
          Our courses are customised, ranging from beginners’ one-year programs
          to advanced three-year courses. Each program is designed to accommodate
          all skill levels, ensuring you receive training in the technical
          intricacies of this beautiful dance form. Whether you are starting your
          journey or refining your expertise, our online Kathak classes provide
          the perfect platform for mastering this dance form.
        </p>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="rounded-lg border p-6 text-center shadow-sm">
            <h4 className="mb-2 text-xl font-medium">Beginner</h4>
            <p className="mb-1">1 year course</p>
            <p className="mb-4">(3 classes every week)</p>
            <button className="rounded-md bg-foreground px-4 py-2 text-background">
              Select
            </button>
          </div>
          <div className="rounded-lg border p-6 text-center shadow-sm">
            <h4 className="mb-2 text-xl font-medium">Inter</h4>
            <p className="mb-1">2 year course</p>
            <p className="mb-4">(3 classes every week)</p>
            <button className="rounded-md bg-foreground px-4 py-2 text-background">
              Select
            </button>
          </div>
          <div className="rounded-lg border p-6 text-center shadow-sm">
            <h4 className="mb-2 text-xl font-medium">Expert</h4>
            <p className="mb-1">3 year course</p>
            <p className="mb-4">(3 classes every week)</p>
            <button className="rounded-md bg-foreground px-4 py-2 text-background">
              Select
            </button>
          </div>
          <div className="rounded-lg border p-6 text-center shadow-sm">
            <h4 className="mb-2 text-xl font-medium">Diploma</h4>
            <p className="mb-1">24 + months course</p>
            <p className="mb-4">(3 classes every week)</p>
            <button className="rounded-md bg-foreground px-4 py-2 text-background">
              Select
            </button>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-background py-16">
        <h3 className="mb-8 text-center text-3xl font-semibold">
          Frequently Asked Questions
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-medium">
              How Nrityashala is best online Live Kathak learning platform?
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Our Best Kathak Gurus are well qualified. Mentor Dr. Soniya is PHD
              in Kathak from Rajasthan University having kathak teaching
              experience of more then 20 years. We conduct diploma course
              examinations also and most of our students scored more then 75% in
              diploma course examinations.
            </p>
          </div>
          <div>
            <h4 className="font-medium">When do students prefer Nrityashala?</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Students prefer Nrityashala when they seek flexible live classes
              and personal attention from experienced mentors.
            </p>
          </div>
          <div>
            <h4 className="font-medium">
              How many Kathak courses are available at Nrityashala?
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              We offer four structured courses—Beginner, Inter, Expert and
              Diploma.
            </p>
          </div>
          <div>
            <h4 className="font-medium">
              Will there be live/online exams for self-paced Kathak courses?
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, we conduct online examinations for all levels to assess your
              progress.
            </p>
          </div>
          <div>
            <h4 className="font-medium">How do I register for classes?</h4>
            <p className="text-gray-600 dark:text-gray-300">
              You can register by contacting us via phone or email listed
              below.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 text-center">
        <h3 className="mb-4 text-3xl font-semibold">Get in Touch</h3>
        <p className="mb-2">Nrityashala Academy, Pratap Nagar, Jaipur</p>
        <p className="mb-2">+91-8741864388</p>
        <p>
          <a href="mailto:info@kathakinstitute.com" className="underline">
            info@kathakinstitute.com
          </a>
        </p>
      </section>

      <section id="blog" className="bg-background py-16 text-center">
        <h3 className="mb-4 text-3xl font-semibold">Blog</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Blog posts coming soon.
        </p>
      </section>
    </>
  );
}

