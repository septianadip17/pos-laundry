import before from "../assets/images/sebelum.png";
import after from "../assets/images/sesudah.png";
import speaker from "../assets/icons/speaker.svg";
import Tag from "../props/Tag";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Solution = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 0,
      duration: 1000,
      easing: "ease",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="flex flex-col items-center p-6 mb-4" id="solusi">
      {/* Tag Title */}
      <Tag
        icon={speaker}
        alt="speaker icon"
        tag="Solusi"
        title="Solusi inovatif pebisnis laundry mengembangkan bisnisnya"
        desc="Semua yang Anda butuhkan untuk menjalankan bisnis laundry Anda dengan efisien dan efektif kini ada dalam satu aplikasi."
      />
      {/* Before After Image */}
      <div
        className="w-full max-w-8xl flex flex-col md:flex-row justify-center"
        
      >
        <div className="container flex-col" data-aos="zoom-in-left">
          <img src={before} alt="before" className="w-full h-auto" />
        </div>
        <div className="container flex-col" data-aos="zoom-in-right">
          <img src={after} alt="after" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Solution;
