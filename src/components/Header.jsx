import PropTypes from "prop-types";
import appstore from "../assets/images/appstore.png";
import playstore from "../assets/images/playstore.png";
import illustration from "../assets/images/illustration.png";
import "aos/dist/aos.css";

const AppDownloadButton = ({ href, imgSrc, altText, buttonText }) => (
  <a
    href={href}
    className="bg-white text-black p-3 rounded-full flex items-center space-x-2 hover:bg-blue-500 hover:text-white shadow-xl"
    data-aos="zoom-in"
  >
    <img src={imgSrc} alt={altText} className="w-6 h-6" />
    <span className="font-semibold text-lg">{buttonText}</span>
  </a>
);

AppDownloadButton.propTypes = {
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

const StatisticItem = ({ value, label }) => (
  <div className="text-start" data-aos="fade-up">
    <p className="text-3xl font-semibold">{value}</p>
    <p className="text-gray-700 text-md">{label}</p>
  </div>
);

StatisticItem.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const Header = () => {

  return (
    <div
      className="container mx-auto bg-gray-100 flex flex-col lg:flex-row items-center px-4 lg:space-x-12 lg:space-y-0 space-y-2"
      id="home"
    >
      {/* Left Content or Top Content*/}
      <div className="lg:w-1/2 space-y-4" data-aos="fade-right">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl mt-4 font-semibold text-start lg:text-left leading-tight">
          Kelola Bisnis Laundry Anda dengan
          <span className="inline-block px-2 py-1 bg-blue-500 text-white rounded-3xl">
            Mudah
          </span>
        </h1>
        {/* Description */}
        <p className="text-md text-start text-gray-500 lg:text-left leading-normal">
          POS Laundry mempermudah Anda dalam mengelola order, keuangan, dan
          mengatur bisnis secara efisien. Semua yang Anda butuhkan dalam satu
          aplikasi praktis.
        </p>
        <h1 className="text-xl font-semibold text-start lg:text-left">
          Download Aplikasi:
        </h1>
        <div className="flex justify-start lg:justify-start space-x-2">
          <AppDownloadButton
            href="#"
            imgSrc={playstore}
            altText="Playstore"
            buttonText="Playstore"
          />
          <AppDownloadButton
            href="#"
            imgSrc={appstore}
            altText="App Store"
            buttonText="App Store"
          />
        </div>
        {/* Statistics */}
        <div className="flex justify-between lg:justify-start space-x-5 mt-4">
          <StatisticItem value="25K" label="Download" />
          <StatisticItem value="12K" label="Mitra laundry" />
          <StatisticItem value="4.8" label="Rating playstore" />
        </div>
      </div>

      {/* Right Content or Bottom Content */}
      <div
        className="lg:w-1/2 flex justify-center"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
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
