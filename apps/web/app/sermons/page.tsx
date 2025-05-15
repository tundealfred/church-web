//web/app/sermons/page.tsx
import Image from "next/image";
import { FiPlay, FiDownload, FiCalendar, FiUser } from "react-icons/fi";

export default function SermonsPage() {
  // Mock sermon data - replace with your actual data fetching
  const sermons = [
    {
      id: 1,
      title: "The Power of Faith",
      speaker: "Pastor John Smith",
      date: "2023-10-15",
      scripture: "Hebrews 11:1-6",
      image: "/images/churchpic8.jpg",
      audio: "#",
      video: "#"
    },
    {
      id: 2,
      title: "Walking in Love",
      speaker: "Pastor Sarah Johnson",
      date: "2023-10-08",
      scripture: "1 Corinthians 13",
      image: "/images/churchpic9.jpg",
      audio: "#",
      video: "#"
    },
    {
      id: 3,
      title: "Finding Peace in Chaos",
      speaker: "Pastor Mark Williams",
      date: "2023-10-01",
      scripture: "Philippians 4:4-7",
      image: "/images/churchpic10.jpg",
      audio: "#",
      video: "#"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/churchpic11.jpg"
            alt="Sermons archive"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sermons</h1>
          <p className="text-xl">Messages to encourage and challenge you</p>
        </div>
      </section>

      {/* Sermon List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Recent Messages</h2>
            <div className="flex space-x-2">
              <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded px-3 py-2">
                <option>Filter by Series</option>
                <option>Faith</option>
                <option>Love</option>
                <option>Hope</option>
              </select>
              <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded px-3 py-2">
                <option>Sort by Date</option>
                <option>Newest First</option>
                <option>Oldest First</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.map((sermon) => (
              <div 
                key={sermon.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={sermon.image}
                    alt={sermon.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition">
                      <FiPlay size={20} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{sermon.title}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                    <FiUser className="mr-2" />
                    <span>{sermon.speaker}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <FiCalendar className="mr-2" />
                    <span>{new Date(sermon.date).toLocaleDateString('en-GB', { 
                      weekday: 'long', 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {sermon.scripture}
                  </p>
                  <div className="flex space-x-3">
                    <button className="flex items-center text-blue-600 dark:text-blue-400 text-sm">
                      <FiPlay className="mr-1" /> Watch
                    </button>
                    <button className="flex items-center text-blue-600 dark:text-blue-400 text-sm">
                      <FiDownload className="mr-1" /> Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Load More Sermons
            </button>
          </div>
        </div>
      </section>

      {/* Sermon Series */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Sermon Series</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Foundations of Faith",
                image: "/images/churchpic7.jpg",
                count: "8 sermons"
              },
              {
                title: "The Fruit of the Spirit",
                image: "/images/churchpic8.jpg",
                count: "9 sermons"
              },
              {
                title: "Walking with God",
                image: "/images/churchpic9.jpg",
                count: "6 sermons"
              },
              {
                title: "Psalms of David",
                image: "/images/churchpic10.jpg",
                count: "12 sermons"
              }
            ].map((series, index) => (
              <div 
                key={index}
                className="group relative h-48 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={series.image}
                  alt={series.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-xl font-bold text-white">{series.title}</h3>
                  <p className="text-gray-300 text-sm">{series.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}