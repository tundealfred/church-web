//web/app/get-involved/page.tsx
import Image from "next/image";

import { FiUsers, FiHeart, FiBookOpen, FiGlobe } from "react-icons/fi";

export default function GetInvolvedPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/volunteer-hero.jpg"
            alt="Volunteering at our church"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Involved</h1>
          <p className="text-xl">Find your place in our community</p>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Ministries</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FiUsers className="text-3xl mb-4 text-blue-500" />,
                title: "Small Groups",
                description: "Connect with others in weekly gatherings",
                link: "/small-groups"
              },
              {
                icon: <FiHeart className="text-3xl mb-4 text-blue-500" />,
                title: "Serving Teams",
                description: "Use your gifts to serve the church",
                link: "/serving"
              },
              {
                icon: <FiBookOpen className="text-3xl mb-4 text-blue-500" />,
                title: "Bible Studies",
                description: "Deeper study of God's Word",
                link: "/bible-study"
              },
              {
                icon: <FiGlobe className="text-3xl mb-4 text-blue-500" />,
                title: "Outreach",
                description: "Make an impact in our community",
                link: "/outreach"
              }
            ].map((ministry, index) => (
              <Link
                key={index}
                href={ministry.link}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="text-4xl mb-4">{ministry.icon}</div>
                <h3 className="text-xl font-bold mb-3">{ministry.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{ministry.description}</p>
                <button className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Learn More →
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Volunteer Opportunities</h2>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              We believe everyone has gifts to share. Find a team where you can serve.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Welcome Team",
                "Worship Team",
                "Children's Ministry",
                "Tech Team",
                "Prayer Team",
                "Hospitality Team"
              ].map((team, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-left"
                >
                  <h3 className="font-medium">{team}</h3>
                </div>
              ))}
            </div>
            
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Sign Up to Volunteer
            </button>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Become a Member</h2>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                Membership at Center for Renewal means committing to our community 
                and mission. We'd love to help you take this important step in your 
                spiritual journey.
              </p>
              <div className="space-y-4">
                <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Learn About Membership
                </button>
                <button className="w-full md:w-auto px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition">
                  Attend Next Membership Class
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Next Steps</h3>
                <ul className="space-y-4">
                  {[
                    "Attend a Sunday service",
                    "Join a small group",
                    "Complete membership class",
                    "Be baptized (if not already)",
                    "Commit to our membership covenant"
                  ].map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}