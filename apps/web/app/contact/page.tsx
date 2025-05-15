//web/app/contact/page.tsx
import Image from "next/image";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/churchpic5.jpg"
            alt="Contact our church"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <FiMail className="text-3xl text-blue-500" />,
                title: "Email Us",
                info: "info@centerforrenewal.org",
                action: "Send Message"
              },
              {
                icon: <FiPhone className="text-3xl text-blue-500" />,
                title: "Call Us",
                info: "+44 123 456 7890",
                action: "Call Now"
              },
              {
                icon: <FiMapPin className="text-3xl text-blue-500" />,
                title: "Visit Us",
                info: "123 Faith Avenue, Ellesmere Port",
                action: "Get Directions"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{item.info}</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
                  {item.action}
                </button>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>General Inquiry</option>
                  <option>Prayer Request</option>
                  <option>Membership</option>
                  <option>Event Question</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Office Hours</h2>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="flex items-start mb-6">
                <FiClock className="text-blue-500 text-xl mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Church Office</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Monday - Thursday</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Friday</span>
                      <span className="font-medium">9:00 AM - 1:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Note: The office is closed on public holidays. During special events, 
                office hours may vary. Please call ahead if you're making a special trip.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}