import PropTypes from "prop-types";
import list from "../assets/icons/list.svg";
import check from "../assets/icons/check-contained.svg";

const packages = [
  {
    duration: "1 Bulan",
    price: "Rp10.000",
    benefits: [
      "Transaksi tanpa ada batasan",
      "Tambahkan pelanggan tanpa batas",
      "Analisis finansial",
      "Badge khusus untuk member PRO",
    ],
  },
  {
    duration: "12 Bulan",
    price: "Rp8.000",
    benefits: [
      "Transaksi tanpa ada batasan",
      "Tambahkan pelanggan tanpa batas",
      "Analisis finansial",
      "Badge khusus untuk member PRO",
    ],
    bestValue: true,
  },
  {
    duration: "6 Bulan",
    price: "Rp9.000",
    benefits: [
      "Transaksi tanpa ada batasan",
      "Tambahkan pelanggan tanpa batas",
      "Analisis finansial",
      "Badge khusus untuk member PRO",
    ],
  },
];

const Package = ({ duration, price, benefits, bestValue }) => {
  return (
    <div className="border border-border rounded-lg p-6 relative">
      {bestValue && (
        <div className="absolute top-0 right-0 py-1 px-3 rounded-bl-lg">
          Paling Hemat
        </div>
      )}
      <div className="container border-3 border-black p-4">
        <h2 className="text-xl font-semibold mb-2">{duration}</h2>
        <p className="mb-4">
          Ingin menikmati semua fitur? Berlangganan PRO untuk mengaksesnya
        </p>
        <p className="text-2xl font-bold mb-4">
          {price} <span className="text-base font-normal">/month</span>
        </p>
        <button className="py-2 px-4 rounded-full border-2 w-full mb-4 font-semibold hover:bg-blue-500 hover:text-white">
          Beli di Aplikasi
        </button>
      </div>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center">
            <img alt="checkmark" src={check} className="w-4 h-4" />
            <span className="ml-2">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Package.propTypes = {
  duration: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  bestValue: PropTypes.bool,
};

const Price = () => {
  return (
    <div
      className="container flex flex-col items-center mx-auto p-6"
      id="harga"
    >
      {/* Tag solution */}
      <div className="flex items-center mb-4 border-2 border-blue-500 rounded-full p-2">
        <img src={list} alt="list icon" className="w-6 h-6 text-blue-500" />
        <span className="px-2 rounded-full font-semibold text-blue-500">
          Harga
        </span>
      </div>

      {/* Title and description */}
      <div className="container">
        <h1 className="text-4xl font-bold mb-2 text-center">
          Berlangganan untuk mengakses fitur tanpa batas
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Akses semua fitur premium POS Laundry dengan berlangganan. Tingkatkan
          efisiensi dan optimalkan bisnis laundry Anda sekarang juga.
        </p>
      </div>

      {/* Packages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <Package
            key={index}
            duration={pkg.duration}
            price={pkg.price}
            benefits={pkg.benefits}
            bestValue={pkg.bestValue}
          />
        ))}
      </div>
    </div>
  );
};

export default Price;
