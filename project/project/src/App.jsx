import "./App.css";
import bugsbunny from "./assets/bugsBunny_img.jpeg";

function App() {
  return (
    <div>
      <span className=" text-3xl text-red-500 h-screen w-full flex absolute justify-center items-center ">
        Omar is fat
      </span>
      <img src={bugsbunny} alt="bugs" className=" w-1/3 h-1/2 absolute flex" />
    </div>
  );
}

export default App;
