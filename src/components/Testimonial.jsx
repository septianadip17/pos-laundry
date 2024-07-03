import PropTypes from "prop-types";
import testimonialIcon from "../assets/icons/testimonial.svg";
import bentenWodring from "../assets/testimoner/benten-wodring.png";
import abahAnis from "../assets/testimoner/abah-anis.png";
import ngoloKante from "../assets/testimoner/ngolo-kante.png";
import pakZain from "../assets/testimoner/pak-zain.png";
import ericYoung from "../assets/testimoner/eric-young.png";
import antonie from "../assets/testimoner/antonie.png";
import syakirah from "../assets/testimoner/syakirah.png";
import andreaBostanica from "../assets/testimoner/andrea-bostanica.png";
import hansenLoe from "../assets/testimoner/hansen-loe.png";
import Tag from "../props/Tag";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const testimonials = [
  {
    name: "Benten Wodring",
    avatar: bentenWodring,
    text: "POS Laundry sangat membantu dalam mengelola pesanan. Kini, saya bisa memantau setiap pesanan dengan mudah dan akurat.",
  },
  {
    name: "Abah Anis",
    avatar: abahAnis,
    text: "Laporan analitik dari aplikasi ini membantu saya memahami bisnis dengan lebih baik. Saya bisa membuat keputusan yang lebih tepat.",
  },
  {
    name: "Ngolo Kante",
    avatar: ngoloKante,
    text: "Aplikasi ini sangat membantu operasional laundry. Proses pencatatan dan pengelolaan pesanan menjadi lebih efisien.",
  },
  {
    name: "Pak Zain",
    avatar: pakZain,
    text: "Aplikasi ini sangat user-friendly. Pelacakan keuangan juga jadi lebih mudah. Saya bisa melihat pendapatan dengan lebih rinci.",
  },
  {
    name: "Eric Young",
    avatar: ericYoung,
    text: "POS Laundry benar-benar mengubah cara saya menjalankan bisnis. Semua data tersedia dalam satu aplikasi.",
  },
  {
    name: "Antonie",
    avatar: antonie,
    text: "Saya sangat puas dengan POS Laundry. Laporan yang dihasilkan sangat lengkap dan membantu saya dalam mengambil keputusan bisnis.",
  },
  {
    name: "Syakirah",
    avatar: syakirah,
    text: "Dengan POS Laundry, saya bisa mengelola pelanggan dengan lebih baik. Fitur pengingat pesanan sangat berguna!",
  },
  {
    name: "Andrea Bostanica",
    avatar: andreaBostanica,
    text: "Fitur manajemen keuangan di POS Laundry sangat membantu. Saya bisa melacak pengeluaran dan pemasukan dengan mudah.",
  },
  {
    name: "Hansen Loe",
    avatar: hansenLoe,
    text: "Aplikasi ini sangat bermanfaat untuk pemilik laundry. Semua jadi lebih teratur dan saya bisa fokus pada pengembangan bisnis.",
  },
];

const Avatar = ({ src, alt }) => (
  <img className="w-10 h-10 rounded-full mr-3" src={src} alt={alt} />
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const Testimonial = () => {
  useEffect(() => {
    AOS.init(); // Inisialisasi AOS saat komponen dimuat
  }, []);

  return (
    <div
      className="container flex flex-col items-center mx-auto p-6"
      id="testimoni"
    >
      <Tag
        icon={testimonialIcon}
        alt="testimoni icon"
        tag="Testimonial"
        title="Apa kata pengguna kami?"
        desc="Lihat bagaimana POS Laundry telah membantu para pemilik laundry mengelola bisnis mereka dengan lebih efisien dan efektif."
      />

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md"
            data-aos="fade-up" // Animasi fade-up saat muncul
          >
            <div className="flex items-center mb-2">
              <Avatar
                src={testimonial.avatar}
                alt={`${testimonial.name} avatar`}
              />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            </div>
            <p className="text-gray-700">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
