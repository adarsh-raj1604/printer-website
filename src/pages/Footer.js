import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-4 gap-8">

          {/* BRAND */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              Printer Setup Guide
            </h2>
            <p className="text-sm text-gray-400">
              Easy step-by-step printer installation and driver setup assistance
              for all major brands.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/setup" className="hover:text-white">Setup</Link></li>
              <li><Link to="/driver" className="hover:text-white">Driver</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-white font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>Installation Help</li>
              <li>Driver Issues</li>
              <li>Network Problems</li>
              <li>Printer Offline</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Printer Setup Guide. All rights reserved.
        </div>
      </div>
    </footer>
  );
}