import before from "../assets/images/sebelum.png";
import after from "../assets/images/sesudah.png";
import speaker from "../assets/icons/speaker.svg";
import Tag from "../props/Tag";

const Solution = () => {
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
      <div className="w-full max-w-8xl flex flex-col md:flex-row justify-center">
        <div className="container flex-col">
          <img src={before} alt="before" className="w-full h-auto" />
        </div>
        <div className="container flex-col">
          <img src={after} alt="after" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Solution;
