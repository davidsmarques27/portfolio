import MagicButton from './MagicButton';
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLaptopCode } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="green"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="lime" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <img src="/profile.png" alt="Photo" className="w-[45vw] h-[45vw] md:w-[30vw] md:h-[30vw] lg:w-[20vw] lg:h-[20vw] border border-white/[0.1] rounded-full object-cover" />

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6l"
            words="Welcome to David Marques Portfolio"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hello! I&apos;m David, a Developer based in Portugal.
          </p>

          <a href="#about">            
            <MagicButton
              title="Show my work"
              icon={<FaLaptopCode />}
              position="right"
            />
          </a>

        </div>
      </div>
    </div>
  );
};

export default Hero;
