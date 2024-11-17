import "../../index.css";

export default function DropDown({
  options = [],
  defaultText = "Select an option",
  onChange,
}) {
  return (
    <div className="relative inline-block w-40">
      <select
        className="w-full h-10 px-2 text-xl font-inria bg-customGray text-black shadow-sm shadow-black rounded-md transition-shadow duration-300 hover:shadow-none focus:outline-none"
        onChange={onChange}
      >
        <option value="" disabled selected>
          {defaultText}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
