export interface Event {
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
