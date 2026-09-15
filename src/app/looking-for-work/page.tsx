import type { Metadata } from "next";
import WorkForm from "@/components/WorkForm";

const PHONE_DISPLAY = "(470) 865-7616";
const PHONE_HREF = "tel:+14708657616";

export const metadata: Metadata = {
  title: "Looking for Work",
  description:
    "Looking for garage door work in Atlanta? Local garage door companies are hiring. Fill out the quick form and we'll connect you — or call (470) 865-7616.",
  alternates: { canonical: "https://atlantagaragedoorsrepair.com/looking-for-work" },
};

const STEPS = [
  {
    n: "1",
    title: "Tell us about yourself",
    body: "A quick 60-second form — no resume, no cover letter, no endless applications.",
  },
  {
    n: "2",
    title: "We connect you",
    body: "We share your details with local garage door businesses that are actively hiring.",
  },
  {
    n: "3",
    title: "You hear back directly",
    body: "Interested businesses contact you by phone, usually within a few days.",
  },
];

const WORK_TYPES = [
  "Garage Door Repair",
  "Spring Replacement",
  "Opener Installation",
  "New Door Installation",
  "Commercial Doors",
  "Emergency Repairs",
];

export default function LookingForWorkPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
            Looking for Work?
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Garage Door Work in Atlanta
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-gray-300">
            Local garage door companies are growing and looking for dependable people. Tell us
            about yourself and we&apos;ll connect you with businesses that are hiring — free, fast,
            and no obligation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work-form"
              className="inline-block rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Fill Out the Quick Form
            </a>
            <a
              href={PHONE_HREF}
              className="inline-block rounded-lg border-2 border-blue-400 px-7 py-3 font-semibold text-blue-400 hover:bg-blue-400/10"
            >
              Or Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">How It Works</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-xl bg-blue-50 p-8 text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">The Kind of Work Available</h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Garage door businesses in Atlanta and the surrounding area hire for a range of work,
            including:
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {WORK_TYPES.map((s) => (
              <li
                key={s}
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-gray-700 font-medium shadow-sm"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work-form" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Apply in 60 Seconds</h2>
            <p className="mt-2 text-center text-gray-600">
              Free and confidential — we&apos;ll only share your details with businesses that are
              hiring.
            </p>
            <div className="mt-8">
              <WorkForm />
            </div>
          </div>
          <p className="mt-8 text-center text-gray-600">
            Own a garage door business and need reliable people?{" "}
            <a href={PHONE_HREF} className="font-bold text-blue-600 underline">
              Call {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
