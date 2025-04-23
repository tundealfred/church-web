"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <FaFacebook size={20} />, href: "https://facebook.com" },
    { icon: <FaTwitter size={20} />, href: "https://twitter.com" },
    { icon: <FaInstagram size={20} />, href: "https://instagram.com" },
    { icon: <FaYoutube size={20} />, href: "https://youtube.com" },
  ];

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Sermons", href: "/sermons" },
        { name: "Events", href: "/events" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Ministries", href: "/ministries" },
        { name: "Give Online", href: "/donate" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Information",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "FAQ", href: "/faq" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Church Name</h3>
            <p className="mb-4">123 Faith Avenue, City, State 12345</p>
            <p className="mb-4">Sunday Service: 10:00 AM</p>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p>© {currentYear} Church Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
