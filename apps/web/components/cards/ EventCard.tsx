// components/EventCard.tsx
"use client";
import Image from "next/image";
import { Button } from "@repo/ui/button";
import { FiArrowRight } from "react-icons/fi";
import { Event } from "@utils/api";

export function EventCard({ event }: { event: Event }) {
  const imageUrl =
    event.attributes.Image.data?.[0]?.attributes?.formats?.thumbnail?.url ||
    event.attributes.Image.data?.[0]?.attributes?.url;

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
      {imageUrl && (
        <div className="h-48 relative">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`}
            alt={event.attributes.Title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{event.attributes.Title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-1">
          <span className="font-semibold">Date:</span>{" "}
          {new Date(event.attributes.Date).toLocaleDateString()}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-1">
          <span className="font-semibold">Time:</span> {event.attributes.Time}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          <span className="font-semibold">Location:</span>{" "}
          {event.attributes.Location}
        </p>
        <Button appName="web" className="w-full">
          Learn More <FiArrowRight className="ml-1" />
        </Button>
      </div>
    </div>
  );
}
