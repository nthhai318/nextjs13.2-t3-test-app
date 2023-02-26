import { type ReactNode } from "react";
import AuthProvider from "~/components/AuthProvider";
import ClientProvider from "~/utils/trpcClient";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClientProvider>
      <AuthProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </AuthProvider>
    </ClientProvider>
  );
}