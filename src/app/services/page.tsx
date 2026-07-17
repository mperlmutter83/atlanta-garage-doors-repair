import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | Atlanta Garage Doors Repair",
  description: "Professional garage door repair and replacement services in Atlanta. Same-day service, competitive pricing, and expert technicians.",
};

const services = [
  {
    title: "Garage Door Repair",
    description: "Swift and efficient repairs to restore your garage door to perfect working condition. We diagnose and fix all types of garage door issues, from broken springs and cables to malfunctioning openers and track problems.",
    features: [
      "Broken spring repair and replacement",
      "Cable repair and replacement",
      "Track realignment and repair",
      "Opener troubleshooting and repair",
      "Roller replacement",
      "Panel repair and replacement",
      "Weather seal replacement",
      "Safety sensor adjustment"
    ],
    icon: "🔧",
  },
  {
    title: "Garage Door Replacement",
    description: "Upgrade your home with our high-quality garage door replacement options. We offer a wide selection of styles, materials, and brands to match your home's aesthetic and meet your functional needs.",
    features: [
      "Full door replacement",
      "Opener installation",
      "Insulated door options",
      "Steel and aluminum doors",
      "Wood and composite doors",
      "Custom sizing available",
      "Modern smart openers",
      "Energy-efficient options"
    ],
    icon: "🚪",
  },
];

const whyChooseUs = [
  {
    title: "Same-Day Availability",
    description: "We understand that garage door problems can't wait. Our team is available for same-day service to get your door working again as quickly as possible.",
    icon: "⏰",
  },
  {
    title: "Competitive Pricing",
    description: "Quality service doesn't have to break the bank. We offer transparent, competitive pricing with no hidden fees or surprises.",
    icon: "💰",
  },
  {
    title: "Reliable Technicians",
    description: "Our skilled professionals are trained, certified, and committed to delivering exceptional service and complete customer satisfaction.",
    icon: "👨‍🔧",
  },
  {
    title: "Quality Parts",
    description: "We use only high-quality parts and materials from trusted manufacturers to ensure lasting repairs and installations.",
    icon: "✨",
  },
  {
    title: "Warranty Coverage",
    description: "We stand behind our work with comprehensive warranty coverage on parts and labor for your peace of mind.",
    icon: "🛡️",
  },
  {
    title: "Emergency Service",
    description: "Garage door emergency? We're here to help with prompt emergency service when you need it most.",
    icon: "🚨",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive garage door solutions tailored to your needs. From repairs to complete replacements, we&apos;ve got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Get a Quote
                  </Link>
                </div>
                <div className={`bg-gray-50 rounded-xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="font-bold text-gray-900 mb-4">What&apos;s Included:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We&apos;re committed to providing the best garage door services in Atlanta with these core promises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free quote on any garage door service. Our team is standing by to help!
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
