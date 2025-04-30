//church-web/packages/utils/src/api.ts
const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

console.log("API_URL resolved to:", API_URL);

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
      data: {
        attributes: {
          url: string;
          formats: {
            thumbnail: { url: string };
            small: { url: string };
            medium: { url: string };
            large: { url: string };
          };
        };
      };
    };
  };
}

export interface Sermon {
  id: number;
  attributes: {
    Title: string;
    Speaker: string;
    Date: string;
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
    const url = new URL(`${API_URL}/api/events`);
    url.searchParams.append("populate", "*");
    url.searchParams.append("sort[0]", "date:desc");

    console.log("Fetching events from:", url.toString());

    const res = await fetch(url.toString(), {
      cache: "no-store", // Important for server components
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to fetch events: ${res.status} ${errorText}`);
    }

    return await res.json();
  } catch (err) {
    console.error("Error fetching events:", err);
    return { data: [], meta: {} };
  }
}

export async function getSermons(): Promise<StrapiResponse<Sermon[]>> {
  try {
    const res = await fetch(
      `${API_URL}/api/sermons?populate=*&sort[0]=date:desc`
    );
    if (!res.ok) throw new Error("Failed to fetch sermons");
    return await res.json();
  } catch (err) {
    console.error("Error fetching sermons:", err);
    return { data: [], meta: {} };
  }
}
