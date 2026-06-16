export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string; // e.g. "3:45"
  durationSec: number; // e.g. 225
  coverUrl: string;
  audioUrl: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  trackIds: string[];
  isFavorite: boolean;
  isCustom?: boolean; // True if created by a user
  createdBy?: string; // User ID or 'system'
}

export interface User {
  id: string;
  name: string;
  email: string;
}
