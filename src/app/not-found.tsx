import Link from "next/link";
import { ArrowRight, CircleDollarSign, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative isolate flex flex-1 items-center justify-center overflow-hidden bg-[#F5FAF8] px-4 py-20 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 -z-10 h-80 w-80 rounded-full bg-[#DDF0ED] blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 -z-10 h-80 w-80 rounded-full bg-[#E5F4F1] blur-3xl sm:h-96 sm:w-96"
      />

      <section className="w-full max-w-2xl rounded-3xl border border-[#E3EFEC] bg-white px-6 py-12 text-center shadow-[0_24px_80px_-40px_rgba(16,43,36,0.28)] sm:px-12 sm:py-16">
        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF5F2] text-[#267C70]">
          <CircleDollarSign aria-hidden="true" size={34} strokeWidth={1.7} />
        </div>

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#267C70]">
          Page not found
        </p>
        <h1 className="mt-3 text-7xl font-extrabold tracking-tight text-[#102B24] sm:text-8xl">
          404
        </h1>
        <h2 className="mt-5 text-2xl font-bold tracking-tight text-[#253B36] sm:text-3xl">
          Looks like this page is off the books.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#65736F]">
          The page you’re looking for may have moved or no longer exists. Let’s
          get you back to managing what matters.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#102F2A] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#102F2A]/15 transition-colors hover:bg-[#1B5147] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#267C70]"
        >
          <Home aria-hidden="true" size={17} />
          Back to homepage
          <ArrowRight aria-hidden="true" size={17} />
        </Link>
      </section>
    </main>
  );
}