import { useEffect, useState } from "react";

export default function useLocation() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          if (isMounted) {
            setLatitude(pos.coords.latitude);
            setLongitude(pos.coords.longitude);
          }
        },
        (error) => {
          console.error("Error getting location: ", error);
        },
        { enableHighAccuracy: true }
      );
    };

    getLocation();

    return () => {
      isMounted = false;
    };
  }, []);

  return { latitude, longitude };
}
