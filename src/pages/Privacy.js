export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">

        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-6">
          This Privacy Policy explains how we collect, use, and protect your
          information when you use our website and services.
        </p>

        {/* SECTION 1 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          Information We Collect
        </h2>
        <p className="text-gray-600">
          We may collect basic information such as your name, email address,
          device details, browser type, and usage data when you visit or interact
          with our website.
        </p>

        {/* SECTION 2 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>To provide and improve our services</li>
          <li>To help with setup and troubleshooting support</li>
          <li>To respond to customer inquiries</li>
          <li>To enhance website performance and user experience</li>
        </ul>

        {/* SECTION 3 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          Cookies & Tracking
        </h2>
        <p className="text-gray-600">
          Our website may use cookies and similar technologies to improve user
          experience, analyze traffic, and understand how visitors use our site.
        </p>

        {/* SECTION 4 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          Data Protection
        </h2>
        <p className="text-gray-600">
          We take appropriate security measures to protect your personal
          information from unauthorized access, disclosure, or misuse.
        </p>

        {/* SECTION 5 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          Third-Party Services
        </h2>
        <p className="text-gray-600">
          We may use third-party tools or services to improve our website. These
          providers may collect limited data as required to perform their
          services.
        </p>

        {/* SECTION 6 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          User Consent
        </h2>
        <p className="text-gray-600">
          By using our website, you agree to this Privacy Policy and the way we
          collect and use information.
        </p>

        {/* SECTION 7 */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          Updates to This Policy
        </h2>
        <p className="text-gray-600">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page.
        </p>

        {/* FOOTER NOTE */}
        <div className="mt-10 border-t pt-6 text-sm text-gray-500">
          Last updated: {new Date().getFullYear()}
        </div>

      </div>
    </div>
  );
}