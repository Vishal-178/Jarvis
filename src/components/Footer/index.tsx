"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#16213e] py-12 border-t-2">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap justify-between mx-auto px-4 sm:px-10  max-w-[1440px]">
          {/* Brand & Description */}
          <div>
            <Link href="/" className="inline-block mb-6">
              
              <Image
                src="/images/logo/logo.svg"
                alt="Logo"
                width={240}
                height={38}
              />
            </Link>

          </div>

        <div className="flex space-x-4">
          <p className="text-[#757575] cursor-pointer">
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </p>
          <p className="text-[#757575] cursor-pointer">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8 dark:via-gray-600"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          © 2024. Unlisted Shares India. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
