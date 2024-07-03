import appstore from "../assets/images/appstore.png";
import playstore from "../assets/images/playstore.png";
import illustration from "../assets/images/illustration.png";

const Header = () => {
  return (
    <div
      id="home"
      className="container bg-gray-100 mx-auto flex flex-col lg:flex-row items-center p-6 space-y-6 lg:space-y-0 lg:space-x-12"
    >
      {/* Left Content */}
      <div className="lg:w-1/2 space-y-6">
        <h1 className="text-7xl lg:text-7xl font-semibold text-start lg:text-left">
          Kelola Bisnis Laundry Anda dengan
          <span className="inline-block px-1 bg-blue-500 text-white rounded-lg">
            Mudah
          </span>
        </h1>
        <p className="text-start lg:text-left text-gray-600">
          POS Laundry mempermudah Anda dalam mengelola order, keuangan, dan
          mengatur bisnis secara efisien. Semua yang Anda butuhkan dalam satu
          aplikasi praktis.
        </p>
        {/* Download Buttons */}
        <h1 className="text-xl text-start lg:text-left font-semibold">
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
          <div className="text-start">
            <p className="text-4xl font-semibold">25K</p>
            <p className="text-gray-700 text-xl">Download</p>
          </div>
          <div className="text-start">
            <p className="text-4xl font-semibold">12K</p>
            <p className="text-gray-700 text-xl">Mitra laundry</p>
          </div>
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
