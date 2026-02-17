import { useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";

export default function Home() {
  const navigate = useNavigate();

  // HERO IMAGES
  const images = useMemo(() => [
    "/assets/images/slide-1.png",
    "/assets/images/download.webp",
  ], []);

  const [index, setIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  // HERO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  // STEP DATA
  const steps = useMemo(() => [
    {
      title: "Step 1: Unpack and Prepare Your Printer",
      points: [
        "Carefully remove the printer from the box along with all accessories.",
        "Check contents to ensure nothing is missing.",
        "Remove protective tapes and packaging materials.",
        "Place the printer on a stable surface.",
        "Connect the power cable and turn it on."
      ],
      tip: "If the printer does not power on, check the cable connection."
    },
    {
      title: "Step 2: Download the Latest Printer Software",
      points: [
        "Open your browser and go to the driver download page.",
        "Enter your printer model number.",
        "Select your operating system.",
        "Download the latest setup file.",
        "Save it to desktop or downloads folder."
      ],
      tip: "If download fails, check internet connection."
    },
    {
      title: "Step 3: Connect Your Printer to the Device",
      points: [
        "Connect using USB cable or Wi-Fi.",
        "Ensure both devices are on the same network.",
        "Enter Wi-Fi password carefully.",
        "Wait for connection confirmation."
      ],
      tip: "Restart router if connection fails."
    },
    {
      title: "Step 4: Install and Configure Printer Drivers",
      points: [
        "Open the downloaded setup file.",
        "Follow on-screen instructions.",
        "Accept license agreement.",
        "Allow system to detect printer automatically."
      ],
      tip: "Reconnect printer if installer cannot detect it."
    },
    {
      title: "Step 5: Print a Test Page",
      points: [
        "Open printer settings.",
        "Select installed printer.",
        "Click print test page.",
        "Check print quality and alignment."
      ],
      tip: "Ensure paper and ink are properly installed."
    },
    {
      title: "Step 6: Set Default Printer Preferences",
      points: [
        "Open Printers & Scanners settings.",
        "Set printer as default device.",
        "Adjust paper size and print quality.",
        "Save preferences."
      ],
      tip: "Incorrect settings may affect print quality."
    }
  ], []);

  // STEP AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [steps.length]);

  // ISSUE CARDS
  const helpCards = useMemo(() => [
    { title: "Printer Setup Issues", img: "/assets/images/brother 2.png" },
    { title: "Printer Offline Issues", img: "/assets/images/brother 5.png" },
    { title: "WiFi Connection Errors", img: "/assets/images/brother 7 .png" },
    { title: "Paper Jam Errors", img: "/assets/images/brother 2.png" },
    { title: "Print Jobs Stuck", img: "/assets/images/brother 6.png" },
  ], []);

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div className="flex items-center py-10 md:py-14 px-6 md:px-10 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100">
        <div className="flex flex-col md:flex-row w-full items-center gap-8 bg-white rounded-3xl shadow-xl p-8 md:p-10">

          {/* LEFT */}
          <div className="w-full md:w-1/2">
            <h1 className="text-[22px] md:text-[30px] font-bold text-blue-600 mb-6">
              Quick & Easy Printer Setup Guide
            </h1>

            <p className="text-gray-600 mb-4">
              Follow a simple step-by-step process to install and configure your printer driver within minutes.
            </p>

            <p className="text-gray-600 mb-4">
              Whether setting up a new printer or fixing an existing one, our guide helps you connect and install smoothly.
            </p>

            <p className="text-gray-600 mb-4">
              Select Printer Setup to continue with an easy step-by-step process designed to help you connect, configure, and finish setting up your printer smoothly.
            </p>

            <button
              onClick={() => navigate("/setup")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg mt-4"
            >
              Continue to Printer Setup
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={images[index]}
              loading="lazy"
              className="w-[320px] md:w-[420px] bg-gradient-to-r from-[#dde7fc] to-[#e4e7ea]"
              alt="printer"
            />
          </div>
        </div>
      </div>

      {/* ISSUE CARDS (NO SLIDER NOW) */}
      <div className="mt-12 px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {helpCards.map((card, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-[#dde7fc] to-[#e4e7ea] rounded-2xl shadow-lg p-5"
            >
              <img
                src={card.img}
                loading="lazy"
                className="w-full h-32 md:h-40 object-cover rounded-xl mb-4"
                alt=""
              />
              <h3 className="text-blue-600 font-semibold text-center">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="w-full py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Simple Printer Setup in a Few Easy Steps
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Use our guided setup process to quickly get your printer ready for use.
          </p>

          {/* 4 STATIC CARDS */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img src="/assets/images/card1.jpg" className="w-full h-40 object-cover" />
              <div className="p-5">
                <h3 className="text-blue-600 font-semibold mb-2">Download Software</h3>
                <p className="text-gray-600 text-sm">
                  Download the latest printer software for smooth performance.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img src="/assets/images/card2.jpg" className="w-full h-40 object-cover" />
              <div className="p-5">
                <h3 className="text-blue-600 font-semibold mb-2">Connect Printer</h3>
                <p className="text-gray-600 text-sm">
                  Connect using USB or wireless network.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img src="/assets/images/card3.jpg" className="w-full h-40 object-cover" />
              <div className="p-5">
                <h3 className="text-blue-600 font-semibold mb-2">Install Drivers</h3>
                <p className="text-gray-600 text-sm">
                  Follow on-screen instructions to install.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img src="/assets/images/card4.jpg" className="w-full h-40 object-cover" />
              <div className="p-5">
                <h3 className="text-blue-600 font-semibold mb-2">Test Printing</h3>
                <p className="text-gray-600 text-sm">
                  Print a test page to confirm setup.
                </p>
              </div>
            </div>
          </div>

          {/* RED TEXT */}
          <p className="text-red-600 mt-14 text-lg font-medium">
            • Printer setup doesn’t need to be difficult. Follow this step-by-step guide to install and configure your printer easily.
          </p>

          {/* STEP AUTO SLIDER BOX */}
          <div className="mt-8 bg-white rounded-3xl shadow-xl p-8 border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              {steps[activeStep].title}
            </h3>

            <ul className="space-y-2 text-gray-700">
              {steps[activeStep].points.map((p, i) => (
                <li key={i}>• {p}</li>
              ))}
            </ul>

            <div className="mt-5">
              <span className="font-semibold text-blue-600">Tip:</span>
              <p className="text-gray-600 mt-1">{steps[activeStep].tip}</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}