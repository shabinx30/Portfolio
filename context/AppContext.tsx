"use client";

import {
    createContext,
    ReactNode,
    useContext,
    useRef,
    useState,
    useEffect,
    RefObject,
    SetStateAction,
    Dispatch,
} from "react";
import type LocomotiveScroll from "locomotive-scroll";
import Navbar from "@/components/Navbar";

interface AppContextType {
    homeRef: RefObject<HTMLDivElement | null>;
    skillsRef: RefObject<HTMLDivElement | null>;
    projectsRef: RefObject<HTMLDivElement | null>;
    contactRef: RefObject<HTMLDivElement | null>;
    scroll: LocomotiveScroll | null;
    alert: { status: boolean; message: string };
    setAlert: Dispatch<
        SetStateAction<{
            status: boolean;
            message: string;
        }>
    >;
    showNav: boolean;
    setShowNav: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
    const homeRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const [alert, setAlert] = useState({
        status: false,
        message: "",
    });
    const [showNav, setShowNav] = useState<boolean>(true);
    const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let scrollInstance: LocomotiveScroll | null = null;
        let isMounted = true;

        const initializeScroll = async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;

            if (!scrollContainerRef.current || !isMounted) return;

            scrollInstance = new LocomotiveScroll({
                el: scrollContainerRef.current,
                smooth: true,
                lerp: 0.075,
                multiplier: 1,
                direction: "vertical",
                smartphone: { smooth: false },
                tablet: { smooth: false, breakpoint: 1024 },
            });

            setScroll(scrollInstance);

            scrollInstance.update();
        };

        initializeScroll();

        const handleResize = () => scrollInstance?.update();
        window.addEventListener("resize", handleResize);

        return () => {
            isMounted = false;
            window.removeEventListener("resize", handleResize);
            scrollInstance?.destroy();
        };
    }, []);

    return (
        <AppContext.Provider
            value={{
                homeRef,
                skillsRef,
                projectsRef,
                contactRef,
                scroll,
                alert,
                setAlert,
                showNav,
                setShowNav
            }}
        >
            <Navbar />
            <div ref={scrollContainerRef} data-scroll-container>
                {children}
            </div>
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};

export default AppProvider;
