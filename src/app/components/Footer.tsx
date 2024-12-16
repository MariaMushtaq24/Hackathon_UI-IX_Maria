import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaPaypal, FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 sm:px-12 md:px-28">
      <div className="mx-auto py-8">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col w-full  md:w-[320px] items-start">
          <div className="flex items-center space-x-2 size-10">
          <img src="data:image/png;base64,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" alt="Comforty Logo"  />
            <span className="text-xl font-bold text-gray-700">Comforty</span>
          </div>
            <p className="mt-4 text-gray-500">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                <FaInstagram />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                <FaPinterestP />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Category Section */}
          <div className="w-full md:w-1/4 lg:w-[105px]">
            <h4 className="text-lg font-semibold text-gray-400">Category</h4>
            <ul className="mt-4 mb-4 text-[#272343] space-y-1">
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Sofa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Armchair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Wing Chair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Desk Chair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Wooden Chair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Park Bench
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full md:w-1/4 lg:w-[156px]">
            <h4 className="text-lg font-semibold text-gray-400">Support</h4>
            <ul className="mt-4 mb-4 text-[#272343] space-y-1">
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Help & Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-1/4 lg:w-[420px]">
            <h4 className="text-lg font-semibold text-gray-400">NEWSLETTER</h4>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full border text-[#9A9CAA] border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="bg-[#029FAE] text-white px-6 py-2 rounded-md hover:bg-teal-700">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim..
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-2 mb-2 flex justify-between items-center flex-wrap text-[#9A9CAA] border-t pt-4">
          <p>
            © 2021 - Blogy - Designed & Developed by{" "}
            <a href="#" className="text-[#272343] hover:underline">
              Zakirsoft
            </a>
          </p>
          <div className="mt-2 mb-2 flex justify-center space-x-4">
            <FaCcMastercard size={40} />
            <FaPaypal size={40} />
            <FaCcAmex size={40} />
            <FaCcVisa size={40} />
          </div>
        </div>
      </div>
    </footer>
  );
}