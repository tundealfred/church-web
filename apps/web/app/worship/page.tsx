//web/app/worship/page.tsx
import Image from "next/image";
import { FiClock, FiMapPin, FiMusic } from "react-icons/fi";

export default function WorshipPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/churchpic6.jpg"
            alt="Worship at our church"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Worship With Us</h1>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Service Times</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <FiClock className="text-blue-500 mr-3 text-xl" />
                  <h3 className="text-xl font-bold">Sunday Services</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b pb-2">
                    <span>Morning Worship</span>
                    <span className="font-medium">10:00 AM</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span>Evening Service</span>
                    <span className="font-medium">6:00 PM</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <FiClock className="text-blue-500 mr-3 text-xl" />
                  <h3 className="text-xl font-bold">Midweek Gatherings</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b pb-2">
                    <span>Bible Study</span>
                    <span className="font-medium">Wed 7:30 PM</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span>Prayer Meeting</span>
                    <span className="font-medium">Fri 7:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What To Expect</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon:  <FiMusic className="text-3xl mb-4 text-blue-500" />,
                title: "Worship",
                description: "Contemporary and traditional music that honors God"
              },
              {
                icon: "🙏",
                title: "Prayer",
                description: "Authentic moments to connect with God"
              },
              {
                icon: "📖",
                title: "Preaching",
                description: "Biblical messages that apply to daily life"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Location</h2>
              <div className="flex items-start mb-4">
                <FiMapPin className="text-blue-500 mr-3 mt-1" />
                <div>
                  <p className="font-medium">123 Faith Avenue</p>
                  <p className="text-gray-600 dark:text-gray-400">Ellesmere Port, CH65 1AB</p>
                </div>
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                We're conveniently located in the heart of Ellesmere Port with 
                ample parking available. Our building is fully accessible.
              </p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Get Directions
              </button>
            </div>
            <div className="w-full md:w-1/2 h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
              {/* Map embed would go here */}
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500">Map Embed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}