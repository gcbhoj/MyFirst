import FooterTopLeft from "../FooterComponent/FooterTopLeft.jsx";
import FooterTopRight from "../FooterComponent/FooterTopRight.jsx";
import FooterCenter from "../FooterComponent/FooterCenter.jsx";

const Footer = () => {
  return (
    <footer className="m-1 h-36 bg-gradient-to-bl from-zinc-400 to-[rgba(172,203,225,0.9)] shadow-md shadow-[rgba(245,239,255,.6)] rounded-2xl">
      <div className="grid grid-rows-[1fr_2rem] h-full">
        {/* Top Section */}
        <div className="m-.5 mb-0 grid grid-cols-[10rem_1fr_6rem]">
          {/* Left Column */}
          <div className="flex flex-wrap">
            <FooterTopLeft />
          </div>

          {/* Center Column */}
          <div className="flex flex-wrap flex-col p-1">
            <FooterCenter />
          </div>

          {/* Right Column */}
          <div className="p-2 flex flex-col font-serif text-[14px] justify-center items-end pt-0 gap-1 m-2">
            <FooterTopRight />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-center m-.50 h-full">
          <p className="text-[12px] text-gray-600 font-serif italic">
            &copy; {new Date().getFullYear()} Samskrita Bharati. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
