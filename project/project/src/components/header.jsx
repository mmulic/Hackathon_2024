import toylogo from "../assets/toyotaLogo.png"

export default function Header({title ="name"}) {
    return (
      <div className="bg-customGray w-full h-[104px] flex items-center justify-center">

        <img 
        className="absolute ml-2 items-center left-0 h-[76px] w-[68px]"
        src = {toylogo}
        />

        <div className="text-black text-4xl font-inria">

          {title}
        </div>

      </div>
    );
  }
  