
import Image from "next/image"
import Link from "next/link"

export function Courses() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="flex items-center justify-between px-4 lg:px-8 h-14 border-b">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Acme Inc</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link href="" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="/auth/ACourses" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Courses
          </Link>
          <Link href="/auth/About" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="/auth/cart" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Cart
          </Link>
        </nav>
      </header>
      <header className="relative w-full">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/img/light-blue-frame-with-office-supplies.jpg"
            alt="Computer science courses"
            className="h-full w-full object-cover object-center"
            width={1920}
            height={1080}
            style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
          />
        </div>
        <div className="relative z-10 bg-gradient-to-b from-transparent to-black/50 py-32 px-4 sm:py-40 sm:px-6 lg:py-48 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="ml-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Unlock Your Potential in Computer Science
            </h1>
            <p className="mt-6 ml-4 text-lg leading-8 text-gray-300">
              Explore our wide range of computer science courses and learn from industry-leading instructors. Enhance
              your skills and advance your career.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/auth/courseD"
                className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm text-neutral-50 font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                prefetch={false}
              >
                Enroll Now
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-gray-200"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-12 sm:py-16 lg:py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <h2 className="ml-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Most Popular Courses
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-lg bg-background shadow-sm hover:scale-105 transition-transform">
                <Image
                  src="/img/introto_comp.jpg"
                  alt="Course 1"
                  className="h-48 w-full object-cover"
                  width={384}
                  height={192}
                  style={{ aspectRatio: "384/192", objectFit: "cover" }}
                />
                <div className="p-6">
                  <h3 className="ml-4 text-xl font-semibold text-foreground">Introduction to Computer Science</h3>
                  <p className="mt-2 ml-4 text-sm text-muted-foreground">
                    Explore the fundamental concepts of computer science, including algorithms, data structures, and
                    programming languages.
                  </p>
                  <div className="mt-4 ml-4">
                    <Link
                      href="/auth/courseD"
                      className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      prefetch={false}
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-background shadow-sm hover:scale-105 transition-transform">
                <Image
                  src="/img/what-is-data-structure-and-algorithms-Photoroom.png"
                  alt="Course 2"
                  className="h-48 w-full object-cover"
                  width={384}
                  height={192}
                  style={{ aspectRatio: "384/192", objectFit: "cover" }}
                /> 
                <div className="p-6">
                  <h3 className="ml-4 text-xl font-semibold text-foreground">Data Structures and Algorithms</h3>
                  <p className="mt-2 ml-4 text-sm text-muted-foreground">
                    Learn how to design and implement efficient data structures and algorithms to solve complex
                    problems.
                  </p>
                  <div className="mt-4 ml-4">
                    <Link
                      href="/auth/courseD"
                      className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      prefetch={false}
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-background shadow-sm hover:scale-105 transition-transform">
                <Image
                  src="/img/instructor-1.jpg"
                  alt="Course 3"
                  className="h-48 w-full object-cover"
                  width={384}
                  height={192}
                  style={{ aspectRatio: "384/192", objectFit: "cover" }}
                />
                <div className="p-6">
                  <h3 className="ml-4 text-xl font-semibold text-foreground">Web Development with React</h3>
                  <p className="mt-2 ml-4 text-sm text-muted-foreground">
                    Dive into the world of modern web development using the powerful React library and learn to build
                    dynamic and responsive web applications.
                  </p>
                  <div className="mt-4 ml-4">
                    <Link
                      href="/auth/courseD"
                      className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      prefetch={false}
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background py-12 sm:py-16 lg:py-20">
          <div className="container">
            <h2 className="ml-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet Our Top Instructors
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/img/techer3-removebg-preview.png"
                  alt="Instructor 1"
                  className="h-32 w-32 rounded-full object-cover"
                  width={128}
                  height={128}
                  style={{ aspectRatio: "128/128", objectFit: "cover" }}
                />
                <h3 className="mt-4 text-xl font-semibold text-foreground">Himgiri Don</h3>
                <p className="mt-2 text-sm text-muted-foreground">Senior Software Engineer, 10+ years of experience</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/img/t2.png"
                  alt="Instructor 2"
                  className="h-32 w-32 rounded-full object-cover"
                  width={128}
                  height={128}
                  style={{ aspectRatio: "128/128", objectFit: "cover" }}
                />
                <h3 className="mt-4 text-xl font-semibold text-foreground">invertis Don</h3>
                <p className="mt-2 text-sm text-muted-foreground">Lead Data Scientist, 8 years of experience</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/img/person.png"
                  alt="Instructor 3"
                  className="h-32 w-32 rounded-full object-cover"
                  width={128}
                  height={128}
                  style={{ aspectRatio: "128/128", objectFit: "cover" }}
                />
                <h3 className="mt-4 text-xl font-semibold text-foreground">Akash shanghi</h3>
                <p className="mt-2 text-sm text-muted-foreground">Cybersecurity Expert, 12 years of experience</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background py-12 sm:py-16 lg:py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="ml-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to Elevate Your Computer Science Skills?
              </h2>
              <p className="mt-4 ml-4 text-lg leading-8 text-muted-foreground">
                Enroll in our comprehensive computer science courses and unlock a world of opportunities. Join our
                community of passionate learners and experienced instructors today.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <Link
                  href="/auth/ACourses"
                  className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  prefetch={false}
                >
                  Enroll Now
                </Link>
                <Link
                  href="#"
                  className="text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-8 sm:py-10 lg:py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="ml-4 text-sm text-muted-foreground">
              &copy; 2024 Computer Science Courses. All rights reserved.
            </p>
            <nav className="flex items-center gap-4">
              <Link
                href="#"
                className="ml-4 text-sm font-semibold text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="ml-4 text-sm font-semibold text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="ml-4 text-sm font-semibold text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
