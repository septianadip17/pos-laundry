import beforeAfter from "../assets/images/before-after.png";
import speaker from "../assets/icons/speaker.svg";
import Tag from "../props/Tag";

const Solution = () => {
  return (
    <div className="flex flex-col items-center p-6 mb-4" id="solusi">
      <Tag 
        icon={speaker} 
        alt="speaker icon" 
        tag="Solusi" 
        title="Solusi inovatif pebisnis laundry mengembangkan bisnisnya" 
        desc="Semua yang Anda butuhkan untuk menjalankan bisnis laundry Anda dengan efisien dan efektif kini ada dalam satu aplikasi."
      />
      {/* Before After Image */}
      <div className="w-full max-w-8xl flex justify-center">
        <img
          src={beforeAfter}
          alt="Before and after image of laundry business"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Solution;
