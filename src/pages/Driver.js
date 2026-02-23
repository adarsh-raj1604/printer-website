import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Driver() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const type = params.get("type");
  const model = params.get("model");

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const startInstall = () => {
    setLoading(true);
    let val = 0;

    const timer = setInterval(() => {
      val += 10;
      setProgress(val);

      if (val >= 80) {
        clearInterval(timer);
        setTimeout(() => {
          window.location.href = "/downloading";
        }, 600);
      }
    }, 400);
  };

  const features = [
    {
      text: "Hassle-free setup and instant connection",
      img: "/assets/images/slide-1.png",
      desc: "Quickly connect your printer and complete the setup in just a few simple steps without technical hassle."
    },
    {
      text: "Print, scan, copy, and share documents",
      img: "/assets/images/slide-2.png",
      desc: "Handle all your daily tasks like printing, scanning, copying, and sharing files from one place."
    },
    {
      text: "Manage printer from any network",
      img: "/assets/images/slide-1.png",
      desc: "Access and control your printer from different devices connected to the same network."
    },
    {
      text: "Create high-quality scans with filters",
      img: "/assets/images/slide-2.png",
      desc: "Enhance scanned documents using brightness, contrast, and filter adjustments."
    },
    {
      text: "Send secure faxes using Mobile Fax",
      img: "/assets/images/slide-1.png",
      desc: "Send important documents securely using digital fax features directly from your system."
    }
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen bg-[#f1f3f630] py-12 px-6">

      {/* DRIVER INFO */}
      <div className="max-w-6xl mx-auto mt-10">
        <div className="flex flex-col md:flex-row items-center gap-10">

          <div className="md:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                🖨️
              </div>
              <h2 className="text-3xl font-bold text-gray-800">
                Smart Driver
              </h2>
            </div>

            <button
              onClick={startInstall}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-lg font-semibold shadow-md mb-4 mt-2"
            >
              Install Now
            </button>

            <p className="text-gray-600 mb-4">
              Connects seamlessly with your printer and enables full printing,
              scanning, and sharing features.
            </p>

            <div className="text-md text-gray-500">
              <p><b>Model:</b> {model}</p>
              <p><b>Setup Type:</b> {type}</p>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src="/assets/images/slide-2.png"
              alt="printer"
              className="rounded-2xl shadow-lg bg-gradient-to-r from-[#dde7fc] to-[#e4e7ea]"
            />
          </div>
        </div>
      </div>

      {/* 3 CARDS SECTION */}
      <div className="max-w-6xl mx-auto mt-16">
        <h3 className="text-3xl font-bold text-center text-blue-700 mb-2">
          We Provide Solutions For
        </h3>

        <p className="text-center text-gray-600 mb-10">
          Storage | Software Download | Installation Issues | Network Connectivity
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-[#dde7fc] to-[#e4e7ea] rounded-2xl shadow-md p-6">
            <img src="/assets/images/slide-1.png" className="rounded-xl mb-4" alt="printer" />
            <h4 className="text-xl font-semibold mb-2">
              Laptop & Desktop Support
            </h4>
            <p className="text-gray-600 mb-4">
              Get instant help if your system is not detecting the printer.
            </p>

            {/* BUTTON RAHEGA */}
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
              Click for Chat Assistance
            </button>
          </div>

          <div className="bg-gradient-to-r from-[#dde7fc] to-[#e4e7ea] rounded-2xl shadow-md p-6">
            <img src="/assets/images/slide-2.png" className="rounded-xl mb-4" alt="printer" />
            <h4 className="text-xl font-semibold mb-2">
              Driver Download Help
            </h4>
            <p className="text-gray-600 mb-4">
              Install the correct drivers easily and avoid compatibility issues.
            </p>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
              Click for Chat Assistance
            </button>
          </div>

          <div className="bg-gradient-to-r from-[#dde7fc] to-[#e4e7ea] rounded-2xl shadow-md p-6">
            <img src="/assets/images/slide-1.png" className="rounded-xl mb-4" alt="printer" />
            <h4 className="text-xl font-semibold mb-2">
              Network & Setup Issues
            </h4>
            <p className="text-gray-600 mb-4">
              Fix WiFi connection, offline printer errors, and setup problems fast.
            </p>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
              Click for Chat Assistance
            </button>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="max-w-6xl mx-auto mt-16 bg-[#e6e7f85c] rounded-3xl shadow-xl p-8 md:p-12">
        <h3 className="text-[20px] md:text-[30px] font-bold text-center text-blue-700 mb-2">
          All-in-One Printing, Scanning & Sharing
        </h3>

        <div className="flex flex-col md:flex-row gap-10 items-center">

          <div className="md:w-1/2 flex flex-col items-center">
            <img
              src={features[active].img}
              className="w-full rounded-2xl shadow-lg"
              alt="printer"
            />

            <p className="mt-6 text-gray-600 font-semibold">
              {features[active].desc}
            </p>
          </div>

          <div className="md:w-1/2">
            <ul className="space-y-4">
              {features.map((item, i) => (
                <li
                  key={i}
                  onClick={() => setActive(i)}
                  className={`cursor-pointer p-4 rounded-xl border ${
                    active === i
                      ? "bg-blue-100 border-blue-500 font-semibold"
                      : "bg-white border-gray-200"
                  }`}
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* LOADING MODAL */}
      {loading && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[520px] rounded-2xl shadow-2xl p-8 text-center">
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-blue-500 h-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <p className="text-red-600 font-bold mt-2">
              {progress}% Completed
            </p>

            <p className="text-xl font-semibold mt-4">
              Please wait... Driver is installing
            </p>
          </div>
        </div>
      )}
    </div>
  );
}