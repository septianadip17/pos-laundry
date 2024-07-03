import PropTypes from "prop-types";
import list from "../assets/icons/list.svg";
import check from "../assets/icons/check-contained.svg";
import doubleStar from "../assets/icons/double-star.svg";
import Tag from "../props/Tag";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
  useEffect(() => {
    AOS.init(); // Inisialisasi AOS saat komponen dimuat
  }, []);

  return (
    <div
      className="border border-border rounded-lg p-6 relative"
      data-aos="fade-up" // Tambahkan animasi fade-up saat muncul
    >
      {bestValue && (
        <div className="inline-flex items-center mb-4 border-2 bg-orange-400 rounded-full p-2">
          <img src={doubleStar} alt="double star icon" className="w-5 h-5" />
          <span className="px-2 rounded-full font-semibold text-white">
            Paling Hemat
          </span>
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
  useEffect(() => {
    AOS.init(); // Inisialisasi AOS saat komponen dimuat
  }, []);

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
        data-aos="fade-up" // Tambahkan animasi fade-up pada Tag
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
