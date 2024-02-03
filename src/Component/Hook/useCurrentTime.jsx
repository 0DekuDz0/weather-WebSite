import { useState, useEffect } from "react";

export default function useCurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(new Date());
    };

    const intervalTime = setInterval(updateCurrentTime, 10000);
    return () => clearInterval(intervalTime);
  }, []);


  return currentTime;
}
