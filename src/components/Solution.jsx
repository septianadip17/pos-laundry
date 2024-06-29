import beforeAfter from "../assets/images/before-after.png";
import speaker from "../assets/icons/speaker.svg";

const Solution = () => {
  return (
    <div className="flex flex-col items-center p-6 mb-4" id="solusi">
      {/* Tag Solution */}
      <div className="flex flex-col items-center w-full max-w-2xl text-center mb-8">
        <div className="inline-flex items-center mb-4 border-2 border-blue-500 rounded-full p-2">
          <img
            src={speaker}
            alt="speaker icon"
            className="w-6 h-6 text-blue-500"
          />
          <span className="px-2 rounded-full font-semibold text-blue-500">
            Solusi
          </span>
        </div>
        {/* Title and description */}
        <h1 className="text-4xl font-bold mb-2">
          Solusi inovatif pebisnis laundry mengembangkan bisnisnya
        </h1>
        <p className="text-gray-500 mb-8">
          Semua yang Anda butuhkan untuk menjalankan bisnis laundry Anda dengan
          efisien dan efektif kini ada dalam satu aplikasi.
        </p>
      </div>

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
