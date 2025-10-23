// src/components/InteractiveMapPlaceholder.tsx
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { MapPin } from "lucide-react";
import worldMapImage from "@/assets/Map.jpg";

interface MapPinType {
  id: number;
  location: string;
  info: string;
  left: string;
  top: string;
  url?: string;
}

const mapPins: MapPinType[] = [
  { id: 1, location: "Hyderabad", info: "HQ - 5,000+ Members", left: "67.5%", top: "49%", url: "https://example.com/hyderabad" },
  { id: 2, location: "Silicon Valley", info: "Regional Office - 2,500+ Members", left: "16%", top: "37%", url: "https://example.com/siliconvalley" },
  { id: 3, location: "London", info: "UK Office - 1,000+ Members", left: "45%", top: "27%", url: "https://example.com/london" },
];

const InteractiveMapPlaceholder = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [activePinId, setActivePinId] = useState<number | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: ["0%", "-100%"],
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
        className="absolute flex w-[200%] h-full top-0 left-0"
      >
        {[0, 1].map((idx) => (
          <div key={idx} className="relative w-1/2 h-full">
            <img
              src={worldMapImage}
              alt="World Map"
              className="absolute inset-0 w-full h-full object-contain"
            />

            {/* Pins + tooltips */}
            {mapPins.map((pin) => (
              <div
                key={pin.id}
                className="absolute z-20"
                style={{ left: pin.left, top: pin.top }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePinId(pin.id);
                }}
              >
                <MapPin className="h-8 w-8 text-red-600 animate-pulse transition-transform group-hover:scale-125" />

                {/* Tooltip rendered inside the pin container so it moves with the pin */}
                {activePinId === pin.id && (
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-card-bg text-black dark:text-white p-3 rounded-lg shadow-xl w-64 border border-primary/20 z-30 pointer-events-auto">
                    <h4 className="font-bold text-primary mb-1">{pin.location}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{pin.info}</p>
                    <button
                      onClick={() => window.open(pin.url, "_blank")}
                      className="mt-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-sm w-full"
                    >
                      Visit Office Page
                    </button>
                  </div>
                )}
              </div>
            ))}

            {/* Lines connecting pins */}
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
              preserveAspectRatio="none"
            >
              {mapPins.map((pin, idx) => {
                if (idx === mapPins.length - 1) return null;
                const nextPin = mapPins[idx + 1];
                return (
                  <motion.path
                    key={idx}
                    d={`M${pin.left} ${pin.top} Q50% 20%, ${nextPin.left} ${nextPin.top}`}
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="8"
                    animate={{ strokeDashoffset: [16, 0] }}
                    transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                  />
                );
              })}
            </svg>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InteractiveMapPlaceholder;
