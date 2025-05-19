import { ReactNode } from "react";

// We could add theme providers, authentication providers, etc. here
export default function Providers({ children }: { children: ReactNode }) {
  return children;
}
