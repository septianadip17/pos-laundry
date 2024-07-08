import PropTypes from "prop-types";
import star from "../assets/icons/star.svg";
import order from "../assets/images/order.png";
import statistic from "../assets/images/statistic.png";
import customer from "../assets/images/customer.png";
import orderManagement from "../assets/images/order-management.png";
import analyticsReport from "../assets/images/analytic-and-report.png";
import customerManagement from "../assets/images/customer-management.png";
import Tag from "../props/Tag";

const features = [
  {
    id: 1,
    icon: order,
    title: "Manajemen Pesanan",
    description:
      "Kelola semua pesanan laundry dengan mudah dan efisien. Dengan POS Laundry, Anda bisa melacak, mengatur, dan memproses pesanan dengan cepat, memastikan kepuasan pelanggan dan operasional yang lancar.",
    image: orderManagement,
    imageAlt: "order-management-screenshot",
    colSpan: "md:col-span-2",
    aos: "fade-up",
    isOrderManagement: true,
  },
  {
    id: 2,
    icon: statistic,
    title: "Analitik dan Laporan",
    description:
      "Dapatkan wawasan mendalam tentang kinerja bisnis laundry Anda dengan fitur analitik dan laporan kami. Pantau keuangan, identifikasi tren, dan buat keputusan yang lebih cerdas untuk mengoptimalkan bisnis Anda.",
    image: analyticsReport,
    imageAlt: "analytics-screenshot",
    colSpan: "",
    aos: "fade-down-right",
  },
  {
    id: 3,
    icon: customer,
    title: "Manajemen Pelanggan",
    description:
      "Bangun hubungan yang lebih baik dengan pelanggan Anda. POS Laundry memudahkan Anda untuk mengelola informasi pelanggan, melacak riwayat pesanan, dan memberikan layanan yang lebih personal dan efektif.",
    image: customerManagement,
    imageAlt: "customer-management-screenshot",
    colSpan: "",
    aos: "fade-up-left",
  },
];

const FeatureCard = ({
  icon,
  title,
  description,
  image,
  imageAlt,
  colSpan,
  aos,
  isOrderManagement,
}) => (
  <div
    className={`col-span-1 flex flex-col bg-gray-100 rounded-xl ${colSpan}`}
    data-aos={aos}
  >
    <div
      className={`flex flex-col px-8 ${
        isOrderManagement ? "md:flex-row" : "md:flex-col"
      } md:items-start`}
    >
      <div
        className={`flex flex-col pt-8 ${
          isOrderManagement ? "md:w-1/2" : ""
        }`}
      >
        <img alt={`${title}-icon`} src={icon} className="w-12 h-12 mb-1" />{" "}
        <h2 className="text-3xl my-2 font-semibold md:text-left">{title}</h2>{" "}
        <p className="text-gray-500 mb-6 text-md">{description}</p>{" "}
      </div>
      <div
        className={`text-center flex justify-center ${
          isOrderManagement
            ? "md:w-1/2 md:ml-4 pt-5 md:justify-end md:pe-5"
            : "md:w-full"
        }`}
      >
        <img src={image} alt={imageAlt} className="w-80 pt-5 pb-0 rounded-lg" />{" "}
      </div>
    </div>
  </div>
);

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  colSpan: PropTypes.string,
  aos: PropTypes.string.isRequired,
  isOrderManagement: PropTypes.bool,
};

const Feature = () => {
  return (
    <div
      className="container flex flex-col items-center mx-auto px-6"
      id="fitur"
    >
      <Tag
        icon={star}
        alt="star icon"
        tag="Fitur"
        title="Semua kebutuhan kini tersedia dalam satu genggaman"
        desc="Dengan POS Laundry, Anda bisa mengelola semua aspek bisnis laundry Anda, mulai dari order hingga keuangan, langsung dari satu aplikasi."
        data-aos="fade-up"
      />

      {/* Feature cards */}
      <div className="grid grid-cols-1 gap-4 max-w-8xl w-full md:grid-cols-2">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Feature;
