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
        "mx-auto max-w-screen-xl md:border border-slate-950",
        className
      )}
    >
      <div className="relative">
        <Image
          src="/background.png"
          alt=""
          layout="fill"
          objectFit="cover"
          quality={100}
          style={{
            position: "absolute",
            zIndex: -1,
            opacity: 0.2,
          }}
        />
        <div className="relative">{children}</div>
      </div>
    </div>
  );
};

export default MaxWidthWrapper;