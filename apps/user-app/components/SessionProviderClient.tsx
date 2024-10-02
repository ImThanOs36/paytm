"use client"; // Marks this component as a Client Component

import { SessionProvider } from "next-auth/react";

export function SessionProviderClient({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
