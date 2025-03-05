"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

// Define the type for LocomotiveScroll instance
interface LocomotiveScrollInstance {
  destroy: () => void;
  // Add other methods you might use from LocomotiveScroll
}

// Define the constructor type
interface LocomotiveScrollConstructor {
  new (options: { 
    el: HTMLElement; 
    smooth: boolean;
    lerp: number;
    multiplier: number;
  }): LocomotiveScrollInstance;
}

// Type assertion for the import
const loadLocomotiveScroll = () =>
  import("locomotive-scroll").then(
    (mod) => mod.default as LocomotiveScrollConstructor
  );

interface SmoothScrollWrapperProps {
  children: ReactNode;
}

const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState<LocomotiveScrollInstance | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    let scrollInstance: LocomotiveScrollInstance | null = null;
    let isMounted = true;

    const initializeScroll = async () => {
      try {
        const LocomotiveScrollModule = await loadLocomotiveScroll();
        
        if (!isMounted || !scrollRef.current) return;

        scrollInstance = new LocomotiveScrollModule({
          el: scrollRef.current,
          smooth: true,
          lerp: 0.04,
          multiplier: 1.2,
        });

        setScroll(scrollInstance);
      } catch (error) {
        console.error("Failed to initialize LocomotiveScroll:", error, scroll);
      }
    };

    initializeScroll();

    return () => {
      isMounted = false;
      if (scrollInstance) {
        scrollInstance.destroy();
      }
    };
  }, []);

  return <div ref={scrollRef}>{children}</div>;
};

export default SmoothScrollWrapper;