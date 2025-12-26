import { ReactNode } from "react";
import { Loader2 } from "lucide-react";

export default function Loading({
  children,
  isLoading,
}: {
  children: ReactNode;
  isLoading?: boolean;
}) {
  if (!isLoading) return <>{children}</>;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader2 className="h-10 w-10 animate-spin text-primary" />
    </div>
  );
}
