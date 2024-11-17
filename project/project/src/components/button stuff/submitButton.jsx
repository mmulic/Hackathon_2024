export default function SubmitButton({ isSubmitted, allOptionsChosen }) {
  return (
    <div
      className={`w-56 h-10 px-2 text-xl flex justify-center items-center font-bold select-none font-inria text-white shadow-sm shadow-black rounded-md transition-shadow duration-300 ${
        isSubmitted
          ? "bg-red-800 cursor-not-allowed" // Dark red when submitted
          : allOptionsChosen
          ? "bg-customRed cursor-pointer hover:shadow-none" // Active state
          : "bg-customRed opacity-50 cursor-not-allowed" // Disabled state
      }`}
    >
      {isSubmitted ? "Information Sent!" : "Submit"}
    </div>
  );
}
