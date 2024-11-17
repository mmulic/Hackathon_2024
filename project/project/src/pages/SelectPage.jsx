import tundraForest from "../assets/tundraForest.jpg";
import DropDown from "../components/button stuff/dropDown";
import Footer from "../components/footer";
import Header from "../components/header";
import SubmitButton from "../components/button stuff/submitButton";
import { useState } from "react";

export default function SelectPage() {
  // State to track dropdown selections
  const [modelYear, setModelYear] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [fuelEconomy, setFuelEconomy] = useState("");
  const [mileage, setMileage] = useState("");

  // Check if all options are chosen
  const allOptionsChosen = modelYear && fuelType && fuelEconomy && mileage;

  const handleSubmit = () => {
    if (allOptionsChosen) {
      console.log({
        modelYear,
        fuelType,
        fuelEconomy,
        mileage,
      });
    }
  };

  return (
    <div className="w-full h-screen">
      <Header title="Input data for {carname}" />
      <div className="flex flex-col items-center pt-10">
        {/* Image */}
        <img
          src={tundraForest}
          alt="Tundra Forest"
          className="w-1/4 h-auto rounded-[10px] shadow-sm shadow-black"
        />

        {/* Dropdown Row */}
        <div className="flex mt-8 space-x-4">
          <DropDown
            defaultText="Model Year"
            options={["2021", "2022", "2023", "2024", "2025"]}
            onChange={(e) => setModelYear(e.target.value)}
          />
          <DropDown
            defaultText="Fuel Type"
            options={["Petrol", "Diesel", "Electric", "Hybrid"]}
            onChange={(e) => setFuelType(e.target.value)}
          />
          <DropDown
            defaultText="Fuel Economy"
            options={[
              "MPG (Miles per Gallon)",
              "km/L (Kilometers per Liter)",
              "L/100km (Liters per 100 Kilometers)",
            ]}
            onChange={(e) => setFuelEconomy(e.target.value)}
          />
          <DropDown
            defaultText="Mileage"
            options={[
              "0-10,000 miles",
              "10,001-20,000 miles",
              "20,001-50,000 miles",
              "50,001-100,000 miles",
              "100,001+ miles",
            ]}
            onChange={(e) => setMileage(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <div
          className={`mt-10 ${
            allOptionsChosen
              ? "cursor-pointer"
              : "cursor-not-allowed opacity-50"
          }`}
          onClick={handleSubmit}
        >
          <SubmitButton />
        </div>
      </div>

      <Footer />
    </div>
  );
}
