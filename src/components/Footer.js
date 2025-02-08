import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaPinterest, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from './Common/Button';


const Footer = () => {
  return (
    <footer className="text-white bg-black">
      <div className="container px-24 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* Deluxe Printing Section */}
          <div>
            <h4 className="mb-2 font-bold text-md">DELUXE PRINTING</h4>
            <p className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2 text-orange-500" />
              Sales Office / Factory
            </p>
            <p className="mb-2 text-sm">Al Qusais Industrial Area 2, Dubai - UAE</p>
            <Button text={"Location"} className="px-4 py-2 text-sm bg-orange-500 rounded-full"/>
            {/* <div className="mt-4">
              <img src="qr-code-placeholder.png" alt="QR Code" className="w-20" />
              <p className="mt-2 text-sm">Scan for Map</p>
            </div> */}
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="mb-2 font-bold text-md">CONTACT US</h4>
            <p className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2 text-orange-500" />
              +971 4 272 5202
            </p>
            <p className="flex items-center mb-2">
              <FaEnvelope className="mr-2 text-orange-500" />
              print@dlxprint.com
            </p>
            <h4 className="mb-2 text-lg font-bold">WORKING HOURS</h4>
            <p className="text-sm">9:00 am to 1:00 pm</p>
            <p className="text-sm">2:00 pm to 7:00 pm</p>
            <p className="mb-2 text-sm">1:00 pm to 2:00 pm (Lunch Break)</p>
            <p className="text-sm">Monday to Saturday</p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="mb-2 text-lg font-bold">QUICK LINKS</h4>
            <div className="space-y-2">
              {["Home", "About Us", "Printing Services", "Blogs", "Careers", "Terms", "Privacy", "Contact Us"].map((link, index) => (
                <div key={index} className="text-sm">
                  <Link href="#" className="hover:underline">
                    {link}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            {/* <div className="mb-6">
                <img src="delivery-placeholder.png" alt="Delivery Available in UAE" className="mb-2" />
              <p className="text-xs">* Conditions Apply</p>
            </div> */}
            <h4 className="mb-2 text-lg font-bold">FOLLOW US</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaPinterest size={20} />
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="pt-6 mt-6 text-sm border-t border-gray-700">
          <p className="text-center">
            Copyright © Deluxe Digital Advertising LLC 2025 | All Rights Reserved
          </p>
          <p className="mt-2 text-center">
            Rights to the information contained in this site are held by Deluxe Digital Advertising, Dubai. Copying any or part(s) of our site will result in a court case against you, and you will be prosecuted according to the Federal Law No. (7) of 2002 of the UAE on Copyrights Infringement and related rights.
          </p>
          <p className="mt-2 text-center">Website developed by Deluxe</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
