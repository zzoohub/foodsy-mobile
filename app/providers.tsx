import { ThemeProvider, QueryProvider } from "@/shared/providers";
import { ReactNode } from "react";

export default function Routes({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryProvider>
  );
}
