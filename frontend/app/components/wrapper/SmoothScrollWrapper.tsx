"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";


dynamic(() => import("locomotive-scroll").then((mod) => mod.default) as any, {
  ssr: false,
});

interface SmoothScrollWrapperProps {
  children: ReactNode;
}

const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState<any>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const initializeScroll = async () => {
      const LocomotiveScrollModule = await import("locomotive-scroll").then((mod) => mod.default);
      
      const scrollInstance = new LocomotiveScrollModule({
        el: scrollRef.current as HTMLElement,
        smooth: true,
        lerp: 0.04, // smoothness
        multiplier: 1.2,
      });

      setScroll(scrollInstance);
    };

    initializeScroll();

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return <div ref={scrollRef}>{children}</div>;
};

export default SmoothScrollWrapper;
