import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/laundry-logo.png";
import demoIcon from "../assets/icons/play-circle.svg";

const navigation = [
  { name: "Produk", href: "#", current: false },
  { name: "Solusi", href: "#", current: false },
  { name: "Fitur", href: "#", current: false },
  { name: "Harga", href: "#", current: false },
  { name: "Testimoni", href: "#", current: false },
  { name: "Download", href: "#", current: false },
  { name: "Demo Aplikasi", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="container mx-auto border-4 border-black bg-gray-100">
      {({ open }) => (
        <>
          <div className=" max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-start">
                <img className="h-8 w-auto" src={logo} alt="Laundry Logo" />
                <h2 className="font-bold text-2xl ml-2">Laundry</h2>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="inline-flex items-start justify-start rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.slice(0, -1).map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-black hover:bg-blue-500 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex sm:items-center border-4 border-black items-end">
                {/* Demo Aplikasi */}
                <button
                  type="button"
                  className="relative flex items-center rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">Demo Aplikasi</span>
                  <img src={demoIcon} alt="demo icon" className="h-6 w-6" />
                  <h2 className="text-black text-sm font-medium ml-2">
                    Demo Aplikasi
                  </h2>
                </button>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-blue-900 text-white"
                      : "text-black hover:bg-blue-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
