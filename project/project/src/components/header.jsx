export default function Header({title ="name"}) {
    return (
      <div className="bg-customGray w-full h-[104px] flex items-center justify-center">

        <img 
        className="absolute ml-2 items-center left-0 h-[76px] w-[68px]"
        src = "https://seeklogo.com/images/T/toyota-logo-F54DDDC736-seeklogo.com.png"
        />

        <div className="text-black text-4xl font-inria">

          {title}
        </div>

      </div>
    );
  }
  