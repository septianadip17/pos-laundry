import logo from "../assets/icons/laundry-logo.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import youtube from "../assets/icons/youtube.svg";

const links = {
  features: {
    title: "Fitur",
    items: [
      { name: "Manajemen order", href: "#" },
      { name: "Analisa keuangan", href: "#" },
      { name: "Manajemen pelanggan", href: "#" },
      { name: "Voucher laundry", href: "#" },
    ],
  },
  pricing: {
    title: "Harga",
    items: [
      { name: "1 bulan", href: "#" },
      { name: "6 bulan", href: "#" },
      { name: "12 bulan", href: "#" },
    ],
  },
  company: {
    title: "Perusahaan",
    items: [
      { name: "Tentang kami", href: "#" },
      { name: "Negara", href: "#" },
      { name: "Karir", href: "#" },
    ],
  },
  others: {
    title: "Lainnya",
    items: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "Condition", href: "#" },
    ],
  },
};

const socialLinks = [
  { src: facebook, alt: "Facebook icon", href: "#" },
  { src: instagram, alt: "Instagram icon", href: "#" },
  { src: youtube, alt: "YouTube icon", href: "#" },
];

const Footer = () => {
  return (
    <>
      <div className="container mx-auto py-10 px-4 md:px-10">
        <div className="flex flex-col md:flex-row">
          {/* Logo and Social Media */}
          <div className="flex-1 mb-10 md:mb-0">
            <div className="flex items-center space-x-1">
              <img src={logo} alt="Laundry logo" className="w-6 h-6" />
              <span className="text-2xl font-bold">Laundry</span>
            </div>
            <p className="mt-4 text-gray-600">
              Aplikasi POS Laundry untuk <br /> membantu owner laundry
            </p>
            <div className="flex space-x-4 mt-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <img src={link.src} alt={link.alt} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="flex-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {Object.entries(links).map(([key, section]) => (
              <div key={key}>
                <h3 className="font-semibold">{section.title}</h3>
                <ul className="mt-1 space-y-2">
                  {section.items.map((item, index) => (
                    <li key={index} className="hover:underline text-gray-600">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-6 text-gray-600 mb-10">
        © Copyright POS Laundry 2024. All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
