import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function Setup() {
  const navigate = useNavigate();

  const [type, setType] = useState("new");
  const [model, setModel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!model.trim()) {
      alert("Please fill out this field");
      return;
    }

    navigate(`/driver?type=${type}&model=${model}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 flex items-center justify-center px-6 py-12">
      
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col gap-10">

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-10">

            {/* LEFT SIDE */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Let's Set Up Your Printer
              </h2>

              <p className="text-gray-600 mb-8">
                Choose your setup type and enter your printer details to begin the
                installation process. Our guided setup will help you connect and
                install everything step-by-step.
              </p>

              {/* RADIO OPTIONS */}
              <div className="space-y-4 mb-6">
                <label
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition ${
                    type === "new"
                      ? "bg-blue-50 border-blue-500"
                      : "border-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="type"
                    checked={type === "new"}
                    onChange={() => setType("new")}
                  />
                  <span className="font-medium">
                    Unpack & Setup New Printer
                  </span>
                </label>

                <label
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition ${
                    type === "trouble"
                      ? "bg-purple-50 border-purple-500"
                      : "border-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="type"
                    checked={type === "trouble"}
                    onChange={() => setType("trouble")}
                  />
                  <span className="font-medium">
                    Troubleshoot Existing Printer
                  </span>
                </label>
              </div>

              {/* MODEL INPUT */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Enter Printer Model / Product Name
                </label>

                <input
                  type="text"
                  placeholder="e.g. XYZ123"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Continue Installation →
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="bg-gradient-to-r from-[#dde7fc] to-[#e4e7ea] p-8 rounded-2xl shadow-md">
                <img
                  src="/assets/images/slide-1.png"
                  alt="printer"
                  loading="lazy"
                  className="w-[350px]"
                />
              </div>
            </div>
          </div>

          {/* BOTTOM TEXT */}
          <div className="w-full mt-8">
            <p className="text-gray-700 text-[15px] leading-relaxed">
              We’ve made it easy to download printer software to set up your printer.
              Enter your product name and we’ll get you the right printer setup software
              and drivers. We support all major desktop and mobile operating systems,
              including Windows, MacOS, iOS, and Android{" "}
              
              <Link
                to="/privacy"
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Read more...
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}