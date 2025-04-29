// lib/api.ts
const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

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
  const res = await fetch(`${API_URL}/api/events?populate=*&sort[0]=date:desc`);
  return res.json();
}

export async function getSermons(): Promise<StrapiResponse<Sermon[]>> {
  const res = await fetch(
    `${API_URL}/api/sermons?populate=*&sort[0]=date:desc`
  );
  return res.json();
}
