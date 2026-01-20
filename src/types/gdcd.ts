export interface Track {
  rank: number;
  title: string;
  artist: string;
  album: string;
  image: string;
}

export interface YearData {
  year: string;
  spotifyUrl?: string;
  tracks: Track[];
}

export interface GDCDData {
  years: YearData[];
}
