import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Garage Door Repair",
    description: "Swift and efficient repairs to restore your garage door to perfect working condition.",
    icon: "🔧",
  },
  {
    title: "Garage Door Replacement",
    description: "Upgrade your home with our high-quality garage door replacement options.",
    icon: "🚪",
  },
];

const benefits = [
  {
    title: "Same-Day Availability",
    description: "Get your garage door issues resolved promptly with our same-day service guarantee.",
    icon: "⏰",
  },
  {
    title: "Competitive Pricing",
    description: "Enjoy top-tier services at prices that fit your budget, without compromising on quality.",
    icon: "💰",
  },
  {
    title: "Reliable Technicians",
    description: "Our skilled professionals are committed to delivering exceptional service and customer satisfaction.",
    icon: "👨‍🔧",
  },
];

const serviceAreas = [
  "Downtown Atlanta", "Midtown", "Buckhead", "Decatur", "Sandy Springs", "Marietta",
  "Roswell", "Alpharetta", "Dunwoody", "Brookhaven", "East Point", "Peachtree City",
  "Smyrna", "Norcross", "Lawrenceville", "Duluth", "Johns Creek", "Kennesaw"
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Garage door"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-blue-300 font-semibold uppercase tracking-wider mb-4">
              Your Trusted Garage Door Experts
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Atlanta Garage Doors Repair
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Experience seamless garage door solutions with our expert team, dedicated to providing top-notch repair and replacement services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+14708657616"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition text-center"
              >
                Call (470) 865-7616
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold uppercase tracking-wider mb-2">
              Comprehensive Garage Door Solutions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-700">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <Link href="/contact" className="text-blue-300 hover:text-blue-200 font-semibold">
              Explore Benefits →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Service Areas</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {serviceAreas.map((area) => (
              <div key={area} className="bg-gray-100 rounded-lg p-4 text-center hover:bg-blue-50 hover:shadow-md transition">
                <span className="font-medium text-gray-800">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Your Garage Door Fixed Today!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don&apos;t let a faulty garage door disrupt your day. Contact us now for a quick quote or to schedule a service with our expert technicians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
            >
              Request a Quote
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
