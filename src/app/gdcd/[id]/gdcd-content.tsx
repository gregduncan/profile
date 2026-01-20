'use client';

import { Track } from '@/components/track';
import type { YearData } from '@/types/gdcd';
import Link from 'next/link';

interface GDCDContentProps {
  yearData: YearData;
  allYears: string[];
}

export function GDCDContent({ yearData, allYears }: GDCDContentProps) {
  const { year, spotifyUrl, tracks } = yearData;

  // Pair tracks for two-column layout
  const trackPairs: [(typeof tracks)[0], (typeof tracks)[0] | undefined][] = [];
  for (let i = 0; i < tracks.length; i += 2) {
    trackPairs.push([tracks[i], tracks[i + 1]]);
  }

  return (
    <div className="page cd-listing">
      <h2 className="margin-bottom-30">GDCD</h2>
      <p>
        Since 2004 I've put together a compilation of (NEW) music that I have listened to throughout
        the year. I thought it would be mildly amusing to list it all here. If you'd like to listen
        follow the links at the bottom of each album.
      </p>
      <ul className="listing">
        <li>Please select year:</li>
        {allYears.map((y) => (
          <li key={y} className={y === year ? 'active' : ''}>
            <Link href={`/gdcd/${y}`}>{y}</Link>
          </li>
        ))}
      </ul>
      <div id="listing">
        {trackPairs.map(([track1, track2], index) => (
          <div className="row" key={index}>
            <div className="col-md-6">
              <Track
                rank={track1.rank}
                title={track1.title}
                artist={track1.artist}
                album={track1.album}
                image={track1.image}
                year={year}
              />
            </div>
            {track2 && (
              <div className="col-md-6">
                <Track
                  rank={track2.rank}
                  title={track2.title}
                  artist={track2.artist}
                  album={track2.album}
                  image={track2.image}
                  year={year}
                />
              </div>
            )}
          </div>
        ))}

        {spotifyUrl && (
          <div className="row">
            <div className="col-md-12">
              <a
                href={spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="spotify"
                title="Open in Spotify"
              ></a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
