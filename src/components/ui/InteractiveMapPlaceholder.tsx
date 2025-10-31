import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import worldMapImage from "@/assets/Map.jpg";

// 🎨 Color constants
const PIN_COLOR_CLASS = "text-red-600";
const BUTTON_COLOR_CLASS = "bg-blue-600 hover:bg-blue-700";
const BORDER_COLOR_CLASS = "border-blue-600/50";
const HEADING_COLOR_CLASS = "text-blue-600";
const LINE_COLOR_RGBA = "rgba(255,0,0,0.6)"; // keep red connection lines

interface MapPinType {
  id: number;
  location: string;
  info: string;
  left: string;
  top: string;
  url?: string;
}

// Helper function to create URL slug for deep linking
const createSlug = (text: string): string => {
  return text.toLowerCase().replace(/\s/g, "");
};

// All map pins (percentage positions so they scale properly)
const mapPins: MapPinType[] = [
  { id: 1, location: "Dallas", info: "North America Central Hub", left: "25%", top: "40%", url: `/global/chapters#${createSlug("Dallas")}` },
  { id: 3, location: "London", info: "Europe & UK Tech Bridge", left: "45%", top: "27%", url: `/global/chapters#${createSlug("London")}` },
  { id: 4, location: "Accra", info: "Africa West Innovation", left: "47%", top: "55%", url: `/global/chapters#${createSlug("Accra")}` },
  { id: 5, location: "Dubai", info: "Middle East Gateway", left: "61%", top: "45%", url: `/global/chapters#${createSlug("Dubai")}` },
  { id: 6, location: "Cape Town", info: "Africa South Chapter", left: "52%", top: "77%", url: `/global/chapters#${createSlug("Cape Town")}` },
  { id: 7, location: "Hyderabad", info: "Asia HQ & Innovation Core", left: "67.5%", top: "49%", url: `/global/chapters#${createSlug("Hyderabad")}` },
  { id: 8, location: "Singapore", info: "Southeast Asia Hub", left: "74%", top: "60%", url: `/global/chapters#${createSlug("Singapore")}` },
  { id: 9, location: "Sydney", info: "Oceania Research & Tech", left: "85%", top: "78%", url: `/global/chapters#${createSlug("Sydney")}` },
  { id: 10, location: "Silicon Valley", info: "West Coast Innovation", left: "16%", top: "37%", url: `/global/chapters#${createSlug("Silicon Valley")}` },
];

const InteractiveMapPlaceholder = () => {
  const navigate = useNavigate();
  const [isPaused, setIsPaused] = useState(false);
  const [activePinId, setActivePinId] = useState<number | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: "-33.333%",
        transition: { duration: 40, ease: "linear", repeat: Infinity },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  const toggleScroll = () => {
    if (activePinId) return;
    setIsPaused((prev) => !prev);
  };

  const handlePinClick = (url: string) => {
    navigate(url);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Map container */}
      <div
        className="relative aspect-[16/9] sm:aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg shadow-inner overflow-hidden cursor-pointer select-none w-full"
        onClick={() => {
          if (activePinId) {
            setActivePinId(null);
          } else {
            toggleScroll();
          }
        }}
      >
        {/* Scrolling Map */}
        <motion.div
          animate={controls}
          className="absolute flex w-[300%] h-full top-0 left-0"
        >
          {[0, 1, 2].map((idx) => (
            <div key={idx} className="relative w-1/3 h-full flex-shrink-0">
              <img
                src={worldMapImage}
                alt="World Map"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Pins */}
              {mapPins.map((pin) => (
                <div
                  key={`${pin.id}-${idx}`}
                  className="absolute z-20 group"
                  style={{
                    left: pin.left,
                    top: pin.top,
                    transform: "translate(-50%, -50%)",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePinId(pin.id);
                  }}
                >
                  <MapPin
                    className={`transition-transform ${
                      activePinId === pin.id
                        ? "scale-150"
                        : "animate-pulse group-hover:scale-125"
                    } ${PIN_COLOR_CLASS} h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8`}
                  />

                  {/* Tooltip (desktop only) */}
                  {activePinId === pin.id && (
                    <div
                      className={`hidden sm:block absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 
                      bg-white dark:bg-gray-900 text-black dark:text-white 
                      p-3 rounded-lg shadow-xl border ${BORDER_COLOR_CLASS} 
                      z-30 w-56 sm:w-64 max-w-[90vw] pointer-events-auto`}
                    >
                      <h4 className={`font-bold ${HEADING_COLOR_CLASS} mb-1 text-sm sm:text-base`}>
                        {pin.location}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2">
                        {pin.info}
                      </p>
                      <button
                        onClick={() => handlePinClick(pin.url || "/")}
                        className={`mt-1 text-white px-2.5 py-1.5 rounded text-xs sm:text-sm w-full transition ${BUTTON_COLOR_CLASS}`}
                      >
                        Visit {pin.location} Chapter
                      </button>
                    </div>
                  )}
                </div>
              ))}

              {/* Example Connection Line */}
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
                preserveAspectRatio="none"
              >
                <motion.path
                  key={`connection-${idx}`}
                  d={`M${mapPins.find(p => p.location === 'Hyderabad')?.left} ${mapPins.find(p => p.location === 'Hyderabad')?.top} 
                    Q50% 20%, ${mapPins.find(p => p.location === 'London')?.left} ${mapPins.find(p => p.location === 'London')?.top}`}
                  stroke={LINE_COLOR_RGBA}
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="8"
                  animate={{ strokeDashoffset: [16, 0] }}
                  transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                />
              </svg>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Tooltip (mobile-only, below the map) */}
      {activePinId && (
        <div
          className={`sm:hidden mt-3 bg-white dark:bg-gray-900 text-black dark:text-white 
          p-4 rounded-lg shadow-xl border ${BORDER_COLOR_CLASS} w-full max-w-md`}
        >
          {(() => {
            const pin = mapPins.find((p) => p.id === activePinId);
            if (!pin) return null;
            return (
              <>
                <h4 className={`font-bold ${HEADING_COLOR_CLASS} mb-1 text-base`}>
                  {pin.location}
                </h4>
                <p className="text-sm text-gray-600 mb-3">{pin.info}</p>
                <button
                  onClick={() => handlePinClick(pin.url || "/")}
                  className={`mt-1 text-white px-3 py-2 rounded text-sm w-full transition ${BUTTON_COLOR_CLASS}`}
                >
                  Visit {pin.location} Chapter
                </button>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
};

export default InteractiveMapPlaceholder;
