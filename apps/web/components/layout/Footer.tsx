"use client";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPray,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmergency } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Enhanced social links with labels
  const socialLinks = [
    {
      icon: <FaFacebook size={20} />,
      name: "Facebook",
      href: "https://facebook.com",
    },
    {
      icon: <FaTwitter size={20} />,
      name: "Twitter",
      href: "https://twitter.com",
    },
    {
      icon: <FaInstagram size={20} />,
      name: "Instagram",
      href: "https://instagram.com",
    },
    {
      icon: <FaYoutube size={20} />,
      name: "YouTube",
      href: "https://youtube.com",
    },
  ];

  // Enhanced footer links with new sections
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/", icon: null },
        { name: "About Us", href: "/about", icon: null },
        { name: "Sermons", href: "/sermons", icon: null },
        { name: "Events", href: "/events", icon: null },
      ],
    },
    {
      title: "Connect",
      links: [
        {
          name: "Prayer Request",
          href: "/prayer",
          icon: <FaPray className="inline mr-2" />,
        },
        {
          name: "Emergency Contact",
          href: "tel:+441234567890",
          icon: <MdEmergency className="inline mr-2" />,
        },
        { name: "Give Online", href: "/donate", icon: null },
        { name: "Volunteer", href: "/volunteer", icon: null },
      ],
    },
    {
      title: "Information",
      links: [
        { name: "Privacy Policy", href: "/privacy", icon: null },
        { name: "Terms of Service", href: "/terms", icon: null },
        { name: "FAQ", href: "/faq", icon: null },
        { name: "Contact Us", href: "/contact", icon: null },
      ],
    },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Church Info with Map */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Grace Community Church
            </h3>

            <address className="not-italic mb-4">
              <a
                href="https://maps.google.com?q=123+Faith+Avenue"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 flex items-start"
              >
                123 Faith Avenue
                <br />
                Ellesmere Port, CH65 1AB
              </a>
            </address>

            {/* Interactive Map Embed */}
            <div className="mb-4 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.23456789!2d-2.9876543!3d53.2765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDE2JzM1LjYiTiAywrA1OScxNS43Ilc!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg shadow-sm"
              ></iframe>
            </div>

            {/* Emergency Contact */}
            <div className="mb-4 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
              <h4 className="font-semibold flex items-center">
                <MdEmergency className="mr-2 text-red-500" /> Emergency Contact
              </h4>
              <a
                href="tel:+441234567890"
                className="hover:text-blue-500 flex items-center mt-1"
              >
                <FaPhoneAlt className="mr-2" /> +44 123 456 7890
              </a>
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center"
                    >
                      {link.icon} {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter & Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>

            {/* Enhanced Social Media */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-700 p-3 rounded-full shadow-sm hover:shadow-md transition-all hover:bg-blue-50 dark:hover:bg-gray-600"
                    aria-label={social.name}
                  >
                    <span className="sr-only">{social.name}</span>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Prayer Request Button */}
            <Link
              href="/prayer"
              className="inline-flex items-center justify-center w-full mb-6 px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <FaPray className="mr-2" /> Submit Prayer Request
            </Link>

            {/* Newsletter */}
            <form className="space-y-3">
              <h5 className="font-medium">Join Our Newsletter</h5>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p>© {currentYear} Grace Community Church. All rights reserved.</p>
          <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
            Registered Charity No: 12345678
          </p>
        </div>
      </div>
    </footer>
  );
}
