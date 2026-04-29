import Image from "next/image";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import lashed1 from "../images/lashed1.jpg";
import lashed2 from "../images/lashed2.jpg";
import lashed3 from "../images/lashed3.jpg";
import lashed4 from "../images/lashed4.jpg";
import lashed5 from "../images/lashed5.jpg";
import lashedpfp from "../images/lashedpfp.jpg";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const BOOKING_URL =
  "https://sjliecelshop.as.me/schedule/5c41165c/category/Melanie%2520(%2540alldolledupwmel)";

const SERVICES = [
  { name: "Lash Full Set", duration: "2 hours 30 minutes", price: "$125.00" },
  { name: "Lash Fill", duration: "1 hour 30 minutes", price: "$100.00" },
  { name: "Lash Removal", duration: "30 minutes", price: "$20.00" },
];

const TESTIMONIALS = [
  {
    quote: "Best retention I’ve ever had. My lashes always look clean and full.",
  },
  {
    quote: "The studio vibe is beautiful and professional. I get compliments every week.",
  },
  {
    quote: "My set was customized perfectly for my eye shape, and booking was super easy.",
  },
];

const SHOWCASE_IMAGES = [
  { src: lashed1, alt: "Client lash set close-up style one" },
  { src: lashed2, alt: "Client lash set close-up style two" },
  { src: lashed3, alt: "Client portrait with fresh lash extensions" },
  { src: lashed4, alt: "Client portrait with completed lash set" },
  { src: lashed5, alt: "Client portrait featuring volume lash set" },
];

export default function Home() {
  return (
    <div className={`${manrope.className} min-h-screen bg-zinc-50 text-zinc-900`}>
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="text-lg font-semibold tracking-tight">
            alldolledupwmel
          </a>

          <nav className="bjcree-semibold hidden items-center gap-8 text-sm md:flex">
            <a
              href="#services"
              className="group relative inline-block transition-colors hover:text-pink-600"
            >
              Services
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-pink-600 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
            <a
              href="#testimonials"
              className="group relative inline-block transition-colors hover:text-pink-600"
            >
              Testimonials
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-pink-600 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
            <a
              href="https://www.instagram.com/direct/t/17847501599825744/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block transition-colors hover:text-pink-600"
            >
              Contact
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-pink-600 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          </nav>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bjcree-bold rounded-full bg-pink-600 px-4 py-2 text-sm text-white transition hover:bg-pink-700"
          >
            Book Now
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-pink-700">
              Luxury Lash Experience
            </p>
            <h1
              className={`${cormorant.className} text-5xl font-semibold leading-tight tracking-tight sm:text-6xl`}
            >
              Soft Glam Lashes for Everyday Confidence
            </h1>
            <p className="max-w-xl text-base text-zinc-600 sm:text-lg">
              Custom lash sets designed for your eye shape and lifestyle. Clean application,
              modern style, and long-lasting retention.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bjcree-bold rounded-full bg-pink-600 px-6 py-3 text-center text-sm text-white transition hover:bg-pink-900"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="bjcree-bold rounded-full border border-zinc-300 px-6 py-3 text-center text-sm transition hover:bg-zinc-100"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="relative h-80 overflow-hidden rounded-3xl shadow-sm sm:h-96">
            <Image
              src={lashedpfp}
              alt="Close-up lash extension application"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </section>

        <section id="showcase" className="border-t border-zinc-200 bg-zinc-50">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
                  Portfolio
                </p>
                <h2 className={`${cormorant.className} mt-2 text-3xl font-semibold tracking-tight sm:text-4xl`}>
                  Work Showcase
                </h2>
              </div>
              {/* <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bjcree-regular group relative inline-block text-sm text-zinc-900 transition hover:text-pink-600"
              >
                Book your set
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-pink-600 transition-transform duration-300 group-hover:scale-x-100" />
              </a> */}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {SHOWCASE_IMAGES.map((image, index) => (
                <article
                  key={image.alt}
                  className={`group relative overflow-hidden rounded-3xl shadow-sm ${
                    index === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className={index === 2 ? "relative aspect-16/10" : "relative aspect-4/5"}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes={
                        index === 2
                          ? "(min-width: 640px) 100vw, 100vw"
                          : "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                      }
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-zinc-200 bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            {/* <h2 className={`${cormorant.className} text-3xl font-semibold tracking-tight sm:text-4xl`}>
              Luxury Lash Services
            </h2> */}
            <p className="inline-flex rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-pink-700">
              Luxury Lash Services
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <article key={service.name} className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{service.duration}</p>
                  <p className="mt-1 text-sm font-medium text-zinc-900">{service.price}</p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-pink-600 transition hover:text-pink-700"
                  >
                    Book
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="border-t border-zinc-200 bg-zinc-50">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
              <p className="inline-flex rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-pink-700">
              Testimonials
            </p>
                {/* <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
                  Testimonials
                </p>
                <h2
                  className={`${cormorant.className} mt-2 text-3xl font-semibold tracking-tight sm:text-4xl`}
                >
                  Client Love
                </h2> */}
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {TESTIMONIALS.map((testimonial) => (
                <article
                  key={testimonial.quote}
                  className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-2xl leading-none text-pink-300">&ldquo;</p>
                  <blockquote className="mt-3 text-sm leading-7 text-zinc-700">
                    {testimonial.quote}
                  </blockquote>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className={`${cormorant.className} text-3xl font-semibold tracking-tight text-zinc-900`}>
                alldolledupwmel
              </p>
              <p className="text-sm text-zinc-600">
                Soft glam lash artistry with custom styling and clean, lasting retention.
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm font-semibold text-zinc-700">
              <a
                href="https://www.instagram.com/alldolledupwmel/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-pink-600"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@alldolledupwmel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-pink-600"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M14.5 3c.5 2 1.6 3.3 3.5 3.8v3c-1.4-.1-2.6-.5-3.6-1.2V15c0 3.4-2.4 5.7-5.8 5.7-3.2 0-5.6-2.3-5.6-5.5 0-3.4 2.6-5.8 6.1-5.5v3c-1.7-.3-3 .8-3 2.5 0 1.5 1.1 2.5 2.5 2.5 1.4 0 2.5-1 2.5-2.6V3h3.4z" />
                </svg>
                TikTok
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-zinc-200 pt-5 text-xs tracking-wide text-zinc-500 text-center">
            © {new Date().getFullYear()} alldolledupwmel. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}