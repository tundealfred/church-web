// app/page.tsx
import { getEvents, getSermons } from "@utils/api";
import { Button } from "@repo/ui/button";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

export default async function Home() {
  const eventsResponse = await getEvents();
  const sermonsResponse = await getSermons();

  const events = eventsResponse.data || []; // Fallback to empty array
  const sermons = sermonsResponse.data || []; // Fallback to empty array

  console.log("ENV STRAPI URL:", process.env.NEXT_PUBLIC_STRAPI_URL);
  console.log("STRAPI URL:", process.env.NEXT_PUBLIC_STRAPI_URL);

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
            <p className="mb-2">Join Us!</p>
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Upcoming Events
          </h2>
          <div className="grid gap-8">
            {events.length > 0 ? (
              <div className="grid md:grid-cols-4 gap-8">
                {events.map((event) => {
                  const attr = event.attributes;
                  const imageUrl = attr.Image?.data?.attributes?.url
                    ? `${process.env.NEXT_PUBLIC_STRAPI_URL?.replace("/api", "")}${attr.Image.data.attributes.url}`
                    : "https://placehold.co/800x400";

                  return (
                    <div
                      key={event.id}
                      className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
                    >
                      <div className="relative w-full h-48">
                        <Image
                          src={imageUrl}
                          alt={attr.Title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">
                          {attr.Title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {attr.Date} at {attr.Time}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                          {attr.Location}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-center">No upcoming events</p>
            )}
          </div>
          <div className="text-center mt-8">
            <Button appName="web" className="px-8 py-3">
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Sermons */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Recent Sermons
          </h2>
          {sermons.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {sermons.map((sermon) => {
                const attr = sermon.attributes;
                return (
                  <div
                    key={sermon.id}
                    className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-4"
                  >
                    <h3 className="text-xl font-semibold mb-2">{attr.Title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      {attr.Speaker}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {attr.Date}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {attr.Reference}
                    </p>
                    {/*<audio controls className="w-full mt-2">
                    <source
                      src={attr.AudioFile?.data?.attributes?.url}
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio>*/}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-center">No upcoming sermons</p>
          )}
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
