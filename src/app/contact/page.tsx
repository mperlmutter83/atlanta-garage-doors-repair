import { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact Us | Atlanta Garage Doors Repair",
  description: "Contact Atlanta Garage Doors Repair for a free quote on garage door repair and replacement services. Same-day service available. Call (470) 865-7616.",
};

const serviceAreas = [
  "Downtown Atlanta", "Midtown", "Buckhead", "Decatur", "Sandy Springs", "Marietta",
  "Roswell", "Alpharetta", "Dunwoody", "Brookhaven", "East Point", "Peachtree City",
  "Smyrna", "Norcross", "Lawrenceville", "Duluth", "Johns Creek", "Kennesaw"
];

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Ready to get your garage door fixed? Contact us for a free quote or give us a call for immediate assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Quote</h2>
              <LeadForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a href="tel:+14708657616" className="text-blue-600 hover:text-blue-700 text-lg font-medium">
                      (470) 865-7616
                    </a>
                    <p className="text-gray-500 text-sm">Available for same-day service</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href="mailto:info@atlantagaragedoorsrepair.com" className="text-blue-600 hover:text-blue-700">
                      info@atlantagaragedoorsrepair.com
                    </a>
                    <p className="text-gray-500 text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🕐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 7:00 AM - 7:00 PM</p>
                    <p className="text-gray-700">Saturday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Sunday: Emergency service available</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span key={area} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Call CTA */}
              <div className="mt-10 bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Need Immediate Help?</h3>
                <p className="text-gray-600 mb-4">
                  For urgent garage door issues, give us a call and we&apos;ll dispatch a technician right away.
                </p>
                <a
                  href="tel:+14708657616"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  <span>📞</span>
                  Call (470) 865-7616
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
