import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-screen-xl",
        className
      )}
    >
        <div className="relative">{children}</div>
      </div>
  );
};

export default MaxWidthWrapper;