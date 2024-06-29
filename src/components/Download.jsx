import heartIcon from "../assets/icons/heart.svg";
import playstoreIcon from "../assets/images/playstore.png";
import appstoreIcon from "../assets/images/appstore.png";
import illustrationMockup from "../assets/images/illustration-mockup.png";

const Download = () => {
  return (
    <div className="container mx-auto px-16 rounded-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 bg-blue-400">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <div className="inline-flex items-center mb-4 border-2 border-white rounded-full p-2 mx-auto md:mx-0">
          <img
            src={heartIcon}
            alt="heart icon"
            className="w-6 h-6 text-blue-500"
          />
          <span className="px-2 rounded-full font-semibold text-white">
            Mulai Sekarang
          </span>
        </div>
        <h1 className="text-4xl md:text-3xl font-semibold mb-2 text-white">
          Kelola bisnis laundry anda dengan segala kemudahan dengan POS Laundry
        </h1>
        <p className="font-medium mb-4 text-white">
          POS Laundry by LaundryAku.com
        </p>
        {/* buttons store */}
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="#"
            className="bg-white text-black py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-blue-500 hover:text-white"
          >
            <img src={playstoreIcon} alt="Playstore" className="w-8 h-8" />
            <span className="font-semibold">Playstore</span>
          </a>
          <a
            href="#"
            className="bg-white text-black py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-blue-500 hover:text-white"
          >
            <img src={appstoreIcon} alt="App Store" className="w-8 h-8" />
            <span className="font-semibold">App Store</span>
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src={illustrationMockup}
          alt="Mobile App Screenshot"
          className="w-full max-w-xs md:max-w-sm"
        />
      </div>
    </div>
  );
};

export default Download;
