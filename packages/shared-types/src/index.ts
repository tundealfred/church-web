// Base Strapi response structure
interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Individual content type interfaces
export interface Sermon {
  id: number;
  attributes: {
    title: string;
    speaker: string;
    date: string;
    summary: string;
    createdAt: string;
    updatedAt: string;
    image?: {
      data: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
  };
}

export interface Event {
  id: number;
  attributes: {
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    createdAt: string;
    updatedAt: string;
  };
}

export interface PrayerRequest {
  id: number;
  attributes: {
    request: string;
    condition: "new" | "in_progress" | "answered";
    private: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface Cell {
  id: number;
  attributes: {
    name: string;
    description: string;
    schedule: string;
    leader?: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
    gallery?: {
      data: Array<{
        attributes: {
          url: string;
        };
      }>;
    };
    createdAt: string;
    updatedAt: string;
  };
}
