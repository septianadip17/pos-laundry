import star from "../assets/icons/star.svg";
import order from "../assets/images/order.png";
import statistic from "../assets/images/statistic.png";
import customer from "../assets/images/customer.png";
import orderManagement from "../assets/images/order-management.png";
import analyticsReport from "../assets/images/analytic-and-report.png";
import customerManagement from "../assets/images/customer-management.png";
import Tag from "../props/Tag";

const Feature = () => {
  return (
    <div
      className="container flex flex-col items-center mx-auto p-6"
      id="fitur"
    >
      <Tag
        icon={star}
        alt="star icon"
        tag="Fitur"
        title="Semua kebutuhan kini tersedia dalam satu genggaman"
        desc="Dengan POS Laundry, Anda bisa mengelola semua aspek bisnis laundry Anda, mulai dari order hingga keuangan, langsung dari satu aplikasi."
      />

      {/* Feature cards */}
      <div className="grid grid-cols-1 gap-6 max-w-7xl w-full md:grid-cols-2">
        {/* Manajemen Pesanan */}
        <div className="col-span-1 md:col-span-2 flex flex-col p-6 bg-gray-100 rounded-lg shadow">
          <div className="flex flex-col md:flex-row md:items-start">
            <img
              alt="order-icon"
              src={order}
              className="w-12 h-12 md:order-first md:mb-4"
            />
            <div className="flex-1 md:text-left">
              <h2 className="text-xl font-semibold mb-2">Manajemen Pesanan</h2>
              <p className="mb-4 text-gray-500">
                Kelola semua pesanan laundry dengan mudah dan efisien. Dengan
                POS Laundry, Anda bisa melacak, mengatur, dan memproses pesanan
                dengan cepat, memastikan kepuasan pelanggan dan operasional yang
                lancar.
              </p>
            </div>
            <div className="flex-shrink-0 md:ml-4 flex justify-center">
              <img
                src={orderManagement}
                alt="order-management-screenshot"
                className="w-96 rounded-lg shadow"
              />
            </div>
          </div>
        </div>

        {/* Analitik dan Laporan */}
        <div className="col-span-1 flex flex-col bg-gray-100 p-6 rounded-lg shadow">
          <div className="flex flex-col mb-4 md:items-start">
            <img alt="analytics-icon" src={statistic} className="w-12 h-12" />
          </div>
          <div className="text-start">
            <h2 className="text-xl font-semibold md:text-left">
              Analitik dan Laporan
            </h2>
            <p className="text-gray-500 mb-6 text-justify">
              Dapatkan wawasan mendalam tentang kinerja bisnis laundry Anda
              dengan fitur analitik dan laporan kami. Pantau keuangan,
              identifikasi tren, dan buat keputusan yang lebih cerdas untuk
              mengoptimalkan bisnis Anda.
            </p>
          </div>
          <div className="text-center flex justify-center">
            <img
              src={analyticsReport}
              alt="analytics-screenshot"
              className="w-96 rounded-lg shadow"
            />
          </div>
        </div>

        {/* Manajemen Pelanggan */}
        <div className="col-span-1 flex flex-col bg-gray-100 p-6 rounded-lg shadow">
          <div className="flex flex-col mb-4 md:items-start">
            <img
              alt="customer-management-icon"
              src={customer}
              className="w-12 h-12"
            />
          </div>
          <h2 className="text-xl font-semibold md:text-left">
            Manajemen Pelanggan
          </h2>
          <p className="text-gray-500 mb-6 text-justify">
            Bangun hubungan yang lebih baik dengan pelanggan Anda. POS Laundry
            memudahkan Anda untuk mengelola informasi pelanggan, melacak riwayat
            pesanan, dan memberikan layanan yang lebih personal dan efektif.
          </p>
          <div className="text-center flex justify-center">
            <img
              src={customerManagement}
              alt="customer-management-screenshot"
              className="w-96 rounded-lg shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
