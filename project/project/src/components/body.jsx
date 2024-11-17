import landcruiser from "../assets/landCruiser.webp";
import camry from "../assets/toyotaCamry.jpg";
import tundra from "../assets/tundraForest.jpg";
import crown from "../assets/toyotaCrown.webp";

export default function Body() {
    return (
        <div className="ml-10 top-10 relative overflow-x-hidden ">
            {/* Flex container for the first row of images */}
            <div className="flex gap-20 items-start ">
                <img 
                    className="rounded-[10px] w-[406px] object-contain"
                    src={landcruiser}
                    alt="Land Cruiser"
                />
                
                <img 
                    className="rounded-[10px] w-[346px] object-contain"
                    src={camry}
                    alt="Toyota Camry"
                />
                <img 
                    className="rounded-[10px] w-[422px] object-contain"
                    src={tundra}
                    alt="Tundra"
                />
            </div>

            {/* Separate container for the Toyota Crown */}
            <div className="flex-col relative mt-14 left-[450px]  ">
                <img 
                    className="rounded-[10px] w-[422px] object-contain"
                    src={crown}
                    alt="Toyota Crown"
                />
            </div>
        </div>
    );
}
