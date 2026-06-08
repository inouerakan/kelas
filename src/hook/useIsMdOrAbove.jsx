import { useState, useEffect } from "react";

export function useIsMdOrAbove() {
    const [isMd, setIsMd] = useState(false);
    useEffect(() => {
        const media = window.matchMedia("(min-width: 768px)");
        setIsMd(media.matches);
        const listener = (e) => setIsMd(e.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, []);
    return isMd;
}