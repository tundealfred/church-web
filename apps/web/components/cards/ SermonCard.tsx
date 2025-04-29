// components/SermonCard.tsx
"use client";
import { Button } from "@repo/ui/button";
import { Sermon } from "@utils/api";

export function SermonCard({ sermon }: { sermon: Sermon }) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{sermon.attributes.Title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-1">
          <span className="font-semibold">Speaker:</span>{" "}
          {sermon.attributes.Speaker}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          <span className="font-semibold">Date:</span>{" "}
          {new Date(sermon.attributes.Date).toLocaleDateString()}
        </p>
        {sermon.attributes.AudioFile?.data?.attributes.url && (
          <Button appName="web" className="w-full">
            Listen to Sermon
          </Button>
        )}
      </div>
    </div>
  );
}
