import gdcdData from '@/data/gdcd.json';
import type { YearData } from '@/types/gdcd';
import { notFound } from 'next/navigation';

import { GDCDContent } from './gdcd-content';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return gdcdData.years.map((year) => ({
    id: year.year,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  return {
    title: `GDCD ${id} - Greg Duncan`,
    description: `Greg Duncan's top music picks from ${id}`,
  };
}

export default async function GDCDPage({ params }: PageProps) {
  const { id } = await params;
  const yearData = gdcdData.years.find((y) => y.year === id) as YearData | undefined;

  if (!yearData) {
    notFound();
  }

  const allYears = gdcdData.years.map((y) => y.year);

  return <GDCDContent yearData={yearData} allYears={allYears} />;
}
