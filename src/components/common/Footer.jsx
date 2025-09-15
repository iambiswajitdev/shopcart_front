import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Exclusive Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Exclusive</h3>
            <div className="space-y-3">
              <p className="text-sm">Subscribe</p>
              <p className="text-sm text-gray-300">
                Get 10% off your first order
              </p>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-300">
                111 Bijoy sarani, Dhaka,
                <br />
                DH 1515, Bangladesh.
              </p>
              <p className="text-gray-300">exclusive@gmail.com</p>
              <p className="text-gray-300">+88015-88888-9999</p>
            </div>
          </div>

          {/* Account Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <div className="space-y-3 text-sm">
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                My Account
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Login / Register
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Cart
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Wishlist
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Shop
              </a>
            </div>
          </div>

          {/* Quick Link Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <div className="space-y-3 text-sm">
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Terms Of Use
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                FAQ
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Download App Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Download App</h3>
            <div className="space-y-3">
              <p className="text-xs text-gray-400">
                Save $3 with App New User Only
              </p>

              {/* QR Code and App Store buttons */}
              <div className="flex gap-2">
                {/* App Store buttons */}
                <div className="space-y-2">
                  <div className="bg-black border border-gray-600 rounded px-3 py-2 flex items-center space-x-2 cursor-pointer hover:bg-gray-800 transition-colors">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    <div className="text-xs">
                      <div className="text-gray-400">Download on the</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </div>

                  <div className="bg-black border border-gray-600 rounded px-3 py-2 flex items-center space-x-2 cursor-pointer hover:bg-gray-800 transition-colors">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                      <path d="M3 20.5v-17c0-.35.15-.65.4-.8L16.7 12 3.4 21.3c-.25-.15-.4-.45-.4-.8zm2.65-17.65L18.8 12 5.65 21.15V2.85zM7 12L21 2v20L7 12z" />
                    </svg>
                    <div className="text-xs">
                      <div className="text-gray-400">GET IT ON</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 pt-2">
                <Facebook className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-sm text-gray-400">
            © Copyright ShopCart 2025. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
