import logo from "../assets/images/laundry-logo.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import youtube from "../assets/icons/youtube.svg";

const links = {
  features: [
    { name: "Manajemen order", href: "#" },
    { name: "Analisa keuangan", href: "#" },
    { name: "Manajemen pelanggan", href: "#" },
    { name: "Voucher laundry", href: "#" },
  ],
  pricing: [
    { name: "1 bulan", href: "#" },
    { name: "6 bulan", href: "#" },
    { name: "12 bulan", href: "#" },
  ],
  company: [
    { name: "Tentang kami", href: "#" },
    { name: "Negara", href: "#" },
    { name: "Karir", href: "#" },
  ],
  others: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Condition", href: "#" },
  ],
};

const Footer = () => {
  return (
    <div className="py-5">
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
            <a href="#" target="_blank">
              <img src={facebook} alt="Facebook icon" className="w-6 h-6" />
            </a>
            <a href="#" target="_blank">
              <img src={instagram} alt="Instagram icon" className="w-6 h-6" />
            </a>
            <a href="#" target="_blank">
              <img src={youtube} alt="YouTube icon" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Features, Pricing, Company, and Others */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold">Fitur</h3>
            <ul className="mt-2 space-y-2">
              {links.features.map((item, index) => (
                <li key={index} className="hover:underline">
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Harga</h3>
            <ul className="mt-2 space-y-2">
              {links.pricing.map((item, index) => (
                <li key={index} className="hover:underline">
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Perusahaan</h3>
            <ul className="mt-2 space-y-2">
              {links.company.map((item, index) => (
                <li key={index} className="hover:underline">
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Lainnya</h3>
            <ul className="mt-2 space-y-2">
              {links.others.map((item, index) => (
                <li key={index} className="hover:underline">
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-600">
        © Copyright POS Laundry 2024. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
