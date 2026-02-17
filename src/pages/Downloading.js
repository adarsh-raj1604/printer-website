export default function Downloading() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600">

      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            Installation Interrupted
          </h2>

          <p className="text-gray-700 mb-4">
            The driver setup could not be completed due to an unexpected system interruption.
          </p>

          <p className="text-gray-700 mb-4">
            Our technical team can help you resolve this quickly and safely.
          </p>

          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg mb-6 text-sm">
            <b>Important:</b> Avoid retrying multiple times as it may cause connection conflicts.
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Contact Support
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2">
          <img
            src="/assets/images/card1.jpg"
            className="rounded-2xl shadow-lg"
            alt="support"
          />
        </div>
      </div>
    </div>
  );
}