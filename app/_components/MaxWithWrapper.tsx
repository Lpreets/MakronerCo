import { cn } from "@/lib/utils";
import Image from "next/image";
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
        "mx-auto w-full max-w-screen-xl md:border border-black",
        className
      )}
    >
      <Image
        src="/background.png"
        alt=""
        quality={100}
        fill
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.3,
        }}
      />
      <div>{children}</div>
    </div>
  );
};

export default MaxWidthWrapper;
