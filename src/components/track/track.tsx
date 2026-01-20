interface TrackProps {
  rank: number;
  title: string;
  artist: string;
  album: string;
  image: string;
  year: string;
}

export function Track({ rank, title, artist, album, image, year }: TrackProps) {
  return (
    <div className="track">
      <img
        src={`/images/tracks/${year}/${image}`}
        width="80"
        height="80"
        alt={`${title} by ${artist}`}
      />
      <h3>
        #{rank} {title}
      </h3>
      <h4>{artist}</h4>
      <p>Taken from the album '{album}'.</p>
    </div>
  );
}
