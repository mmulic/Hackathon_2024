import Button from "./button";
import "../../index.css";

export default function DropDown({ text = "insert text" }) {
  return (
    <Button className="w-40 h-10 font-inria text-xl bg-customGray shadow-sm shadow-black hover:shadow-none rounded-md transition-shadow duration-300">
      {text}
    </Button>
  );
}
