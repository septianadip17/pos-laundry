import list from "../assets/icons/list.svg";
import check from "../assets/icons/check-contained.svg";

const Price = () => {
  return (
    <div className="container flex flex-col items-center mx-auto p-6" id="harga">
      {/* Tag solution */}
      <div className="flex items-center mb-4 border-2 border-blue-500 rounded-full p-2">
        <img src={list} alt="list icon" className="w-6 h-6 text-blue-500" />
        <span className="px-2 rounded-full font-semibold text-blue-500">
          Harga
        </span>
      </div>
      <h1 className="text-3xl font-bold text-center mb-2">
        Berlangganan untuk mengakses fitur tanpa batas
      </h1>
      <p className="text-muted-foreground text-center mb-8">
        Akses semua fitur premium POS Laundry dengan berlangganan. Tingkatkan
        efisiensi dan optimalkan bisnis laundry Anda sekarang juga.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1 Bulan */}
        <div className="border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">1 Bulan</h2>
          <p className="text-muted-foreground mb-4">
            Ingin menikmati semua fitur? Berlangganan PRO untuk mengaksesnya
          </p>
          <p className="text-2xl font-bold mb-4">
            Rp10.000 <span className="text-base font-normal">/month</span>
          </p>
          <button className="py-2 px-4 rounded-lg w-full mb-4 hover:bg-blue-500 hover:text-white">
            Beli di Aplikasi
          </button>
          <ul className="space-y-2">
            <li className="flex items-center">
              <img alt="checkmark" src={check} className="w-4 h-4" />
              <span className="ml-2">Transaksi tanpa ada batasan</span>
            </li>
            <li className="flex items-center">
              <img alt="checkmark" src={check} className="w-4 h-4" />
              <span className="ml-2">Tambahkan pelanggan tanpa batas</span>
            </li>
            <li className="flex items-center">
              <img alt="checkmark" src={check} className="w-4 h-4" />
              <span className="ml-2">Analisis finansial</span>
            </li>
            <li className="flex items-center">
              <img alt="checkmark" src={check} className="w-4 h-4" />
              <span className="ml-2">Badge khusus untuk member PRO</span>
            </li>
          </ul>
        </div>

        {/* 12 Bulan */}
        <div className="border border-border rounded-lg p-6 relative">
          <div className="absolute top-0 right-0 py-1 px-3 rounded-bl-lg">
            Paling Hemat
          </div>
          <h2 className="text-xl font-semibold mb-2">12 Bulan</h2>
          <p className="mb-4">
            Ingin menikmati semua fitur? Berlangganan PRO untuk mengaksesnya
          </p>
          <p className="text-2xl font-bold mb-4">
            Rp8.000 <span className="text-base font-normal">/month</span>
          </p>
          <button className="py-2 px-4 rounded-lg w-full mb-4 hover:bg-blue-500 hover:text-white">
            Beli di Aplikasi
          </button>
          <ul className="space-y-2">
            <li className="flex items-center">
              <img alt="checkmark" src={check} className="w-4 h-4" />
              <span className="ml-2">Transaksi tanpa ada batasan</span>
            </li>
            <li className="flex items-center">
              <img alt="checkmark" src={check} className="w-4 h-4" />
              <span className="ml-2">Tambahkan pelanggan tanpa batas</span>
            </li>
            <li className="flex items-center">
              <img alt="checkmark" src={check} className="w-4 h-4" />
              <span className="ml-2">Analisis finansial</span>
            </li>
            <li className="flex items-center">
              <img alt="checkmark" src={check} className="w-4 h-4" />
              <span className="ml-2">Badge khusus untuk member PRO</span>
            </li>
          </ul>
        </div>

        {/* 6 Bulan */}
        <div className="border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">6 Bulan</h2>
          <p className="text-muted-foreground mb-4">
            Ingin menikmati semua fitur? Berlangganan PRO untuk mengaksesnya
          </p>
          <p className="text-2xl font-bold mb-4">
            Rp9.000 <span className="text-base font-normal">/month</span>
          </p>
          <button className="py-2 px-4 rounded-lg w-full mb-4 hover:bg-blue-500 hover:text-white">
            Beli di Aplikasi
          </button>
          <ul className="space-y-2">
            <li className="flex items-center">
              <img alt="checkmark" src={check} className="w-4 h-4" />
              <span className="ml-2">Transaksi tanpa ada batasan</span>
            </li>
            <li className="flex items-center">
              <img alt="checkmark" src={check} className="w-4 h-4" />
              <span className="ml-2">Tambahkan pelanggan tanpa batas</span>
            </li>
            <li className="flex items-center">
              <img alt="checkmark" src={check} className="w-4 h-4" />
              <span className="ml-2">Analisis finansial</span>
            </li>
            <li className="flex items-center">
              <img alt="checkmark" src={check} className="w-4 h-4" />
              <span className="ml-2">Badge khusus untuk member PRO</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Price;
