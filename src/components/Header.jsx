import appstore from "../assets/images/appstore.png";
import playstore from "../assets/images/playstore.png";
import illustration from "../assets/images/illustration.png";

const Header = () => {
  return (
    <div className="container  bg-gray-100 mx-auto flex flex-col md:flex-row items-center p-6 space-y-6 md:space-y-0 md:space-x-12">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 border-4 border-black">
        <h1 className="text-7xl font-bold text-center md:text-left">
          Kelola Bisnis <br/>Laundry Anda  <br/>dengan
          <span className="px-2 py-1 rounded-full bg-blue-500 text-white ">Mudah</span>
        </h1>
        <p className="text-center md:text-left">
          POS Laundry mempermudah Anda dalam mengelola order, keuangan, dan
          mengatur bisnis secara efisien. Semua yang Anda butuhkan dalam satu
          aplikasi praktis.
        </p>

        {/* buttons store*/}
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="px-4 py-2 rounded-lg flex items-center space-x-2 bg-blue-500 text-white">
            <img src={playstore} alt="Playstore icon" className="w-6" />
            <span>Playstore</span>
          </button>
          <button className="px-4 py-2 rounded-lg flex items-center space-x-2 bg-blue-500 text-white border-dotted">
            <img src={appstore} alt="App Store icon" className="w-6" />
            <span>App Store</span>
          </button>
        </div>

        {/* stats */}
        <div className="flex justify-center md:justify-start space-x-5 mt-4">
          <div className="text-center">
            <p className="text-xl font-bold text-start">25K</p>
            <p>Download</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-start">12K</p>
            <p>Mitra laundry</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-start">4.8</p>
            <p>Rating playstore</p>
          </div>
        </div>
      </div>

      {/* illustration */}
      <div className="md:w-1/2 flex justify-center border-4 border-black">
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
