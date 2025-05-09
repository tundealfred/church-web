// app/page.tsx
import { getEvents, getSermons } from "@utils/api";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const eventsResponse = await getEvents();
  const sermonsResponse = await getSermons();

  const events = eventsResponse.data || [];
  const sermons = sermonsResponse.data || [];

  const recentEvents = events.slice(-3).reverse();
  const recentSermons = sermons.slice(-3).reverse();

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[-600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/churchpic1.jpg"
            alt="Church community worship"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,[your-tiny-blurhash]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
        </div>
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight transition-opacity duration-700">
            Welcome to Grace Community Church
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto transition-opacity duration-700 delay-100">
            A place where faith, hope, and love come together
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded transition transform hover:scale-105">
              Plan A Visit
            </button>

            <button className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold rounded transition transform hover:scale-105">
              Get Involved
            </button>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
            <FiArrowRight className="rotate-90 text-2xl" />
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Church Community
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Service Times",
                content: ["Sunday: 8:30 AM & 10:30 AM", "Wednesday: 7:00 PM"],
                button: "More Info",
              },
              {
                title: "Location",
                content: ["123 Faith Avenue", "Ellesmere Port, CH65 1AB"],
                button: "Get Directions",
              },
              {
                title: "New Here?",
                content: ["We would love to meet you!", "Join Us!"],
                button: "Plan Your Visit",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                {card.content.map((text, i) => (
                  <p key={i} className="mb-2 text-gray-600 dark:text-gray-300">
                    {text}
                  </p>
                ))}
                <button className="mt-4 text-blue-600 dark:text-blue-400 group transition-transform">
                  {card.button}
                  <FiArrowRight className="ml-1 inline group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image on left */}
            <div className="w-full md:w-1/2">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/churchpic3.jpg"
                  alt="About Grace Community Church"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text content on right */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About Our Church</h2>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                Grace Community Church has been serving the Ellesmere Port
                community since 1985. We are a vibrant, welcoming church family
                committed to sharing God&apos;s love through worship,
                fellowship, and service.
              </p>
              <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
                Our mission is to help people know Christ, grow in faith, and go
                serve others. Whether you&apos;re new to faith or have been
                following Jesus for years, there&apos;s a place for you here.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg transition hover:bg-blue-700 hover:scale-105"
              >
                Learn More About Us
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What People Say
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                quote:
                  "This church changed my life. The community welcomed me like family when I needed it most.",
                author: "Sarah M.",
                role: "Member since 2019",
              },
              {
                quote:
                  "My kids love the youth programs, and I've grown through the small groups.",
                author: "David T.",
                role: "Volunteer",
              },
              {
                quote:
                  "The sermons speak directly to my everyday challenges as a working parent.",
                author: "Lisa K.",
                role: "First-time visitor",
              },
              {
                quote:
                  "The sermons speak directly to my everyday challenges as a working parent.",
                author: "Monalisa Q.",
                role: "Visitor",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="italic mb-4 text-gray-700 dark:text-gray-300">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Ministries
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Kids Ministry",
                image: "/images/kid-ministry.jpg",
                icon: "👧👦",
                description: "Ages 3-12 | Sundays during service",
                link: "/kids",
              },
              {
                title: "Youth Group",
                image: "/images/youth-group.jpg",
                icon: "🧑‍🎤",
                description: "Teens | Fridays at 7PM",
                link: "/youth",
              },
              {
                title: "Bible Study",
                image: "/images/churchpic10.jpg",
                icon: "📖",
                description: "Adults | Wednesdays at 7PM",
                link: "/bible-study",
              },
              {
                title: "Outreach",
                image: "/images/outreach.jpg",
                icon: "🤝",
                description: "Community service programs",
                link: "/outreach",
              },
            ].map((ministry, index) => (
              <Link
                href={ministry.link}
                key={index}
                className="group border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={ministry.image}
                    alt={ministry.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={index < 2} // Prioritize first 2 images
                  />
                </div>
                <div className="p-6 text-center">
                  <span className="text-4xl mb-3 block">{ministry.icon}</span>
                  <h3 className="text-xl font-bold mb-2">{ministry.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {ministry.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Upcoming Events
          </h2>

          <div className="grid gap-8">
            {recentEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentEvents.map((event) => {
                  const attr = event.attributes;
                  const imageUrl = attr.Image?.data?.[0]?.attributes?.url
                    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${attr.Image.data[0].attributes.url}`
                    : "https://placehold.co/800x400.jpg";

                  return (
                    <div
                      key={event.id}
                      className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
                    >
                      <div className="relative w-full h-48">
                        <Image
                          src={imageUrl}
                          alt={attr.Title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          priority
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">
                          {attr.Title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                          {new Date(attr.Date).toLocaleDateString("en-GB", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                          })}
                          {attr.Time && ` at ${attr.Time}`}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
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

          {events.length > 3 && (
            <div className="text-center mt-12">
              <Link
                href="/events"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded transition transform hover:scale-105"
              >
                View All Events
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Recent Sermons */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Recent Sermons
          </h2>

          {recentSermons.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentSermons.map((sermon) => {
                const attr = sermon.attributes;
                const sermonDate = new Date(attr.Date);
                const formattedDate = sermonDate.toLocaleDateString("en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                });
                const formattedTime = sermonDate.toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                });

                return (
                  <div
                    key={sermon.id}
                    className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    <h3 className="text-xl font-semibold mb-3">{attr.Title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {attr.Speaker}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {formattedDate} at {formattedTime}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {attr.Reference}
                    </p>
                    <button className="text-blue-600 dark:text-blue-400 text-sm flex items-center gap-1 group transition-transform hover:translate-x-1">
                      Learn More <FiArrowRight />
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-center">No recent sermons</p>
          )}

          {sermons.length > 3 && (
            <div className="text-center mt-12">
              <Link
                href="/sermons"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded transition transform hover:scale-105"
              >
                View All Sermons
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 9. Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Church Life</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={`/images/churchpic${i}.jpg`}
                  alt="Church activity"
                  fill
                  className="object-cover"
                  priority={i < 4}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Full Gallery <FiArrowRight className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
            Get weekly inspiration and church updates
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
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
            <button className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded transition transform hover:scale-105">
              Get Connected
            </button>

            <button className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold rounded transition transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Floating Prayer Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/prayer-request"
          className="animate-pulse-slow bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition-all flex items-center gap-2"
        >
          <span>✝️</span>
          <span className="hidden sm:inline">Prayer</span>
        </Link>
      </div>
    </div>
  );
}
