"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

// Define the type for LocomotiveScroll instance
interface LocomotiveScrollInstance {
  destroy: () => void;
  update: () => void;
}

// Define the constructor type
interface LocomotiveScrollConstructor {
  new (options: { 
    el: HTMLElement; 
    smooth: boolean;
    lerp: number;
    multiplier: number;
    direction?: "vertical" | "horizontal";
    smartphone?: { smooth: boolean };
    tablet?: { smooth: boolean };
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
          smooth: true, // Smooth scrolling enabled for desktop
          lerp: 0.075, // Smoothness for desktop
          multiplier: 1,
          direction: "vertical",
          smartphone: { smooth: false }, // Disable smooth scrolling on smartphones
          tablet: { smooth: false }, // Disable smooth scrolling on tablets
        });

        setScroll(scrollInstance);

        // Update scroll instance after initialization
        scrollInstance.update();
      } catch (error) {
        console.error("Failed to initialize LocomotiveScroll:", error);
      }
    };

    initializeScroll();

    // Handle window resize
    const handleResize = () => {
      if (scrollInstance) {
        scrollInstance.update();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
      if (scrollInstance) {
        scrollInstance.destroy();
      }
    };
  }, []);

  return <div ref={scrollRef} data-scroll-container>{children}</div>;
};

export default SmoothScrollWrapper;