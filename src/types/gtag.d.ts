interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: string | number | undefined;
}

declare function gtag(
  command: 'config' | 'event' | 'js' | 'set',
  targetId: string | Date,
  config?: GtagEventParams
): void;

interface Window {
  gtag: typeof gtag;
  dataLayer: unknown[];
}
