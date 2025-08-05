"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHeartbeat } from "react-icons/fa";
import { useState } from "react";

export const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "FAQ", path: "/faq" },
    { name: "Success", path: "/success-stories" },
    { name: "Management", path: "/management" },
    { name: "How it works", path: "/how-it-works" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            <FaHeartbeat className="inline-block mr-2 " />
            HealthiClick
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`${
                  pathname === item.path
                    ? "text-indigo-600 font-medium"
                    : "text-gray-700 hover:text-indigo-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link
            href="https://hokf559m6io.typeform.com/to/NgpDjwtO"
            target="_blank "
          >
            <div className="hidden md:flex bg-blue-700 px-6 py-3 text-white rounded-full">
              Get Start
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block px-2 py-1 ${
                  pathname === item.path
                    ? "text-indigo-600 font-medium"
                    : "text-gray-700 hover:text-indigo-500"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <button className="flex md:hidden bg-blue-700 px-6 py-3 text-white rounded-full">
              Get Start
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};
