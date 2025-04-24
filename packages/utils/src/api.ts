import { Sermon, Event, PrayerRequest, Cell } from "@shared-types";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
if (!API_URL) {
  console.warn("NEXT_PUBLIC_STRAPI_URL environment variable is not set");
}

export async function fetchAPI<T>(
  endpoint: string,
  params?: string
): Promise<T> {
  const res = await fetch(
    `${API_URL}/api${endpoint}${params ? `?${params}` : ""}`
  );
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return await res.json();
}

// Specific content type fetchers
export const getSermons = () =>
  fetchAPI<{ data: Sermon[] }>("/sermons?populate=*&sort[0]=date:desc");
export const getEvents = () =>
  fetchAPI<{ data: Event[] }>("/events?populate[0]=image&sort[0]=date:desc");
export const getPrayerRequests = () =>
  fetchAPI<{ data: PrayerRequest[] }>(
    "/prayer-requests?filters[private][$eq]=false"
  );
export const getCells = () =>
  fetchAPI<{ data: Cell[] }>("/cells?populate[0]=leader&populate[1]=gallery");
