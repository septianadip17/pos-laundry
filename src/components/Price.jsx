import PropTypes from "prop-types";
import list from "../assets/icons/list.svg";
import check from "../assets/icons/check-contained.svg";
import doubleStar from "../assets/icons/double-star.svg";
import Tag from "../props/Tag";
import "aos/dist/aos.css";

// Komponen BenefitItem
const BenefitItem = ({ benefit }) => (
  <li className="text-sm flex items-center">
    <img alt="checkmark" src={check} className="w-4 h-4" />
    <span className="ml-2">{benefit}</span>
  </li>
);

BenefitItem.propTypes = {
  benefit: PropTypes.string.isRequired,
};

// Komponen Package
const Package = ({ duration, price, benefits, bestValue }) => {
  return (
    <div
      className="border border-border rounded-xl p-4 relative"
      data-aos="fade-up"
    >
      {bestValue && (
        <div className="inline-flex items-center mb-2 border-2 bg-orange-400 rounded-full px-3 border-orange-200 py-1 shadow-sm">
          <img src={doubleStar} alt="double star icon" className="w-5 h-5" />
          <span className="px-2 rounded-full font-semibold text-white">
            Paling Hemat
          </span>
        </div>
      )}
      <div className="border-2 rounded-xl border-gray-200 p-3 mb-5 shadow-lg">
        <h2 className="text-xl font-semibold mb-2">{duration}</h2>
        <p className="mb-4 text-sm">
          Ingin menikmati semua fitur? Berlangganan PRO untuk mengaksesnya
        </p>
        <p className="text-3xl font-bold mb-4">
          {price} <span className="text-base font-normal">/month</span>
        </p>
        <button className="py-2 px-4 rounded-full border-2 w-full mb-2 font-semibold hover:bg-blue-500 hover:text-white">
          Beli di Aplikasi
        </button>
      </div>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <BenefitItem key={index} benefit={benefit} />
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

const Price = () => {
  return (
    <div
      className="container flex flex-col items-center mx-auto p-6"
      id="harga"
    >
      <Tag
        icon={list}
        alt="list icon"
        tag="Harga"
        title="Berlangganan untuk mengakses fitur tanpa batas"
        desc="Akses semua fitur premium POS Laundry dengan berlangganan. Tingkatkan efisiensi dan optimalkan bisnis laundry Anda sekarang juga."
        data-aos="fade-up"
      />

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
