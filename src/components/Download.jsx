import heartIcon from "../assets/icons/heart.svg";
import playstoreIcon from "../assets/images/playstore.png";
import appstoreIcon from "../assets/images/appstore.png";
import bgBanner from "../assets/images/bg-banner-bottom.png";
import bgBannerMobile from "../assets/images/bg-banner-bottom-mobile.png";
import "aos/dist/aos.css";

const styles = {
  container: {
    width: "100%",
    minHeight: "100%",
    borderRadius: "30px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  containerDesktop: {
    backgroundImage: `url(${bgBanner})`,
  },
  containerMobile: {
    backgroundImage: `url(${bgBannerMobile})`,
    minHeight: "100vh",
  },
  storeButton: {
    base: "bg-white text-black py-2 px-4 rounded-full flex items-center space-x-2 shadow-xl",
    hover: "hover:bg-blue-500 hover:text-white",
  },
};

const Download = () => {
  const isMobile = window.innerWidth <= 768;
  const containerStyle = isMobile
    ? { ...styles.container, ...styles.containerMobile }
    : { ...styles.container, ...styles.containerDesktop };

  return (
    // Download Section
    <>
      <div className="container mt-10">
        <div
          id="download"
          className="container mx-auto px-4 rounded-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6"
          data-aos="slide-up"
          style={containerStyle}
        >
          {/* Left Content */}
          <div className="flex-1 md:text-left my-5">
            <div className="inline-flex items-center mt-3 sm:my-5 border-2 bg-blue-400 border-white rounded-full p-2">
              <img src={heartIcon} alt="heart icon" className="w-5 h-5" />
              <span className="px-2 rounded-full font-normal text-white">
                Mulai Sekarang
              </span>
            </div>
            <h1 className="text-3xl font-semibold mb-6 mt-4 text-white leading-tight">
              Kelola bisnis laundry anda dengan segala kemudahan dengan POS
              Laundry
            </h1>
            <p className="font-normal text-lg mb-4 text-white">
              POS Laundry by LaundryAku.com
            </p>
            {/* Buttons for App Stores */}
            <div className="flex md:justify-start space-x-4">
              <a
                href="#"
                className={`${styles.storeButton.base} ${styles.storeButton.hover}`}
              >
                <img src={playstoreIcon} alt="Playstore" className="w-8 h-8" />
                <span className="font-semibold">Playstore</span>
              </a>
              <a
                href="#"
                className={`${styles.storeButton.base} ${styles.storeButton.hover}`}
              >
                <img src={appstoreIcon} alt="App Store" className="w-8 h-8" />
                <span className="font-semibold">App Store</span>
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="mb-96"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
