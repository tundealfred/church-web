"use client";
import Link from "next/link";
import { NextPage } from "next";

interface LinkItem {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  links: LinkItem[];
  pathname: string;
  onClose: () => void;
}

const MobileMenu: NextPage<MobileMenuProps> = ({
  isOpen,
  links,
  pathname,
  onClose,
}) => {
  return (
    <div
      className={`md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 transition-all duration-300 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ marginTop: "64px" }} // Adjust based on your navbar height
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col space-y-4">
          {links.map((link: LinkItem) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className={`px-3 py-2 rounded-md text-base font-medium ${
                pathname === link.href
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/donate"
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium text-center transition-colors"
          >
            Donate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
