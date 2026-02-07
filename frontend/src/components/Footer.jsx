import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Elevating your style with premium fashion pieces that blend
            contemporary design with timeless elegance.
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaTwitter size={16} />
            </a>

            <a
              href="mailto:contact@zenvyra.com"
              className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaEnvelope size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-ul font-medium mb-5 text-gray-800">QUICK LINKS</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/collection">Collection </Link>
            </li>
            <li>
              <Link to="/about">About </Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-ul font-medium mb-5 text-gray-800">
            CUSTOMER SERVICES
          </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <a
                href="#"
                className="hover:text-primary transition-colors font-body"
              >
                Returns & Exchanges
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary transition-colors font-body"
              >
                Delivery
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary transition-colors font-body"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary transition-colors font-body"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 text-gray-700">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+(91) 98765 4321</li>
            <li>contact@zenvyra.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          &copy; 2026 Zenvyra - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
