import Button from "./button";

export default function DropDown({ text = "insert text" }) {
  return (
    <Button className="w-40 h-10 bg-customGray shadow-sm shadow-black hover:shadow-none rounded-md transition-shadow duration-300">
      {text}
    </Button>
  );
}
