import gdcdData from '@/data/gdcd.json';
import { NextResponse } from 'next/server';

export async function GET() {
  const years = gdcdData.years.map(({ year, spotifyUrl }) => ({
    year,
    spotifyUrl,
  }));

  return NextResponse.json({ years });
}
