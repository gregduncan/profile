'use client';

import { Track } from '@/components/track';
import type { YearData } from '@/types/gdcd';
import Link from 'next/link';
import { Row, Column, Heading2 } from '@/styles/styled';
import { Page } from '../../page.styles';
import { CDListing, SpotifyButton } from './gdcd.styles';

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
    <Page>
      <CDListing>
        <Heading2 className="mb-30">GDCD</Heading2>
        <p>
          Since 2004 I've put together a compilation of (NEW) music that I have listened to
          throughout the year. I thought it would be mildly amusing to list it all here. If you'd
          like to listen follow the links at the bottom of each album.
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
            <Row key={index}>
              <Column $span={6}>
                <Track
                  rank={track1.rank}
                  title={track1.title}
                  artist={track1.artist}
                  album={track1.album}
                  image={track1.image}
                  year={year}
                />
              </Column>
              {track2 && (
                <Column $span={6}>
                  <Track
                    rank={track2.rank}
                    title={track2.title}
                    artist={track2.artist}
                    album={track2.album}
                    image={track2.image}
                    year={year}
                  />
                </Column>
              )}
            </Row>
          ))}

          {spotifyUrl && (
            <Row>
              <Column $span={12}>
                <SpotifyButton
                  href={spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in Spotify"
                />
              </Column>
            </Row>
          )}
        </div>
      </CDListing>
    </Page>
  );
}
