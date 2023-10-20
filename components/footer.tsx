import { Map } from "lucide-react";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 mt-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4 mt-7">
            <Image
              className="mb-4"
              src={"/st-l-c.png"}
              alt="footer-logo"
              height={133}
              width={164}
            />
            <h4 className="text-2xl fonat-bold text-blueGray-700">
              Lets keep in touch!
            </h4>
            <h5 className="text-md mt-0 mb-2 text-blueGray-600">
              If you have any questions or inquiries, feel free to contact us,
              <br />
              we will respond in 1-2 business days.
            </h5>
          </div>
          <div className="w-full lg:w-6/12 px-4 mt-4">
            <div className="flex flex-wrap items-top mb-2">
              <div className="w-full lg:w-4/12 px-4 ml-auto mt-3">
                <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm"
                      href="/about"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm"
                      href="/contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4 mt-3">
                <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                      href="/terms-and-conditions"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                      href="/privacy-policy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4 mt-3">
                <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">
                  Contact Info
                </span>
                <ul className="list-unstyled">
                  <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800 flex flex-row items-center pb-2 text-sm">
                      <Mail className="mr-1" size={15} />
                      business@shop-tegic.com
                    </p>
                  </li>
                  <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800  flex flex-row items-center pb-2 text-sm">
                      <Phone className="mr-1" size={15} />
                      +13022048354
                    </p>
                  </li>
                  <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800  flex flex-row pb-2 text-sm">
                      <MapPin className="mr-1 mt-1" size={15} />
                      919 North Market Str, Suite 950
                      <br /> Wilmington DE 19801
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; 2023 ShopTegic, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
