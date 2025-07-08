
import { useEffect, useState } from "react";

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDeviceType = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);

    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return isMobile;
};

export default useDeviceType;
