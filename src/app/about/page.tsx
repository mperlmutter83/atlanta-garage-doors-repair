import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Atlanta Garage Doors Repair",
  description: "Learn about Atlanta Garage Doors Repair - your trusted experts for garage door repair and replacement services throughout the Atlanta metro area.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Your trusted garage door experts dedicated to providing exceptional service throughout Atlanta and surrounding communities.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Atlanta&apos;s Premier Garage Door Service
              </h2>
              <p className="text-gray-600 mb-4">
                Atlanta Garage Doors Repair has been serving the metro Atlanta area with dedication and expertise. Our team of skilled technicians brings years of experience to every job, ensuring your garage door operates safely and efficiently.
              </p>
              <p className="text-gray-600 mb-4">
                We understand that a malfunctioning garage door can disrupt your daily routine and compromise your home&apos;s security. That&apos;s why we offer same-day service, competitive pricing, and a commitment to quality that sets us apart from the competition.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you need a quick repair or a complete garage door replacement, our team is here to help with professional service you can trust.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Contact Us Today
              </Link>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/hero.jpg"
                alt="Garage door service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Service</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every repair and installation is done to the highest standards.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We listen to your needs and deliver solutions that exceed expectations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reliability</h3>
              <p className="text-gray-600">
                Count on us to be there when you need us. Same-day service and prompt responses are our standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Join thousands of satisfied customers who trust us with their garage door needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+14708657616"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition"
            >
              (470) 865-7616
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
