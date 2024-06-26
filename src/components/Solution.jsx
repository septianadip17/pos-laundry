import beforeAfter from "../assets/images/before-after.png";
import speaker from "../assets/icons/speaker.svg";

const Solution = () => {
  return (
    <div className="flex flex-col items-center p-6">
      {/* Tag solution */}
      <div className="flex items-center mb-4 border-2 border-blue-500 rounded-full p-2">
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
      <div className="container">
        <h1 className="text-4xl font-bold mb-2 text-center">
          Solusi inovatif pebisnis laundry <br className="hidden md:inline" />{" "}
          mengembangkan bisnisnya
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Semua yang Anda butuhkan untuk menjalankan bisnis laundry Anda{" "}
          <br className="hidden md:inline" /> dengan efisien dan efektif kini
          ada dalam satu aplikasi.
        </p>
      </div>

      {/* Before after image */}
      <div className="flex justify-center">
        <img
          src={beforeAfter}
          alt="Before image of laundry business"
          className="rounded-lg shadow-lg mb-4"
        />
      </div>
    </div>
  );
};

export default Solution;
