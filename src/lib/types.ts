export interface User {
  _id: string;
  _creationTime: number;
  name?: string;
  image?: string;
  email?: string;
  emailVerificationTime?: number;
  phone?: string;
  phoneVerificationTime?: number;
  isAnonymous?: boolean;
}

export interface Event {
  _id: string;
  title: string;
  description: string;
  category: string;
  lat: string;
  lon: string;
  date: string;
  timeFrom: string;
  timeTo: string;
  attendees: number;
  isBookmarked: boolean;
  distance?: number;
}

export interface Coords {
  lat: number;
  lon: number;
}

export interface Chatroom {
  [key: string]: { event: Event; users: User[] };
}
