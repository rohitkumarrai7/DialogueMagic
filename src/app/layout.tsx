import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DialogueMagic - AI Agents That Talk, Sell & Support",
  description:
    "Transform your customer experience with intelligent chatbots and voice AI. We build autonomous systems that feel human, scale infinitely, and drive measurable revenue.",
  keywords: "AI agents, chatbot, voice AI, WhatsApp automation, SaaS, conversational AI",
  openGraph: {
    title: "DialogueMagic - AI Agents That Talk, Sell & Support",
    description: "Transform your customer experience with intelligent chatbots and voice AI.",
    type: "website",
  },
};

import ConvexClientProvider from "@/components/ConvexClientProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
