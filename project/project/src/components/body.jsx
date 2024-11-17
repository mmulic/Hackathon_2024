import { Link } from "react-router-dom";
import landcruiser from "../assets/landCruiser.webp";
import camry from "../assets/toyotaCamry.jpg";
import tundra from "../assets/tundraForest.jpg";
import crown from "../assets/toyotaCrown.webp";

export default function Body() {
  return (
    <div className="ml-10 top-10 relative overflow-x-hidden">
      <div className="flex flex-wrap gap-10 items-start justify-center relative">
        <div className="relative overflow-hidden">
          <Link to="/select" state={{ type: "SUV", imgSrc: landcruiser }}>
            <img
              className="rounded-[10px] w-full sm:w-[406px] object-contain transform transition-all duration-300 hover:scale-105"
              src={landcruiser}
              alt="Land Cruiser"
            />
          </Link>
          <div className="absolute top-0 left-0 w-full text-center text-white font-bold text-xl bg-black bg-opacity-50 py-2 font-inria">
            SUV
          </div>
        </div>

        <div className="relative overflow-hidden">
          <Link to="/select" state={{ type: "Sedan", imgSrc: camry }}>
            <img
              className="rounded-[10px] w-full sm:w-[346px] object-contain transform transition-all duration-300 hover:scale-105"
              src={camry}
              alt="Toyota Camry"
            />
          </Link>
          <div className="absolute top-0 left-0 w-full text-center text-white font-bold text-xl bg-black bg-opacity-50 py-2">
            Sedan
          </div>
        </div>

        <div className="relative overflow-hidden">
          <Link to="/select" state={{ type: "Truck", imgSrc: tundra }}>
            <img
              className="rounded-[10px] w-full sm:w-[422px] object-contain transform transition-all duration-300 hover:scale-105"
              src={tundra}
              alt="Tundra"
            />
          </Link>
          <div className="absolute top-0 left-0 w-full text-center text-white font-bold text-xl bg-black bg-opacity-50 py-2">
            Truck
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 relative">
        <div className="relative overflow-hidden">
          <Link to="/select" state={{ type: "Hybrid", imgSrc: crown }}>
            <img
              className="rounded-[10px] w-full sm:w-[422px] object-contain transform transition-all duration-300 hover:scale-105"
              src={crown}
              alt="Toyota Crown"
            />
          </Link>
          <div className="absolute top-0 left-0 w-full text-center text-white font-bold text-xl bg-black bg-opacity-50 py-2">
            Hybrid
          </div>
        </div>
      </div>
    </div>
  );
}
