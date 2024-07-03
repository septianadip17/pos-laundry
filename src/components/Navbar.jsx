import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/icons/laundry-logo.svg";
import demoIcon from "../assets/icons/play-circle.svg";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Produk", href: "#home", current: false },
  { name: "Solusi", href: "#solusi", current: false },
  { name: "Fitur", href: "#fitur", current: false },
  { name: "Harga", href: "#harga", current: false },
  { name: "Testimoni", href: "#testimoni", current: false },
  { name: "Download", href: "#download", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const changeNavbarBg = () => {
      if (window.scrollY >= 80) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener("scroll", changeNavbarBg);

    return () => {
      window.removeEventListener("scroll", changeNavbarBg);
    };
  }, []);

  const closeMobileMenu = () => {
    const disclosureButton = document.querySelector('[aria-expanded="true"]');
    if (disclosureButton) {
      disclosureButton.click();
    }
  };

  return (
    <Disclosure
      as="nav"
      className={`bg-white ${
        navbarBg ? "bg-opacity-90" : "bg-opacity-100"
      } sticky top-0 z-50 transition duration-300 ease-in-out`}
    >
      {({ open }) => (
        <>
          <div className="container mx-auto px-4">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center">
                <img
                  className="h-8 w-auto cursor-pointer"
                  src={logo}
                  alt="Laundry Logo"
                  onClick={() => {
                    closeMobileMenu();
                  }}
                />
                <h2 className="font-bold text-2xl ml-2">Laundry</h2>
              </div>

              <div className="flex items-center space-x-4 md:space-x-6">
                {/* Mobile menu button */}
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-300 ease-in-out md:hidden">
                  <span className="sr-only">Open main menu</span>
                  <span
                    className={`transform transition-transform ${
                      open ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </span>
                </DisclosureButton>

                <div className="hidden md:flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        closeMobileMenu();
                      }}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-black hover:bg-blue-500 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium transition duration-300 ease-in-out"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex md:items-center items-end ml-auto">
                {/* Demo Aplikasi */}
                <button
                  type="button"
                  className="relative flex items-center rounded-full p-1 text-gray-400 transition duration-300 ease-in-out transform hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">Demo Aplikasi</span>
                  <img
                    src={demoIcon}
                    alt="demo icon"
                    className="h-6 w-6 transition duration-300 ease-in-out transform hover:scale-110"
                  />
                  <h2 className="text-black text-sm font-medium ml-2 transition duration-300 ease-in-out transform hover:scale-110">
                    Demo Aplikasi
                  </h2>
                </button>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden transition duration-300 ease-in-out">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <div key={item.name}>
                  <DisclosureButton
                    as="a"
                    href={item.href}
                    onClick={() => {
                      closeMobileMenu();
                    }}
                    className={classNames(
                      item.current
                        ? "bg-blue-900 text-white"
                        : "text-black hover:bg-blue-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium transition duration-300 ease-in-out"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                  {index === navigation.length - 1 && (
                    <hr className="my-2 border-gray-300" />
                  )}
                </div>
              ))}
              <button
                type="button"
                className="relative flex items-center rounded-full p-2 text-black transition duration-300 ease-in-out hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 w-full "
              >
                <span className="sr-only border-2">Demo Aplikasi</span>
                <img
                  src={demoIcon}
                  alt="demo icon"
                  className="h-6 w-6 transition duration-300 ease-in-out transform hover:scale-110"
                />
                <h2 className="text-sm font-medium ml-2 transition duration-300 ease-in-out transform hover:scale-110">
                  Demo Aplikasi
                </h2>
              </button>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
