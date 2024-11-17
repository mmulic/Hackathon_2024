import { useLocation } from "react-router-dom";
import DropDown from "../components/button stuff/dropDown";
import Footer from "../components/footer";
import Header from "../components/header";
import SubmitButton from "../components/button stuff/submitButton";
import { useState, useEffect } from "react";
import axios from "axios";

// Comprehensive vehicle data
const vehicleData = {
  SUV: [
    { name: "Land Cruiser", years: [2021, 2022, 2023, 2024, 2025] },
    { name: "Highlander", years: [2021, 2022, 2023, 2024, 2025] },
    { name: "RAV4", years: [2021, 2022, 2023, 2024, 2025] },
    { name: "4Runner", years: [2021, 2022, 2023, 2024, 2025] },
  ],
  Sedan: [
    { name: "Camry", years: [2021, 2022, 2023, 2024, 2025] },
    { name: "Corolla", years: [2021, 2022, 2023, 2024, 2025] },
    { name: "Avalon", years: [2021, 2022, 2023, 2024, 2025] },
    { name: "Crown", years: [2021, 2022, 2023, 2024, 2025] },
  ],
  Truck: [
    { name: "Tundra", years: [2021, 2022, 2023, 2024, 2025] },
    { name: "Tacoma", years: [2021, 2022, 2023, 2024, 2025] },
    { name: "Hilux", years: [2021, 2022, 2023, 2024, 2025] },
  ],
  Hybrid: [
    { name: "Prius", years: [2021, 2022, 2023, 2024, 2025] },
    { name: "Highlander Hybrid", years: [2021, 2022, 2023, 2024, 2025] },
    { name: "Camry Hybrid", years: [2021, 2022, 2023, 2024, 2025] },
    { name: "RAV4 Hybrid", years: [2021, 2022, 2023, 2024, 2025] },
  ],
};

export default function SelectPage() {
  const location = useLocation();
  const type = location.state?.type || "";
  const imgSrc = location.state?.imgSrc || "";

  const [modelYear, setModelYear] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [fuelEconomy, setFuelEconomy] = useState("");
  const [mileage, setMileage] = useState("");
  const [model, setModel] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [filteredModels, setFilteredModels] = useState([]);

  // Dynamically filter models based on type and year
  useEffect(() => {
    if (type && modelYear) {
      const models = vehicleData[type]?.filter((vehicle) =>
        vehicle.years.includes(parseInt(modelYear))
      );
      setFilteredModels(models || []);
    } else {
      setFilteredModels([]);
    }
  }, [type, modelYear]);

  const allOptionsChosen =
    modelYear && fuelType && fuelEconomy && mileage && model;

  const handleSubmit = async () => {
    if (allOptionsChosen) {
      const data = {
        model_year: modelYear,
        fuel_type: fuelType,
        fuel_economy: fuelEconomy,
        mileage: mileage,
        model: model,
        type: type,
      };

      try {
        const response = await axios.post(
          "http://localhost:5000/add-vehicle",
          data
        );
        console.log("Response from server:", response.data);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
      } catch (error) {
        console.error("Error adding vehicle data:", error);
        alert("Failed to add vehicle data. Please try again.");
      }
    } else {
      alert("Please select all options before submitting.");
    }
  };

  return (
    <div className="w-full h-screen">
      <Header title={`Input data for ${type}`} />
      <div className="flex flex-col items-center pt-10">
        <img
          src={imgSrc}
          alt={type}
          className="w-1/4 h-auto rounded-[10px] shadow-sm shadow-black"
        />
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
            defaultText="Fuel Economy (MPG)"
            options={["10 MPG", "15 MPG", "20 MPG", "25 MPG", "30 MPG"]}
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
          <DropDown
            defaultText="Model"
            options={filteredModels.map((model) => model.name)}
            onChange={(e) => setModel(e.target.value)}
          />
        </div>
        <div
          className={`mt-10 ${
            allOptionsChosen
              ? "cursor-pointer"
              : "cursor-not-allowed opacity-50"
          }`}
          onClick={!isSubmitted ? handleSubmit : null}
        >
          <SubmitButton
            isSubmitted={isSubmitted}
            allOptionsChosen={allOptionsChosen}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
