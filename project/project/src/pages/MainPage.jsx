import '../index.css'; 
export default function MainPage() {
  return (
      <div className="relative w-full h-screen">
        <img className="w-full h-screen"
          src="https://fourpage-inbound.adpearance.com/images/uploads/ares/25895/seq_my23_0015_v001_egmwdzgkg4gybp4j0o1jghmcyjonhop.jpg" 
          alt="Background" 
        /><div>
          <img src="https://seeklogo.com/images/T/toyota-logo-F54DDDC736-seeklogo.com.png" alt="Child Image" class="absolute top-[calc(50%-500px)] left-[calc(50%-120px)] w-1/10 h-auto" />
        
          
          <h2 class=" shrink-expand absolute font-inria top-[calc(50%--480px)] left-[calc(50%-50px)] transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl animation-shrinkExpand">Scroll down</h2>

        </div>
      </div>
      
  );
}
