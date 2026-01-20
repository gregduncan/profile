import { NextResponse } from 'next/server';

import gdcdData from '@/data/gdcd.json';

export async function GET() {
  const years = gdcdData.years.map(({ year, spotifyUrl }) => ({
    year,
    spotifyUrl,
  }));

  return NextResponse.json({ years });
}
