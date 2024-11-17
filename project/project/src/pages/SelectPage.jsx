import tundraForest from "../assets/tundraForest.jpg";
import DropDown from "../components/button stuff/dropDown";
import Header from "../components/header";

export default function SelectPage() {
  return (
    <div className="w-full h-screen">
      <Header title="Input data for {carname}" />
      <div className="flex flex-col items-center pt-10">
        {/* Image */}
        <img
          src={tundraForest}
          alt="Tundra Forest"
          className="w-1/4 h-auto rounded-md shadow-sm shadow-black"
        />
        {/* Dropdown */}
        <div className="mt-5">
          <DropDown text="" />
        </div>
      </div>
    </div>
  );
}
