import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Atlanta Garage Doors Repair</h3>
            <p className="text-gray-400 mb-4">
              Your trusted garage door experts serving Atlanta and surrounding areas with quality repair and replacement services.
            </p>
            <a
              href="tel:+14708657616"
              className="text-blue-400 hover:text-blue-300 font-semibold text-lg"
            >
              (470) 865-7616
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 hover:text-white transition">
                Home
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition">
                About Us
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-white transition">
                Services
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition">
                Contact Us
              </Link>
              <Link href="/looking-for-work" className="text-gray-400 hover:text-white transition">
                Looking for Work
              </Link>
            </nav>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <p className="text-gray-400">
              Downtown Atlanta • Midtown • Buckhead • Decatur • Sandy Springs • Marietta • Roswell • Alpharetta • Dunwoody • Brookhaven
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Atlanta Garage Doors Repair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
