import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactNode } from "react";

export const QueryProvider = ({ children }: { children: ReactNode }) => {
  const client = new QueryClient();
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
