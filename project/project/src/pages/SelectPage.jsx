import tundraForest from "../assets/tundraForest.jpg";
import DropDown from "../components/button stuff/dropDown";
import Footer from "../components/footer";
import Header from "../components/header";
import SubmitButton from "../components/button stuff/submitButton";
import { useState } from "react";
import axios from "axios"; // Import axios

export default function SelectPage() {
  // State to track dropdown selections
  const [modelYear, setModelYear] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [fuelEconomy, setFuelEconomy] = useState("");
  const [mileage, setMileage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status

  // Check if all options are chosen
  const allOptionsChosen = modelYear && fuelType && fuelEconomy && mileage;

  // Submit data to backend
  const handleSubmit = async () => {
    if (allOptionsChosen) {
      const data = {
        model_year: modelYear,
        fuel_type: fuelType,
        fuel_economy: fuelEconomy,
        mileage: mileage,
      };

      try {
        const response = await axios.post(
          "http://localhost:5000/add-vehicle",
          data
        );
        console.log("Response from server:", response.data);

        // Mark as submitted
        setIsSubmitted(true);
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
        </div>

        {/* Submit Button */}
        <div className="mt-10" onClick={!isSubmitted ? handleSubmit : null}>
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
