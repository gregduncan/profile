import gdcdData from '@/data/gdcd.json';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;
  const yearData = gdcdData.years.find((y) => y.year === year);

  if (!yearData) {
    return NextResponse.json({ error: 'Year not found' }, { status: 404 });
  }

  return NextResponse.json(yearData);
}
