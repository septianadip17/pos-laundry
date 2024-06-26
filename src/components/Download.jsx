import heartIcon from "../assets/icons/heart.svg";
import playstoreIcon from "../assets/images/playstore.png";
import appstoreIcon from "../assets/images/appstore.png";
import illustrationMockup from "../assets/images/illustration-mockup.png";

const Download = () => {
  return (
    <div className="container mx-auto p-6 rounded-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 bg-blue-300">
      <div className="flex-1">
        {/* Tag Start Now */}
        <div className="flex items-center mb-4 justify-center border-2 border-white rounded-full p-2">
          <img
            src={heartIcon}
            alt="heart icon"
            className="w-6 h-6 text-blue-500"
          />
          <span className="px-2 rounded-full font-semibold text-white">
            Mulai Sekarang
          </span>
        </div>

        {/* Title and description */}
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Kelola bisnis laundry Anda dengan segala kemudahan dengan POS Laundry
        </h2>
        <p className="text-muted-foreground mb-4">
          POS Laundry by LaundryAku.com
        </p>

        {/* Buttons store */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="bg-white text-black py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-blue-500 hover:text-white"
          >
            <img src={playstoreIcon} alt="Playstore" className="w-6 h-6" />
            <span>Playstore</span>
          </a>
          <a
            href="#"
            className="bg-white text-black py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-blue-500 hover:text-white"
          >
            <img src={appstoreIcon} alt="App Store" className="w-6 h-6" />
            <span>App Store</span>
          </a>
        </div>
      </div>

      {/* Illustration mockup */}
      <div className="flex-1 flex justify-center">
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
