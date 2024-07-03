import appstore from "../assets/images/appstore.png";
import playstore from "../assets/images/playstore.png";
import illustration from "../assets/images/illustration.png";

const Header = () => {
  return (
    <div
      className="container mx-auto bg-gray-100 flex flex-col lg:flex-row items-center px-4 lg:space-x-12 lg:space-y-0 space-y-2"
      id="home"
    >
      {/* Left Content */}
      <div className="lg:w-1/2 space-y-6">
        {/* Main Title */}
        <h1 className="text-7xl font-semibold text-start lg:text-left">
          Kelola Bisnis Laundry Anda dengan
          <span className="inline-block px-2 py-1 bg-blue-500 text-white rounded-3xl">
            Mudah
          </span>
        </h1>
        {/* Description */}
        <p className="text-lg text-start text-gray-600 lg:text-left">
          POS Laundry mempermudah Anda dalam mengelola order, keuangan, dan
          mengatur bisnis secara efisien. Semua yang Anda butuhkan dalam satu
          aplikasi praktis.
        </p>
        <h1 className="text-2xl font-semibold text-start lg:text-left">
          Download Aplikasi:
        </h1>
        <div className="flex justify-start lg:justify-start space-x-2">
          <a
            href="#"
            className="bg-white text-black py-2 px-3 rounded-full flex items-center space-x-2 hover:bg-blue-500 hover:text-white shadow-xl"
          >
            <img src={playstore} alt="Playstore" className="w-10 h-10" />
            <span className="font-medium text-2xl">Playstore</span>
          </a>
          {/* Button Download Store */}
          <a
            href="#"
            className="bg-white text-black py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-blue-500 hover:text-white shadow-xl"
          >
            <img src={appstore} alt="App Store" className="w-10 h-10" />
            <span className="font-medium text-2xl">App Store</span>
          </a>
        </div>
        {/* Statistics */}
        <div className="flex justify-between lg:justify-start space-x-5 mt-4">
          {/* Downloads */}
          <div className="text-start">
            <p className="text-4xl font-semibold">25K</p>
            <p className="text-gray-700 text-xl">Download</p>
          </div>
          {/* Partner */}
          <div className="text-start">
            <p className="text-4xl font-semibold">12K</p>
            <p className="text-gray-700 text-xl">Mitra laundry</p>
          </div>
          {/* Rating */}
          <div className="text-start">
            <p className="text-4xl font-semibold">4.8</p>
            <p className="text-gray-700 text-xl">Rating playstore</p>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={illustration}
          alt="Phone showing app screenshot"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
