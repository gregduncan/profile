interface EmailSendOptions {
  Host: string;
  Username: string;
  Password: string;
  To: string;
  From: string;
  Subject: string;
  Body: string;
}

interface EmailStatic {
  send(options: EmailSendOptions): Promise<string>;
}

declare const Email: EmailStatic;

interface Window {
  Email: EmailStatic;
}
