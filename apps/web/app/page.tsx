import Image from "next/image";
import { Button } from "@repo/ui/button";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  const upcomingEvents = [
    {
      title: "Sunday Worship Service",
      date: "June 12, 2023",
      time: "10:00 AM",
      location: "Main Sanctuary",
    },
    {
      title: "Bible Study",
      date: "June 14, 2023",
      time: "7:00 PM",
      location: "Fellowship Hall",
    },
    {
      title: "Youth Group Meeting",
      date: "June 16, 2023",
      time: "6:30 PM",
      location: "Youth Center",
    },
  ];

  const recentSermons = [
    {
      title: "The Power of Faith",
      preacher: "Pastor John Smith",
      date: "June 5, 2023",
      image: "/sermon1.jpg",
    },
    {
      title: "Walking in Love",
      preacher: "Pastor Sarah Johnson",
      date: "May 29, 2023",
      image: "/sermon2.jpg",
    },
    {
      title: "Finding Peace",
      preacher: "Pastor Michael Brown",
      date: "May 22, 2023",
      image: "/sermon3.jpg",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Grace Community Church
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A place where faith, hope, and love come together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              appName="web"
              className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 font-semibold"
            >
              Join Us Sunday
            </Button>
            <Button
              appName="web"
              className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold"
            >
              Watch Online
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-white dark:bg-gray-700 shadow-md">
            <h3 className="text-2xl font-bold mb-3">Service Times</h3>
            <p className="mb-2">Sunday: 8:30 AM & 10:30 AM</p>
            <p className="mb-2">Wednesday: 7:00 PM</p>
            <Button
              appName="web"
              className="text-blue-600 dark:text-blue-400 mt-2"
            >
              More Info <FiArrowRight className="ml-1" />
            </Button>
          </div>
          <div className="text-center p-6 rounded-lg bg-white dark:bg-gray-700 shadow-md">
            <h3 className="text-2xl font-bold mb-3">Location</h3>
            <p className="mb-2">123 Faith Avenue</p>
            <p className="mb-2">Anytown, ST 12345</p>
            <Button
              appName="web"
              className="text-blue-600 dark:text-blue-400 mt-2"
            >
              Get Directions <FiArrowRight className="ml-1" />
            </Button>
          </div>
          <div className="text-center p-6 rounded-lg bg-white dark:bg-gray-700 shadow-md">
            <h3 className="text-2xl font-bold mb-3">New Here?</h3>
            <p className="mb-2">We would love to meet you!</p>
            <Button
              appName="web"
              className="text-blue-600 dark:text-blue-400 mt-2"
            >
              Plan Your Visit <FiArrowRight className="ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  <span className="font-semibold">Date:</span> {event.date}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  <span className="font-semibold">Time:</span> {event.time}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Location:</span>{" "}
                  {event.location}
                </p>
                <Button appName="web" className="mt-4 w-full">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button appName="web" className="px-8 py-3">
            View All Events
          </Button>
        </div>
      </section>

      {/* Recent Sermons */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Recent Sermons
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {recentSermons.map((sermon, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-600 relative">
                  <Image
                    src={sermon.image}
                    alt={sermon.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{sermon.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    <span className="font-semibold">Preacher:</span>{" "}
                    {sermon.preacher}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    <span className="font-semibold">Date:</span> {sermon.date}
                  </p>
                  <div className="flex gap-3">
                    <Button appName="web" className="flex-1">
                      Watch
                    </Button>
                    <Button appName="web" className="flex-1">
                      Listen
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button appName="web" className="px-8 py-3">
              Sermon Archive
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to take the next step?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you are new to faith or looking to grow deeper, we are here
            to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              appName="web"
              className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 font-semibold"
            >
              Get Connected
            </Button>
            <Button
              appName="web"
              className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
