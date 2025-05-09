"use client";
import Link from "next/link";
import { FC, ReactNode, useEffect } from "react";

interface SubLinkItem {
  name: string;
  href: string;
}

interface LinkItem {
  name: string;
  href: string;
  subLinks?: SubLinkItem[];
}

interface MobileMenuProps {
  isOpen: boolean;
  links: LinkItem[];
  pathname: string;
  serviceTimes?: string; // Make optional if not always required
  children?: ReactNode; // Add children prop
  onClose: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({
  isOpen,
  links,
  pathname,
  onClose,
}) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest(".mobile-menu-content")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div
      className={`md:hidden fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-40 transition-all duration-300 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ marginTop: "64px" }}
    >
      <div className="container mx-auto px-4 py-6 h-full overflow-y-auto mobile-menu-content">
        <div className="flex flex-col space-y-4">
          {links.map((link) => (
            <Link
              key={link.href} // Better to use href as key since it's unique
              href={link.href}
              onClick={onClose}
              className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
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
