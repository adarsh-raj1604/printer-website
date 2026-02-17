export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">

        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-6">
          Welcome to our website. By accessing and using this website, you accept
          and agree to be bound by the terms and conditions stated below. If you
          do not agree with any part of these terms, please do not use our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
          1. Use of Website
        </h2>
        <p className="text-gray-600">
          This website provides information and guidance for printer setup,
          driver downloads, troubleshooting, and related technical assistance.
          You agree to use this website only for lawful purposes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
          2. Service Disclaimer
        </h2>
        <p className="text-gray-600">
          We provide third-party support and guidance for printer installation
          and troubleshooting. We are not affiliated with any specific printer
          brand unless explicitly stated.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
          3. Intellectual Property
        </h2>
        <p className="text-gray-600">
          All content on this website, including text, graphics, logos, and
          images, is the property of the website owner and is protected by
          copyright laws.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
          4. Limitation of Liability
        </h2>
        <p className="text-gray-600">
          We are not responsible for any damages or losses that may occur from
          using the information or services provided on this website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
          5. User Responsibility
        </h2>
        <p className="text-gray-600">
          Users are responsible for verifying the accuracy of the information
          and ensuring compatibility before installing any software or drivers.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
          6. External Links
        </h2>
        <p className="text-gray-600">
          Our website may contain links to third-party websites. We are not
          responsible for the content or privacy practices of those sites.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
          7. Changes to Terms
        </h2>
        <p className="text-gray-600">
          We reserve the right to update or modify these terms at any time
          without prior notice. Continued use of the website means you accept
          the updated terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-3">
          8. Contact Information
        </h2>
        <p className="text-gray-600">
          If you have any questions regarding these terms, please contact our
          support team for assistance.
        </p>

        <p className="text-gray-500 mt-10 text-sm">
          Last Updated: {new Date().getFullYear()}
        </p>

      </div>
    </div>
  );
}