//web/pages/about.tsx
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/churchpic2.jpg"
            alt="About our church"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Center for Renewal
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/churchpic3.jpg"
                  alt="Our church building"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="prose dark:prose-invert max-w-3xl">
                <p className="text-lg mb-6">
                  Founded in 1985, Center for Renewal has been a beacon of hope
                  in Ellesmere Port. What began as a small gathering in a living
                  room has grown into a vibrant community of believers committed
                  to spiritual renewal.
                </p>
                <p className="text-lg mb-8">
                  Our journey has been marked by God&apos;s faithfulness through
                  seasons of change and growth. We&apos;ve seen lives
                  transformed, families restored, and our community impacted
                  through authentic worship and practical service.
                </p>
              </div>
              <Link
                href="/about/leadership"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg transition hover:bg-blue-700 hover:scale-105"
              >
                Meet Our Leaders <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Biblical Truth",
                description:
                  "We're committed to the authority of Scripture in all areas of life",
                icon: "📖",
              },
              {
                title: "Authentic Community",
                description:
                  "Building relationships that reflect God's love and grace",
                icon: "🤝",
              },
              {
                title: "Spiritual Growth",
                description:
                  "Helping each believer mature in their faith journey",
                icon: "🌱",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center"
              >
                <span className="text-4xl block mb-4">{value.icon}</span>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
