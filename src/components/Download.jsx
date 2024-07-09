import heartIcon from "../assets/icons/heart.svg";
import playstoreIcon from "../assets/images/playstore.png";
import appstoreIcon from "../assets/images/appstore.png";
import illustrationMockup from "../assets/images/illustration-mockup.png";
import bgBanner from "../assets/images/bg-bottom-banner-raw.png";
import "aos/dist/aos.css";

const Download = () => {
  return (
    <div
      id="download"
      className="container mx-auto px-6 rounded-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6"
      style={{
        backgroundImage: `url(${bgBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "95%",
        minHeight: "40vh",
        borderRadius: "30px",
      }}
      data-aos="slide-up" // Animasi fade-up saat muncul
    >
      {/* Left Content */}
      <div className="flex-1 md:text-left my-2">
        <div className="inline-flex items-center my-5 border-2 bg-blue-400 border-white rounded-full p-2 mx-auto md:mx-0">
          <img
            src={heartIcon}
            alt="heart icon"
            className="w-5 h-5 text-blue-500"
          />
          <span className="px-2 rounded-full font-normal text-white">
            Mulai Sekarang
          </span>
        </div>
        <h1 className="text-3xl font-semibold mb-8 text-white leading-tight">
          Kelola bisnis laundry anda dengan segala kemudahan dengan POS Laundry
        </h1>
        <p className="font-normal text-lg mb-4 text-white">
          POS Laundry by LaundryAku.com
        </p>
        {/* buttons store */}
        <div className="flex md:justify-start space-x-4 ">
          <a
            href="#"
            className="bg-white text-black py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-blue-500 hover:text-white shadow-xl"
          >
            <img src={playstoreIcon} alt="Playstore" className="w-8 h-8" />
            <span className="font-semibold ">Playstore</span>
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
          className="w-full md:max-w-sm"
          data-aos="slide-right"
        />
      </div>
    </div>
  );
};

export default Download;
