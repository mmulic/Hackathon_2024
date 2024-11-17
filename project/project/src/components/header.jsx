import toylogo from "../assets/toyotaLogo.png";
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

export default function Header({ title = "name" }) {
  const navigate = useNavigate(); // Initialize the navigate function from react-router

  const handleLogoClick = () => {
    navigate('/'); // Navigate to the /main route when the logo is clicked
  };

  return (
    <div className="bg-customGray w-full h-[104px] flex items-center justify-between px-4">
      {/* Logo on the left */}
      <img
        className="h-[76px] w-[68px] absolute cursor-pointer"
        src={toylogo}
        alt="Logo"
        onClick={handleLogoClick} // Attach the click handler to the image
      />
      {/* Title centered */}
      <div className="text-black text-4xl font-inria mx-auto">
        {title}
      </div>
    </div>
  );
}
