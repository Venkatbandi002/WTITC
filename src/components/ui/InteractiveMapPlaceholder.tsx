import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import worldMapImage from "@/assets/Map.jpg";

// Constants for color customization
const PIN_COLOR_CLASS = "text-red-600";
const BUTTON_COLOR_CLASS = "bg-red-600 hover:bg-red-700";
const BORDER_COLOR_CLASS = "border-red-600/50";
const LINE_COLOR_RGBA = "rgba(255,0,0,0.6)";

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

// All 10 map pins
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
        x: "-33.333%", // move one full map width per cycle
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
    <div
      className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg shadow-inner overflow-hidden cursor-pointer select-none"
      onClick={() => {
        if (activePinId) {
          setActivePinId(null);
        } else {
          toggleScroll();
        }
      }}
    >
      {/* Map + pins scroll together */}
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

            {/* Pins + tooltips */}
            {mapPins.map((pin) => (
              <div
                key={`${pin.id}-${idx}`}
                className="absolute z-20 group"
                style={{ left: pin.left, top: pin.top }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePinId(pin.id);
                }}
              >
                <MapPin
                  className={`h-8 w-8 ${PIN_COLOR_CLASS} transition-transform ${
                    activePinId === pin.id
                      ? "scale-150 animate-none"
                      : "animate-pulse group-hover:scale-125"
                  }`}
                />

                {activePinId === pin.id && (
                  <div
                    className={`absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-card-bg text-black dark:text-white p-3 rounded-lg shadow-xl w-64 border ${BORDER_COLOR_CLASS} z-30 pointer-events-auto`}
                  >
                    <h4 className="font-bold text-red-600 mb-1">
                      {pin.location}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">{pin.info}</p>
                    <button
                      onClick={() => handlePinClick(pin.url || "/")}
                      className={`mt-1 text-white px-3 py-1.5 rounded text-sm w-full transition duration-150 ${BUTTON_COLOR_CLASS}`}
                    >
                      Visit {pin.location} Chapter
                    </button>
                  </div>
                )}
              </div>
            ))}

            {/* Example connection line */}
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
              preserveAspectRatio="none"
            >
              <motion.path
                key={`connection-${idx}`}
                d={`M${mapPins.find(p => p.location === 'Hyderabad')?.left} ${mapPins.find(p => p.location === 'Hyderabad')?.top} Q50% 20%, ${mapPins.find(p => p.location === 'London')?.left} ${mapPins.find(p => p.location === 'London')?.top}`}
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
  );
};

export default InteractiveMapPlaceholder;
