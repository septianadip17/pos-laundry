import appstore from "../assets/images/appstore.png"
import playstore from "../assets/images/playstore.png"

const Header = () => {
  return (
    <div className="bg-background text-foreground p-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            Kelola Bisnis Laundry Anda dengan
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded">
              Mudah
            </span>
          </h1>
          <p className="text-muted-foreground mb-6">
            POS Laundry mempermudah Anda dalam mengelola order, keuangan, dan
            mengatur bisnis secara efisien. Semua yang Anda butuhkan dalam satu
            aplikasi praktis.
          </p>
          <div className="flex items-center mb-6">
            <img src={playstore} alt="playstore" className="w-8" />
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg mr-2">
              Playstore
            </button>
            <img src={appstore} alt="appstore" className="w-8"/>
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg">
              App Store
            </button>
          </div>
          <div className="flex space-x-8 text-center">
            <div>
              <p className="text-xl font-bold">25K</p>
              <p className="text-muted-foreground">Download</p>
            </div>
            <div>
              <p className="text-xl font-bold">12K</p>
              <p className="text-muted-foreground">Mitra laundry</p>
            </div>
            <div>
              <p className="text-xl font-bold">4.8</p>
              <p className="text-muted-foreground">Rating playstore</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src="https://placehold.co/300x600"
            alt="Hand holding a phone with app interface"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
