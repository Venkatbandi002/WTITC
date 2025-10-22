// src/components/InteractiveMapPlaceholder.tsx (New File)

import { MapPin, Image } from "lucide-react";
import worldMapImage from "@/assets/world-map.png";

// Placeholder data for map points (pins)
const mapPins = [
  { id: 1, location: "Hyderabad", coords: "20.20", info: "HQ - 5,000+ Members", photo: "hyderabad-hq.jpg" },
  { id: 2, location: "Silicon Valley", coords: "37.33", info: "Regional Office - 2,500+ Members", photo: "sv-office.jpg" },
  // Add more pins for other countries (UK, Canada, Australia, etc.)
];

const InteractiveMapPlaceholder = () => {
  return (
    <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg shadow-inner flex items-center justify-center">
      {/* This is where the actual interactive map element (e.g., Leaflet map component) 
        would eventually be rendered. For now, we use a static map image or a simple background. 
      */}
      <div><img 
        src={worldMapImage}
        alt="World Map with WTITC presence"
        // CHANGED: object-cover to object-contain
        className="absolute inset-0 w-full h-full object-contain opacity-80 dark:opacity-60" 
      /></div>

      {/* Placeholder for Pins with Hover Effect (Concept) */}
      {mapPins.map((pin) => (
        <div 
          key={pin.id} 
          // NOTE: 'left-x' and 'top-y' classes are placeholders and must be dynamically calculated 
          // based on actual map coordinates when using a real library.
          className={`absolute cursor-pointer group`}
          style={{ 
            left: pin.location === "Hyderabad" ? "69.5%" : (pin.location === "Silicon Valley" ? "7%" : "50%"), 
            top: pin.location === "Hyderabad" ? "42%" : (pin.location === "Silicon Valley" ? "28%" : "50%"),
        }}
        >
          {/* Pin Icon */}
          <MapPin className="h-8 w-8 text-red-600 animate-pulse duration-1000 transition-transform group-hover:scale-125" />

          {/* Hover Box (Tooltip) */}
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 p-3 w-64 bg-white dark:bg-card-bg rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 pointer-events-none z-50 border border-primary/20">
            <h4 className="font-bold text-primary mb-1">{pin.location}</h4>
            <p className="text-sm text-muted-foreground mb-2">{pin.info}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Image className="h-4 w-4" />
              <span>View Office Photo</span>
            </div>
            {/* You would embed the actual image here */}
            {/* <img src={require(`@/assets/${pin.photo}`)} alt={pin.location} className="w-full h-24 object-cover mt-2 rounded" /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InteractiveMapPlaceholder;