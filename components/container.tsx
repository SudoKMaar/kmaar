import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("mx-auto max-w-7xl justify-center items-center", className)}
    >
      {children}
    </div>
  );
};
