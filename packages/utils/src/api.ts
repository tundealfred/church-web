//church-web/packages/utils/src/api.ts
const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

console.log("API_URL resolved to:", API_URL);
console.log("ENV STRAPI URL:", process.env.NEXT_PUBLIC_STRAPI_URL);

interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface Event {
  id: number;
  attributes: {
    Title: string;
    Description: { type: string; children: { text: string }[] }[];
    Date: string;
    Time: string;
    Location: string;
    Image: {
      data: Array<{
        attributes: {
          url: string;
          formats: {
            thumbnail: { url: string };
            small: { url: string };
            medium: { url: string };
            large: { url: string };
          };
        };
      }>;
    };
  };
}

export interface Sermon {
  id: number;
  attributes: {
    Title: string;
    Speaker: string;
    Date: string;
    Reference: string;
    AudioFile: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export async function getEvents(): Promise<StrapiResponse<Event[]>> {
  try {
    const res = await fetch(`${API_URL}/api/events?populate=*`);
    if (!res.ok) throw new Error("Failed to fetch sermons");
    return await res.json();
  } catch (err) {
    console.error("Error fetching sermons:", err);
    return { data: [], meta: {} };
  }
}

export async function getSermons(): Promise<StrapiResponse<Sermon[]>> {
  try {
    const res = await fetch(`${API_URL}/api/sermons?populate=*`);
    if (!res.ok) throw new Error("Failed to fetch sermons");
    return await res.json();
  } catch (err) {
    console.error("Error fetching sermons:", err);
    return { data: [], meta: {} };
  }
}
