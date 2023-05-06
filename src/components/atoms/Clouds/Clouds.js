import { useEffect, useState } from "react";
import "./Clouds.css";

const Clouds = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const setLoad = () => setIsReady(true);

    if (document.readyState === "complete") {
      setLoad();
    } else {
      window.addEventListener("load", setLoad);

      return () => window.removeEventListener("load", setLoad);
    }
  }, []);

  return (
    <div className="clouds-container">
      <div className={isReady ? "clouds clouds-animate" : "clouds"}></div>
    </div>
  );
};
export default Clouds;
