import FooterTopLeft from "./FooterTopLeft.jsx";
import FooterTopRight from "./FooterTopRight.jsx";
import FooterCenter from "./FooterCenter.jsx";
import Button from "../components/UIComponents/Button";

const Footer = () => {
  return (
    <footer className="m-1 h-36 bg-[rgba(190,206,241,0.3)] rounded-2xl shadow-md shadow-gray-500">
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
