import logo from "../assets/images/laundry-logo.svg";
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
    <div className="container mx-auto py-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Social Media */}
        <div className="md:col-span-1">
          <div className="flex items-center space-x-1">
            <img src={logo} alt="Laundry logo" className="w-6 h-6" />
            <span className="text-xl font-bold">Laundry</span>
          </div>
          <p className="mt-4">
            Aplikasi POS Laundry untuk membantu owner laundry
          </p>
          <div className="flex space-x-4 mt-4">
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
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(links).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold">{section.title}</h3>
              <ul className="mt-2 space-y-2">
                {section.items.map((item, index) => (
                  <li key={index} className="hover:underline">
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
      <div className="text-center mt-8 text-gray-600">
        © Copyright POS Laundry 2024. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
