import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import '../index.css';
import Button from '../components/button stuff/button';

export default function MainPage() {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate(); // Initialize the navigate function

  // Track the scroll position
  useEffect(() => {
    const handleScroll = (event) => {
      // Update scrollY based on the wheel event
      setScrollY((prevScrollY) => {
        const newScrollY = prevScrollY + event.deltaY; // Increase or decrease based on scroll direction
        return Math.max(0, Math.min(1000, newScrollY)); // Restrict scrollY within 0 to 1000 range
      });
    };

    window.addEventListener('wheel', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  // Calculate the opacity for background image and text based on scrollY
  const calculateBackgroundOpacity = () => {
    return Math.max(0, 1 - (scrollY * 1.5) / 500); // Fade out background as we scroll
  };

  const calculateTextOpacity = () => {
    return Math.min(1, (scrollY * 1.5) / 500); // Fade in text as we scroll
  };

  return (
    <div className="relative w-full h-screen bg-grey">
      <img
        className="absolute inset-0 flex flex-col items-center justify-between text-center w-full h-screen opacity-0"
        src="https://fourpage-inbound.adpearance.com/images/uploads/ares/25895/seq_my23_0015_v001_egmwdzgkg4gybp4j0o1jghmcyjonhop.jpg"
        alt="Background"
        style={{
          opacity: calculateBackgroundOpacity(scrollY), // Adjust opacity based on scroll
        }}
      />
      <div>
        <img
          src="https://seeklogo.com/images/T/toyota-logo-F54DDDC736-seeklogo.com.png"
          alt="Child Image"
          className="absolute top-[calc(50%-500px)] left-[calc(50%-120px)] w-1/10 h-auto"
        />

        <h2
          className="shrink-expand absolute font-inria top-[calc(50%--480px)] left-[calc(50%-50px)] transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl"
          style={{
            opacity: calculateBackgroundOpacity(), // Change opacity based on scroll
          }}
        >
          Scroll down
        </h2>
        <div>
          <h1
            className="opacity-0 front-inria text-2xl italic absolute top-[calc(50%-150px)] left-[calc(50%-55px)] w-1/4 h-auto"
            style={{
              opacity: calculateTextOpacity(), // Change opacity based on scroll
            }}
          >
            Let's Go Places
          </h1>

          <h1
            className="opacity-0 front-inria text-4xl italic absolute top-[calc(50%-70px)] left-[calc(50%-95px)] w-1/4 h-auto"
            style={{
              opacity: calculateTextOpacity(), // Change opacity based on scroll
            }}
          >
            Fuel Track <strong>PRO</strong>
          </h1>

          <div
            className="absolute w-full h-full flex justify-center translate-y-14 items-center"
            style={{
              opacity: calculateTextOpacity(), // Change opacity based on scroll
            }}
          >
            <h1 className="front-inria text-2xl italic text-center">
              Welcome to FuelTrack Pro – your go-to tool for exploring and optimizing
              <br />
              Toyota's fuel economy data. Discover the possibilities of Toyota engineering
              <br />
              on a path to a greener future.
            </h1>
          </div>

          <div>
            {/* Begin Button */}
            <button
              className="font-inria text-2xl italic absolute top-[calc(50%+150px)] left-[calc(50%-35px)] z-20 bg-red-600 text-white py-2 px-4 rounded-md opacity-0"
              style={{
                opacity: calculateTextOpacity(scrollY),
              }}
              onClick={() => navigate('/input')} // Navigate to the /input route on click
            >
              Begin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
